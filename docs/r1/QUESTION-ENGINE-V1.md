# Question Engine v1 — Struktur

## Projekt
VD-assistent

## Syfte
Question Engine v1 ska omvandla observerade mönster från:
- 100 relevanta mejl
- hela webbplatsen

till:
- atomiska hypotesdrivna frågor/påståenden
- snabba confirm/correct-svar från Jonas
- strukturerat minne för agenternas beteende, regler och tonalitet

## Pipeline

```
Källor
→ mejl + webbplats + tidigare owner-svar

Analys
→ mönster + hypoteser + osäkerheter

Question Engine
→ atomisk fråga + källa + risk + minnesmål

Jonas svar
→ OK / Ja, men... / Nej, korrekt är... / Delvis. Undantaget är...

Memory update
→ regel / undantag / ansvar / workflow / tonalitet / approval

Nästa fråga
→ välj högst värde + högst risk + starkast källstöd
```

## Huvudprincip
Question Engine v1 är inte ett öppet intervjuformulär.
Det är en proaktiv confirm/correct-motor.

Systemet ska:
1. läsa källor
2. bilda hypoteser
3. formulera atomiska frågor/påståenden
4. få snabb bekräftelse eller korrigering från Jonas
5. uppdatera strukturerat minne
6. generera nästa mest relevanta fråga

## Primärt mål
Minimera kognitiv belastning för Jonas.
Jonas ska inte behöva uppfinna svar från noll.
Jonas ska främst:
- bekräfta
- korrigera
- nyansera
- lägga till undantag

## Sekundära mål
Question Engine v1 ska skapa underlag för:
- Jonas Core Memory
- Org & Responsibility Map
- Workflow Map
- Tone & Voice Brief
- Decision & Stop Rules
- Output Library
- Dashboard Logic

## Inputs
Question Engine v1 får bara utgå från:
- email_pattern_map
- website_truth_pack
- tidigare owner-confirmed memory
- markerade oklarheter från tidigare frågor

## Ej tillåtet som grund
Frågor får inte primärt bygga på:
- modellens fria gissningar
- generiska konsultfrågor
- hypotetiska "hur skulle du vilja…" utan koppling till verkligt observerade mönster
- compound questions

## Grundregler för varje fråga
Varje fråga måste vara:
- atomisk
- tydlig
- evidensledd
- kopplad till ett konkret mönster eller antagande
- relevant för arbetsbörda, kontroll, överblick, ansvar, tonalitet eller workflow
- lätt att svara på snabbt

## Godkända svarstyper från Jonas
- OK
- Ja, men...
- Nej, korrekt är...
- Delvis. Undantaget är...

## Otillåtna frågetyper
- två frågor i samma fråga
- breda fritextfrågor utan tydligt antagande
- ledande frågor utan källstöd
- frågor som inte påverkar agentens framtida beteende
- frågor som inte har tydlig VD-nytta

## Frågeobjekt — obligatoriska fält
Varje fråga i Question Engine v1 ska ha följande fält:

- question_id
- category
- priority
- hypothesis
- question_text
- why_it_matters
- source_basis
- source_refs
- expected_answer_type
- memory_targets
- risk_if_wrong
- status

## Fältdefinitioner

### question_id
Unikt id för frågan.

### category
En av de definierade frågekategorierna.

### priority
- critical
- high
- medium

### hypothesis
Det observerade antagandet som frågan bygger på.

### question_text
Själva atomiska frågan/påståendet som Jonas ska svara på.

### why_it_matters
Kort motivering till varför just denna fråga är viktig för agentens framtida beteende.

### source_basis
Vilken källa hypotesen främst kommer från:
- email
- website
- email+website
- prior_owner_answer
- unresolved_conflict

### source_refs
Vilka mejl, trådar, sidor eller tidigare regler som stöder hypotesen.

### expected_answer_type
Normalt:
- confirm_correct

I undantagsfall:
- forced_choice
- confirm_with_exception

### memory_targets
Vilka minnesobjekt som ska påverkas av svaret, t.ex.:
- decision_rule
- delegation_rule
- escalation_rule
- workflow_step
- tone_rule
- approval_rule
- exception_case
- stress_point
- batching_opportunity
- system_usage_rule

