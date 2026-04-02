# VD-assistent — samlad instruktion från retrieval/source-beslutet och framåt

## Beslutspunkt
Denna instruktion konsoliderar alla beslut från och med:
"Allt underlag kommer att komma ifrån en Supabase RAG-pipeline (utan AI-modell i första läget) med råmaterial..."

## 1. Fas 1 ska vara retrieval-first och source-first
Fas 1 ska utgå från en Supabase retrieval-pipeline där råmaterialet är primär sanningskälla.

I första läget ska detta fungera utan AI-modell som primär komponent för retrieval.
Det betyder:
- råmaterial in i Supabase
- chunking/indexering
- retrieval
- källhärledning
- UI-baserad granskning
- inga starka generativa antaganden som primär motor

Embeddings, pgvector, semantic search och hybrid search får läggas ovanpå senare, men ska inte vara beroenden för första retrieval-slicen.

## 2. Råmaterial och provenance är first-class
Råmaterialets referenskällor måste vara first-class i systemet.

Systemet ska kunna:
- peka ut exakt vilket råmaterial som användes
- härleda bedömning/rekommendation tillbaka till källor
- visa spårbarhet i UI
- skilja på källa, segment, retrieval-träff och evidenslänk

## 3. Källor ska alltid vara granskningsbara men inte klottra ner UI
Källor ska alltid gå att granska från UI.
Källor får inte dumpas i huvudytan.

UI ska därför delas i:
- huvudytan för beslutsstöd
- konversationsvy för tidigare tråd
- källvy / provenancevy för referenskällor

## 4. Transparens är ett hårt krav
UI måste vara helt transparent med:
- underliggande rådata
- tidigare konversation
- varför ett visst nästa steg eller beslut föreslås

Användaren ska aldrig behöva gissa:
- vad som föreslås
- varför det föreslås
- vilket underlag som stöder det

## 5. Tidigare konversation måste vara lätt och intuitiv att öppna
Det ska vara mycket lätt att se tidigare konversation utan att klottra ner UI.

Krav:
- tydlig etikett, t.ex. "Tidigare konversation (4)"
- lätt att öppna från drawern
- tidigare meddelanden visas i tidsordning
- varje meddelande ska ha kort preview
- varje meddelande ska kunna expanderas till fulltext
- historik ska vara tydligt separerad från AI:ns bedömning

Tidigare konversation får inte dumpas direkt i huvudytan.

## 6. Full råkälla måste vara lätt att öppna
Det ska alltid finnas möjlighet att öppna:
- full råkälla
- fulltext för tidigare meddelande
- full referenskälla bakom ett utdrag

Godkända etiketter:
- Visa råkälla
- Öppna full källa

Det ska alltså inte stanna vid endast sammanfattning eller kort snippet.

## 7. Provenance-modellen i Fas 1
Primär provenance i Fas 1 ska inte bygga på lokal förladdning av full källdata i klienten.
Primär provenance ska heller inte bygga på en ny fri dynamisk sökning varje gång användaren öppnar källvyn.

Istället ska systemet:
- spara exakt vilka källor som låg till grund för bedömningen/rekommendationen
- hämta dessa sparade källreferenser on-demand från Supabase när användaren öppnar konversation eller källor
- hämta full råkälla först när användaren explicit väljer det

Dynamisk förinställd sökning i Supabase får finnas som sekundär funktion, t.ex.:
- Sök relaterat underlag

Men detta ska vara separat från den provenance som faktiskt låg bakom rekommendationen.

## 8. Fail-closed för källor och transparens
Om systemet inte kan visa tydliga källor för en viktig rekommendation ska det:
- markera osäkerhet
- visa att underlag saknas eller är otillräckligt
- undvika stark slutsats

Ingen rekommendation utan spårbarhet.
Ingen full spårbarhet dumpad direkt i huvudytan.

## 9. Thin UI i Fas 1 ska hållas mycket enkel
UI i Fas 1 ska vara mycket enkel, lugn och snabb att skumma.

### Desktop
Består endast av:
1. vänster: Inkommande-lista
2. höger: enkelt kundkort
3. drawer: öppnat inkommande ärende

### Mobil
- inkommande-lista
- öppnat ärende visas i drawer

## 10. Inkommande-listan
Varje rad/kort i Inkommande-listan ska vara enkel.

Visa bara:
- avsändare
- ämne
- prioritet
- liten statusetikett

Klick på ett ärende ska öppna drawer.

## 11. Drawers ska användas även på desktop
Innehållet i Inkommande ska visas som drawer även på desktop.

Det betyder:
- klick på inkommande ärende öppnar drawer
- högerspalten ska inte bytas ut till ärendedetalj
- samma mentala modell ska gälla på mobil och desktop

### Mobil
- fullhöjd drawer / bottom sheet

### Desktop
- sidodrawer

