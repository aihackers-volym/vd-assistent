# VD-assistent — Mockpaket Outputformat v2

## Syfte
Alla mockcase i Fas 1 ska använda samma fail-closed outputformat.
Formatet ska tydligt skilja på:
- analys
- rekommendation
- utkast
- manuell handling
- ej utförd action

## Grundprincip
AI-assistenten får i Fas 1 endast föreslå.
All output ska därför uttryckligen visa att:
- ingen extern action har utförts
- inget har skickats
- inget har uppdaterats i system
- allt fortfarande kräver mänskligt godkännande eller manuell handling

## Obligatorisk struktur för varje case

### 1. Input
- från
- ämne
- mejlinnehåll

### 2. Klassificering
- typ
- underkategori
- prioritet

### 3. Bedömning
- ska Jonas in? ja/nej
- varför
- föreslagen ansvarig
- vad som saknas
- risknivå

### 4. AI föreslår
Visa endast rekommenderade nästa steg:
- rekommenderad hantering
- ev. rekommenderad delegering
- ev. rekommenderad batching
- ev. rekommenderad uppföljning
- ev. rekommenderat svar/utkast

Denna sektion måste vara tydligt märkt som förslag.

### 5. Utkast
Om relevant:
- internt utkast
- externt utkast
- punktlista
- beslutsunderlag

Även denna sektion ska vara tydligt märkt som utkast, inte utförd handling.

### 6. Ingen action utförd
**Obligatorisk i alla case.**
Uttryckligen lista vad som inte har gjorts:
- inget mejl har skickats
- ingen task har skapats
- ingen status har uppdaterats
- ingen delegering har skickats
- ingen extern kommunikation har skett

### 7. Kräver manuell handling
**Obligatorisk i alla case.**
Visa vad en människa måste göra för att gå vidare.

### 8. Fail-closed-note
Kort sektion som visar om AI:n:
- saknar underlag
- ser risk
- avstår från att dra slutsats
- rekommenderar stopp innan nästa steg

## Standardetiketter
Alla mockcase ska använda dessa fasta rubriker:

1. **Input**
2. **Klassificering**
3. **Bedömning**
4. **AI föreslår**
5. **Utkast**
6. **Ingen action utförd**
7. **Kräver manuell handling**
8. **Fail-closed-note**

## Regler för språk
- inga formuleringar som låter som att systemet redan gjort något
- inga formuleringar som antyder automatisk delegering
- inga formuleringar som antyder att utkast redan är skickade
- ord som "föreslår", "rekommenderar", "utkast", "bör", "kan", "kräver godkännande" ska användas konsekvent

## Förbjudna formuleringar
- ❌ detta har skickats till kund
- ❌ task skapad
- ❌ ärendet har delegerats
- ❌ pipeline är uppdaterad
- ❌ leverantören har fått svar

## Godkända formuleringar
- ✔ AI föreslår att...
- ✔ rekommenderad nästa handling är...
- ✔ utkast till svar:
- ✔ ingen action har utförts
- ✔ detta kräver manuell handling
- ✔ detta bör inte skickas innan...

---

## Standardmall

```
## Input
- **Från:**
- **Ämne:**
- **Mejl:**

## Klassificering
- **Typ:**
- **Underkategori:**
- **Prioritet:**

## Bedömning
- **Ska Jonas in:**
- **Varför:**
- **Föreslagen ansvarig:**
- **Vad som saknas:**
- **Risknivå:**

## AI föreslår
- Rekommenderad hantering:
- Rekommenderad delegering:
- Rekommenderad batching:
- Rekommenderad uppföljning:

## Utkast
- Internt:
- Externt:

## Ingen action utförd
- inget mejl har skickats
- ingen task har skapats
- ingen status har uppdaterats
- ingen delegering har skickats

## Kräver manuell handling
- ...

## Fail-closed-note
- ...
```
