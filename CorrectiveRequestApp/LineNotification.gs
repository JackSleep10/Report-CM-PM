/**
 * ============================================================
 * ระบบแจ้งเตือนผ่าน LINE Messaging API (LINE Official Account / Bot)
 * สำหรับระบบใบแจ้งซ่อม Thai Lion Air
 * ============================================================
 */

const DEFAULT_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk/exec';
const DEFAULT_CHANNEL_ACCESS_TOKEN = 'YH/oyBGVlKSyRxIJ3sAt7P31rXKf1p+05cMOeeYfvdYQRC02iAzgMJkW8GHdzjwso4vxBL/eFGa+9ffM0y6DPgk4Osn4MhVq1RpqgjZHhDwZczCuAaAyoWVumXhho8CvD4P/Avgd0WYHDbN6BQA+549PbdgDzCFqoOLOYbqAITQ=';
const DEFAULT_LINE_CHANNEL_ID = '2012053752';
const DEFAULT_LINE_CHANNEL_SECRET = '47d008c5f412511ec0bbeecd7addab0c';
const DEFAULT_LINE_GROUP_ID = 'Cb6d4e238bbd2a5caee92f4a3e39d066d';

/**
 * ออก Channel Access Token ใหม่โดยอัตโนมัติจาก Channel ID และ Channel Secret
 */
function refreshLineAccessToken() {
  try {
    const props = PropertiesService.getScriptProperties();
    const clientId = props.getProperty('LINE_CHANNEL_ID') || DEFAULT_LINE_CHANNEL_ID;
    const clientSecret = props.getProperty('LINE_CHANNEL_SECRET') || DEFAULT_LINE_CHANNEL_SECRET;
    if (!clientId || !clientSecret) return null;

    const payload = 'grant_type=client_credentials&client_id=' + encodeURIComponent(clientId) + '&client_secret=' + encodeURIComponent(clientSecret);
    const options = {
      method: 'post',
      contentType: 'application/x-www-form-urlencoded',
      payload: payload,
      muteHttpExceptions: true
    };
    const res = UrlFetchApp.fetch('https://api.line.me/v2/oauth/accessToken', options);
    if (res.getResponseCode() === 200) {
      const parsed = JSON.parse(res.getContentText());
      if (parsed && parsed.access_token) {
        props.setProperty('LINE_CHANNEL_ACCESS_TOKEN', parsed.access_token);
        Logger.log('✅ ออก LINE Channel Access Token ใหม่สำเร็จโดยอัตโนมัติ');
        return parsed.access_token;
      }
    }
  } catch (err) {
    Logger.log('❌ เกิดข้อผิดพลาดในการขอ Token ใหม่: ' + err.message);
  }
  return null;
}

/**
 * ดึงการตั้งค่า LINE จาก Script Properties หรือใช้ค่าเริ่มต้น
 */
function getLineProperties() {
  const props = PropertiesService.getScriptProperties();
  const savedChannelId = props.getProperty('LINE_CHANNEL_ID');
  let token = props.getProperty('LINE_CHANNEL_ACCESS_TOKEN');
  if (savedChannelId !== DEFAULT_LINE_CHANNEL_ID || !token || token.length < 50) {
    token = DEFAULT_CHANNEL_ACCESS_TOKEN;
    props.setProperty('LINE_CHANNEL_ID', DEFAULT_LINE_CHANNEL_ID);
    props.setProperty('LINE_CHANNEL_SECRET', DEFAULT_LINE_CHANNEL_SECRET);
    props.setProperty('LINE_CHANNEL_ACCESS_TOKEN', token);
  }
  let groupId = props.getProperty('LINE_GROUP_ID') || DEFAULT_LINE_GROUP_ID;

  // บันทึกลง Script Properties เพื่อความสม่ำเสมอ
  try {
    if (!props.getProperty('LINE_CHANNEL_ACCESS_TOKEN')) props.setProperty('LINE_CHANNEL_ACCESS_TOKEN', token);
    if (!props.getProperty('LINE_GROUP_ID')) props.setProperty('LINE_GROUP_ID', groupId);
    if (!props.getProperty('LINE_CHANNEL_ID')) props.setProperty('LINE_CHANNEL_ID', DEFAULT_LINE_CHANNEL_ID);
    if (!props.getProperty('LINE_CHANNEL_SECRET')) props.setProperty('LINE_CHANNEL_SECRET', DEFAULT_LINE_CHANNEL_SECRET);
  } catch (e) {}

  return {
    channelAccessToken: token,
    groupId: groupId
  };
}

