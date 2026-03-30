# L2-KONTRAKT — R1 Knowledge Acquisition

## Projekt
VD-assistent

## Kontraktsstatus
L2-kontrakt för första verifierbara slice i projektet.
Detta kontrakt omfattar endast R1 Knowledge Acquisition.
STOPP — ingen implementation i kod inom detta kontrakt utan separat READY FOR IMPLEMENTATION + owner OK.

## Syfte
Bygga den första tillräckligt starka kunskapsgrunden för VD-assistenten så att senare agentbeteende, minne, tonalitet, prioritering och workflow-stöd kan baseras på verkliga data istället för generiska antaganden.

## Affärsmål
R1 ska skapa förutsättningar för att VD-assistenten senare ska kunna:
- minska arbetsbördan
- öka kontrollen
- öka överblicken
- prioritera rätt inkommande arbete
- batcha liknande uppgifter
- skapa utkast och beslutsstöd nära Jonas sätt att arbeta

## Scope
R1 omfattar endast följande:

### 1. Källinsamling och källmodell
Definiera och strukturera tre huvudkällor:
- 100 senaste relevanta mejlen
- hela webbplatsen
- atomiska confirm/correct-svar från Jonas

### 2. Mejlmönsteranalys
Analysera ett kuraterat urval av 100 relevanta mejl för att identifiera:
- återkommande ärendetyper
- beslutsmönster
- ansvarsmönster
- tonalitetsmönster
- vanliga eskaleringspunkter
- vanliga tidstjuvar
- vanliga stresspunkter
- vanliga bilagetyper
- återkommande arbetsflöden

### 3. Webbplatsanalys
Ingesta och analysera hela webbplatsen som publik sanningskälla för att identifiera:
- officiella tjänster
- bolagets publika språk
- externa löften och formuleringar
- centrala begrepp
- publik tonalitet och positionering

### 4. Hypotesmotor
Omvandla mejl- och webbplatsanalys till tydliga hypoteser om:
- hur företaget arbetar
- vilka roller och mandat som finns
- hur ansvar verkar fördelas
- vad Jonas sannolikt lägger mest tid på
- vad som verkar mest stressande
- vilka lägen som kräver Jonas
- vad som sannolikt kan delegeras
- vilka arbetsmoment som lämpar sig för batching
- hur beslut, svar och uppföljning verkar gå till

### 5. Frågemotor v1
Skapa ca 50 atomiska hypotesdrivna confirm/correct-frågor till Jonas.
Frågorna ska:
- vara en i taget
- bygga på mejlen och webbplatsen
- vara ledande i betydelsen evidensledda
- fokusera på verkliga forks, ansvar, undantag och bekräftelse av antaganden
- kunna besvaras med:
  - OK
  - Ja, men...
  - Nej, korrekt är...
  - Delvis. Undantaget är...

### 6. Strukturerat minne v1
Definiera och fylla första versionen av strukturerade minnesobjekt för:
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

### 7. Kunskapsartefakter v1
R1 ska generera första versionen av:
- Jonas Core Memory
- Org & Responsibility Map
- Workflow Map
- Tone & Voice Brief
- Decision & Stop Rules
- Output Library skeleton
- Dashboard Logic skeleton
- Retrieval Pack structure

## Out of scope
R1 omfattar inte:
- färdig chatassistent
- färdig UI
- mejlautskick
- task-skapande i drift
- pipeline-automation
- Gmail-integration i produktion
- Supabase-schema i produktion
- bred systemintegration
- mobilapp
- full RAG-implementation
- eval-suite i full skala
- driftklar agent

## Styrande principer

### 1. Sanningstrappa
Prioritet ska vara:
1. explicita owner-svar
2. owner-godkända regler och korrigeringar
3. verkliga mejl
4. webbplats
5. inferens

### 2. Fail-closed
Vid osäkerhet ska R1 hellre markera oklarhet än skapa falsk säkerhet.

### 3. Hypotesdrivet
R1 ska inte ställa generiska fria frågor först.
R1 ska formulera hypoteser och söka bekräftelse eller korrigering.

### 4. Minimal friktion för owner
Jonas ska inte behöva skriva långa fria svar om det kan undvikas.
Processen ska vara proaktiv och lätt att svara på.

### 5. Tydlig separering mellan fakta och tolkning
Varje artefakt ska tydligt skilja på:
- verifierat
- hypotes
- inferens
- oklarhet

## Inputs
Obligatoriska inputs till R1:
- kuraterat urval av 100 relevanta mejl
- komplett publik webbplats
- owner-tillgänglighet för confirm/correct-svar
- initialt beslut om vad som räknas som "relevant mejl"

## Output
R1 ska minst lämna följande output:

### A. Source Pack
- definierade källor
- källstatus
- källprioritet
- källrisker

### B. Email Pattern Map
- mönster per mejltyp
- mönster per ansvar
- mönster per tonalitet
- mönster per eskalering
- mönster per stress/tidstjuv