### risk_if_wrong
Varför det är farligt om denna hypotes blir fel.

### status
- drafted
- asked
- confirmed
- corrected
- superseded
- blocked

## Frågekategorier
Question Engine v1 ska innehålla ca 50 frågor fördelade över 10 kategorier.

### 1. Inkommande mejl och prioritering
Mål:
Förstå vad som kräver Jonas, vad som kan vänta och vad som kan delegeras.

Frågetyp:
- prioritering
- tidskritikalitet
- eskalering

Måltal: 5 frågor

### 2. Nya leads och offertkvalificering
Mål:
Förstå hur nya förfrågningar bedöms, vad som krävs innan offert och när Jonas måste in.

Frågetyp:
- lead-kvalificering
- offertstart
- beslutsgräns

Måltal: 5 frågor

### 3. Pågående projekt och avvikelser
Mål:
Förstå vilka signaler i aktivt projekt som kräver VD-uppmärksamhet.

Frågetyp:
- risk
- avvikelse
- uppföljning

Måltal: 5 frågor

### 4. Leverantörer och externa parter
Mål:
Förstå vilka externa frågor som kan hanteras av andra och vilka som kräver Jonas.

Frågetyp:
- ansvar
- svarskanal
- risk för fel kommunikation

Måltal: 5 frågor

### 5. Roller, mandat och ansvar
Mål:
Kartlägga vem som ansvarar för vad idag och vad som skulle kunna delegeras.

Frågetyp:
- ansvarsfördelning
- mandat
- eskalering

Måltal: 5 frågor

### 6. Befintliga system och faktisk användning
Mål:
Förstå vilka system som används idag, till vad och var informationsglapp uppstår.

Frågetyp:
- system usage
- dubbelarbete
- informationsglapp

Måltal: 5 frågor

### 7. Tidsåtgång, stress och tidstjuvar
Mål:
Kartlägga vad Jonas lägger oproportionerligt mycket tid på och vad som skapar mest stress.

Frågetyp:
- stress_point
- bottleneck
- decision fatigue

Måltal: 5 frågor

### 8. AI-planering, batching och uppföljning
Mål:
Förstå vilka arbetsmoment som bör grupperas och hur AI:n bäst avlastar vardagen.

Frågetyp:
- batching
- task logic
- follow-up logic

Måltal: 5 frågor

### 9. Tonalitet och kommunikationsstil
Mål:
Förstå hur Jonas vill låta i olika sammanhang och vilka språkregler som ska följas.

Frågetyp:
- tone_rule
- audience_style
- do/don't

Måltal: 5 frågor

### 10. Stopregler, approval och undantag
Mål:
Låsa när AI:n ska stanna, fråga eller kräva godkännande.

Frågetyp:
- approval
- stop behavior
- exception logic

Måltal: 5 frågor

## Rekommenderad ordning för frågorna
Question Engine v1 ska inte fråga i slumpmässig ordning.

Frågor ska ställas i denna prioritetsordning:
1. inkommande mejl och prioritering
2. roller, mandat och ansvar
3. befintliga system
4. tidsåtgång, stress och tidstjuvar
5. AI-planering, batching och uppföljning
6. nya leads och offertkvalificering
7. pågående projekt och avvikelser
8. leverantörer och externa parter
9. stopregler, approval och undantag
10. tonalitet och kommunikationsstil

## Varför denna ordning gäller
Denna ordning ska ge snabbast klarhet i:
- vad som kräver VD:n
- vad som kan avlastas
- var kontroll måste finnas kvar
- var verklig tidsvinst kan skapas

Tonalitet ska inte komma först.
Styrning, ansvar och vardagsflöde är viktigare tidigt.

## Frågeformat — standardmall
Varje fråga ska använda följande grundmall:

**Antagande:** [konkret evidensledd hypotes]
**Bekräfta eller korrigera:** [atomisk fråga/påstående]
**Svar gärna med:** OK / Ja, men... / Nej, korrekt är... / Delvis. Undantaget är...

