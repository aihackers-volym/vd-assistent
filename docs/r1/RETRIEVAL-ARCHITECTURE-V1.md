# VD-assistent — retrieval-first source architecture

## Beslut
Allt underlag i Fas 1 ska komma från en Supabase retrieval-pipeline med råmaterial som primär sanningskälla.

I första läget ska retrieval-lagret fungera utan AI-modell som primär komponent.
Detta betyder:
- råmaterial in
- chunking/indexering
- retrieval
- källhärledning
- UI-baserad granskning

Embeddings, semantic search och generativ modell kan läggas ovanpå senare, men ska inte vara beroende för första retrieval-slicen.

## Fas 1-princip
Fas 1 ska vara source-first och evidence-first.

Systemet ska i första hand:
- hämta relevant råmaterial
- visa vad som hittats
- strukturera detta till beslutsunderlag
- alltid kunna härleda rekommendationer till tydliga källor

## Source provenance
Råmaterialets referenskällor måste vara first-class i systemet.
De måste kunna granskas från UI utan att huvudytan klottras ner.

## UI-princip
Huvudytan ska visa:
- klassificering
- bedömning
- rekommendation
- ansvarig
- risk
- vad som saknas
- krav på manuell handling

Källor ska inte visas som stora råblock i huvudytan.

Källor ska istället visas i en strukturerad undermeny, drawer eller accordion.

## Källvy / undermeny
Källvyn ska minst visa:
- källtyp
- titel eller ämne
- datum
- relevant utdrag
- varför källan är relevant
- länk eller öppning till full källa

## Kritisk princip
Varje viktig rekommendation eller bedömning ska kunna spåras tillbaka till underlag.
Om systemet inte kan visa tydlig källa eller tydligt råmaterial ska det inte låtsas ha hög säkerhet.

## Fail-closed-regel
Om källstödet är svagt eller otydligt ska systemet:
- markera osäkerhet
- visa att underlag saknas eller är otillräckligt
- undvika stark slutsats

## Arkitekturprincip
Dela tydligt mellan:
1. råmaterial / source layer
2. retrieval / grounding layer
3. beslutsstöd / UI layer
4. framtida AI-lager

Råmaterial och provenance ska inte blandas ihop med generativ logik.

## Framtida utbyggnad
Senare kan samma Supabase-ryggrad kompletteras med:
- embeddings
- pgvector
- semantic search
- hybrid search
- AI-assistent

Men detta ska vara en senare expansion, inte ett krav för första retrieval-slicen.
