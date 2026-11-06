/**
 * PmPdfDirectory.gs
 * สารบบไฟล์ PDF Task Card ของแท้ 100% จาก Z:\5.CM & PM form\TASK CARD SHED
 * อัปโหลดขึ้นสู่ Google Drive พร้อมแชร์สิทธิ์เข้าถึงให้ใช้งานบน Web App
 */

const PM_PDF_DIRECTORY = {
  "AC-MAK-140-TLM": {
    "A": {
      "fileName": "AC-TLD-804-A-TLM.pdf",
      "fileId": "1jW3wL_9kTC49MAv1GOZ86dV9EaPJKdVX",
      "previewUrl": "https://drive.google.com/file/d/1jW3wL_9kTC49MAv1GOZ86dV9EaPJKdVX/preview",
      "viewUrl": "https://drive.google.com/file/d/1jW3wL_9kTC49MAv1GOZ86dV9EaPJKdVX/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1jW3wL_9kTC49MAv1GOZ86dV9EaPJKdVX"
    },
    "B": {
      "fileName": "AC-TLD-804-B-TLM.pdf",
      "fileId": "1ivu68eCG-NEl0CSDdjvm3tVvOJQT3ULQ",
      "previewUrl": "https://drive.google.com/file/d/1ivu68eCG-NEl0CSDdjvm3tVvOJQT3ULQ/preview",
      "viewUrl": "https://drive.google.com/file/d/1ivu68eCG-NEl0CSDdjvm3tVvOJQT3ULQ/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1ivu68eCG-NEl0CSDdjvm3tVvOJQT3ULQ"
    },
    "C": {
      "fileName": "AC-TLD-804-C-TLM.pdf",
      "fileId": "170iS68Q7WZ7g6a-rlQ-iN-gVqxw0PwbD",
      "previewUrl": "https://drive.google.com/file/d/170iS68Q7WZ7g6a-rlQ-iN-gVqxw0PwbD/preview",
      "viewUrl": "https://drive.google.com/file/d/170iS68Q7WZ7g6a-rlQ-iN-gVqxw0PwbD/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=170iS68Q7WZ7g6a-rlQ-iN-gVqxw0PwbD"
    }
  },
  "AC-TLD-804-TLM": {
    "A": {
      "fileName": "AC-TLD-804-A-TLM.pdf",
      "fileId": "1jW3wL_9kTC49MAv1GOZ86dV9EaPJKdVX",
      "previewUrl": "https://drive.google.com/file/d/1jW3wL_9kTC49MAv1GOZ86dV9EaPJKdVX/preview",
      "viewUrl": "https://drive.google.com/file/d/1jW3wL_9kTC49MAv1GOZ86dV9EaPJKdVX/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1jW3wL_9kTC49MAv1GOZ86dV9EaPJKdVX"
    },
    "B": {
      "fileName": "AC-TLD-804-B-TLM.pdf",
      "fileId": "1ivu68eCG-NEl0CSDdjvm3tVvOJQT3ULQ",
      "previewUrl": "https://drive.google.com/file/d/1ivu68eCG-NEl0CSDdjvm3tVvOJQT3ULQ/preview",
      "viewUrl": "https://drive.google.com/file/d/1ivu68eCG-NEl0CSDdjvm3tVvOJQT3ULQ/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1ivu68eCG-NEl0CSDdjvm3tVvOJQT3ULQ"
    },
    "C": {
      "fileName": "AC-TLD-804-C-TLM.pdf",
      "fileId": "170iS68Q7WZ7g6a-rlQ-iN-gVqxw0PwbD",
      "previewUrl": "https://drive.google.com/file/d/170iS68Q7WZ7g6a-rlQ-iN-gVqxw0PwbD/preview",
      "viewUrl": "https://drive.google.com/file/d/170iS68Q7WZ7g6a-rlQ-iN-gVqxw0PwbD/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=170iS68Q7WZ7g6a-rlQ-iN-gVqxw0PwbD"
    }
  },
  "AS-MAK-180-TLM": {
    "A": {
      "fileName": "AS-MAK-180-A-TLM.pdf",
      "fileId": "1Ul4cuxJkLFgWDd6aaWb8KokOif5s5DpO",
      "previewUrl": "https://drive.google.com/file/d/1Ul4cuxJkLFgWDd6aaWb8KokOif5s5DpO/preview",
      "viewUrl": "https://drive.google.com/file/d/1Ul4cuxJkLFgWDd6aaWb8KokOif5s5DpO/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ul4cuxJkLFgWDd6aaWb8KokOif5s5DpO"
    },
    "B": {
      "fileName": "AS-MAK-180-B-TLM.pdf",
      "fileId": "19Fr8PhmorxrT0WbUk2iLuIEpuloZ18Ff",
      "previewUrl": "https://drive.google.com/file/d/19Fr8PhmorxrT0WbUk2iLuIEpuloZ18Ff/preview",
      "viewUrl": "https://drive.google.com/file/d/19Fr8PhmorxrT0WbUk2iLuIEpuloZ18Ff/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=19Fr8PhmorxrT0WbUk2iLuIEpuloZ18Ff"
    },
    "ALL": {
      "fileName": "AS.pdf",
      "fileId": "1fo-DBqpG-AVXDb0hblnLBMBVShZb3T-m",
      "previewUrl": "https://drive.google.com/file/d/1fo-DBqpG-AVXDb0hblnLBMBVShZb3T-m/preview",
      "viewUrl": "https://drive.google.com/file/d/1fo-DBqpG-AVXDb0hblnLBMBVShZb3T-m/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1fo-DBqpG-AVXDb0hblnLBMBVShZb3T-m"
    }
  },
  "AS-MAK-300-TLM": {
    "A": {
      "fileName": "AS-MAK-300-A-TLM..pdf",
      "fileId": "11Xgz2PfBiCrCm34bLejQTjVOLi0ciEgD",
      "previewUrl": "https://drive.google.com/file/d/11Xgz2PfBiCrCm34bLejQTjVOLi0ciEgD/preview",
      "viewUrl": "https://drive.google.com/file/d/11Xgz2PfBiCrCm34bLejQTjVOLi0ciEgD/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=11Xgz2PfBiCrCm34bLejQTjVOLi0ciEgD"
    },
    "B": {
      "fileName": "AS-MAK-300-B-TLM.pdf",
      "fileId": "1KvnDoxAKYmqGl-PtK7aiTHd3QAFmo9Vu",
      "previewUrl": "https://drive.google.com/file/d/1KvnDoxAKYmqGl-PtK7aiTHd3QAFmo9Vu/preview",
      "viewUrl": "https://drive.google.com/file/d/1KvnDoxAKYmqGl-PtK7aiTHd3QAFmo9Vu/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1KvnDoxAKYmqGl-PtK7aiTHd3QAFmo9Vu"
    },
    "ALL": {
      "fileName": "AS.pdf",
      "fileId": "11GdezFmL6AeRHLdCpdBJFpCcojgVVtKf",
      "previewUrl": "https://drive.google.com/file/d/11GdezFmL6AeRHLdCpdBJFpCcojgVVtKf/preview",
      "viewUrl": "https://drive.google.com/file/d/11GdezFmL6AeRHLdCpdBJFpCcojgVVtKf/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=11GdezFmL6AeRHLdCpdBJFpCcojgVVtKf"
    }
  },
  "AS-TLD-600-TLM": {
    "A": {
      "fileName": "AS-TLD-600-A-TLM.pdf",
      "fileId": "15BJCObfObFQZcFR4iNp4YEiWWSKvwbtz",
      "previewUrl": "https://drive.google.com/file/d/15BJCObfObFQZcFR4iNp4YEiWWSKvwbtz/preview",
      "viewUrl": "https://drive.google.com/file/d/15BJCObfObFQZcFR4iNp4YEiWWSKvwbtz/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=15BJCObfObFQZcFR4iNp4YEiWWSKvwbtz"
    },
    "B": {
      "fileName": "AS-TLD-600-B-TLM.pdf",
      "fileId": "15jenYV2kwdgkrIjEjwQaFlWSxa9D2oWS",
      "previewUrl": "https://drive.google.com/file/d/15jenYV2kwdgkrIjEjwQaFlWSxa9D2oWS/preview",
      "viewUrl": "https://drive.google.com/file/d/15jenYV2kwdgkrIjEjwQaFlWSxa9D2oWS/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=15jenYV2kwdgkrIjEjwQaFlWSxa9D2oWS"
    },
    "ALL": {
      "fileName": "AS.pdf",
      "fileId": "1jbhCsgrVcEn7l25n3DI0jKonGm3pL4bA",
      "previewUrl": "https://drive.google.com/file/d/1jbhCsgrVcEn7l25n3DI0jKonGm3pL4bA/preview",
      "viewUrl": "https://drive.google.com/file/d/1jbhCsgrVcEn7l25n3DI0jKonGm3pL4bA/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1jbhCsgrVcEn7l25n3DI0jKonGm3pL4bA"
    }
  },
  "BC-SAM-SAM-TLM": {
    "A": {
      "fileName": "BC-SAM-SAM-A-TLM.pdf",
      "fileId": "1RyyKA7EfW2PI8v2mdNK6Wy-lly4rt8nQ",
      "previewUrl": "https://drive.google.com/file/d/1RyyKA7EfW2PI8v2mdNK6Wy-lly4rt8nQ/preview",
      "viewUrl": "https://drive.google.com/file/d/1RyyKA7EfW2PI8v2mdNK6Wy-lly4rt8nQ/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1RyyKA7EfW2PI8v2mdNK6Wy-lly4rt8nQ"
    },
    "ALL": {
      "fileName": "BC.pdf",
      "fileId": "1eo4uBPPJXlOMeDZFhJPkQuTQjV5NgRxs",
      "previewUrl": "https://drive.google.com/file/d/1eo4uBPPJXlOMeDZFhJPkQuTQjV5NgRxs/preview",
      "viewUrl": "https://drive.google.com/file/d/1eo4uBPPJXlOMeDZFhJPkQuTQjV5NgRxs/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1eo4uBPPJXlOMeDZFhJPkQuTQjV5NgRxs"
    }
  },
  "BU-SCA-SCA-TLM": {
    "ALL": {
      "fileName": "B.pdf",
      "fileId": "1LWiqiSrgk0pIavV-yNZ_cH6yZ6VDVH6q",
      "previewUrl": "https://drive.google.com/file/d/1LWiqiSrgk0pIavV-yNZ_cH6yZ6VDVH6q/preview",
      "viewUrl": "https://drive.google.com/file/d/1LWiqiSrgk0pIavV-yNZ_cH6yZ6VDVH6q/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1LWiqiSrgk0pIavV-yNZ_cH6yZ6VDVH6q"
    },
    "A": {
      "fileName": "BU-SCA-SCA-A-TLM.pdf",
      "fileId": "1eCPv1QtYMpGHVVDi2y1PLBkwC6SNLp53",
      "previewUrl": "https://drive.google.com/file/d/1eCPv1QtYMpGHVVDi2y1PLBkwC6SNLp53/preview",
      "viewUrl": "https://drive.google.com/file/d/1eCPv1QtYMpGHVVDi2y1PLBkwC6SNLp53/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1eCPv1QtYMpGHVVDi2y1PLBkwC6SNLp53"
    },
    "B": {
      "fileName": "BU-SCA-SCA-B-TLM.pdf",
      "fileId": "1pmRiaTl25wHy7kHpIeEy5o6vIIRq0JJv",
      "previewUrl": "https://drive.google.com/file/d/1pmRiaTl25wHy7kHpIeEy5o6vIIRq0JJv/preview",
      "viewUrl": "https://drive.google.com/file/d/1pmRiaTl25wHy7kHpIeEy5o6vIIRq0JJv/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1pmRiaTl25wHy7kHpIeEy5o6vIIRq0JJv"
    }
  },
  "CB-TLD-NBL-TLM": {
    "A": {
      "fileName": "CB-TLD-NBL-A-TLM.pdf",
      "fileId": "1XSRODyj0A_78G0peJI9ZYnPCX0MmKNL5",
      "previewUrl": "https://drive.google.com/file/d/1XSRODyj0A_78G0peJI9ZYnPCX0MmKNL5/preview",
      "viewUrl": "https://drive.google.com/file/d/1XSRODyj0A_78G0peJI9ZYnPCX0MmKNL5/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1XSRODyj0A_78G0peJI9ZYnPCX0MmKNL5"
    },
    "B": {
      "fileName": "CB-TLD-NBL-B-TLM.pdf",
      "fileId": "16D45YvUQEtOngyM5gjE-T-i_npwG9Mjl",
      "previewUrl": "https://drive.google.com/file/d/16D45YvUQEtOngyM5gjE-T-i_npwG9Mjl/preview",
      "viewUrl": "https://drive.google.com/file/d/16D45YvUQEtOngyM5gjE-T-i_npwG9Mjl/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=16D45YvUQEtOngyM5gjE-T-i_npwG9Mjl"
    },
    "C": {
      "fileName": "CB-TLD-NBL-C-TLM.pdf",
      "fileId": "1EgPMUsn8SNFR3l4cZOCygfirvvsHOqVY",
      "previewUrl": "https://drive.google.com/file/d/1EgPMUsn8SNFR3l4cZOCygfirvvsHOqVY/preview",
      "viewUrl": "https://drive.google.com/file/d/1EgPMUsn8SNFR3l4cZOCygfirvvsHOqVY/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1EgPMUsn8SNFR3l4cZOCygfirvvsHOqVY"
    }
  },
  "ES-SAM-SAM-TLM": {
    "A": {
      "fileName": "PS-SAM-SAM-A-TLM.pdf",
      "fileId": "1zHZzsr823M18y8HGkbf8ZyNGr9PykhAJ",
      "previewUrl": "https://drive.google.com/file/d/1zHZzsr823M18y8HGkbf8ZyNGr9PykhAJ/preview",
      "viewUrl": "https://drive.google.com/file/d/1zHZzsr823M18y8HGkbf8ZyNGr9PykhAJ/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1zHZzsr823M18y8HGkbf8ZyNGr9PykhAJ"
    }
  },
  "FL-TYT-TYT-TLM": {
    "A": {
      "fileName": "FL-TYT-TYT-A-TLM.pdf",
      "fileId": "1O9wz0kNG1NI0tOJtZFUNLW6qebTJHvoL",
      "previewUrl": "https://drive.google.com/file/d/1O9wz0kNG1NI0tOJtZFUNLW6qebTJHvoL/preview",
      "viewUrl": "https://drive.google.com/file/d/1O9wz0kNG1NI0tOJtZFUNLW6qebTJHvoL/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1O9wz0kNG1NI0tOJtZFUNLW6qebTJHvoL"
    },
    "B": {
      "fileName": "FL-TYT-TYT-B-TLM.pdf",
      "fileId": "1lJMN3ZAir0KWwJEo_xQgNEaROzqKuul8",
      "previewUrl": "https://drive.google.com/file/d/1lJMN3ZAir0KWwJEo_xQgNEaROzqKuul8/preview",
      "viewUrl": "https://drive.google.com/file/d/1lJMN3ZAir0KWwJEo_xQgNEaROzqKuul8/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1lJMN3ZAir0KWwJEo_xQgNEaROzqKuul8"
    },
    "C": {
      "fileName": "FL-TYT-TYT-C-TLM.pdf",
      "fileId": "1z5vobkqRI8IubhALuU2pFAG09Fx5ZEgj",
      "previewUrl": "https://drive.google.com/file/d/1z5vobkqRI8IubhALuU2pFAG09Fx5ZEgj/preview",
      "viewUrl": "https://drive.google.com/file/d/1z5vobkqRI8IubhALuU2pFAG09Fx5ZEgj/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1z5vobkqRI8IubhALuU2pFAG09Fx5ZEgj"
    }
  },
  "GE-HYD-HYD-TLM": {
    "A": {
      "fileName": "GE-HYD-HYD-A-TLM.pdf",
      "fileId": "1ZIDVb5HMAFWWTeJGkQLLUNa45tN-cSRp",
      "previewUrl": "https://drive.google.com/file/d/1ZIDVb5HMAFWWTeJGkQLLUNa45tN-cSRp/preview",
      "viewUrl": "https://drive.google.com/file/d/1ZIDVb5HMAFWWTeJGkQLLUNa45tN-cSRp/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZIDVb5HMAFWWTeJGkQLLUNa45tN-cSRp"
    },
    "C": {
      "fileName": "GE-HYD-HYD-C-TLM.pdf",
      "fileId": "1bky7uTV9zkqxiKX7gdWkjvWOaZEmwpHh",
      "previewUrl": "https://drive.google.com/file/d/1bky7uTV9zkqxiKX7gdWkjvWOaZEmwpHh/preview",
      "viewUrl": "https://drive.google.com/file/d/1bky7uTV9zkqxiKX7gdWkjvWOaZEmwpHh/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1bky7uTV9zkqxiKX7gdWkjvWOaZEmwpHh"
    }
  },
  "GP-409-E-CUP-TLM": {},
  "GP-MAK-090-TLM": {
    "A": {
      "fileName": "GP-MAK-090-A-TLM.pdf",
      "fileId": "1fW2_r3xX7HNgppQSwHRjz95NVWGiZLLa",
      "previewUrl": "https://drive.google.com/file/d/1fW2_r3xX7HNgppQSwHRjz95NVWGiZLLa/preview",
      "viewUrl": "https://drive.google.com/file/d/1fW2_r3xX7HNgppQSwHRjz95NVWGiZLLa/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1fW2_r3xX7HNgppQSwHRjz95NVWGiZLLa"
    },
    "B": {
      "fileName": "GP-MAK-090-B-TLM.pdf",
      "fileId": "1sj2oQqIXA9U7wiPZLa4oVtWqWV4UNmG4",
      "previewUrl": "https://drive.google.com/file/d/1sj2oQqIXA9U7wiPZLa4oVtWqWV4UNmG4/preview",
      "viewUrl": "https://drive.google.com/file/d/1sj2oQqIXA9U7wiPZLa4oVtWqWV4UNmG4/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1sj2oQqIXA9U7wiPZLa4oVtWqWV4UNmG4"
    },
    "C": {
      "fileName": "GP-MAK-090-C-TLM.pdf",
      "fileId": "1YgdBJXx6xYQZa3wu8rH4iiAtWn0veQEz",
      "previewUrl": "https://drive.google.com/file/d/1YgdBJXx6xYQZa3wu8rH4iiAtWn0veQEz/preview",
      "viewUrl": "https://drive.google.com/file/d/1YgdBJXx6xYQZa3wu8rH4iiAtWn0veQEz/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1YgdBJXx6xYQZa3wu8rH4iiAtWn0veQEz"
    },
    "ALL": {
      "fileName": "GP-MAK-090-TLM.pdf",
      "fileId": "11axBGHW2QPGZSgnVMMYnRFzbGEn82vD7",
      "previewUrl": "https://drive.google.com/file/d/11axBGHW2QPGZSgnVMMYnRFzbGEn82vD7/preview",
      "viewUrl": "https://drive.google.com/file/d/11axBGHW2QPGZSgnVMMYnRFzbGEn82vD7/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=11axBGHW2QPGZSgnVMMYnRFzbGEn82vD7"
    }
  },
  "GP-MAK-140-TLM": {
    "A": {
      "fileName": "GP-MAK-140-A-TLM.pdf",
      "fileId": "1Bl4nhsg9qhs8zzES2mECRWIR73hGY7_t",
      "previewUrl": "https://drive.google.com/file/d/1Bl4nhsg9qhs8zzES2mECRWIR73hGY7_t/preview",
      "viewUrl": "https://drive.google.com/file/d/1Bl4nhsg9qhs8zzES2mECRWIR73hGY7_t/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1Bl4nhsg9qhs8zzES2mECRWIR73hGY7_t"
    },
    "B": {
      "fileName": "GP-MAK-140-B-TLM.pdf",
      "fileId": "13reLKHuQ-TlXkyGySCy-vtxFAeqBlmBg",
      "previewUrl": "https://drive.google.com/file/d/13reLKHuQ-TlXkyGySCy-vtxFAeqBlmBg/preview",
      "viewUrl": "https://drive.google.com/file/d/13reLKHuQ-TlXkyGySCy-vtxFAeqBlmBg/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=13reLKHuQ-TlXkyGySCy-vtxFAeqBlmBg"
    }
  },
  "GP-TLD-MAX-15-25-KPH": {},
  "LV-CAM-4KH-TLM": {
    "A": {
      "fileName": "LV-CAM-4KH-A-TLM.pdf",
      "fileId": "1RdFTBBlXUEdPkIlJq07whR_5ZH6v2kYq",
      "previewUrl": "https://drive.google.com/file/d/1RdFTBBlXUEdPkIlJq07whR_5ZH6v2kYq/preview",
      "viewUrl": "https://drive.google.com/file/d/1RdFTBBlXUEdPkIlJq07whR_5ZH6v2kYq/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1RdFTBBlXUEdPkIlJq07whR_5ZH6v2kYq"
    },
    "B": {
      "fileName": "LV-CAM-4KH-B-TLM.pdf",
      "fileId": "10XdQrVqsznLmTGNl37WU3fy8h19wXS94",
      "previewUrl": "https://drive.google.com/file/d/10XdQrVqsznLmTGNl37WU3fy8h19wXS94/preview",
      "viewUrl": "https://drive.google.com/file/d/10XdQrVqsznLmTGNl37WU3fy8h19wXS94/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=10XdQrVqsznLmTGNl37WU3fy8h19wXS94"
    },
    "C": {
      "fileName": "LV-CAM-4KH-C-TLM.pdf",
      "fileId": "1DVjX1RRGIdFcBDUioLGj_QfMstNyX-5v",
      "previewUrl": "https://drive.google.com/file/d/1DVjX1RRGIdFcBDUioLGj_QfMstNyX-5v/preview",
      "viewUrl": "https://drive.google.com/file/d/1DVjX1RRGIdFcBDUioLGj_QfMstNyX-5v/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1DVjX1RRGIdFcBDUioLGj_QfMstNyX-5v"
    }
  },
  "LV-ISZ-4KH-TLM": {
    "A": {
      "fileName": "LV-ISZ-4KH-A-TLM.pdf",
      "fileId": "1QjosT0iAuT4tlGFoRwxKmslOoddcHBlY",
      "previewUrl": "https://drive.google.com/file/d/1QjosT0iAuT4tlGFoRwxKmslOoddcHBlY/preview",
      "viewUrl": "https://drive.google.com/file/d/1QjosT0iAuT4tlGFoRwxKmslOoddcHBlY/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1QjosT0iAuT4tlGFoRwxKmslOoddcHBlY"
    },
    "B": {
      "fileName": "LV-ISZ-4KH-B-TLM.pdf",
      "fileId": "1sK06rP6m0LiAZylCsHKPp-h-93L7W7EB",
      "previewUrl": "https://drive.google.com/file/d/1sK06rP6m0LiAZylCsHKPp-h-93L7W7EB/preview",
      "viewUrl": "https://drive.google.com/file/d/1sK06rP6m0LiAZylCsHKPp-h-93L7W7EB/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1sK06rP6m0LiAZylCsHKPp-h-93L7W7EB"
    },
    "C": {
      "fileName": "LV-ISZ-4KH-C-TLM.pdf",
      "fileId": "1ldhDcveste69BQ6J7UU9Cvu9Io3aKXOV",
      "previewUrl": "https://drive.google.com/file/d/1ldhDcveste69BQ6J7UU9Cvu9Io3aKXOV/preview",
      "viewUrl": "https://drive.google.com/file/d/1ldhDcveste69BQ6J7UU9Cvu9Io3aKXOV/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1ldhDcveste69BQ6J7UU9Cvu9Io3aKXOV"
    }
  },
  "MP-ISZ-PER-TLM": {
    "A": {
      "fileName": "MP-ISZ-XXX-A-TLM.pdf",
      "fileId": "1qH-B-5_1O55HFxnHVc3vZOIIc8Jpvluk",
      "previewUrl": "https://drive.google.com/file/d/1qH-B-5_1O55HFxnHVc3vZOIIc8Jpvluk/preview",
      "viewUrl": "https://drive.google.com/file/d/1qH-B-5_1O55HFxnHVc3vZOIIc8Jpvluk/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1qH-B-5_1O55HFxnHVc3vZOIIc8Jpvluk"
    },
    "C": {
      "fileName": "MP-ISZ-XXX-C-TLM.pdf",
      "fileId": "1zNQowED-mbY6EUxlgThng6TnSake7fSI",
      "previewUrl": "https://drive.google.com/file/d/1zNQowED-mbY6EUxlgThng6TnSake7fSI/preview",
      "viewUrl": "https://drive.google.com/file/d/1zNQowED-mbY6EUxlgThng6TnSake7fSI/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1zNQowED-mbY6EUxlgThng6TnSake7fSI"
    },
    "ALL": {
      "fileName": "TLM-DA-078-26 เรื่อง ขออนุญาตนำอุปกรณ์ภาคพื้นและอุปกรณ์ต่างๆ เข้า-ออกพื้น.pdf",
      "fileId": "1Yt-twUkDlDO_2CuhOq2mHU1CT7Xp0Fql",
      "previewUrl": "https://drive.google.com/file/d/1Yt-twUkDlDO_2CuhOq2mHU1CT7Xp0Fql/preview",
      "viewUrl": "https://drive.google.com/file/d/1Yt-twUkDlDO_2CuhOq2mHU1CT7Xp0Fql/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1Yt-twUkDlDO_2CuhOq2mHU1CT7Xp0Fql"
    }
  },
  "MP-REN-PER-TLM": {},
  "N2-SAM-SAM-TLM": {
    "ALL": {
      "fileName": "BC.pdf",
      "fileId": "1ifUtA-Jmd9gAWLPw1utmZeYpoI-YDSIC",
      "previewUrl": "https://drive.google.com/file/d/1ifUtA-Jmd9gAWLPw1utmZeYpoI-YDSIC/preview",
      "viewUrl": "https://drive.google.com/file/d/1ifUtA-Jmd9gAWLPw1utmZeYpoI-YDSIC/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1ifUtA-Jmd9gAWLPw1utmZeYpoI-YDSIC"
    }
  },
  "PB-TLD-150-TLM": {
    "A": {
      "fileName": "PB-TLD-150-A-TLM.pdf",
      "fileId": "1HGRDCb_HHpORBBAL0L0H3LEwUupRpTf9",
      "previewUrl": "https://drive.google.com/file/d/1HGRDCb_HHpORBBAL0L0H3LEwUupRpTf9/preview",
      "viewUrl": "https://drive.google.com/file/d/1HGRDCb_HHpORBBAL0L0H3LEwUupRpTf9/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1HGRDCb_HHpORBBAL0L0H3LEwUupRpTf9"
    },
    "B": {
      "fileName": "PB-TLD-150-B-TLM.pdf",
      "fileId": "1UC3AwoUjaB-lgRoVEIAFbAtpmrsrLZsn",
      "previewUrl": "https://drive.google.com/file/d/1UC3AwoUjaB-lgRoVEIAFbAtpmrsrLZsn/preview",
      "viewUrl": "https://drive.google.com/file/d/1UC3AwoUjaB-lgRoVEIAFbAtpmrsrLZsn/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1UC3AwoUjaB-lgRoVEIAFbAtpmrsrLZsn"
    },
    "C": {
      "fileName": "PB-TLD-150-C-TLM.pdf",
      "fileId": "1O8QsT_3_8KvgAiKuTQZIVFu5Bao1GLaG",
      "previewUrl": "https://drive.google.com/file/d/1O8QsT_3_8KvgAiKuTQZIVFu5Bao1GLaG/preview",
      "viewUrl": "https://drive.google.com/file/d/1O8QsT_3_8KvgAiKuTQZIVFu5Bao1GLaG/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1O8QsT_3_8KvgAiKuTQZIVFu5Bao1GLaG"
    }
  },
  "PS-SAM-SAM-TLM": {
    "A": {
      "fileName": "PS-SAM-SAM-A-TLM.pdf",
      "fileId": "1Ii3Ut-ewCK0rCjW3VVvVAU39-YWD_3Lr",
      "previewUrl": "https://drive.google.com/file/d/1Ii3Ut-ewCK0rCjW3VVvVAU39-YWD_3Lr/preview",
      "viewUrl": "https://drive.google.com/file/d/1Ii3Ut-ewCK0rCjW3VVvVAU39-YWD_3Lr/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ii3Ut-ewCK0rCjW3VVvVAU39-YWD_3Lr"
    }
  },
  "PS-TLD-404-TLM": {
    "ALL": {
      "fileName": "PS-TLD-404-TLM.pdf",
      "fileId": "1kf-1wr7Yv978vKNf4EcJeL55C5bxpFCl",
      "previewUrl": "https://drive.google.com/file/d/1kf-1wr7Yv978vKNf4EcJeL55C5bxpFCl/preview",
      "viewUrl": "https://drive.google.com/file/d/1kf-1wr7Yv978vKNf4EcJeL55C5bxpFCl/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1kf-1wr7Yv978vKNf4EcJeL55C5bxpFCl"
    }
  },
  "PU-SZK-CAR-TLM": {
    "A": {
      "fileName": "PU A.pdf",
      "fileId": "1jSf12z-joZvRCHybxthwAetpMnWx7laC",
      "previewUrl": "https://drive.google.com/file/d/1jSf12z-joZvRCHybxthwAetpMnWx7laC/preview",
      "viewUrl": "https://drive.google.com/file/d/1jSf12z-joZvRCHybxthwAetpMnWx7laC/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1jSf12z-joZvRCHybxthwAetpMnWx7laC"
    },
    "B": {
      "fileName": "PU B.pdf",
      "fileId": "1xgK-owU5-lQ_nSQONz2YykYAtn9jwa6X",
      "previewUrl": "https://drive.google.com/file/d/1xgK-owU5-lQ_nSQONz2YykYAtn9jwa6X/preview",
      "viewUrl": "https://drive.google.com/file/d/1xgK-owU5-lQ_nSQONz2YykYAtn9jwa6X/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1xgK-owU5-lQ_nSQONz2YykYAtn9jwa6X"
    }
  },
  "PU-TYT-REV-TLM": {
    "A": {
      "fileName": "PU-TYT-REV-A-TLM.pdf",
      "fileId": "1cho_DZuXoBu6t6M_1Z7iA_f04ar32Bdc",
      "previewUrl": "https://drive.google.com/file/d/1cho_DZuXoBu6t6M_1Z7iA_f04ar32Bdc/preview",
      "viewUrl": "https://drive.google.com/file/d/1cho_DZuXoBu6t6M_1Z7iA_f04ar32Bdc/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1cho_DZuXoBu6t6M_1Z7iA_f04ar32Bdc"
    },
    "B": {
      "fileName": "PU-TYT-REV-B-TLM.pdf",
      "fileId": "1MbClnXk4bcvsI6KsQgvBYw97Wn5Bu0ST",
      "previewUrl": "https://drive.google.com/file/d/1MbClnXk4bcvsI6KsQgvBYw97Wn5Bu0ST/preview",
      "viewUrl": "https://drive.google.com/file/d/1MbClnXk4bcvsI6KsQgvBYw97Wn5Bu0ST/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1MbClnXk4bcvsI6KsQgvBYw97Wn5Bu0ST"
    }
  },
  "PU-TYT-VIG-TLM": {
    "A": {
      "fileName": "PU-TYT-VIG-A-TLM.pdf",
      "fileId": "1um5RufnIxepI_als061pehiisFrQAoyo",
      "previewUrl": "https://drive.google.com/file/d/1um5RufnIxepI_als061pehiisFrQAoyo/preview",
      "viewUrl": "https://drive.google.com/file/d/1um5RufnIxepI_als061pehiisFrQAoyo/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1um5RufnIxepI_als061pehiisFrQAoyo"
    },
    "B": {
      "fileName": "PU-TYT-VIG-B-TLM.pdf",
      "fileId": "1rMtSbKTITXAOs1L-9VketVmsoUr_t5zI",
      "previewUrl": "https://drive.google.com/file/d/1rMtSbKTITXAOs1L-9VketVmsoUr_t5zI/preview",
      "viewUrl": "https://drive.google.com/file/d/1rMtSbKTITXAOs1L-9VketVmsoUr_t5zI/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1rMtSbKTITXAOs1L-9VketVmsoUr_t5zI"
    }
  },
  "PW-CAM-4KH-TLM": {
    "ALL": {
      "fileName": "PW-CAM-4KH-TLM.pdf",
      "fileId": "1JCVCEonYNwk9LPHwCgKrGMlB8BDI5K2B",
      "previewUrl": "https://drive.google.com/file/d/1JCVCEonYNwk9LPHwCgKrGMlB8BDI5K2B/preview",
      "viewUrl": "https://drive.google.com/file/d/1JCVCEonYNwk9LPHwCgKrGMlB8BDI5K2B/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1JCVCEonYNwk9LPHwCgKrGMlB8BDI5K2B"
    }
  },
  "PW-ISZ-4KH-TLM": {
    "A": {
      "fileName": "PW-ISZ-4KH-A-TLM.pdf",
      "fileId": "1Q6cNMiJsgxdvx-bWGqGZNbJzZSRsRaSn",
      "previewUrl": "https://drive.google.com/file/d/1Q6cNMiJsgxdvx-bWGqGZNbJzZSRsRaSn/preview",
      "viewUrl": "https://drive.google.com/file/d/1Q6cNMiJsgxdvx-bWGqGZNbJzZSRsRaSn/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1Q6cNMiJsgxdvx-bWGqGZNbJzZSRsRaSn"
    },
    "C": {
      "fileName": "PW-ISZ-4KH-C-TLM.pdf",
      "fileId": "1Jh5Qgf8NbvAYBDulPHDRfqEbkt5HGzJ2",
      "previewUrl": "https://drive.google.com/file/d/1Jh5Qgf8NbvAYBDulPHDRfqEbkt5HGzJ2/preview",
      "viewUrl": "https://drive.google.com/file/d/1Jh5Qgf8NbvAYBDulPHDRfqEbkt5HGzJ2/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1Jh5Qgf8NbvAYBDulPHDRfqEbkt5HGzJ2"
    },
    "ALL": {
      "fileName": "PW-ISZ-4KH-TLM.pdf",
      "fileId": "1I4rDjziRX5UvJaIYAlHAVjULLWy5vTd6",
      "previewUrl": "https://drive.google.com/file/d/1I4rDjziRX5UvJaIYAlHAVjULLWy5vTd6/preview",
      "viewUrl": "https://drive.google.com/file/d/1I4rDjziRX5UvJaIYAlHAVjULLWy5vTd6/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1I4rDjziRX5UvJaIYAlHAVjULLWy5vTd6"
    }
  },
  "TB-VNS-VNS-TLM": {
    "A": {
      "fileName": "TB CHECK A ใช้อันนี้เด้ออออออออ.pdf",
      "fileId": "1Bi5-jnMVMHimM7WPKFgUKElqlxSAD2XF",
      "previewUrl": "https://drive.google.com/file/d/1Bi5-jnMVMHimM7WPKFgUKElqlxSAD2XF/preview",
      "viewUrl": "https://drive.google.com/file/d/1Bi5-jnMVMHimM7WPKFgUKElqlxSAD2XF/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1Bi5-jnMVMHimM7WPKFgUKElqlxSAD2XF"
    }
  },
  "TR-CAM-804-TLM": {
    "C": {
      "fileName": "TR- CAM-804-C-TLM.pdf",
      "fileId": "13moYgZAP-9kh-RRQQy6e4189l7CPEY0u",
      "previewUrl": "https://drive.google.com/file/d/13moYgZAP-9kh-RRQQy6e4189l7CPEY0u/preview",
      "viewUrl": "https://drive.google.com/file/d/13moYgZAP-9kh-RRQQy6e4189l7CPEY0u/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=13moYgZAP-9kh-RRQQy6e4189l7CPEY0u"
    },
    "A": {
      "fileName": "TR-CAM-804-A-TLM.pdf",
      "fileId": "1Hnu825amDGpzx8xBkYr3dlCdSSfhU-G4",
      "previewUrl": "https://drive.google.com/file/d/1Hnu825amDGpzx8xBkYr3dlCdSSfhU-G4/preview",
      "viewUrl": "https://drive.google.com/file/d/1Hnu825amDGpzx8xBkYr3dlCdSSfhU-G4/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1Hnu825amDGpzx8xBkYr3dlCdSSfhU-G4"
    },
    "B": {
      "fileName": "TR-CAM-804-B-TLM.pdf",
      "fileId": "1uKpNy_tnhLLzSCTn4UjtPydb8tUJyK1I",
      "previewUrl": "https://drive.google.com/file/d/1uKpNy_tnhLLzSCTn4UjtPydb8tUJyK1I/preview",
      "viewUrl": "https://drive.google.com/file/d/1uKpNy_tnhLLzSCTn4UjtPydb8tUJyK1I/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1uKpNy_tnhLLzSCTn4UjtPydb8tUJyK1I"
    },
    "ALL": {
      "fileName": "TR-CAM-804-TLM.pdf",
      "fileId": "1zH2R6-XXdUFXk6VEi-hrVpwh3UZjvtdZ",
      "previewUrl": "https://drive.google.com/file/d/1zH2R6-XXdUFXk6VEi-hrVpwh3UZjvtdZ/preview",
      "viewUrl": "https://drive.google.com/file/d/1zH2R6-XXdUFXk6VEi-hrVpwh3UZjvtdZ/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1zH2R6-XXdUFXk6VEi-hrVpwh3UZjvtdZ"
    }
  },
  "TR-TLD-025-TLM": {
    "B": {
      "fileName": "TR-TLD-025-B-TLM.pdf",
      "fileId": "1d-wqb0nE-ZKClDJ22dMe_ffGIwK-N1IN",
      "previewUrl": "https://drive.google.com/file/d/1d-wqb0nE-ZKClDJ22dMe_ffGIwK-N1IN/preview",
      "viewUrl": "https://drive.google.com/file/d/1d-wqb0nE-ZKClDJ22dMe_ffGIwK-N1IN/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1d-wqb0nE-ZKClDJ22dMe_ffGIwK-N1IN"
    },
    "C": {
      "fileName": "TR-TLD-025-C-TLM.pdf",
      "fileId": "1J7pJfnCzdbVpHRE_U8_Dbjybnctkr38v",
      "previewUrl": "https://drive.google.com/file/d/1J7pJfnCzdbVpHRE_U8_Dbjybnctkr38v/preview",
      "viewUrl": "https://drive.google.com/file/d/1J7pJfnCzdbVpHRE_U8_Dbjybnctkr38v/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1J7pJfnCzdbVpHRE_U8_Dbjybnctkr38v"
    },
    "A": {
      "fileName": "TR-TLM-025-A-TLM.pdf",
      "fileId": "1QNR8yt7I3tiBIKQpelLEYA1SsPvfoJt4",
      "previewUrl": "https://drive.google.com/file/d/1QNR8yt7I3tiBIKQpelLEYA1SsPvfoJt4/preview",
      "viewUrl": "https://drive.google.com/file/d/1QNR8yt7I3tiBIKQpelLEYA1SsPvfoJt4/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1QNR8yt7I3tiBIKQpelLEYA1SsPvfoJt4"
    }
  },
  "TT-ISZ-4JJ-TLM": {
    "ALL": {
      "fileName": "PW-ISZ-4KH-TLM.pdf",
      "fileId": "1NkOZ26QW9vGBT0LvgwuOoF9msvLYuiK-",
      "previewUrl": "https://drive.google.com/file/d/1NkOZ26QW9vGBT0LvgwuOoF9msvLYuiK-/preview",
      "viewUrl": "https://drive.google.com/file/d/1NkOZ26QW9vGBT0LvgwuOoF9msvLYuiK-/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1NkOZ26QW9vGBT0LvgwuOoF9msvLYuiK-"
    },
    "A": {
      "fileName": "TT-ISZ-4JJ-A-TLM.pdf",
      "fileId": "1nBJETVdeoJ8G5jn9ha5D-SX_HTFTBjH_",
      "previewUrl": "https://drive.google.com/file/d/1nBJETVdeoJ8G5jn9ha5D-SX_HTFTBjH_/preview",
      "viewUrl": "https://drive.google.com/file/d/1nBJETVdeoJ8G5jn9ha5D-SX_HTFTBjH_/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1nBJETVdeoJ8G5jn9ha5D-SX_HTFTBjH_"
    },
    "C": {
      "fileName": "TT-ISZ-4JJ-C-TLM.pdf",
      "fileId": "1UvstoE_dOh-hq6LOFjgGoZ-Qj8W2zNbK",
      "previewUrl": "https://drive.google.com/file/d/1UvstoE_dOh-hq6LOFjgGoZ-Qj8W2zNbK/preview",
      "viewUrl": "https://drive.google.com/file/d/1UvstoE_dOh-hq6LOFjgGoZ-Qj8W2zNbK/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1UvstoE_dOh-hq6LOFjgGoZ-Qj8W2zNbK"
    }
  },
  "VA-TYT-COM-TLM": {
    "A": {
      "fileName": "VA-TYT-COM-A-TLM.pdf",
      "fileId": "1yikxUaSI4KX57KEsChqlXOOPoPaP-eWt",
      "previewUrl": "https://drive.google.com/file/d/1yikxUaSI4KX57KEsChqlXOOPoPaP-eWt/preview",
      "viewUrl": "https://drive.google.com/file/d/1yikxUaSI4KX57KEsChqlXOOPoPaP-eWt/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1yikxUaSI4KX57KEsChqlXOOPoPaP-eWt"
    },
    "B": {
      "fileName": "VA-TYT-COM-B-TLM.pdf",
      "fileId": "1ChFOm9Fl8kiNFHlrIskpkUfCTIfljGvF",
      "previewUrl": "https://drive.google.com/file/d/1ChFOm9Fl8kiNFHlrIskpkUfCTIfljGvF/preview",
      "viewUrl": "https://drive.google.com/file/d/1ChFOm9Fl8kiNFHlrIskpkUfCTIfljGvF/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1ChFOm9Fl8kiNFHlrIskpkUfCTIfljGvF"
    }
  },
  "VP-TYT-AVA-TLM": {
    "A": {
      "fileName": "VA A.pdf",
      "fileId": "19G5TlqihhdeZflQ8mKk_hV2zRJ1knN2n",
      "previewUrl": "https://drive.google.com/file/d/19G5TlqihhdeZflQ8mKk_hV2zRJ1knN2n/preview",
      "viewUrl": "https://drive.google.com/file/d/19G5TlqihhdeZflQ8mKk_hV2zRJ1knN2n/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=19G5TlqihhdeZflQ8mKk_hV2zRJ1knN2n"
    },
    "B": {
      "fileName": "VA B.pdf",
      "fileId": "1i4Av8nEg_ONnIGT2f5E0yLeMF3VrSmc-",
      "previewUrl": "https://drive.google.com/file/d/1i4Av8nEg_ONnIGT2f5E0yLeMF3VrSmc-/preview",
      "viewUrl": "https://drive.google.com/file/d/1i4Av8nEg_ONnIGT2f5E0yLeMF3VrSmc-/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1i4Av8nEg_ONnIGT2f5E0yLeMF3VrSmc-"
    }
  },
  "VP-TYT-INN-TLM": {
    "A": {
      "fileName": "VA A.pdf",
      "fileId": "1tloBr7q-WUNIFpnXRdd2djJ4PqpJ0mTw",
      "previewUrl": "https://drive.google.com/file/d/1tloBr7q-WUNIFpnXRdd2djJ4PqpJ0mTw/preview",
      "viewUrl": "https://drive.google.com/file/d/1tloBr7q-WUNIFpnXRdd2djJ4PqpJ0mTw/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1tloBr7q-WUNIFpnXRdd2djJ4PqpJ0mTw"
    },
    "B": {
      "fileName": "VA B.pdf",
      "fileId": "1ijyr6DW5RtI-tVGpEGJI7sH1ZAd-Zxhz",
      "previewUrl": "https://drive.google.com/file/d/1ijyr6DW5RtI-tVGpEGJI7sH1ZAd-Zxhz/preview",
      "viewUrl": "https://drive.google.com/file/d/1ijyr6DW5RtI-tVGpEGJI7sH1ZAd-Zxhz/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1ijyr6DW5RtI-tVGpEGJI7sH1ZAd-Zxhz"
    }
  },
  "WT-ISZ-4KH-TLM": {
    "ALL": {
      "fileName": "PW-ISZ-4KH-TLM.pdf",
      "fileId": "1H-2kOVrtqNVZj8ELxWyc_KkF-0G3mKlO",
      "previewUrl": "https://drive.google.com/file/d/1H-2kOVrtqNVZj8ELxWyc_KkF-0G3mKlO/preview",
      "viewUrl": "https://drive.google.com/file/d/1H-2kOVrtqNVZj8ELxWyc_KkF-0G3mKlO/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1H-2kOVrtqNVZj8ELxWyc_KkF-0G3mKlO"
    },
    "A": {
      "fileName": "WT-ISZ-4KH-A-TLM.pdf",
      "fileId": "1VnolQ9y6kTJyh7B-GWGcMY0_BbeIy2Fo",
      "previewUrl": "https://drive.google.com/file/d/1VnolQ9y6kTJyh7B-GWGcMY0_BbeIy2Fo/preview",
      "viewUrl": "https://drive.google.com/file/d/1VnolQ9y6kTJyh7B-GWGcMY0_BbeIy2Fo/view?usp=sharing",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1VnolQ9y6kTJyh7B-GWGcMY0_BbeIy2Fo"
    }
  }
};

