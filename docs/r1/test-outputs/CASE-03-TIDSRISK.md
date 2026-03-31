# CASE 03 — Pågående projekt (tidsrisk)

> Kritiskt test: verifiera att systemet **korrekt eskalerar** vid reell tidsrisk.
> Motvikt till CASE 04 (icke-eskalering).

---

## Input
- **Från:** projektledare@bolaget.se
- **Ämne:** Problem med leverans – risk för försening
- **Mejl:**
  > Hej,
  > Leverantören av stålbalkar är sena med minst 1 vecka.
  > Det påverkar tidsplanen direkt.
  > Hur vill du att vi hanterar detta mot kund?

## Klassificering
- **Typ:** Pågående projekt
- **Underkategori:** Avvikelse / leveransförsening / tidsrisk
- **Prioritet:** Hög

## Bedömning
- **Ska Jonas in:** Ja
- **Varför:**
  - påverkar tidsplan direkt
  - riskerar att påverka kundlöfte
  - kräver ställningstagande kring kundkommunikation
  - projektledaren efterfrågar riktning, inte bara operativ lösning
- **Föreslagen ansvarig:**
  - Jonas för beslut om kundlinje
  - Projektledare för att ta fram komplett beslutsunderlag
- **Vad som saknas:**
  - exakt påverkan på tidsplan
  - eventuell alternativ lösning eller omplanering
  - eventuell kostnadspåverkan
  - rekommenderad praktisk hantering från projektledaren
- **Risknivå:** Hög

## AI föreslår
- **Rekommenderad hantering:** Be projektledaren ta fram ett kort beslutsunderlag innan kundsvar går ut.
- **Rekommenderad delegering:** Projektledaren tar fram fakta och rekommendation. Jonas godkänner kundlinjen.
- **Rekommenderad batching:** Nej. Detta bör hanteras separat direkt.
- **Rekommenderad uppföljning:** När underlaget är framme bör Jonas ta ställning till kundsvar samma dag.

## Utkast

### Internt utkast till projektledare

```
Ta fram ett kort underlag direkt på:

1. exakt hur mycket detta påverkar tidsplanen
2. om vi har någon alternativ lösning eller omplanering
3. om det finns kostnadspåverkan eller följdrisk
4. vad du rekommenderar att vi säger till kund idag

Skicka tillbaka detta till mig så tar vi kundsvaret direkt efter det.
```

### Externt utkast till kund

```
Hej [Namn],

Vi har fått information om en försening från en leverantör som kan påverka
tidsplanen i detta skede.

Vi håller just nu på att verifiera den exakta påverkan och ser samtidigt
över om det finns alternativa vägar för att minimera effekten på projektet.

Jag återkommer till dig så snart vi har ett tydligt och korrekt besked.

Mvh
Jonas
```

## Ingen action utförd
- inget mejl har skickats
- ingen task har skapats
- ingen status har uppdaterats
- ingen delegering har skickats
- ingen kundkommunikation har skett

## Kräver manuell handling
- Jonas behöver avgöra om kund ska informeras direkt nu eller efter komplett intern verifiering
- Projektledaren behöver ta fram beslutsunderlag
- Jonas behöver godkänna eventuellt kundsvar innan något skickas

## Fail-closed-note
- Underlag saknas för att ge ett slutligt kundbesked
- AI:n bör inte lova ny tidsplan eller minimera risken innan intern verifiering är klar
- Detta ska stanna på förslagsnivå tills Jonas har tagit ställning
