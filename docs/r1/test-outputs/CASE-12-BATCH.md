# CASE 12 — Batchbart (småfråga 2)

## Input

* **Från:** [kund2@projekt.se](mailto:kund2@projekt.se)
* **Ämne:** Snabb fråga
* **Mejl:**

  > Hej,
  > Kan ni flytta mötet från torsdag till fredag?

## Klassificering

* **Typ:** Kundfråga
* **Underkategori:** Enkel ombokning / planering
* **Prioritet:** Låg

## Bedömning

* **Ska Jonas in:** Nej
* **Varför:**

  * detta är en enkel ombokningsfråga
  * ingen strategisk eller kommersiell påverkan framgår
  * bör kunna hanteras operativt av ansvarig i projektet
* **Föreslagen ansvarig:**

  * projektledare eller annan operativt ansvarig
* **Vad som saknas:**

  * om fredag faktiskt fungerar
  * om mötet påverkar andra bokningar eller moment
* **Risknivå:** Låg

## AI föreslår

* **Rekommenderad hantering:**

  * kontrollera om fredag fungerar och svara därefter kort och tydligt
* **Rekommenderad delegering:**

  * låt operativt ansvarig hantera ombokningen
* **Rekommenderad batching:**

  * ja, denna typ av enklare ombokningar och småfrågor bör kunna samlas i samma arbetsblock som andra liknande kundfrågor
* **Rekommenderad uppföljning:**

  * ingen separat uppföljning behövs om ombokningen bekräftas

## Utkast

* **Internt:**

  ```text
  Stäm av om fredag fungerar utan att det krockar med något annat.

  Om det fungerar, svara kort och bekräfta ombokningen.
  ```

* **Externt:**

  ```text
  Hej,

  Det går bra att flytta mötet till fredag.

  Vänliga hälsningar
  ```

* **Externt alternativ om fredag inte fungerar:**

  ```text
  Hej,

  Fredag fungerar tyvärr inte för oss. Vi kan istället [alternativ tid/dag] om det passar er.

  Vänliga hälsningar
  ```

## Ingen action utförd

* inget mejl har skickats
* ingen task har skapats
* ingen status har uppdaterats
* ingen delegering har skickats
* ingen extern kommunikation har skett

## Kräver manuell handling

* ansvarig behöver kontrollera om fredag fungerar
* någon människa behöver välja rätt svarsalternativ
* någon människa behöver godkänna och skicka svaret

## Fail-closed-note

* AI:n bör inte bekräfta ombokning utan att ansvarig först verifierat att tiden fungerar
* detta är låg risk men ska ändå inte hanteras med antaganden
* detta bör inte lyftas till Jonas om ingen särskild konflikt eller följdrisk finns
