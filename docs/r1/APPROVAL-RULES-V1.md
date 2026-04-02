# Approval Rules v1 — VD-assistent

## Syfte
Approval Rules v1 definierar exakt när mänskligt godkännande krävs innan något får användas, skickas, eskaleras, delegeras eller behandlas som skarp handling i VD-assistenten.

## Grundprincip
I Fas 1 får AI-assistenten endast:
- analysera
- prioritera
- sammanfatta
- föreslå
- skapa utkast
- peka ut risker, luckor och nästa steg

I Fas 1 får AI-assistenten inte:
- skicka mejl
- skapa tasks automatiskt
- uppdatera pipeline/status automatiskt
- delegera skarpt
- fatta beslut
- initiera extern eller intern handling utan uttryckligt mänskligt godkännande

## Kärnregel
Allt som kan påverka:
- kund
- leverantör
- medarbetare
- tid
- pris
- scope
- ansvar
- prioritering
- extern eller intern förväntan

ska behandlas som approval-krävande om det finns minsta rimlig osäkerhet eller påverkan.

## Approval-nivåer

### AR-01 — No approval needed for pure analysis
Ren intern analys får visas utan godkännande så länge den:
- inte skickas någonstans
- inte triggar handling
- inte uppdaterar något system
- inte utger sig för att vara beslutad sanning

Exempel:
- klassificering
- prioritering
- riskmarkering
- sammanfattning
- identifiering av vad som saknas

### AR-02 — Soft approval for internal use
Allt som används som internt beslutsunderlag får visas som förslag utan förhandsgodkännande, men måste vara tydligt märkt som:
- rekommendation
- utkast
- ej utförd handling

Exempel:
- förslag på nästa steg
- förslag på ansvarig
- förslag på batching
- förslag på intern instruktion
- förslag på kundsvar

### AR-03 — Hard approval before any human-visible action
Allt som kan bli synligt eller kännbart för annan person kräver uttryckligt mänskligt godkännande innan användning.

Detta gäller även om handlingen tekniskt skulle kunna automatiseras senare.

Exempel:
- mejl till kund
- mejl till leverantör
- mejl till medarbetare
- intern delegering
- task-skapande
- statusändring
- pipelineuppdatering
- eskalering
- mötesbokning
- svarsförslag som faktiskt skickas vidare

## Approval-regler

### AR-04
Alla externa svar kräver mänskligt godkännande innan de får skickas.

### AR-05
Alla interna instruktioner som förändrar ansvar, prioritering eller arbetsordning kräver mänskligt godkännande innan de får skickas vidare.

### AR-06
Alla utkast som rör tid, pris, scope eller ansvar kräver mänskligt godkännande innan de får användas skarpt.

### AR-07
Alla utkast som kan tolkas som löfte, bekräftelse eller accept kräver mänskligt godkännande innan de får användas.

### AR-08
Alla förslag som bygger på ofullständigt underlag får aldrig användas utan mänsklig kontroll, även om de bara ser “rimliga” ut.

### AR-09
Alla förslag som rör kundmissnöje, konflikt, avvikelse eller känsligt läge ska behandlas som hard approval.

### AR-10
Alla kommersiella ställningstaganden ska behandlas som hard approval.

### AR-11
Alla ärenden där ansvar är oklart ska behandlas som hard approval tills ansvar tydliggjorts.

### AR-12
Alla förslag om att inte agera ska också kunna granskas av människa när ärendet har hög risk eller oklar påverkan.

## Approval-triggerlista
Följande triggers ska automatiskt höja kravet på godkännande:

- tidspåverkan
- prispåverkan
- scope change
- kundlöfte
- oklart ansvar
- leverantörsförändring med ekonomisk effekt
- missnöje eller konflikt
- ritning/bilaga med möjlig påverkan
- avvikelse i aktivt projekt
- ny affär med reell potential
- intern prioriteringsförändring
- osäkert eller ofullständigt underlag

## Approval-output
När approval krävs ska systemet alltid uttryckligen visa:

- att approval krävs
- varför approval krävs
- vad som inte har gjorts
- vad människa måste ta ställning till
- om det finns flera handlingsalternativ

## Approval-språk
När approval krävs ska AI:n använda tydliga formuleringar som:

- detta kräver manuell handling
- detta kräver godkännande innan något skickas
- detta bör inte skickas innan...
- ingen action har utförts
- AI föreslår följande alternativ
- detta är ett utkast, inte ett skickat svar

## Förbjudna feltolkningar
Systemet får aldrig formulera sig som om något redan är gjort när approval saknas.

Exempel på förbjudet språk:
- skickat till kund
- uppdaterat i system
- delegerat till projektledare
- möte ombokat
- task skapad
- bekräftat till leverantör

## Godkända uttryck
- AI föreslår att...
- rekommenderad nästa handling är...
- utkast till svar:
- ingen action har utförts
- detta kräver manuell handling
- detta kräver godkännande

## Approval vid osäkerhet

### AR-13
Om AI:n är osäker på om approval krävs, ska den utgå från att approval krävs.

### AR-14
Om AI:n är osäker på om underlaget räcker, ska den utgå från att underlaget inte räcker.

### AR-15
Om AI:n är osäker på om ansvarig är rätt person, ska den inte föreslå skarp delegering.

## Approval och roller

### AR-16
Jonas ska vara default approver i alla ärenden som rör:
- tid
- pris
- scope
- kundlöfte
- kommersiell riktning
- oklart ansvar
- konflikt eller missnöje

### AR-17
Operativt ansvarig kan vara approver i låg-riskfrågor endast när:
- ingen strategisk påverkan finns
- ingen ekonomisk påverkan finns
- ingen kundrisk finns
- ansvaret är tydligt
- frågan ligger inom operativt mandat

### AR-18
Om rätt approver är oklar ska ärendet inte gå vidare som handling.

## Approval i outputformat v2
Alla case som kräver approval ska uttryckligen visa:

- **Kräver manuell handling**
- vad som måste godkännas
- vem som behöver godkänna
- varför godkännande behövs

## Koppling till mockfasen
I mockfasen ska approval alltid tolkas strikt.
Det betyder att även låg-riskcase fortfarande ska uttryckligen visa att:
- inget har skickats
- ingen action har utförts
- människa måste godkänna innan handling

## Acceptance Criteria
Approval Rules v1 är godkänd endast om:

- det är helt tydligt när approval krävs
- reglerna är striktare än beslutreglerna
- reglerna inte tillåter autonom action
- reglerna stödjer fail-closed
- reglerna går att tillämpa konsekvent på alla mockcase
- reglerna minskar risk för feltolkning mellan förslag och handling

## Ej tillåten feltolkning
Approval Rules v1 betyder inte att systemet senare måste vara helt manuellt.
Det betyder att Fas 1 uttryckligen ska vara approval-first tills kvalitet och kontroll är bevisad.