## Frågeformat — exempel
**Antagande:** Mejlen visar att frågor med tidsrisk eller oklar ansvarsfördelning ofta kräver att du går in snabbt.
**Bekräfta eller korrigera:** Mejl med tidsrisk eller oklar ansvarsfördelning ska alltid lyftas till dig samma dag.
**Svar gärna med:** OK / Ja, men... / Nej, korrekt är... / Delvis. Undantaget är...

## Kvalitetsfilter innan en fråga får ställas
Ingen fråga får gå till Jonas om inte alla nedan är uppfyllda:
- frågan är atomisk
- frågan har tydligt källstöd
- frågan påverkar framtida agentbeteende
- frågan är möjlig att svara på snabbt
- frågan minskar verklig osäkerhet
- frågan är inte redan bekräftad
- frågan är inte redundant mot tidigare fråga

## Fail-closed-regel
Om källstödet är för svagt ska frågan inte formuleras som ett starkt antagande.
Den ska då märkas som låg säkerhet eller parkeras tills bättre underlag finns.

## Beslutsregel för nästa fråga
Nästa fråga ska väljas utifrån denna prioritet:
1. hög risk om feltolkad
2. hög påverkan på agentens framtida beteende
3. hög påverkan på tidsvinst/kontroll/överblick
4. hög osäkerhet som går att lösa snabbt
5. starkt källstöd

## Vad som ska hända efter varje svar
Efter varje svar ska systemet:
1. klassificera svaret
2. uppdatera minnesobjekt
3. skapa eller uppdatera regel/undantag
4. uppdatera berörda artefakter
5. markera om en följdfråga behövs
6. välja nästa fråga

## Uppdateringslogik efter svar

### Om Jonas svarar "OK"
- hypotesen flyttas till confirmed
- motsvarande minnesobjekt uppdateras
- confidence höjs
- eventuell följdfråga endast om undantag kvarstår

### Om Jonas svarar "Ja, men..."
- grundregeln markeras som confirmed_with_exception
- undantag skapas som separat minnesobjekt
- följdfråga genereras vid behov

### Om Jonas svarar "Nej, korrekt är..."
- hypotesen markeras som corrected
- ny regel skrivs
- tidigare tolkning spärras från framtida återanvändning

### Om Jonas svarar "Delvis. Undantaget är..."
- regeln delas upp i huvudregel + undantag
- båda sparas separat
- följdfråga genereras om undantaget påverkar ansvar eller approval

## Följdfrågeregel
En följdfråga får bara ställas om:
- svaret skapar nytt viktigt undantag
- ansvarsgräns fortfarande är oklar
- approval-logiken fortfarande är oklar
- workflow blir fel utan förtydligande

## Minnesobjekt som Question Engine v1 ska kunna uppdatera
- decision_rule
- escalation_rule
- delegation_rule
- workflow_step
- tone_rule
- approval_rule
- exception_case
- system_usage_rule
- stress_point
- batching_opportunity
- role_responsibility

## Output från Question Engine v1
Question Engine v1 ska leverera:

### A. Question Bank v1
Ca 50 färdiga frågor med metadata.

### B. Question Session Order v1
Vilken ordning frågorna ska ställas i.

### C. Memory Update Rules
Hur svar översätts till strukturerade minnesobjekt.

### D. Follow-up Logic
När följdfrågor ska skapas och när det ska stoppas.

### E. Review Flags
Lista över frågor/svar där osäkerheten fortfarande är för hög.

## Acceptance Criteria
Question Engine v1 är godkänd endast om:
- alla frågor är atomiska
- alla frågor har tydlig källbas
- alla frågor är kopplade till VD-nytta
- ordningen är logisk
- svaren går att översätta till strukturerat minne
- redundans är borttagen
- kontroll, ansvar, stress, batching och tonalitet täcks

## Ej tillåten feltolkning
Question Engine v1 betyder inte att alla frågor ska ställas direkt.
Frågorna ska ställas stegvis, i små block, utifrån prioritet och owner-ork.

## Kritisk princip
Question Engine v1 ska hjälpa Jonas att reagera på tydliga antaganden.
Det ska inte göra honom till författare av ett långt styrdokument från noll.
