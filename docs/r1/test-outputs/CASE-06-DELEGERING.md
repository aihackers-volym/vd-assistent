# CASE 06 — Leverantör (praktisk fråga)

> Kritiskt test: verifiera att systemet **delegerar rätt utan att eskalera**.
> Motvikt till CASE 03 (eskalering) och CASE 04 (ignorera).

---

## Input
- **Från:** leverantor@transport.se
- **Ämne:** Leveranstid tisdag
- **Mejl:**
  > Hej,
  > Funkar det att vi kommer kl 07:00 istället för 08:00?

## Klassificering
- **Typ:** Leverantör
- **Underkategori:** Operativ fråga / logistik / tidsjustering
- **Prioritet:** Låg–medel

## Bedömning
- **Ska Jonas in:** Nej
- **Varför:**
  - ingen tydlig strategisk påverkan framgår
  - ingen ekonomisk påverkan framgår
  - ingen kundrisk framgår
  - detta ser ut som en operativ samordningsfråga
- **Föreslagen ansvarig:**
  - Projektledare
  - alternativt platsansvarig/arbetsledare om sådan roll finns
- **Vad som saknas:**
  - om platsen är redo kl 07:00
  - om någon behöver vara på plats då
  - om ändringen krockar med annat moment
- **Risknivå:** Låg

## AI föreslår
- **Rekommenderad hantering:** Låt operativt ansvarig bekräfta om leveransen fungerar kl 07:00.
- **Rekommenderad delegering:** Skicka frågan till projektledare eller platsansvarig för snabb kontroll och svar.
- **Rekommenderad batching:** Nej. Detta bör lösas direkt i flödet, inte vänta.
- **Rekommenderad uppföljning:** Ingen separat uppföljning behövs om ansvarig snabbt bekräftar och svarar.

## Utkast

### Internt utkast

```
Kan du ta denna direkt?

Stäm av att platsen är redo kl 07:00 och att det inte krockar med något annat.

Om allt ser bra ut kan du bekräfta tiden till leverantören.
```

### Externt utkast

```
Hej,

Det fungerar bra att ni kommer kl 07:00.

Vänliga hälsningar
```

### Alternativt externt utkast om det inte fungerar

```
Hej,

07:00 fungerar tyvärr inte. Kan vi hålla oss till 08:00 eller hitta en annan tid som fungerar för båda?

Vänliga hälsningar
```

## Ingen action utförd
- inget mejl har skickats
- ingen task har skapats
- ingen status har uppdaterats
- ingen delegering har skickats
- ingen extern kommunikation har skett

## Kräver manuell handling
- ansvarig behöver kontrollera om 07:00 fungerar operativt
- ansvarig behöver välja rätt svarsalternativ
- någon människa behöver godkänna och skicka svaret

## Fail-closed-note
- AI:n bör inte anta att 07:00 fungerar utan snabb operativ kontroll
- detta ska inte eskaleras till Jonas om ingen särskild risk framkommer
- om tidsändringen påverkar bemanning, säkerhet eller annat kritiskt moment ska frågan omklassificeras