/**
 * ฟังก์ชันสำหรับตั้งค่า Token และ Group ID (รันครั้งเดียวหรือเรียกผ่านคำสั่ง)
 * @param {string} token - Channel Access Token จาก LINE Developers Console
 * @param {string} groupId - ID กลุ่ม LINE ที่ต้องการส่งแจ้งเตือน
 */
function setLineConfig(token, groupId) {
  const props = PropertiesService.getScriptProperties();
  if (token) props.setProperty('LINE_CHANNEL_ACCESS_TOKEN', token.trim());
  if (groupId) props.setProperty('LINE_GROUP_ID', groupId.trim());
  Logger.log('✅ บันทึกการตั้งค่า LINE เรียบร้อย: Token=' + (token ? 'ตั้งค่าแล้ว' : 'ยังไม่เปลี่ยน') + ', GroupID=' + (groupId ? groupId : 'ยังไม่เปลี่ยน'));
  return { success: true, message: 'บันทึกการตั้งค่าเรียบร้อย' };
}

/**
 * ดูสถานะการตั้งค่า LINE ปัจจุบัน
 */
function getLineConfigStatus() {
  const config = getLineProperties();
  return {
    hasToken: !!config.channelAccessToken,
    tokenPreview: config.channelAccessToken ? (config.channelAccessToken.substring(0, 10) + '...' + config.channelAccessToken.slice(-6)) : 'ยังไม่ได้ตั้งค่า',
    groupId: config.groupId || 'ยังไม่ได้ตั้งค่า'
  };
}

/**
 * ส่งแจ้งเตือนการแจ้งซ่อมใหม่เป็น Flex Message ไปยังกลุ่ม LINE
 * @param {Object} data - ข้อมูลใบแจ้งซ่อม
 */
function sendLineFlexNotification(data) {
  try {
    const config = getLineProperties();
    if (!config.channelAccessToken) {
      Logger.log('⚠️ ไม่สามารถส่ง LINE ได้: ยังไม่ได้ตั้งค่า LINE_CHANNEL_ACCESS_TOKEN ใน Script Properties');
      return { success: false, message: 'ยังไม่ได้ตั้งค่า Channel Access Token' };
    }
    if (!config.groupId) {
      Logger.log('⚠️ ไม่สามารถส่ง LINE ได้: ยังไม่ได้ตั้งค่า LINE_GROUP_ID ใน Script Properties');
      return { success: false, message: 'ยังไม่ได้ตั้งค่า LINE Group ID' };
    }

    let webAppUrl = DEFAULT_WEB_APP_URL;
    try {
      const currentUrl = ScriptApp.getService().getUrl();
      if (currentUrl && currentUrl.startsWith('http')) {
        webAppUrl = currentUrl;
      }
    } catch (e) {
      // Fallback เป็น DEFAULT_WEB_APP_URL
    }

    const flexContents = buildRepairFlexMessage(data, webAppUrl);
    const altText = '🚨 แจ้งซ่อมใหม่: ' + (data.equipmentCode || '') + ' - ' + (data.damageAppearance || 'มีรายการแจ้งซ่อม');

    const payload = {
      to: config.groupId,
      messages: [
        {
          type: 'flex',
          altText: altText,
          contents: flexContents
        }
      ]
    };

    const options = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer ' + config.channelAccessToken
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    let response = UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', options);
    let statusCode = response.getResponseCode();
    let responseBody = response.getContentText();

    if (statusCode === 401) {
      Logger.log('⚠️ Token อาจหมดอายุ กำลังขอ Token ใหม่โดยอัตโนมัติ...');
      const newToken = refreshLineAccessToken();
      if (newToken) {
        options.headers['Authorization'] = 'Bearer ' + newToken;
        response = UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', options);
        statusCode = response.getResponseCode();
        responseBody = response.getContentText();
      }
    }

    if (statusCode === 200) {
      Logger.log('✅ ส่งแจ้งเตือน LINE สำเร็จ: ' + data.requestId);
      return { success: true };
    } else {
      Logger.log('❌ ส่งแจ้งเตือน LINE ไม่สำเร็จ (' + statusCode + '): ' + responseBody);
      return { success: false, statusCode: statusCode, error: responseBody };
    }
  } catch (error) {
    Logger.log('❌ เกิดข้อผิดพลาดในการส่ง LINE: ' + error.message);
    return { success: false, error: error.message };
  }
}

