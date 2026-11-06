import os
import sys
import subprocess
import pymupdf

def main():
    out_dir = r"c:\Users\THAILIONAIR\Desktop\Project report\GP-409-E-CUP-TLM"
    os.makedirs(out_dir, exist_ok=True)
    print(f"Target directory: {out_dir}")

    # ==========================================
    # 1. GENERATE MASTER MATRIX PDF (GP-409-E-CUP-TLM.pdf)
    # ==========================================
    src_master_pdf = r"Z:\5.CM & PM form\TASK CARD SHED\GP-MAK-090-TLM\GP-MAK-090-TLM.pdf"
    dst_master_pdf = os.path.join(out_dir, "GP-409-E-CUP-TLM.pdf")
    print(f"Generating {dst_master_pdf}...")
    doc = pymupdf.open(src_master_pdf)

    # Page 1
    p1 = doc[0]
    # Footer redaction & replace
    p1.add_redact_annot(pymupdf.Rect(110, 820, 580, 836), fill=(1, 1, 1))
    p1.apply_redactions()
    p1.insert_text(
        (111.59, 829.5),
        "GRS-RM-CK-070  l  Preventive Maintenance for Ground Power Unit (GP) GPU-409-E-CUP  l  Issue SL001 - Rev. 00 - Eff. Date: 26 OCT 26",
        fontsize=6.8, fontname="helv"
    )
    p1.insert_text((545.0, 829.5), "Page 1 of 2", fontsize=6.8, fontname="helv")

    # Header Box GSE Name
    p1.add_redact_annot(pymupdf.Rect(124, 88, 380, 101), fill=(1, 1, 1))
    p1.apply_redactions()
    p1.insert_text((124.59, 97.0), "GROUND POWER UNIT (GP) GPU-409-E-CUP", fontsize=7.5, fontname="helv")

    # Header Box Engine Model
    p1.add_redact_annot(pymupdf.Rect(298, 105, 385, 118), fill=(1, 1, 1))
    p1.apply_redactions()
    p1.insert_text((299.18, 114.0), "CUMMINS QSB4.5", fontsize=7.5, fontname="helv")

    # Page 2
    p2 = doc[1]
    # Footer redaction & replace
    p2.add_redact_annot(pymupdf.Rect(110, 820, 580, 836), fill=(1, 1, 1))
    p2.apply_redactions()
    p2.insert_text(
        (111.59, 829.5),
        "GRS-RM-CK-070  l  Preventive Maintenance for Ground Power Unit (GP) GPU-409-E-CUP  l  Issue SL001 - Rev. 00 - Eff. Date: 26 OCT 26",
        fontsize=6.8, fontname="helv"
    )
    p2.insert_text((545.0, 829.5), "Page 2 of 2", fontsize=6.8, fontname="helv")

    # References section
    p2.add_redact_annot(pymupdf.Rect(84, 445, 460, 488), fill=(1, 1, 1))
    p2.apply_redactions()
    p2.insert_text((85.39, 456.0), "TLD CONTROL & SYSTEMS MANUAL", fontsize=7.0, fontname="helv")
    p2.insert_text(
        (85.39, 469.0),
        "* Operation and Maintenance Manual For GPU-409-E-CUP, Maintenance Schedule for engine, Maintenance Schedule for Alternator",
        fontsize=6.8, fontname="helv"
    )
    p2.insert_text(
        (85.39, 482.0),
        "* Cummins QSB Series Maintenance Manual, Cummins QSB4.5",
        fontsize=6.8, fontname="helv"
    )

    doc.save(dst_master_pdf)
    doc.close()
    print("Master PDF generated successfully.")

    # ==========================================
    # 2. RUN POWERSHELL TO PROCESS TASK CARDS A, B, C VIA WORD COM
    # ==========================================
    ps_script = """
$outDir = 'c:\\Users\\THAILIONAIR\\Desktop\\Project report\\GP-409-E-CUP-TLM'
$srcBase = 'Z:\\5.CM & PM form\\TASK CARD SHED\\GP-MAK-090-TLM'

$tasks = @(
    @{
        Src = Join-Path $srcBase 'GP-MAK-090-A-TLM.docx'
        DstDocx = Join-Path $outDir 'GP-409-E-CUP-A-TLM.docx'
        DstPdf  = Join-Path $outDir 'GP-409-E-CUP-A-TLM.pdf'
        OldTask = 'GP-MAK-090-A-TLM'
        NewTask = 'GP-409-E-CUP-A-TLM'
        OldHeader = 'MAK 090 A (GP)'
        NewHeader = '409 E CUP A (GP)'
        OldDocCode = 'GRS-RM-CK-096'
        NewDocCode = 'GRS-RM-CK-101'
        GsePlaceholder = 'TLM-GP-00'
    },
    @{
        Src = Join-Path $srcBase 'GP-MAK-090-B-TLM.docx'
        DstDocx = Join-Path $outDir 'GP-409-E-CUP-B-TLM.docx'
        DstPdf  = Join-Path $outDir 'GP-409-E-CUP-B-TLM.pdf'
        OldTask = 'GP-MAK-090-B-TLM'
        NewTask = 'GP-409-E-CUP-B-TLM'
        OldHeader = 'MAK 090 B (GP)'
        NewHeader = '409 E CUP B (GP)'
        OldDocCode = 'GRS-RM-CK-097'
        NewDocCode = 'GRS-RM-CK-102'
        GsePlaceholder = 'TLM-GP-0'
    },
    @{
        Src = Join-Path $srcBase 'GP-MAK-090-C-TLM.docx'
        DstDocx = Join-Path $outDir 'GP-409-E-CUP-C-TLM.docx'
        DstPdf  = Join-Path $outDir 'GP-409-E-CUP-C-TLM.pdf'
        OldTask = 'GP-MAK-090-C-TLM'
        NewTask = 'GP-409-E-CUP-C-TLM'
        OldHeader = 'MAK 090 C (GP)'
        NewHeader = '409 E CUP C (GP)'
        OldDocCode = 'GRS-RM-CK-098'
        NewDocCode = 'GRS-RM-CK-103'
        GsePlaceholder = 'TLM-GP-0'
    }
)

$w = New-Object -ComObject Word.Application
$w.Visible = $false

function Replace-InDoc ($d, $findTxt, $repTxt) {
    foreach ($range in $d.StoryRanges) {
        $curr = $range
        while ($curr -ne $null) {
            $f = $curr.Find
            $f.ClearFormatting()
            $f.Replacement.ClearFormatting()
            $f.Text = $findTxt
            $f.Replacement.Text = $repTxt
            $null = $f.Execute($findTxt, $false, $true, $false, $false, $false, $true, 1, $false, $repTxt, 2)
            $curr = $curr.NextStoryRange
        }
    }
}

function Replace-InShape ($shape, $findTxt, $repTxt) {
    if ($shape.TextFrame.HasText -ne 0) {
        $tr = $shape.TextFrame.TextRange
        $f = $tr.Find
        $f.ClearFormatting()
        $f.Replacement.ClearFormatting()
        $f.Text = $findTxt
        $f.Replacement.Text = $repTxt
        $null = $f.Execute($findTxt, $false, $true, $false, $false, $false, $true, 1, $false, $repTxt, 2)
    }
}

foreach ($t in $tasks) {
    Write-Host "Processing $($t.NewTask)..."
    $doc = $w.Documents.Open($t.Src)

    # 1. Body replacements
    Replace-InDoc $doc $t.OldTask $t.NewTask
    Replace-InDoc $doc 'MAK-090' 'GPU-409-E-CUP'
    Replace-InDoc $doc 'GRS-RM-CK-066' 'GRS-RM-CK-070'
    Replace-InDoc $doc 'Preventive Maintenance for Ground Power Unit MAK (GP) 90 KVA' 'Preventive Maintenance for Ground Power Unit (GP) GPU-409-E-CUP'
    Replace-InDoc $doc $t.GsePlaceholder 'TLM-GP-'

    # Ensure EFFECTIVITY text fits on one line (set font size to 7.0)
    $fEff = $doc.Content.Find
    $fEff.ClearFormatting()
    $fEff.Replacement.ClearFormatting()
    $fEff.Replacement.Font.Size = 7.0
    $null = $fEff.Execute('GPU-409-E-CUP', $false, $true, $false, $false, $false, $true, 1, $true, 'GPU-409-E-CUP', 2)

    # 2. Header and Footer Shapes replacements
    foreach ($sec in $doc.Sections) {
        foreach ($h in $sec.Headers) {
            foreach ($shape in $h.Shapes) {
                Replace-InShape $shape $t.OldHeader $t.NewHeader
                Replace-InShape $shape $t.OldDocCode $t.NewDocCode
                Replace-InShape $shape '15 AUG 25' '26 OCT 26'
            }
        }
        foreach ($f in $sec.Footers) {
            foreach ($shape in $f.Shapes) {
                Replace-InShape $shape $t.OldHeader $t.NewHeader
                Replace-InShape $shape $t.OldDocCode $t.NewDocCode
                Replace-InShape $shape '15 AUG 25' '26 OCT 26'
            }
        }
    }

    # 3. Save as docx and pdf
    $doc.SaveAs([ref]$t.DstDocx)
    $doc.SaveAs([ref]$t.DstPdf, [ref]17) # 17 = wdFormatPDF
    $doc.Close([ref]$false)
    Write-Host "Saved $($t.DstDocx) and $($t.DstPdf)"
}

$w.Quit()
Write-Host "All Word tasks completed successfully."
"""
    with open("run_word_automation.ps1", "w", encoding="utf-8") as f:
        f.write(ps_script)

    print("Executing PowerShell Word automation script...")
    res = subprocess.run(["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", "run_word_automation.ps1"], capture_output=True, text=True)
    print("PS Output:\n", res.stdout)
    if res.stderr:
        print("PS Errors:\n", res.stderr)

if __name__ == "__main__":
    main()
