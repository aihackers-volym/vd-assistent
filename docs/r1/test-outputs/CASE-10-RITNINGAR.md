# CASE 10 — Mejl med bilaga (ritning)

> Kritiskt test: verifiera att systemet kan dirigera informationsdelning och bilagor utan att störa VD i onödan.

---

## Input
- **Från:** arkitekt@projekt.se
- **Ämne:** Reviderade ritningar
- **Mejl:**
  > Hej,
  > Se bifogade ritningar.
  > Behöver återkoppling om detta påverkar er del.

## Klassificering
- **Typ:** Pågående projekt
- **Underkategori:** Teknisk information / bilaga
- **Prioritet:** Medel

## Bedömning
- **Ska Jonas in:** Nej
- **Varför:** 
  - teknisk granskning av ritningar för pågående projekt är en operativ roll
  - Jonas behöver bara veta resultatet (om det innebär stora ÄTA eller hinder)
- **Föreslagen ansvarig:** 
  - Projektledare
- **Vad som saknas:** 
  - en teknisk bedömning av ritningens påverkan på det aktuella arbetet
- **Risknivå:** Låg (tills projektledare har granskat)

## AI föreslår
- **Rekommenderad hantering:** Skicka vidare ritningarna till projektledaren för granskning.
- **Rekommenderad delegering:** Helt till projektledare. Projektledaren återkopplar till arkitekten direkt om ändringen är obetydlig, eller lyfter till Jonas om den ändrar pris/scope.
- **Rekommenderad batching:** Ja/Nej (kan ligga för granskning samma dag).
- **Rekommenderad uppföljning:** Ingen för VD, så länge projektledare flaggar eventuella avvikelser.

## Utkast
- **Internt:** 
  > Nya ritningar från arkitekten. Kan du kika och svara dem om det påverkar vår del? Hojta till mig bara om det drar iväg i scope eller påverkar totala budgeten rejält.
- **Externt:** Ej relevant från VD.

## Ingen action utförd
- inget mejl har skickats
- ingen task har skapats
- ingen status har uppdaterats
- ingen delegering har skickats
- ingen extern kommunikation har skett

## Kräver manuell handling
- Jonas (eller AI:n post-manuell-trigger) vidarebefordrar till projektledaren
- Projektledaren gör den tekniska granskningen

## Fail-closed-note
- AI:n ignorerar inte mejlet (viktig teknisk info), men undviker att VD behöver öppna bilagorna själv
- AI:n delegerar med instruktionen att flagga tillbaka om risk upptäcks
