# Triage Taxonomy v1

> STATUS: PRELIMINÄR, HYPOTESBASERAD, EJ VERIFIERAD MOT VERKLIGT MAILCORPUS

Syftet med denna taxonomi är att definiera de inledande teoretiska korgarna (*triage*) där inkommande ärenden landar för klassificering. Inga klassificeringar utförs autonomt i Fas 1 (alla bygger enbart på en rekommendation som inväntar manuell hantering). 

---

## 1. Ny lead
- **Kort definition:** En potentiell ny affär av substantiell storlek/karaktär.
- **Typiska signaler:** B2B, formell struktur, budget, tidsplan ("totalentreprenad", "lagerhall").
- **Typisk risknivå:** Medel (Affärsrisk/Uppsida).
- **Preliminär VD-relevans:** Hög.
- **Preliminär routingrekommendation:** Förslag till Jonas.
- **Märkning:** `[VERIFIERAT I MOCKCORPUS]` (ex. CASE 01)

## 2. Lågkvalitativ lead
- **Kort definition:** Ospecifik förfrågan, från odefinierad sändare, utan tydligt affärsvärde.
- **Typiska signaler:** "Tjena", "bygga om lite", saknar ritningar eller specifikation.
- **Typisk risknivå:** Låg.
- **Preliminär VD-relevans:** Låg (Tidstjuv).
- **Preliminär routingrekommendation:** Stopp/Svarsmall, inväntar manuell approval (Jonas).
- **Märkning:** `[VERIFIERAT I MOCKCORPUS]` (ex. CASE 02)

## 3. Aktivt projekt
- **Kort definition:** Löpande kommunikation inom ramarna för en beställd verksamhet.
- **Typiska signaler:** Projektnummer, kända namn från kundsidan.
- **Typisk risknivå:** Låg till Medel.
- **Preliminär VD-relevans:** Låg.
- **Preliminär routingrekommendation:** Förslag till Projektledare.
- **Märkning:** `[INFERENS]`

## 4. Avvikelse / Risk
- **Kort definition:** Händelse i projekt som påverkar budget, leveransdatum eller scope.
- **Typiska signaler:** "Försening", "ÄTA", "Kund vill ändra", "Problem".
- **Typisk risknivå:** Hög.
- **Preliminär VD-relevans:** Hög.
- **Preliminär routingrekommendation:** Förslag till Jonas, Approval krävs.
- **Märkning:** `[VERIFIERAT I MOCKCORPUS]` (ex. CASE 03, CASE 08)

## 5. Leverantör / Kommersiell
- **Kort definition:** Ekonomiska ändringar från partners och grossister.
- **Typiska signaler:** "Justering av priser", "Inköpskostnader", procentsatser.
- **Typisk risknivå:** Medel (Marginalpåverkan).
- **Preliminär VD-relevans:** Hög.
- **Preliminär routingrekommendation:** Förslag till Jonas / Inköpsansvarig.
- **Märkning:** `[VERIFIERAT I MOCKCORPUS]` (ex. CASE 05)

## 6. Leverantör / Operativ
- **Kort definition:** Praktisk synkronisering av leveranser till byggarbetsplats.
- **Typiska signaler:** "Leveranstid", tidsstämpel ("07:00 istället för 08:00").
- **Typisk risknivå:** Låg.
- **Preliminär VD-relevans:** Låg.
- **Preliminär routingrekommendation:** Förslag till Projektledare / Platschef.
- **Märkning:** `[VERIFIERAT I MOCKCORPUS]` (ex. CASE 06)

## 7. Intern fråga
- **Kort definition:** Praktiska och resursrelaterade dialoger mellan anställda.
- **Typiska signaler:** Val av material från snickare/utförare.
- **Typisk risknivå:** Låg.
- **Preliminär VD-relevans:** Låg.
- **Preliminär routingrekommendation:** Förslag delegeras till Projektledare.
- **Märkning:** `[INFERENS]` (ex. CASE 07)

## 8. Ren status
- **Kort definition:** Incheckningar utan avvikelser ("Brus").
- **Typiska signaler:** "Allt rullar på", "Inga avvikelser".
- **Typisk risknivå:** Låg.
- **Preliminär VD-relevans:** Låg.
- **Preliminär routingrekommendation:** Batch, Markeras läst/Ignorerad.
- **Märkning:** `[INFERENS]` (ex. CASE 04)

## 9. Småfråga / Batchbar
- **Kort definition:** Korta, triviala kundfrågor.
- **Typiska signaler:** "Snabb fråga", mötestider, kalenderfrågor.
- **Typisk risknivå:** Låg.
- **Preliminär VD-relevans:** Låg.
- **Preliminär routingrekommendation:** Till Batch.
- **Märkning:** `[VERIFIERAT I MOCKCORPUS]` (ex. CASE 11, CASE 12)

## 10. Känsligt läge / Missnöje
- **Kort definition:** Negativ kundfeedback, klagomål och bestridanden.
- **Typiska signaler:** "Inte nöjd", "Omedelbart", krav.
- **Typisk risknivå:** Hög.
- **Preliminär VD-relevans:** Extremt Hög.
- **Preliminär routingrekommendation:** Förslag till Jonas, Approval krävs (Omedelbar eskalering).
- **Märkning:** `[VERIFIERAT I MOCKCORPUS]` (ex. CASE 09)

## 11. Bilaga / Ritning / Kräver granskning
- **Kort definition:** Mejl primärt centrerade runt tunga externa dokument.
- **Typiska signaler:** "Reviderade ritningar", stor pdf.
- **Typisk risknivå:** Medel.
- **Preliminär VD-relevans:** Medel.
- **Preliminär routingrekommendation:** Förslag till Jonas/Projektledare, Mer underlag krävs.
- **Märkning:** `[OKLARHET]` (ex. CASE 10 – oklart vem som ansvarar för revideringarna).
