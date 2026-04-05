# Email Pattern Map v1

> STATUS: Analys baserad på Batch #1 (12 mejl).
> DISC: Batch #1 bygger på mockdata och ska läsas som en mockbaserad hypotesbild för att testa modellens logik. Innehållet utgör inte verifierad verklighetsbild av Carpenters eller Jonas innan motsvarande mönster har bekräftats i verkliga källor.

## A. Ärendetyper
- **Nya kundförfrågningar:** `[VERIFIERAT I MOCKCORPUS]` Mockcasen visar stor varians på leads, från mycket kvalitativa ("totalentreprenad lagerhall") till luddiga ("bygga om lite").
- **Projektstyrning/Status:** `[VERIFIERAT I MOCKCORPUS]` Mockcorpus innehåller statusrapporteringar utan krav på action ("Allt rullar på") samt kritiska varningar om tid/scope.
- **Leverantörskommunikation:** `[VERIFIERAT I MOCKCORPUS]` Mejl bygger på både strategiska prisförändringar och rent operationella pusselbitar (logistiktider).
- **Klagomål/Missnöje:** `[VERIFIERAT I MOCKCORPUS]` Mockcasen innehåller känsliga inkommande mejl från missnöjda kunder.
- **Mikrofrågor:** `[VERIFIERAT I MOCKCORPUS]` Testcasen visar enkla, men potentiellt tidsstoppande operativa frågor ("Vilken dag kommer ni?").

## B. Eskaleringsmönster
- **Eskaleras till Jonas:** `[INFERENS]` I mockcorpus verkar det som att kritiska tidsproblem och scope-förändringar trycks över från Projektledare till VD.
- **Naturlig VD-nivå:** `[INFERENS]` Utifrån testmejlen ser kundmissnöje och leverantörers prishöjningar ut att hanteras direkt på VD-nivå.
- **Utanför Jonas (Borde inte vara VD-beslut):** `[INFERENS]` I mockcorpus uppstår operativa frågor (ex. leveranstider från transport och kundens kalenderflyttar) som logiskt borde hanteras utanför VD.

## C. Ansvarsmönster
- **Roller som nämns:** `[VERIFIERAT I MOCKCORPUS]` "Projektledare", "Snickare", "Arkitekt" nämns uttryckligen i testunderlaget.
- **Tydligt ansvar:** `[INFERENS]` I mockcorpus verkar projektledare driva det löpande tills tid, pris eller scope påverkas, varpå ärendet eskaleras.
- **Oklart ansvar:** `[OKLARHET]` Det framgår inte vem som kommunicerar direkt med snickaren ifall materialval ska uppgraderas i verkligheten.
- **Oklart ansvar:** `[OKLARHET]` Det är testat i teorin ifall VD faktiskt hanterar arkitektens ritningar initialt, men hur det görs i verkligheten är oklart.

## D. Beslutsmönster
- **Triggar beslut:** `[INFERENS]` Plötsliga kundönskemål för extra arbete och materialuppgraderingar presenteras som beslutsutlösare i testarna.
- **Triggar försiktighet/stopp:** `[INFERENS]` I mockcorpus hanteras kritiska avvikelser (t.ex. försenade stålbalkar eller missnöjd kund) som uppenbara varningssignaler som kräver finkänslighet.
- **Triggar uppföljning:** `[INFERENS]` Inbjudan till diskussion om prisjustering tolkas som uppföljningskrav i mock-testet.

## E. Tonalitetsmönster
- **Inkommande ton:** `[VERIFIERAT I MOCKCORPUS]` Inkommande mejl i testcasen är ofta raka, korta och informella ("Tjena", "Hej").
- **Utgående ton:** `[OKLARHET]` Saknas helt i underlaget, oklart hur Jonas formulerar sig utåt eller inåt i verkligheten.

## F. Stress-/tidstjuvsignaler
- **Mikro-operationella frågor:** `[VERIFIERAT I MOCKCORPUS]` Mockcasen innehåller flera små operativa frågor som konkurrerar med strategiska ärenden i samma inkommande flöde.
- **Brus-information:** `[INFERENS]` Det "gröna ljuset" utan avvikelser från Projektledaren tar onödig uppmärksamhet i testflödet. Detta kan indikera att eliminering av brus är viktigt i verkligheten.
- **Dålig kvalificering:** `[INFERENS]` Detta kan indikera att batching av småfrågor och skräpfiltrering kan ge hög tidsvinst i verkligheten.
