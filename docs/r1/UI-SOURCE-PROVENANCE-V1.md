# UI Source Provenance Spec v1 — VD-assistent

## Syfte
Definiera hur källhärledning och källgranskning ska visas i UI i Fas 1 utan att huvudytan blir stökig.

## Grundprincip
Källor ska alltid vara tillgängliga.
Källor ska aldrig dominera huvudytan.

UI ska därför delas i:
- huvudyta för beslutsstöd
- sekundär källvy för provenance och granskning

## Huvudyta — vad som får visas där
Huvudytan ska fokusera på:
- klassificering
- bedömning
- rekommendation
- ansvarig
- risknivå
- vad som saknas
- krav på manuell handling

Källor ska inte visas som stora råtextblock i huvudytan.

## Huvudyta — obligatorisk källindikator
Varje viktig rekommendation eller bedömning ska ha en diskret men tydlig källindikator.

Godkända exempel:
- Källor (3)
- Underlag (2)
- Visa referenser
- Evidens (4)

Indikatorn ska:
- vara synlig utan att dominera
- visa antal källor
- gå att öppna direkt

## Sekundär källvy
Källor ska öppnas i en undermeny, drawer, accordion eller motsvarande sekundär vy.

Det viktiga är funktion, inte komponentnamnet.

## Källvyn ska minst visa per källa
- källtyp
- titel eller ämne
- datum
- kort relevant utdrag
- varför källan är relevant
- vilken roll källan spelat
- styrka eller säkerhet
- möjlighet att öppna full källa

## Rekommenderad visningsordning i källvyn
1. starkaste primärstöd först
2. övriga stödjande källor
3. konfliktkällor
4. källor som visar vad som saknas eller är oklart

## Källkort i undermeny
Varje källa bör visas som ett strukturerat källkort.

Källkortet ska minst ha:
- etikett för källa
- typ
- titel/ämne
- datum
- evidensroll
- utdrag
- öppna full källa

## Visning av utdrag
Utdrag ska vara korta och relevanta.
De ska hjälpa användaren förstå varför källan är relevant.
De ska inte dumpa stora textmassor direkt i UI.

## Visning av konflikt
Om två källor drar åt olika håll ska detta vara synligt i källvyn.

Det ska markeras som:
- konflikt i underlag
- motstridiga källor
- behöver manuell bedömning

## Visning av saknat underlag
Om systemet saknar tillräckligt underlag ska detta också kunna visas strukturerat i källvyn.

Exempel:
- ingen källa med prispåverkan hittad
- ingen bekräftad tidpåverkan hittad
- teknisk bedömning saknas
- ansvarig ej bekräftad

## Huvudytan får aldrig göra detta
- visa långa råutdrag direkt i huvudsektionen
- blanda samman slutsats och råmaterial i samma textblock
- tvinga användaren att läsa källtext innan huvudrekommendationen förstås
- gömma källor helt

## Källvy får aldrig göra detta
- visa ostrukturerad vägg av text
- tappa kopplingen mellan rekommendation och källa
- sakna datum eller ursprung
- sakna möjlighet att öppna full källa

## Källnivå kopplad till rekommendation
När flera rekommendationer finns i samma case ska det gå att förstå vilka källor som stöder vilken del.

Detta betyder att UI senare behöver stöd för att koppla:
- rekommendation
- delslutsats
- saknat underlag
till separata evidence links

## Minimal huvudinteraktion i v1
I huvudytan ska användaren kunna:
- se att källor finns
- öppna källvyn
- förstå antal källor
- förstå om underlag är starkt, medel eller svagt

## Rekommenderad statusetikett
Källindikatorn kan kompletteras med enkel underlagsnivå:
- starkt underlag
- delvis underlag
- underlag saknas

## Källvy och fail-closed
Om underlaget är svagt eller konflikt finns ska källvyn stödja fail-closed-beteende.

Det innebär att UI ska kunna visa:
- varför systemet inte drar stark slutsats
- vad som saknas
- varför manuell kontroll behövs

## Källvy i mockfas
Även i mockfasen ska provenance tänkas som riktig funktion.
Det betyder att varje mockoutput bör kunna bära:
- vilka källor som skulle ha visats
- hur de skulle ha grupperats
- varför de är relevanta

## Acceptance Criteria
UI Source Provenance Spec v1 är godkänd endast om:
- huvudytan förblir ren och beslutsorienterad
- källor alltid är nåbara från UI
- källor visas strukturerat i sekundär vy
- rekommendationer kan kopplas till tydligt underlag
- konflikt och saknat underlag kan visas utan att skapa kaos
- designen stödjer fail-closed och manuell granskning

## Ej mål i v1
Denna spec låser inte:
- exakt komponentbibliotek
- exakt ikonografi
- exakt spacing
- slutlig visuell design

Den låser:
- informationsarkitektur
- interaktionsprincip
- obligatoriska källuppgifter
- fail-closed-beteende i UI
