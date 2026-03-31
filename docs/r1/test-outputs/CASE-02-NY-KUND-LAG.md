# CASE 02 — Ny kundförfrågan (oklar / låg kvalitet)

> Kritiskt test: verifiera att systemet filtrerar lågkvalitativa leads från VD:s bord.

---

## Input
- **Från:** privatperson@gmail.com
- **Ämne:** Bygga om lite
- **Mejl:**
  > Tjena,
  > Behöver hjälp med lite bygggrejer, vet inte riktigt vad det kostar.
  > Kan ni höra av er?

## Klassificering
- **Typ:** Sälj / Ny lead
- **Underkategori:** Privatperson / oklar omfattning
- **Prioritet:** Låg

## Bedömning
- **Ska Jonas in:** Nej
- **Varför:** 
  - otydlig förfrågan från privatperson (troligtvis B2C, litet värde)
  - inget som kräver VD:s tid eller strategiska ställningstagande
- **Föreslagen ansvarig:** 
  - Projektledare eller kundservice/info@
- **Vad som saknas:** 
  - all väsentlig information om projektet, plats och budget
- **Risknivå:** Låg

## AI föreslår
- **Rekommenderad hantering:** Be om förtydligande via standardiserat svar, alternativt hänvisa till formulär på webben.
- **Rekommenderad delegering:** Delegera till projektledare för hantering.
- **Rekommenderad batching:** Ja. Kan hanteras i klump med andra småfrågor.
- **Rekommenderad uppföljning:** Inget förrän kunden återkommer med mer information.

## Utkast
- **Internt:** 
  > Kan du svara på denna och be om mer specifikation? Verkar vara ett mindre privatjobb.
- **Externt:** 
  > Hej,
  > Tack för att du hör av dig. För att vi ska kunna bedöma om vi kan hjälpa dig behöver vi lite mer information om vad det är du vill bygga och var. 
  > Återkom gärna med en kort beskrivning så kikar vi på det!
  > Mvh

## Ingen action utförd
- inget mejl har skickats
- ingen task har skapats
- ingen status har uppdaterats
- ingen delegering har skickats
- ingen extern kommunikation har skett

## Kräver manuell handling
- Någon behöver läsa och skicka ett kvalificerande svar
- Jonas behöver *inte* agera

## Fail-closed-note
- AI:n avvisar inte kunden helt, utan föreslår ett standardiserat kvalificeringssteg
- VD-tid sparas genom att eskalera ner ärendet
