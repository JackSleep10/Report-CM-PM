---
name: Thai Lion Air GSE Operations Console
description: High-contrast Aviation Operations design system for the Thai Lion Air GSE Corrective & Preventive Maintenance Web App.
colors:
  primary: "#E31837"
  primary-dark: "#B91430"
  primary-deep: "#991B1B"
  primary-light: "#FEF2F2"
  surface: "#FFFFFF"
  surface-ground: "#F1F5F9"
  surface-subtle: "#F8FAFC"
  ink: "#0F172A"
  ink-secondary: "#334155"
  ink-muted: "#475569"
  placeholder: "#55657A"
  border: "#CBD5E1"
  border-subtle: "#E2E8F0"
  accent: "#1D4ED8"
  accent-bg: "#EFF6FF"
  info: "#0369A1"
  info-bg: "#E0F2FE"
  supervisor: "#0F766E"
  supervisor-bg: "#CCFBF1"
  manager: "#1E3A8A"
  manager-bg: "#DBEAFE"
  success: "#15803D"
  success-bg: "#DCFCE7"
  warning: "#B45309"
  warning-bg: "#FEF3C7"
  danger: "#B91C1C"
  danger-bg: "#FEE2E2"
  line-green: "#007A33"
typography:
  display:
    fontFamily: "Sarabun, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
  headline:
    fontFamily: "Sarabun, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "Sarabun, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Sarabun, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Sarabun, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 600
    lineHeight: 1.3
  mono:
    fontFamily: "ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "0.86rem"
    fontWeight: 700
    lineHeight: 1.3
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "9px 18px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.md}"
    padding: "9px 18px"
  button-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "9px 18px"
  button-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "9px 18px"
  button-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "9px 18px"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "9px 12px"
  card-kpi:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "16px 18px"
---

# Design System: Thai Lion Air GSE Operations Console

## Overview

**Creative North Star: "The Tarmac Dispatch Console"**

Built for Don Mueang (DMK) ramp, hangar, and maintenance control teams, this system prioritizes immediate operational clarity under bright outdoor sunlight and rapid one-handed smartphone workflows. Thai Lion Air Crimson (`#E31837`) anchors only the brand shell and primary action moments, leaving the operational workspace on cool Aviation Slate surfaces where equipment identifiers (`TLM-xx-xxx`), Work Order tags, and workflow statuses stand out cleanly without competing visual clutter.

Every interface decision respects Google Apps Script's `HtmlService` payload budget: crisp semantic CSS tokens replace duplicated inline markup, and screen components remain separated from pixel-calibrated A4 print overlays.

**Key Characteristics:**
- High-contrast outdoor readability (`≥ 4.5:1` WCAG AA across badges, buttons, and placeholders).
- Single primary action per table row paired with an overflow menu (`⋯`) instead of multi-color icon clusters.
- Monospace equipment tags and tabular numerals across all Work Orders, dates, HR meters, and KPI counters.
- Guardrailed safety forms: unchecked PM checklists by default, live progress counters, local draft autosave, and confirmation dialogs before regulatory signatures or deletions.

## Colors

The palette pairs Thai Lion Air Crimson with crisp Aviation Slate neutrals and WCAG AA semantic workflow hues—avoiding decorative violet/purple accents and low-contrast pastels.

### Primary
- **Thai Lion Air Crimson** (`#E31837`): Sticky top navigation bar, primary create/save CTAs, active form focus accent, and section header underlines.
- **Crimson Hover** (`#B91430`): Hover and active state for primary buttons.
- **Crimson Tint** (`#FEF2F2`): Active repair status pill background and critical rework alert surface.

