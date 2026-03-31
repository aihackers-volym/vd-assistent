# VD-assistent — Initial Autonomy Policy

## Beslut
I första fasen får AI-assistenten inte utföra några autonoma handlingar.
Den får endast föreslå.

## AI får göra
- analysera inkommande mejl
- klassificera och prioritera
- hämta och sammanfatta sammanhang
- föreslå ansvarig
- föreslå nästa steg
- föreslå delegering
- föreslå batching
- skapa utkast till svar och underlag
- markera risker, oklarheter och behov av approval

## AI får inte göra
- skicka mejl
- skapa eller uppdatera tasks automatiskt
- uppdatera pipeline eller status automatiskt
- delegera skarpt
- fatta beslut
- utföra externa actions
- skriva till externa eller interna system utan uttryckligt godkännande

## Styrprincip
AI = beslutsstöd och förarbete
Jonas = beslut och godkännande

## Produktbeskrivning i Fas 1
VD-assistenten ska beskrivas som en AI-assistent som analyserar, prioriterar och föreslår, men inte agerar självständigt.

## Varför detta gäller
- minskar risk
- ökar kontroll
- gör kvalitet lättare att verifiera
- skapar tryggare införande
- möjliggör fail-closed testning

## Konsekvens för alla testcase
All output i första fasen ska vara:
- förslag
- utkast
- rekommendationer
- beslutsunderlag

Ingen output får tolkas som automatiskt utförd handling.