### C. Website Truth Pack
- publik sanning
- officiella formuleringar
- ord/begrepp att återanvända
- ord/begrepp att undvika konflikt med

### D. Question Engine v1
- ca 50 atomiska frågor
- grupperade per kategori
- varje fråga kopplad till källhypotes
- varje fråga märkt med varför den är viktig

### E. Memory Schema v1
- lista över minnesobjekttyper
- fältdefinitioner
- exempelobjekt

### F. Jonas Core Memory v1
- mål
- rollgränser
- beslutsgränser
- risktriggers
- delegationsgränser
- approval-logik
- undantag

### G. Tone & Voice Brief v1
- tonalitet per mottagartyp
- öppningar
- avslut
- typiska formuleringar
- do / don't
- exempel

### H. Workflow Map v1
- lead till offert
- aktivt projekt till uppföljning
- leverantörsfråga till beslut
- intern fråga till ansvarig
- var Jonas ska in
- var projektledare ska äga

### I. Decision & Stop Rules v1
- när agenten får föreslå
- när agenten måste stanna
- när agenten ska fråga
- när approval krävs

### J. Output Library Skeleton
- lista över outputtyper som senare ska fyllas med kanoniska exempel
- kundsvar
- intern instruktion
- delegering
- uppföljning
- offertstart
- stoppfall
- batchingförslag

## Acceptance Criteria
R1 är godkänd endast om samtliga nedan uppfylls:

### AC-1
Det finns en tydlig källmodell med prioritet, risk och användningsområde för:
- mejl
- webbplats
- owner-svar

### AC-2
Det finns en dokumenterad analys av 100 relevanta mejl som visar återkommande:
- ärendetyper
- ansvarsmönster
- tonalitetsmönster
- beslutsmönster
- eskaleringar
- stress/tidstjuvar

### AC-3
Det finns en komplett första version av Question Engine v1 med ca 50 frågor som är:
- atomiska
- evidensledda
- relevanta
- enkla att besvara
- kopplade till verklig VD-nytta

### AC-4
Det finns första versioner av:
- Jonas Core Memory
- Org & Responsibility Map
- Workflow Map
- Tone & Voice Brief
- Decision & Stop Rules

### AC-5
Det finns tydlig separation mellan:
- verifierat
- antagande
- inferens
- oklarhet

### AC-6
Det framgår tydligt vilka delar som är redo att användas för nästa slice och vilka delar som fortfarande är osäkra.

### AC-7
Owner kan läsa artefakterna och uppleva att:
- de känns relevanta
- de känns träffsäkra
- de minskar behovet av att börja från noll i nästa steg

## Validering
R1 ska valideras genom owner-review, inte genom teknikdemonstration.

### Valideringsmetod
Owner ska personligen kunna kontrollera:
1. om hypoteserna känns rimliga
2. om frågorna känns smarta och tidsbesparande
3. om ansvarsbilden stämmer
4. om tonalitetsriktningen känns nära verkligheten
5. om workflow-bilden faktiskt speglar företaget
6. om stopregler och approval-logik känns trygga

### Valideringsformat
- stickprov på mejlanalys
- granskning av 10–15 utvalda frågor
- granskning av Core Memory
- granskning av Tone & Voice Brief
- granskning av Workflow Map
- granskning av Decision & Stop Rules

## Risker

### R1-Risk-1
Mejlurvalet är inte representativt.
Konsekvens: felaktiga hypoteser och svag tonalitetsmodell.

### R1-Risk-2
Webbplatsen misstolkas som intern sanning.
Konsekvens: agenten blir för publik och för lite verklighetsnära.

### R1-Risk-3
Frågorna blir för generiska eller för många i ett svep.
Konsekvens: låg signal och låg owner-ork.

### R1-Risk-4
Ansvar och workflow infereras för aggressivt.
Konsekvens: felaktiga regler byggs in för tidigt.

### R1-Risk-5
Tonalitetsbrief blandas ihop med beslutsguardrails.
Konsekvens: agenten låter rätt men gör fel.

## Riskhantering
- kuratera mejlurvalet
- separera publik sanning från intern verklighet
- kör frågor en i taget eller i små block
- märk all inferens tydligt
- håll tonalitet, workflow, beslut och ansvar som separata artefakter

## Exit Criteria
R1 får bara stängas om:
- acceptance criteria är uppfyllda
- owner har granskat underlagen
- osäkerheter är märkta
- nästa slice kan definieras utan att gissa från noll

## Nästa steg efter godkänt R1
Först efter godkänt R1 får nästa L2-kontrakt skrivas för:
R2 — Första tunna beslutsyta

## STOPP-regel
Detta kontrakt ger inte tillåtelse att implementera kod, bygga UI eller starta drift.
Det krävs separat READY FOR IMPLEMENTATION + owner OK.
