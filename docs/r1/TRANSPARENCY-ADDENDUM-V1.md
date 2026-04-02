# Tillägg — transparens, tidigare konversation och full råkälla

## Beslut
Två saker är hårda krav i Fas 1:

1. det ska vara lätt och intuitivt att se tidigare konversation
2. det ska vara lätt och intuitivt att visa hela råkällan

Detta ska ske utan att klottra ner huvudytan.

## Transparensprincip
UI:t måste vara helt transparent med:
- underliggande data
- tidigare konversation
- varför AI:n föreslår ett visst nästa steg eller beslut

Användaren ska aldrig behöva gissa varför en rekommendation visas.

## Huvudyta
Huvudytan ska förbli ren och beslutsorienterad.
Den ska inte visa full tråd eller full råkälla direkt.

Huvudytan ska dock tydligt visa:
- att tidigare konversation finns
- att källor finns
- varför rekommendationen föreslås i kortform

## Tidigare konversation
Tidigare konversation ska vara en tydlig sekundär sektion i drawern.

Krav:
- tydlig etikett, t.ex. "Tidigare konversation (4)"
- lätt att öppna
- visas i tidsordning
- preview per meddelande
- möjlighet att expandera varje meddelande till fulltext

Konversationen får inte blandas ihop med AI:ns bedömning.

## Källor
Källor ska vara en tydlig sekundär sektion i drawern.

Krav:
- tydlig etikett, t.ex. "Källor (3)"
- lätt att öppna
- varje källa ska visa:
  - typ
  - titel/ämne
  - datum
  - relevant utdrag
  - varför källan är relevant
  - möjlighet att öppna full råkälla

## Full råkälla
Det ska alltid finnas möjlighet att visa hela råkällan, inte bara utdrag.

Godkända etiketter:
- Visa råkälla
- Öppna full källa

## Transparens för rekommendationer
Varje viktigt förslag eller nästa steg ska kunna kopplas till:
- vad som föreslås
- varför det föreslås
- vilket underlag som stöder det

## Minimal transparensrad i huvudytan
Under eller nära "Nästa steg" ska UI kunna visa en mycket kort rad, t.ex.:
- Varför: tidsrisk + oklart kundlöfte
- Underlag: 3 källor
- Tidigare tråd: 4 mejl

## Kritisk princip
Ingen rekommendation utan spårbarhet.
Ingen full spårbarhet dumpad direkt i huvudytan.

## Fail-closed
Om tidigare konversation eller källunderlag saknas ska UI uttryckligen visa detta.
Exempel:
- tidigare konversation saknas
- full källa ej hämtad
- underlag otillräckligt för stark rekommendation
