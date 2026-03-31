# CASE 12 — Batchbart (småfrågor 2)

> Kritiskt test: verifiera att systemet grupperar liknande triviala administrativa frågor så VD kan ta dem i bulk eller delegera dem i ett svep.

---

## Input
- **Från:** kund2@projekt.se
- **Ämne:** Snabb fråga
- **Mejl:**
  > Hej,
  > Kan ni flytta mötet från torsdag till fredag?

## Klassificering
- **Typ:** Administration
- **Underkategori:** Bokning / ombokning
- **Prioritet:** Låg-Medel

## Bedömning
- **Ska Jonas in:** Ja (om han är bokad), annars Nej
- **Varför:** 
  - rör kalenderändring
  - operativ karaktär, ingen strategisk fråga
- **Föreslagen ansvarig:** 
  - Den vars inbokade möte mejlet faktiskt berör (Jonas eller annan personal)
- **Vad som saknas:** 
  - inblick i om kalendern är ledig på fredag
- **Risknivå:** Låg

## AI föreslår
- **Rekommenderad hantering:** Stäm av kalendern och föreslå ny tid.
- **Rekommenderad delegering:** Ingen om Jonas håller mötet. Annars till mötesansvarig.
- **Rekommenderad batching:** Ja. Administrativa kalenderfrågor samlas i administrativ vy eller batch, så länge de inte rör möten samma dag (vilket detta inte gör då ingen dag är angiven utom torsdag-fredag i framtid).
- **Rekommenderad uppföljning:** Uppdatera kalenderinbjudan när tiden är låst.

## Utkast
- **Internt:** Ej relevant om Jonas äger detta kalenderbeslut.
- **Externt:** 
  > Hej,
  > Fredag går bra för oss också. Fungerar samma tid, eller vill ni ta det lite senare/tidigare?
  > Vänliga hälsningar

## Ingen action utförd
- inget mejl har skickats
- ingen task har skapats
- ingen kalenderbokning har flyttats eller raderats
- ingen delegering har skickats
- ingen extern kommunikation har skett

## Kräver manuell handling
- Någon måste bekräfta att kalendern faktiskt är ledig
- Kalenderinbjudan behöver justeras manuellt

## Fail-closed-note
- AI:n flyttar absolut inte kalenderbokningar per automatik 
- Tidsförslag är enbart utkast tills en människa klickat "Skicka"
