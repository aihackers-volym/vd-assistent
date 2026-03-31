# CASE 07 — Intern fråga (bör kunna delegeras)

> Kritiskt test: verifiera att systemet kan studsa tillbaka beslutsrätt till medarbetare istället för att låta allt landa hos VD.

---

## Input
- **Från:** snickare@bolaget.se
- **Ämne:** Val av material kund X
- **Mejl:**
  > Hej,
  > Ska vi köra standardlösningen eller uppgradera materialet här?

## Klassificering
- **Typ:** Intern
- **Underkategori:** Operativt beslut / materialval
- **Prioritet:** Låg

## Bedömning
- **Ska Jonas in:** Nej
- **Varför:** 
  - detta är ett operativt beslut i ett pågående projekt
  - ska styras av kundavtal eller projektledarens budget, inte VD
- **Föreslagen ansvarig:** 
  - Projektledare
- **Vad som saknas:** 
  - vad som står i kundavtalet för det aktuella projektet
- **Risknivå:** Låg

## AI föreslår
- **Rekommenderad hantering:** Låt projektledaren svara utifrån vad som är avtalat och budgeterat med kunden.
- **Rekommenderad delegering:** Delegera beslutanderätten till projektledaren med uppmaning att följa underlaget.
- **Rekommenderad batching:** Nej. Gäller pågående bygge, behöver svar för att inte stoppa produktion.
- **Rekommenderad uppföljning:** Ingen.

## Utkast
- **Internt:** 
  > Kolla med [Projektledare] vad som är avtalat och budgeterat för det här projektet, och kör på det beslutet.
- **Externt:** Ej relevant

## Ingen action utförd
- inget mejl har skickats
- ingen task har skapats
- ingen status har uppdaterats
- ingen delegering har skickats
- ingen extern kommunikation har skett

## Kräver manuell handling
- Någon måste vidarebefordra frågan till projektledaren (om snickaren inte redan cc:at hen)
- Projektledaren måste ta beslutet och svara snickaren

## Fail-closed-note
- AI:n väljer inte materialet åt snickaren
- AI:n eskalerar inte detta uppåt utan delegerar ansvaret dit det hör hemma (till avtalet/projektledaren)
