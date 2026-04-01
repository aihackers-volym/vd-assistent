# Decision Matrix v1 — VD-assistent

## Syfte
Decision Matrix v1 är första styrtabellen för hur VD-assistenten ska resonera över mockcase innan någon motorlogik formuleras i kod.

Matrisen ska tydligt visa:
- vilka ärenden som kräver Jonas
- vilka som ska delegeras
- vilka som ska batchas
- vilka som kräver approval
- vilka som saknar tillräckligt underlag
- vad nästa rekommenderade handling är

## Grundprincip
AI-assistenten får i Fas 1 endast föreslå.
Allt i denna matris är därför rekommenderad logik, inte utförd handling.

## Fält
- case
- typ
- prioritet
- ska Jonas in
- föreslagen ansvarig
- risknivå
- approval krävs
- batching
- vad som saknas
- rekommenderad nästa handling

## Decision Matrix v1

| Case | Typ | Prioritet | Ska Jonas in | Föreslagen ansvarig | Risknivå | Approval krävs | Batching | Vad som saknas | Rekommenderad nästa handling |
|---|---|---:|---|---|---|---|---|---|---|
| CASE 01 | Ny kundförfrågan / potentiellt bra affär | Hög | Ja | Jonas först, därefter ev. projektledare/offertansvarig | Medel | Ja | Nej | Plats, exakt scope, ritningar, detaljerad tidplan, typ av offertönskemål | Kvalificera leadet med tydliga frågor innan offertspår |
| CASE 02 | Ny kundförfrågan / låg kvalitet | Låg–medel | Nej, inte i första läget | Annan ansvarig för första kvalificering | Låg | Ja, innan svar skickas | Ja | Typ av arbete, plats, omfattning, tidplan, kundtyp | Skicka kort kvalificeringssvar och invänta bättre underlag |
| CASE 03 | Pågående projekt / avvikelse / tidsrisk | Hög | Ja | Jonas för kundlinje, projektledare för beslutsunderlag | Hög | Ja | Nej | Exakt tidspåverkan, alternativ lösning, kostnadspåverkan, rekommendation från projektledare | Ta fram beslutsunderlag direkt och lås kundlinje innan svar |
| CASE 04 | Pågående projekt / status utan avvikelse | Låg | Nej | Projektledare | Låg | Nej | Ja, passiv batch i översikt | Inget kritiskt | Ingen direkt action, lägg i statusöversikt |
| CASE 05 | Leverantör / prisändring | Hög | Ja | Jonas för kommersiell linje, annan ansvarig för faktainsamling | Hög | Ja | Nej | Exakt påverkan, vilka rader/material som påverkas, effekt på projekt/offerter, alternativ leverantör | Begär förtydligande och gör intern påverkananalys innan svar |
| CASE 06 | Leverantör / praktisk logistikfråga | Låg–medel | Nej | Projektledare eller platsansvarig | Låg | Ja, innan svar skickas | Nej | Om 07:00 fungerar operativt | Låt operativt ansvarig kontrollera och svara kort |
| CASE 08 | Pågående projekt / scope change / pris- och tidspåverkan | Hög | Ja | Jonas för kommersiell riktning, projektledare för underlag | Hög | Ja | Nej | Exakt ändring, prispåverkan, tidspåverkan, vad som sagts till kund, rekommenderad lösning | Ta fram tydligt ändringsunderlag innan något lovas till kund |
| CASE 10 | Pågående projekt / ritning / möjlig påverkan | Medel–hög | Nej, inte i första läget | Projektledare eller tekniskt ansvarig först | Medel–hög | Ja, innan extern återkoppling | Nej | Vad som ändrats, påverkan på Carpenters del, tid, kostnad, omfattning | Gör teknisk bedömning först, eskalera till Jonas om faktisk påverkan finns |
| CASE 11 | Kundfråga / enkel planering | Låg | Nej | Projektledare eller operativt ansvarig | Låg | Ja, innan svar skickas | Ja | Nästa planerade dag | Bekräfta planerad dag och svara kort |
| CASE 12 | Kundfråga / enkel ombokning | Låg | Nej | Projektledare eller operativt ansvarig | Låg | Ja, innan svar skickas | Ja | Om fredag fungerar utan krock | Kontrollera tid och svara kort med bekräftelse eller alternativ |

## Första styrmönster som matrisen visar

### 1. Jonas ska in när:
- tid påverkas
- pris påverkas
- kundlöfte påverkas
- ansvar är oklart
- kommersiell linje måste väljas
- scope förändras
- leverantörsärende påverkar marginal eller åtagande

### 2. Jonas ska normalt inte in när:
- frågan är ren status utan avvikelse
- frågan är enkel logistik
- frågan är enkel planering eller ombokning
- första kvalificering av lågkvalitativ lead kan göras av annan ansvarig

### 3. Batching ska användas när:
- frågan är enkel
- risknivån är låg
- inga strategiska eller kommersiella beslut krävs
- flera liknande småfrågor kan lösas i samma arbetsblock

### 4. Batching ska inte användas när:
- tidsrisk finns
- prispåverkan finns
- kundkonflikt eller kundlöfte riskeras
- scope change pågår
- bilaga/ritning först måste förstås
- snabb riktning behövs samma dag

### 5. Approval krävs i Fas 1:
För alla case där någon extern eller intern handling kan bli aktuell.
AI får bara föreslå.
Ingen action får tolkas som utförd.

## Tydliga luckor som kvarstår i v1
Decision Matrix v1 saknar ännu explicit testning för:
- kundmissnöje / konfliktläge
- intern fråga som borde kunna delegeras men ofta landar hos Jonas
- gränsfall där ansvar är oklart mellan två roller
- fall där låg risk ändå bör lyftas p.g.a. återkommande mönster

## Nästa syfte med matrisen
Decision Matrix v1 ska användas som grund för:
- Decision Rules v1
- Approval Rules v1
- Delegation Rules v1
- Batching Rules v1
- senare mockvalidering mot riktig analys