### Secondary & Workflow States
- **Aviation Navy (Manager)** (`#1E3A8A` on `#DBEAFE` tint): Manager approval status, role badge, and final authorization controls (replacing decorative purple).
- **Maintenance Teal (Supervisor)** (`#0F766E` on `#CCFBF1` tint): Supervisor verification badges and review controls.
- **Operations Blue (Accent / Tech)** (`#1D4ED8` on `#EFF6FF` tint): Technician repair entry, Work Order pills, and interactive focus rings.
- **Clearance Green (Success)** (`#15803D` / `#166534` on `#DCFCE7` tint): Completed / Return to Service badges, approval confirmation CTAs, and healthy fleet readiness indicators.
- **Caution Amber (Warning)** (`#B45309` / `#92400E` on `#FEF3C7` tint): Pending/rework/W/O restore controls and Monday follow-up banners.
- **Critical Red (Danger)** (`#B91C1C` on `#FEE2E2` tint): Destructive delete actions, error banners, and overdue/defect highlights.
- **LINE Official Green** (`#007A33`): Dedicated 1-tap LINE dispatch buttons with AA-compliant contrast.

### Neutral
- **Canvas Ground** (`#F1F5F9`): Cool slate workspace background providing subtle separation under white surfaces.
- **Surface White** (`#FFFFFF`): Cards, tables, inputs, and modal sheets.
- **Primary Ink** (`#0F172A`): Headings, table values, equipment tags, and form labels.
- **Secondary Ink** (`#334155`) & **Muted Ink** (`#475569`): Metadata, table headers, and descriptive labels (`≥ 8:1` on white).
- **Placeholder Slate** (`#55657A`): Form and shadow placeholders (`≥ 5.4:1` on white/ground).
- **Structural Border** (`#CBD5E1`) & **Subtle Divider** (`#E2E8F0`): Hairlines, table separators, and input strokes.

### Named Rules
**The Earned Accent Rule.** Keep Thai Lion Air Crimson for the top shell and primary creation/submission actions; use Aviation Slate, Navy, and Teal for routine workspace controls so critical alerts and active repairs command immediate attention.
**The Full-Perimeter Border Rule.** Never apply a thick one-sided left/top accent stripe on rounded cards or banners; communicate category with clean full borders, tinted backgrounds, or leading icons.

## Typography

**Display & Body Font:** `'Sarabun', sans-serif` (weights 400, 500, 600, 700)
**Data / Code Tag Font:** `ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace`

**Character:** Legible Thai-Latin bilingual clarity with `font-variant-numeric: tabular-nums` enforced on Work Order numbers, request IDs, dates, HR meters, KPI totals, and zoom readouts.

### Hierarchy
- **View Headline (`h1`)** (`700`, `1.25rem–1.4rem`, `line-height: 1.3`): Page-level operational heading for CM, PM, GSE Status, and Forms.
- **Modal / Section Title (`h3`)** (`700`, `1.05rem–1.18rem`, `line-height: 1.35`): Modal dialog and form section headers.
- **Body / Table Cell** (`400–500`, `0.9rem–0.95rem`, `line-height: 1.5`): Operational rows, descriptions, and form fields (`16px` minimum on mobile inputs).
- **Compact Label / Badge** (`600–700`, `0.78rem–0.85rem`, minimum floor `0.78rem` / `12.5px`): Status pills, table headers (natural casing for Thai readability), and helper hints.

### Named Rules
**The 12.5px Floor Rule.** Never set screen UI text below `0.78rem` (`~12.5px`) outside calibrated A4 paper overlays.
**The Tabular Data Rule.** Every numeric ID, W/O badge, date, and counter uses `font-variant-numeric: tabular-nums`.

## Layout

- **Workspace Container:** Fluid up to `1440px` (`max-width: min(1440px, 96vw)`) on desktop so 9–11 column CM and PM tables breathe without premature clipping.
- **KPI Strip:** 4-column interactive filter grid on CM & GSE (`repeat(4, minmax(0, 1fr))`), 5-column interactive strip on PM (`repeat(5, minmax(0, 1fr))`), collapsing cleanly to 3-column on tablet and 2-column on mobile (`≤ 768px`).
- **Action Density:** Desktop toolbars keep 1 primary CTA plus compact filters; infrequent Admin utilities live inside a single `"เครื่องมือ Admin ▾"` menu in the top bar. Table rows show 1 primary contextual button + Print + fixed-position `⋯` overflow menu.
- **Mobile Adaptation (`≤ 768px`):** CM, PM, and Spare Parts tables convert to stacked cards; modals expand into `16px`-padded full-width / `100dvh` sheets with sticky headers and footers; minimum `44×44px` tap targets on action buttons and `24×24px` checkboxes.