## 12. Högerspalten på desktop ska visa kundkort, inte ärendedetalj
På desktop ska högerspalten visa ett enkelt kundkort istället för innehållet i Inkommande.

Kundkortet ska vara stabilt och visa bara:
- kundnamn
- kontaktperson
- status
- senaste aktivitet

Kundkortet ska inte visa:
- hela inkommande mejlet
- AI-bedömningen
- full konversation
- full provenance
- full casevy

## 13. Drawern är arbetsytan
Drawern ska vara den primära arbetsytan för ett inkommande ärende.

I Fas 1 ska drawern visa endast:
1. Bedömning
2. Nästa steg
3. Utkast
4. Ingen action utförd
5. Kräver manuell handling
6. Konversation
7. Källor

Konversation och Källor ska vara sekundära och kollapsade från start.

## 14. Nästa steg-kort i drawern
Varje utfälld drawer ska innehålla ett kompakt kort:
Nästa steg

Kortet ska:
- ligga efter Bedömning / AI föreslår
- före Utkast
- visa en primär rekommendation i 1–2 rader
- visa ansvarig
- kunna visa mycket kort varför-rad / risk / tempo om relevant

Exempel på minimalt innehåll:
- huvudrekommendation
- ansvarig

Kortet ska inte bli en stor handlingspanel i Fas 1.

## 15. Actions i drawern
Drawern ska ha två små actions:
- Godkänn
- Justera

### Betydelse av Godkänn i Fas 1
Godkänn får inte utföra någon autonom handling.
Godkänn betyder bara:
- människa godkänner rekommendationen
- rekommendationen markeras som vald/godkänd
- ingen faktisk action har utförts

UI ska kunna visa:
- Godkänt — ingen action utförd

### Betydelse av Justera i Fas 1
Justera ska öppna liten inline-justering.
Inte stor separat editor.

Justera ska kunna användas för att:
- ändra rekommenderat nästa steg
- ändra ansvarig
- justera formulering

## 16. Sticky actionrad
I mobil drawer ska Godkänn och Justera ligga i en sticky footer så att användaren inte behöver scrolla till botten för att agera.

På desktop ska actions vara tydliga och lätta att hitta, men UI ska fortfarande hållas enkelt.

## 17. Huvudytan ska vara beslutsorienterad
Användaren ska kunna förstå första beslutet utan att först läsa:
- hela konversationen
- full råkälla
- full provenance

Men användaren ska snabbt kunna öppna dessa innan godkännande.

Huvudytan får därför innehålla mycket kort metadata, t.ex.:
- Tidigare konversation (4)
- Källor (3)
- Underlag: delvis
- Varför: tidsrisk + oklart kundlöfte

Men huvudytan får inte visa:
- långa råutdrag
- hela trådar
- full källtext

## 18. Konversation och källor ska vara kollapsade från start
För att undvika stökig UI ska:
- Konversation vara kollapsad från start
- Källor vara kollapsade från start

Båda ska vara mycket lätta att expandera.

## 19. Huvudprincip för informationshierarki
Följande ordning gäller i UI:

1. Vad är detta?
2. Kräver detta Jonas?
3. Vad föreslås som nästa steg?
4. Vad kräver manuell handling?
5. Vad har inte gjorts?
6. Vad sades tidigare?
7. Vilka källor stöder detta?

## 20. Hård enkelhetsprincip för Fas 1
Håll Fas 1 mycket enkel.

Ta bort i Fas 1:
- avancerad sektionsnavigering
- många badges
- flera öppna actions samtidigt
- tung metadata i kundkort
- avancerad evidensvisning i huvudytan
- komplex layout
- överdetaljerad provenance i huvudsektionen

Behåll i Fas 1:
- tunn Inkommande-lista
- enkelt kundkort
- drawer som arbetsyta
- kompakt Nästa steg-kort
- två actions: Godkänn / Justera
- konversation kollapsad
- källor kollapsade
- tydlig fail-closed-text
- tydlig transparens

## 21. Kritisk princip för Fas 1
Huvudyta = överblick och beslut
Drawer = arbete
Konversation = sekundär historik
Källor = sekundär provenance

Allt viktigt ska vara:
- spårbart
- transparent
- granskningsbart
- utan att huvudytan blir stökig

## 22. Ej tillåten feltolkning
Detta får inte feltolkas som:
- att källor kan döljas
- att AI får presentera beslut utan underlag
- att kundkortet ska bli en detaljvy
- att drawern får bli en ny lång detaljsida i miniformat
- att dynamisk sökning ersätter sparad provenance
- att full råkälla ska förladdas lokalt som standard

## 23. Slutlig styrprincip
Fas 1 ska vara:
- retrieval-first
- source-first
- evidence-first
- approval-first
- fail-closed
- transparent
- mycket enkel i UI