/**
 * resolvePmPdfTemplate - ค้นหาไฟล์ PDF Task Card ฉบับจริงตามรหัสอุปกรณ์และระดับ Check
 * คืนค่าเฉพาะไฟล์ PDF ที่เป็น Task Card หลายหน้าฉบับเต็ม (ไม่คืนไฟล์สรุป 1 หน้า หรือข้ามระดับ Check ผิดฟอร์ม)
 * @param {string} equipmentCode เช่น "TLM-TR-025", "TLM-TR-003"
 * @param {string} checkLevel เช่น "A", "B", "C", "PM A", "CHECK A"
 * @param {string} [equipmentDesc]
 * @param {string} [explicitModelKey]
 * @returns {Object|null}
 */
function resolvePmPdfTemplate(equipmentCode, checkLevel, equipmentDesc, explicitModelKey) {
  let matchedKey = (explicitModelKey || '').toString().trim();

  if (!matchedKey && typeof resolvePmModelKey === 'function' && equipmentCode) {
    try {
      matchedKey = resolvePmModelKey(equipmentCode, equipmentDesc);
    } catch (e) {}
  }

  if (!matchedKey) {
    if (!equipmentCode) return null;
    const norm = equipmentCode.toString().trim().toUpperCase();
    const desc = (equipmentDesc || '').toString().toUpperCase();
    const parts = norm.split('-');
    const gseType = parts.length >= 2 ? parts[1] : '';
    if (!gseType) return null;

    if (gseType === 'TR') {
      const trCamelCodes = ['TLM-TR-026', 'TLM-TR-027', 'TLM-TR-028', 'TLM-TR-029', 'TLM-TR-030', 'TLM-TR-031'];
      if (trCamelCodes.indexOf(norm) !== -1 || desc.indexOf('CAMEL') !== -1 || desc.indexOf('CAM') !== -1) {
        matchedKey = 'TR-CAM-804-TLM';
      } else {
        matchedKey = 'TR-TLD-025-TLM';
      }
    } else if (gseType === 'PU') {
      if (desc.indexOf('VIGO') !== -1) matchedKey = 'PU-TYT-VIG-TLM';
      else if (desc.indexOf('CARRY') !== -1 || desc.indexOf('SUZUKI') !== -1) matchedKey = 'PU-SZK-CAR-TLM';
      else matchedKey = 'PU-TYT-REV-TLM';
    } else if (gseType === 'VA') {
      matchedKey = 'VA-TYT-COM-TLM';
    } else if (gseType === 'VP') {
      if (desc.indexOf('INNOVA') !== -1) matchedKey = 'VP-TYT-INN-TLM';
      else matchedKey = 'VP-TYT-AVA-TLM';
    } else if (gseType === 'TT') {
      matchedKey = 'TT-ISZ-4JJ-TLM';
    } else if (gseType === 'TB') {
      matchedKey = 'TB-VNS-VNS-TLM';
    } else if (gseType === 'PS') {
      if (desc.indexOf('TLD') !== -1 || norm.indexOf('404') !== -1) matchedKey = 'PS-TLD-404-TLM';
      else matchedKey = 'PS-SAM-SAM-TLM';
    } else if (gseType === 'BC') {
      matchedKey = 'BC-SAM-SAM-TLM';
    } else if (gseType === 'PW') {
      if (desc.indexOf('CAM') !== -1) matchedKey = 'PW-CAM-4KH-TLM';
      else matchedKey = 'PW-ISZ-4KH-TLM';
    } else if (gseType === 'WT') {
      matchedKey = 'WT-ISZ-4KH-TLM';
    } else if (gseType === 'LV') {
      if (desc.indexOf('CAM') !== -1) matchedKey = 'LV-CAM-4KH-TLM';
      else matchedKey = 'LV-ISZ-4KH-TLM';
    } else if (gseType === 'AC') {
      matchedKey = 'AC-TLD-804-TLM';
    } else if (gseType === 'AS') {
      if (desc.indexOf('600') !== -1 || desc.indexOf('TLD') !== -1) matchedKey = 'AS-TLD-600-TLM';
      else if (desc.indexOf('300') !== -1) matchedKey = 'AS-MAK-300-TLM';
      else matchedKey = 'AS-MAK-180-TLM';
    } else if (gseType === 'GP') {
      if (desc.indexOf('140') !== -1) matchedKey = 'GP-MAK-140-TLM';
      else matchedKey = 'GP-MAK-090-TLM';
    } else if (gseType === 'CB') {
      matchedKey = 'CB-TLD-NBL-TLM';
    } else if (gseType === 'BU') {
      matchedKey = 'BU-SCA-SCA-TLM';
    } else if (gseType === 'PB') {
      matchedKey = 'PB-TLD-150-TLM';
    } else if (gseType === 'FL') {
      matchedKey = 'FL-TYT-TYT-TLM';
    } else if (gseType === 'MP') {
      matchedKey = 'MP-ISZ-PER-TLM';
    } else if (gseType === 'N2') {
      matchedKey = 'N2-SAM-SAM-TLM';
    } else if (gseType === 'ES') {
      matchedKey = 'ES-SAM-SAM-TLM';
    } else if (gseType === 'GE') {
      matchedKey = 'GE-HYD-HYD-TLM';
    }
  }

  if (!matchedKey || !PM_PDF_DIRECTORY[matchedKey]) return null;
  // ES-SAM-SAM-TLM ในสารบบเดิมผูกไฟล์ PS-SAM-SAM 1 หน้าไว้ ให้ใช้ Vector HTML A4 แทน
  if (matchedKey === 'ES-SAM-SAM-TLM') return null;

  const folderPdfs = PM_PDF_DIRECTORY[matchedKey];

  let lvl = (checkLevel || 'A').toString().trim().toUpperCase();
  lvl = lvl.replace(/\bPM\b/g, '').replace(/\bCHECK\b/g, '').replace(/\bSCHEDULE\b/g, '').trim();
  if (lvl.indexOf('C') !== -1) lvl = 'C';
  else if (lvl.indexOf('B') !== -1) lvl = 'B';
  else if (lvl.indexOf('A') !== -1) lvl = 'A';
  if (!lvl) lvl = 'A';

  // เลือกเฉพาะระดับ Check ที่ตรงกัน
  let pdfItem = folderPdfs[lvl] || null;
  if (!pdfItem || !pdfItem.fileName) return null;

  // กรองไฟล์สรุป 1-2 หน้า หรือตารางเมทริกซ์ 5 คอลัมน์ (ปี 2024) หรือไฟล์หนังสือราชการที่ไม่ใช่ฟอร์ม Task Card มาตรฐาน
  const nonTaskCardFiles = [
    'AS.pdf', 'BC.pdf', 'B.pdf', 'A.pdf',
    'PU A.pdf', 'PU B.pdf', 'VA A.pdf', 'VA B.pdf',
    'GP-MAK-090-TLM.pdf', 'PS-TLD-404-TLM.pdf', 'PW-CAM-4KH-TLM.pdf', 'PW-ISZ-4KH-TLM.pdf', 'TR-CAM-804-TLM.pdf',
    'PS-SAM-SAM-A-TLM.pdf'
  ];
  if (nonTaskCardFiles.indexOf(pdfItem.fileName) !== -1 || pdfItem.fileName.indexOf('TLM-DA-') !== -1) {
    return null;
  }

  return {
    modelKey: matchedKey,
    checkLevel: lvl,
    fileName: pdfItem.fileName,
    fileId: pdfItem.fileId,
    previewUrl: pdfItem.previewUrl,
    viewUrl: pdfItem.viewUrl,
    downloadUrl: pdfItem.downloadUrl
  };
}
