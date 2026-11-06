import base64

with open('CorrectiveRequestApp/form_template_opt.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

content = '<style>\n.print-pdf-page {\n  background-image: url("data:image/png;base64,' + b64 + '");\n}\n</style>\n'
with open('CorrectiveRequestApp/PdfTemplateImage.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('PdfTemplateImage.html written successfully, bytes:', len(content))
