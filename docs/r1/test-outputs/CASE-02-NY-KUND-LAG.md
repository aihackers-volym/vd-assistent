# CASE 02 — Ny kundförfrågan (oklar / låg kvalitet)

## Input

* **Från:** privatperson@gmail.com
* **Ämne:** Bygga om lite
* **Mejl:**

  > Tjena,
  > Behöver hjälp med lite bygggrejer, vet inte riktigt vad det kostar.
  > Kan ni höra av er?

## Klassificering

* **Typ:** Ny kundförfrågan
* **Underkategori:** Lead / låg kvalitet / oklar omfattning
* **Prioritet:** Låg–medel

## Bedömning

* **Ska Jonas in:** Nej, inte i första läget
* **Varför:**

  * mycket låg informationsgrad
  * oklar omfattning
  * inget tyder ännu på att detta kräver VD-bedömning
  * bör först kvalificeras genom enkel strukturfråga
* **Föreslagen ansvarig:**

  * första kvalificering kan hanteras av annan ansvarig än Jonas
  * Jonas bör först komma in om leadet visar sig vara seriöst och relevant
* **Vad som saknas:**

  * typ av arbete
  * plats/adress
  * omfattning
  * tidplan
  * om det gäller privat eller företag
* **Risknivå:** Låg

## AI föreslår

* **Rekommenderad hantering:**

  * svara med kort kvalificeringsfråga istället för att lägga tid på offert eller längre dialog
* **Rekommenderad delegering:**

  * låt första kvalificering hanteras utanför Jonas om möjligt
* **Rekommenderad batching:**

  * ja, denna typ av lågkvalitativ första kontakt kan batchas med andra enklare lead-svar
* **Rekommenderad uppföljning:**

  * endast om kunden svarar med mer konkret underlag

## Utkast

* **Internt:**

  ```text
  Detta är för tunt för att ta vidare som skarp förfrågan nu.

  Föreslagen hantering:
  skicka kort kvalificeringssvar och invänta konkret underlag innan vidare bedömning.
  ```
* **Externt:**

  ```text
  Hej,

  Tack för ditt mejl.

  För att vi ska kunna hjälpa dig vidare behöver vi lite mer information om vad det gäller.

  Skicka gärna:
  - vad du vill ha hjälp med
  - ungefärlig omfattning
  - adress/plats
  - när du vill att arbetet ska göras

  När vi fått det kan vi återkomma om nästa steg.

  Vänliga hälsningar
  ```

## Ingen action utförd

* inget mejl har skickats
* ingen task har skapats
* ingen status har uppdaterats
* ingen delegering har skickats
* ingen extern kommunikation har skett

## Kräver manuell handling

* någon människa behöver välja om detta ska besvaras nu eller läggas i batch
* någon människa behöver godkänna och skicka kvalificeringssvaret

## Fail-closed-note

* underlaget är för svagt för att bedöma om detta är relevant affär eller inte
* AI:n bör inte anta scope, pris eller prioritet utifrån detta mejl
* nästa steg bör vara enkel kvalificering, inte analys eller offert
