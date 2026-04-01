# CASE 11 — Batchbart (småfråga 1)

## Input

* **Från:** [kund1@projekt.se](mailto:kund1@projekt.se)
* **Ämne:** Snabb fråga
* **Mejl:**

  > Hej,
  > Vilken dag kommer ni nästa gång?

## Klassificering

* **Typ:** Kundfråga
* **Underkategori:** Enkel planeringsfråga / schema
* **Prioritet:** Låg

## Bedömning

* **Ska Jonas in:** Nej
* **Varför:**

  * frågan är enkel och operativ
  * ingen strategisk, ekonomisk eller ansvarsmässig risk framgår
  * detta bör kunna hanteras av projektledare eller ansvarig i projektet
* **Föreslagen ansvarig:**

  * projektledare eller annan operativt ansvarig
* **Vad som saknas:**

  * exakt nästa planerade besöksdag
  * om tidplanen är bekräftad eller preliminär
* **Risknivå:** Låg

## AI föreslår

* **Rekommenderad hantering:**

  * besvara med kort och tydlig planeringsinformation
* **Rekommenderad delegering:**

  * låt operativt ansvarig svara
* **Rekommenderad batching:**

  * ja, denna typ av enkel planeringsfråga bör kunna samlas med liknande småfrågor i samma arbetsblock
* **Rekommenderad uppföljning:**

  * ingen separat uppföljning behövs om svar ges

## Utkast

* **Internt:**

  ```text
  Ta denna tillsammans med andra enkla planeringsfrågor om möjligt.

  Bekräfta nästa planerade dag och svara kort.
  ```
* **Externt:**

  ```text
  Hej,

  Nästa planerade tillfälle är [dag].

  Vänliga hälsningar
  ```

## Ingen action utförd

* inget mejl har skickats
* ingen task har skapats
* ingen status har uppdaterats
* ingen delegering har skickats
* ingen extern kommunikation har skett

## Kräver manuell handling

* ansvarig behöver bekräfta nästa planerade dag
* någon människa behöver godkänna och skicka svaret

## Fail-closed-note

* AI:n bör inte ange dag utan att någon verifierat planen
* frågan är låg risk men ska ändå inte besvaras med gissning
* detta bör inte störa Jonas direkt