/**
 * สร้างโครงสร้าง Flex Message สไตล์บัตรข้อมูลงานซ่อม Thai Lion Air
 */
function buildRepairFlexMessage(data, webAppUrl) {
  const requestId = data.requestId || '-';
  const eqCode = data.equipmentCode || '-';
  const eqName = data.equipmentName || '-';
  const damage = data.damageAppearance || '-';
  const requester = (data.requesterName || '-') + (data.requesterId ? ' (' + data.requesterId + ')' : '');
  const tel = data.approverTel || '-';
  const dateStr = data.informDate || '-';
  const timeStr = data.informTime ? (data.informTime + ' น.') : '-';

  return {
    type: 'bubble',
    size: 'mega',
    header: {
      type: 'box',
      layout: 'vertical',
      backgroundColor: '#E31837',
      paddingAll: '16px',
      contents: [
        {
          type: 'box',
          layout: 'baseline',
          contents: [
            {
              type: 'text',
              text: '🚨 แจ้งซ่อมอุปกรณ์ใหม่',
              weight: 'bold',
              color: '#FFFFFF',
              size: 'lg',
              flex: 0
            }
          ]
        },
        {
          type: 'text',
          text: 'ใบแจ้งซ่อมเลขที่: #' + requestId,
          color: '#FFE8E8',
          size: 'sm',
          margin: 'xs',
          weight: 'bold'
        }
      ]
    },
    body: {
      type: 'box',
      layout: 'vertical',
      paddingAll: '16px',
      spacing: 'md',
      contents: [
        // หมวดข้อมูลอุปกรณ์
        {
          type: 'box',
          layout: 'vertical',
          spacing: 'xs',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'รหัสอุปกรณ์',
                  color: '#888888',
                  size: 'sm',
                  flex: 3
                },
                {
                  type: 'text',
                  text: eqCode,
                  wrap: true,
                  color: '#E31837',
                  weight: 'bold',
                  size: 'md',
                  flex: 7
                }
              ]
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'ชื่ออุปกรณ์',
                  color: '#888888',
                  size: 'sm',
                  flex: 3
                },
                {
                  type: 'text',
                  text: eqName,
                  wrap: true,
                  color: '#222222',
                  size: 'sm',
                  weight: 'bold',
                  flex: 7
                }
              ]
            }
          ]
        },
        {
          type: 'separator',
          color: '#EEEEEE'
        },
        // หมวดอาการเสีย
        {
          type: 'box',
          layout: 'vertical',
          spacing: 'xs',
          contents: [
            {
              type: 'text',
              text: 'อาการเสีย / รายละเอียด:',
              color: '#888888',
              size: 'xs'
            },
            {
              type: 'text',
              text: damage,
              wrap: true,
              color: '#D9534F',
              weight: 'bold',
              size: 'sm'
            }
          ]
        },
        {
          type: 'separator',
          color: '#EEEEEE'
        },
        // หมวดผู้แจ้งและเวลา
        {
          type: 'box',
          layout: 'vertical',
          spacing: 'xs',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'ผู้แจ้งซ่อม',
                  color: '#888888',
                  size: 'xs',
                  flex: 3
                },
                {
                  type: 'text',
                  text: requester,
                  wrap: true,
                  color: '#333333',
                  size: 'xs',
                  flex: 7
                }
              ]
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'เบอร์ติดต่อ',
                  color: '#888888',
                  size: 'xs',
                  flex: 3
                },
                {
                  type: 'text',
                  text: tel,
                  wrap: true,
                  color: '#333333',
                  size: 'xs',
                  flex: 7
                }
              ]
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'เวลาที่แจ้ง',
                  color: '#888888',
                  size: 'xs',
                  flex: 3
                },
                {
                  type: 'text',
                  text: dateStr + ' ' + timeStr,
                  wrap: true,
                  color: '#555555',
                  size: 'xs',
                  flex: 7
                }
              ]
            }
          ]
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      paddingAll: '12px',
      backgroundColor: '#FAFAFA',
      contents: [
        {
          type: 'button',
          style: 'primary',
          color: '#E31837',
          height: 'sm',
          action: {
            type: 'uri',
            label: '📱 เปิดดูในระบบแจ้งซ่อม',
            uri: webAppUrl
          }
        }
      ]
    }
  };
}

