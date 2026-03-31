# CASE 11 — Batchbart (småfrågor 1)

> Kritiskt test: verifiera att systemet föreslår passiv uppsamling (batching) för lågprioriterade icke-brådskande frågor.

---

## Input
- **Från:** kund1@projekt.se
- **Ämne:** Snabb fråga
- **Mejl:**
  > Hej,
  > Vilken dag kommer ni nästa gång?

## Klassificering
- **Typ:** Kund
- **Underkategori:** Planering / informationsfråga
- **Prioritet:** Låg

## Bedömning
- **Ska Jonas in:** Nej
- **Varför:** 
  - rent praktisk schemafråga
  - ingen underliggande risk framgår
  - kräver inget VD-beslut
- **Föreslagen ansvarig:** 
  - Projektledare eller den som ansvarar för schemaläggning
- **Vad som saknas:** 
  - tillgång till det aktuella projektets kalender
- **Risknivå:** Låg

## AI föreslår
- **Rekommenderad hantering:** Låt ansvarig för projektet besvara frågan när flödet tillåter.
- **Rekommenderad delegering:** Delegera till projektledaren/schemaansvarig.
- **Rekommenderad batching:** Ja. Hantera denna typ av småfrågor i samlade block 1-2 gånger om dagen (t.ex. morgon/eftermiddag).
- **Rekommenderad uppföljning:** Ingen för VD.

## Utkast
- **Internt:** 
  > Kund X undrar när ni är på plats igen. Har vi en dag vi kan kommunicera ut?
- **Externt:** 
  > Hej,
  > Vi planerar att komma till er igen nu på [dag]. Vår projektledare hör av sig om något skulle ändras.
  > Mvh

## Ingen action utförd
- inget mejl har skickats
- ingen task har skapats
- ingen status har uppdaterats
- ingen delegering har skickats
- ingen extern kommunikation har skett

## Kräver manuell handling
- Någon behöver titta i kalendern och bekräfta tid 
- Någon behöver skicka svaret till kund

## Fail-closed-note
- AI:n godkänner ingen automatiserad schemauppdatering
- Ett samlat batch-flöde förhindrar att VD/Projektledare blir avbruten mitt i annat
