# VD-assistent — mockad mejlbas för första test

## Beslut
Projektet ska i första testfasen använda mockade mejl istället för riktiga kundmejl.

## Syfte
Syftet med mockade mejl är inte att skapa en slutlig Jonas-modell.
Syftet är att verifiera att kärnlogiken i VD-assistenten fungerar innan riktig kunddata finns tillgänglig.

## Vad som ska testas med mockdata
Med mockade mejl ska systemet kunna verifieras för:
- mejlklassificering
- prioritering
- beslut om Jonas behöver in eller inte
- delegeringsförslag
- nästa steg
- uppföljning
- batching av liknande uppgifter
- approval-logik
- tydlig beslutsvy

## Vad mockdata inte får feltolkas som
Mockade mejl är inte tillräckliga för att fastställa:
- riktig tonalitet för Jonas
- riktig ansvarskarta
- riktiga workflow-regler
- verklig stress- och tidsanalys
- slutlig kunskapsmodell

## Arkitekturprincip
Systemet ska delas i två lager:

### 1. Motor/logik
Detta lager ska vara stabilt och testas nu:
- klassificering
- prioritering
- stopregler
- approval-regler
- batching
- outputstruktur

### 2. Kunskapslager
Detta lager ska vara utbytbart:
- mejlcorpus
- tonalitet
- ansvarsmönster
- workflow-regler
- owner knowledge

## Krav
Mockdata ska senare kunna bytas ut mot riktiga mejl utan att motorn behöver göras om.

## Rekommenderad första testmängd
Mocka 12–20 mejl fördelat på:
- nya leads
- aktiva projektfrågor
- leverantörsfrågor
- interna frågor
- risk/känsliga case
- batchbara småärenden

## Faser

### R1A
Mock Knowledge Slice

### R1B
Real Knowledge Replacement

R1B ska ersätta mockcorpus med verkligt corpus när kunddata finns tillgänglig.
