import json, os, io, base64
from PIL import Image

manifest = json.load(open('pm_templates_manifest.json', encoding='utf-8'))
layout_db = json.load(open('pm_pdf_layout_db.json', encoding='utf-8'))
tpls = json.load(open('PmTaskCardTemplates.json', encoding='utf-8'))

# ============================================================
# 1. GENERATE LIGHTWEIGHT PmEmbeddedTemplates.html (Included in index.html)
# Contains ONLY rich-text templates, layout DB, and check icon (~152 KB)
# ============================================================
output_frontend = '<script>\n'
output_frontend += '// === 36 GSE PM TASK CARD TEMPLATES (RICH TEXT & CHECKLIST DATA) ===\n'
output_frontend += 'const PM_TASK_CARD_TEMPLATES = ' + json.dumps(tpls, ensure_ascii=False) + ';\n\n'

layout_mapping = {
    'TR-TLD-025-A-TLM': r'TASK CARD SHED\TR-TLD-025-TLM\TR-TLM-025-A-TLM.pdf',
    'TR-TLD-025-B-TLM': r'TASK CARD SHED\TR-TLD-025-TLM\TR-TLD-025-B-TLM.pdf',
    'TR-TLD-025-C-TLM': r'TASK CARD SHED\TR-TLD-025-TLM\TR-TLD-025-C-TLM.pdf',
    'TR-CAM-804-A-TLM': r'TASK CARD SHED\TR-CAM-804-TLM\TR-CAM-804-A-TLM.pdf',
    'TR-CAM-804-B-TLM': r'TASK CARD SHED\TR-CAM-804-TLM\TR-CAM-804-B-TLM.pdf',
    'TR-CAM-804-C-TLM': r'TASK CARD SHED\TR-CAM-804-TLM\TR- CAM-804-C-TLM.pdf',
    'GP-MAK-090-A-TLM': r'TASK CARD SHED\GP-MAK-090-TLM\GP-MAK-090-A-TLM.pdf',
    'GP-MAK-090-B-TLM': r'TASK CARD SHED\GP-MAK-090-TLM\GP-MAK-090-B-TLM.pdf',
    'GP-MAK-090-C-TLM': r'TASK CARD SHED\GP-MAK-090-TLM\GP-MAK-090-C-TLM.pdf'
}

clean_layout = {}
for k, db_key in layout_mapping.items():
    if db_key in layout_db:
        clean_layout[k] = layout_db[db_key]['pages']

output_frontend += 'const PM_LAYOUT_DB = ' + json.dumps(clean_layout, ensure_ascii=False) + ';\n'
output_frontend += "PM_LAYOUT_DB['TR-TLM-025-A-TLM'] = PM_LAYOUT_DB['TR-TLD-025-A-TLM'];\n"
output_frontend += "PM_LAYOUT_DB['TR- CAM-804-C-TLM'] = PM_LAYOUT_DB['TR-CAM-804-C-TLM'];\n\n"

if os.path.exists('check_icon.png'):
    chk_b64 = base64.b64encode(open('check_icon.png', 'rb').read()).decode('ascii')
    output_frontend += 'const PM_CHECK_ICON_B64 = "data:image/png;base64,' + chk_b64 + '";\n\n'

output_frontend += '</script>\n'

with open('PmEmbeddedTemplates.html', 'w', encoding='utf-8') as f:
    f.write(output_frontend)

fe_size = os.path.getsize('PmEmbeddedTemplates.html')
print(f'1. Generated PmEmbeddedTemplates.html (Frontend): {fe_size} bytes ({fe_size / 1024:.1f} KB)')

# ============================================================
# 2. GENERATE SERVER-SIDE ASSET PmTemplateImagesData.html (On-Demand Lazy Load)
# NOT included in index.html! Loaded only when user prints via google.script.run
# ============================================================
core_mapping = {
    'TR-TLD-025-A-TLM': 'TR-TLM-025-A-TLM',
    'TR-CAM-804-A-TLM': 'TR-CAM-804-A-TLM',
    'GP-MAK-090-A-TLM': 'GP-MAK-090-A-TLM'
}

images_dict = {}
for export_key, manifest_key in core_mapping.items():
    if manifest_key in manifest:
        page_list = []
        for p in manifest[manifest_key]:
            img_path = os.path.join('pm_templates_images', p['file'])
            if os.path.exists(img_path):
                im = Image.open(img_path)
                w, h = im.size
                if w > 1240:
                    im = im.resize((1240, int(h * 1240 / w)), Image.Resampling.LANCZOS)
                im = im.convert('L')
                buf = io.BytesIO()
                im.save(buf, format='JPEG', quality=65, optimize=True)
                b64 = base64.b64encode(buf.getvalue()).decode('ascii')
                page_list.append('data:image/jpeg;base64,' + b64)
        images_dict[export_key] = page_list

output_server = '<script id="pmTemplateImagesJson" type="application/json">\n'
output_server += json.dumps(images_dict, ensure_ascii=False)
output_server += '\n</script>\n'

with open('PmTemplateImagesData.html', 'w', encoding='utf-8') as f:
    f.write(output_server)

srv_size = os.path.getsize('PmTemplateImagesData.html')
print(f'2. Generated PmTemplateImagesData.html (Server-side Lazy): {srv_size} bytes ({srv_size / 1024 / 1024:.2f} MB)')