## Elevation & Depth

Surfaces rely primarily on `1px solid` borders and `#F1F5F9` ground contrast rather than heavy elevation.

- **Flat-at-Rest Shadow (`--shadow`):** `0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04)` for elevated cards and sticky toolbars.
- **Modal / Overlay Shadow (`--shadow-lg`):** `0 10px 25px rgba(15, 23, 42, 0.14)` for dialogs, floating `⋯` menus, and toast alerts.

### Named Rules
**The Neutral Shadow Rule.** Never apply colored neon/glow shadows to buttons, banners, or cards; depth is strictly neutral slate.

## Shapes

- **Sm (`6px`):** Inline inputs, compact tags, row overflow items, and equipment code pills.
- **Md (`8px`):** Standard buttons, select dropdowns, data tables, and notification banners.
- **Lg (`12px`):** KPI cards, modal containers, and mobile data cards.
- **Pill (`999px`):** Status badges, role badges, and version indicator.

## Components

### Buttons
- **Shape:** `8px` radius (`6px` for compact `sm` variants), `font-weight: 600`, explicit property transitions (never `transition: all`), visible `2.5px` `#1D4ED8` `:focus-visible` ring.
- **Primary:** `#E31837` fill with `#FFFFFF` text for primary create/save actions.
- **Secondary / Outline:** `#FFFFFF` surface with `1.5px solid #CBD5E1` border and `#334155` text; scoped white outline only inside `.navbar`.
- **Semantic Solids:** `.btn-success` (`#15803D`), `.btn-warning` (`#B45309`), `.btn-danger` (`#B91C1C`), `.btn-info` (`#0369A1`), `.btn-line` (`#007A33`)—all with `#FFFFFF` text passing WCAG AA.

### Equipment & Status Badges
- **Equipment Tag:** Monospace bold `#0F172A` on `#F1F5F9` with `#CBD5E1` border (`6px` radius).
- **W/O Badge:** Tabular-nums monospace `#1E40AF` on `#EFF6FF` with `#BFDBFE` border.
- **Status Pills:** Full pill (`999px`) with matching light tint background, `1px` border, and ≥ 4.5:1 dark semantic ink.

### Modals & Floating Overflow Menus
- **Dialog Structure:** Semantic `role="dialog" aria-modal="true"`, left-aligned body content (`#appConfirmModal` centered), global `Escape` and backdrop dismiss, body scroll lock, and `16px` mobile padding.
- **Row Overflow Menu (`⋯`):** Fixed-viewport positioning calculated from trigger `getBoundingClientRect()` so menus never clip inside `overflow-x: auto` table wrappers.

## Do's and Don'ts

### Do:
- **Do** validate every screen color pair to `≥ 4.5:1` contrast (including `::placeholder`, navbar tabs, and status pills).
- **Do** keep new PM Task Card checklists unchecked by default with explicit section/all confirmation and live `ตรวจแล้ว X / Y ข้อ` feedback.
- **Do** preserve calibrated A4 print overlay coordinates (`#printPage`, `#pmPrintPage`, `#pmWeeklySummaryPrintPage`) untouched.
- **Do** reuse semantic CSS classes in `Stylesheet.html` instead of writing inline `style="..."` blocks so GAS payload stays lean.

### Don't:
- **Don't** hand-edit `PmEmbeddedTemplates.html`.
- **Don't** use purple/violet (`#7C3AED` / `#8B5CF6`) accents, infinite pulsing dots, or one-sided `border-left` stripes on rounded containers.
- **Don't** cram 6–7 icon-only rainbow buttons into desktop table cells or expose unlabelled inputs without `<label for>` / `aria-label`.
- **Don't** emit bare `outline: none` without `:focus-visible` ring styling.