function logLineWebhook(event, raw) {
  try {
    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName('LineLogs');
    if (!sheet) {
      sheet = ss.insertSheet('LineLogs');
      sheet.appendRow(['Timestamp', 'Type', 'GroupId', 'UserId', 'Message', 'Raw']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#E31837').setFontColor('#FFFFFF');
    }
    const groupId = (event && event.source && event.source.groupId) ? event.source.groupId : '';
    const userId = (event && event.source && event.source.userId) ? event.source.userId : '';
    const msg = (event && event.message && event.message.text) ? event.message.text : '';
    sheet.appendRow([
      Utilities.formatDate(new Date(), 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss'),
      event ? event.type : 'raw',
      groupId,
      userId,
      msg,
      raw ? raw.substring(0, 500) : ''
    ]);
  } catch (e) {
    Logger.log('Error logging webhook: ' + e.message);
  }
}

/**
 * จัดการ Webhook Events จาก LINE Messaging API
 * โหมดใช้งานจริง (Silent Mode): บอททำหน้าที่ส่งแจ้งเตือนใบแจ้งซ่อมอย่างเดียว จะไม่ส่งข้อความตอบกลับใดๆ เมื่อมีคนพิมพ์คุยในกลุ่มหรือแชท
 */
function handleLineWebhook(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const rawContents = e.postData.contents;
    const data = JSON.parse(rawContents);
    const events = data.events || [];

    // สำหรับปุ่ม Verify จาก LINE Developers Console ให้ตอบ 200 OK ทันที
    if (events.length === 0) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      // บันทึก log เงียบๆ ลงใน Sheet LineLogs เพื่อเก็บ Group ID ไว้ดูย้อนหลังโดยไม่ส่งข้อความกวนในแชท
      logLineWebhook(event, rawContents);

      const groupId = (event.source && event.source.groupId) ? event.source.groupId : '';
      if (groupId && !PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID')) {
        PropertiesService.getScriptProperties().setProperty('LINE_GROUP_ID', groupId);
      }
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    Logger.log('Error in handleLineWebhook: ' + err.message);
    return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * ส่งข้อความตอบกลับ (Reply Message)
 */
function replyLineMessage(replyToken, messages, token) {
  try {
    const options = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      payload: JSON.stringify({
        replyToken: replyToken,
        messages: messages
      }),
      muteHttpExceptions: true
    };
    const response = UrlFetchApp.fetch('https://api.line.me/v2/bot/message/reply', options);
    const code = response.getResponseCode();
    const text = response.getContentText();
    Logger.log('Reply response (' + code + '): ' + text);
    logLineWebhook({ type: 'reply_response' }, 'Code: ' + code + ', Body: ' + text);
  } catch (e) {
    Logger.log('Error replying to LINE: ' + e.message);
    logLineWebhook({ type: 'reply_error' }, e.message);
  }
}

/**
 * ฟังก์ชันสำหรับทดสอบส่ง Flex Message จาก Script Editor
 */
function testSendLineNotification() {
  const sampleData = {
    requestId: 'TEST-01',
    equipmentCode: 'TLM-AC-001',
    equipmentName: 'AIR CONDITIONING UNIT',
    damageAppearance: 'ระบบทำความเย็นมีเสียงดังผิดปกติและแอร์ไม่เย็น',
    requesterName: 'Mr.Kawee Khiewnon',
    requesterId: 'TL186205',
    approverTel: '0812345678',
    informDate: Utilities.formatDate(new Date(), 'Asia/Bangkok', 'dd/MM/yyyy'),
    informTime: Utilities.formatDate(new Date(), 'Asia/Bangkok', 'HH:mm')
  };
  const result = sendLineFlexNotification(sampleData);
  Logger.log('ผลการทดสอบ: ' + JSON.stringify(result));
  return result;
}

/**
 * ส่งแจ้งเตือนเมื่อช่างหรือ Admin กด Reset ดึงใบงานกลับเป็นกำลังซ่อม
 * @param {Object} data - { requestId, workOrderNo, equipmentCode, equipmentName, resetByName, resetReason }
 */
function sendLineResetNotification(data) {
  try {
    const config = getLineProperties();
    if (!config.channelAccessToken || !config.groupId) {
      Logger.log('⚠️ ไม่สามารถส่ง LINE Reset ได้: ยังไม่ได้ตั้งค่า Token หรือ Group ID');
      return { success: false, message: 'LINE credentials missing' };
    }

    const eqCode = data.equipmentCode || '-';
    const eqName = data.equipmentName || '-';
    const woNo = data.workOrderNo ? (' (W/O: ' + data.workOrderNo + ')') : '';
    const resetBy = data.resetByName || '-';
    const reason = data.resetReason || '-';

    const altText = '🔄 ใบงานถูกรีเซ็ต: ' + eqCode + woNo + ' โดย ' + resetBy;

    const flexContents = {
      type: 'bubble',
      size: 'mega',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#EA580C',
        paddingAll: '16px',
        contents: [
          {
            type: 'text',
            text: '🔄 แจ้งเตือน: ใบงานถูกดึงกลับ / รีเซ็ต',
            weight: 'bold',
            color: '#FFFFFF',
            size: 'md'
          },
          {
            type: 'text',
            text: 'สถานะเปลี่ยนกลับเป็น: 🔵 กำลังซ่อม (รอช่างลงบันทึกใหม่)',
            color: '#FFEDD5',
            size: 'xs',
            margin: 'xs'
          }
        ]
      },
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '16px',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              { type: 'text', text: 'อุปกรณ์:', size: 'sm', color: '#64748B', flex: 3 },
              { type: 'text', text: eqCode + ' ' + eqName, size: 'sm', weight: 'bold', color: '#0F172A', flex: 7, wrap: true }
            ]
          },
          ...(data.workOrderNo ? [{
            type: 'box',
            layout: 'horizontal',
            margin: 'sm',
            contents: [
              { type: 'text', text: 'เลข W/O:', size: 'sm', color: '#64748B', flex: 3 },
              { type: 'text', text: data.workOrderNo, size: 'sm', weight: 'bold', color: '#2563EB', flex: 7 }
            ]
          }] : []),
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'sm',
            contents: [
              { type: 'text', text: 'ผู้รีเซ็ต:', size: 'sm', color: '#64748B', flex: 3 },
              { type: 'text', text: resetBy, size: 'sm', weight: 'bold', color: '#EA580C', flex: 7, wrap: true }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'sm',
            contents: [
              { type: 'text', text: 'เหตุผล:', size: 'sm', color: '#64748B', flex: 3 },
              { type: 'text', text: reason, size: 'sm', color: '#DC2626', flex: 7, wrap: true }
            ]
          },
          {
            type: 'separator',
            margin: 'md'
          },
          {
            type: 'text',
            text: 'ℹ️ ระบบได้ล้างข้อมูลผลการซ่อมและอะไหล่เดิมแล้ว เพื่อให้ช่างเริ่มบันทึกใหม่ได้อย่างถูกต้อง',
            size: 'xs',
            color: '#64748B',
            wrap: true,
            margin: 'md'
          }
        ]
      }
    };

    const payload = {
      to: config.groupId,
      messages: [
        {
          type: 'flex',
          altText: altText,
          contents: flexContents
        }
      ]
    };

    const options = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer ' + config.channelAccessToken
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', options);
    const code = response.getResponseCode();
    if (code === 200) {
      Logger.log('✅ ส่งแจ้งเตือน LINE Reset สำเร็จ: ' + (data.workOrderNo || eqCode));
      return { success: true };
    } else {
      Logger.log('❌ ส่งแจ้งเตือน LINE Reset ไม่สำเร็จ (' + code + ')');
      return { success: false, statusCode: code };
    }
  } catch (err) {
    Logger.log('❌ เกิดข้อผิดพลาดในการส่ง LINE Reset: ' + err.message);
    return { success: false, error: err.message };
  }
}

