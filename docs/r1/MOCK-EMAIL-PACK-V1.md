# VD-assistent — Mock Email Pack v1 (12 case)

## Syfte
Testa kärnlogik i Fas 1:
- prioritering
- delegering
- nästa steg
- batching
- approval

## Format
Varje mejl ska kunna köras som input till systemet utan extra kontext.

---

## CASE 01 — Ny kundförfrågan (potentiellt bra affär)
Från: kund@byggbolag.se
Ämne: Förfrågan – totalentreprenad lagerhall

Hej,
Vi ska bygga en lagerhall på ca 1200 kvm och vill ha offert.
Behöver start inom 2–3 månader.
Kan ni återkomma med ungefärlig prisbild och nästa steg?

/Andreas

---

## CASE 02 — Ny kundförfrågan (oklar / låg kvalitet)
Från: privatperson@gmail.com
Ämne: Bygga om lite

Tjena,
Behöver hjälp med lite bygggrejer, vet inte riktigt vad det kostar.
Kan ni höra av er?

---

## CASE 03 — Pågående projekt (tidsrisk)
Från: projektledare@bolaget.se
Ämne: Problem med leverans – risk för försening

Hej,
Leverantören av stålbalkar är sena med minst 1 vecka.
Det påverkar tidsplanen direkt.
Hur vill du att vi hanterar detta mot kund?

---

## CASE 04 — Pågående projekt (status – ej kritisk)
Från: projektledare@bolaget.se
Ämne: Status vecka 12

Hej,
Allt rullar på enligt plan.
Inga avvikelser just nu.

---

## CASE 05 — Leverantör (prisändring)
Från: leverantor@material.se
Ämne: Justering av priser Q2

Hej,
Vi behöver justera priserna med ca 8% från nästa månad pga ökade inköpskostnader.
Återkom om ni vill diskutera.

---

## CASE 06 — Leverantör (praktisk fråga)
Från: leverantor@transport.se
Ämne: Leveranstid tisdag

Hej,
Funkar det att vi kommer kl 07:00 istället för 08:00?

---

## CASE 07 — Intern fråga (bör kunna delegeras)
Från: snickare@bolaget.se
Ämne: Val av material kund X

Hej,
Ska vi köra standardlösningen eller uppgradera materialet här?

---

## CASE 08 — Intern fråga (blockerande)
Från: projektledare@bolaget.se
Ämne: Kund vill ändra omfattning

Hej,
Kunden vill lägga till extra arbete som påverkar pris och tid.
Hur vill du att vi tar detta?

---

## CASE 09 — Kund (missnöje)
Från: kund@projekt.se
Ämne: Inte nöjd med utförandet

Hej,
Vi är inte nöjda med hur arbetet ser ut just nu.
Vill att ni återkommer omgående.

---

## CASE 10 — Mejl med bilaga (ritning)
Från: arkitekt@projekt.se
Ämne: Reviderade ritningar

Hej,
Se bifogade ritningar.
Behöver återkoppling om detta påverkar er del.

---

## CASE 11 — Batchbart (småfrågor 1)
Från: kund1@projekt.se
Ämne: Snabb fråga

Hej,
Vilken dag kommer ni nästa gång?

---

## CASE 12 — Batchbart (småfrågor 2)
Från: kund2@projekt.se
Ämne: Snabb fråga

Hej,
Kan ni flytta mötet från torsdag till fredag?

---

## Viktiga testpunkter
Systemet ska för varje case kunna avgöra:

1. Ska Jonas in?
2. Kan detta delegeras?
3. Vad är nästa steg?
4. Krävs approval?
5. Ska detta batchas?

## Outputkrav (för nästa steg)
För varje mejl ska systemet kunna producera:

- prioritet (hög/medel/låg)
- Jonas: ja/nej
- föreslagen ansvarig
- nästa steg (konkret)
- ev. utkast (kort)
- batch-tag (om relevant)
