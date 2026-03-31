# CASE 08 — Intern fråga (blockerande)

> Kritiskt test: verifiera att systemet hanterar ÄTA (Ändringar, Tillägg, Avgående) och scope-förändringar på rätt beslutsnivå.

---

## Input
- **Från:** projektledare@bolaget.se
- **Ämne:** Kund vill ändra omfattning
- **Mejl:**
  > Hej,
  > Kunden vill lägga till extra arbete som påverkar pris och tid.
  > Hur vill du att vi tar detta?

## Klassificering
- **Typ:** Pågående projekt
- **Underkategori:** Scope / ÄTA-arbete
- **Prioritet:** Medel

## Bedömning
- **Ska Jonas in:** Ja (omfattningsberoende)
- **Varför:** 
  - ändrat scope kräver ofta hantering av kundkrav vs resursplanering
  - ändrad tid påverkar andra projekt
  - projektledaren lyfter frågan explicit för styrning
- **Föreslagen ansvarig:** 
  - Jonas: beslutar om ramarna för tillägget
  - Projektledare: tar fram underlag för ÄTA
- **Vad som saknas:** 
  - vad tillägget består av
  - hur mycket det påverkar tid/budget
- **Risknivå:** Medel (planeringsrisk)

## AI föreslår
- **Rekommenderad hantering:** Be projektledaren definiera ÄTA-arbetet (omfattning, tid, pris) för godkännande innan kund får offert på tillägget.
- **Rekommenderad delegering:** Projektledaren tar fram kalkylen. Jonas godkänner.
- **Rekommenderad batching:** Nej. Pågår projektet är det risk för stopp, hantera snabbt.
- **Rekommenderad uppföljning:** Kräver Jonas beslut när ÄTA-underlaget finns.

## Utkast
- **Internt:** 
  > Ta fram ett utkast på ÄTA (vad görs, ny kostnad, ny tidplan). Skicka det till mig först så vi är överens om marginal och resurskrockar innan vi skickar det till kund.
- **Externt:** Ej relevant ännu.

## Ingen action utförd
- inget mejl har skickats
- ingen task har skapats
- ingen status har uppdaterats
- ingen delegering har skickats
- ingen extern kommunikation har skett

## Kräver manuell handling
- Jonas behöver godkänna direktivet till projektledaren
- Projektledaren måste ta fram ÄTA-kalkyl
- Jonas måste godkänna kalkylen innan kunden faktureras eller lovas tid

## Fail-closed-note
- AI:n godkänner inte automatiskt scope change, eftersom resurstillgång måste bedömas
- ÄTA-arbeten hanteras strikt genom att kräva sifferunderlag innan godkännande
