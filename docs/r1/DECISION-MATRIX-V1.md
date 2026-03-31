# Decision Matrix v1

## Dokumentstatus
Denna matris sammanfattar logiken och utfallen från R1A mock cases (1-12) renderade enligt OUTPUT-FORMAT-V2.
**Måste vara granskad och godkänd innan kodning av Question Engine.**

---

| Case | Typ | Prioritet | Ska Jonas in | Föreslagen ansvarig | Risknivå | Approval krävs | Batching | Vad som saknas | Rekommenderad nästa handling |
|------|-----|-----------|--------------|----------------------|----------|----------------|----------|----------------|------------------------------|
| **01** (Ny lead) | Sälj | Hög | Ja | Jonas | Medel | Ja (utkast) | Nej | Specifikationer, intern kapacitet | Boka kort kvalificeringssamtal. |
| **02** (Oklar lead) | Sälj | Låg | Nej | Projektledare / Info | Låg | Ja (utkast) | Ja | Omfattning, budget, plats | Be om förtydligande via standardiserat svar. |
| **03** (Tidsrisk) | Pågående projekt | Hög | Ja | Jonas (beslut) / PL (fakta) | Hög | Ja (svar/beslut)| Nej | Omfattningspåverkan, alt. väg, kostnad | Be PL ta fram underlag före kundbesked. |
| **04** (Status) | Pågående projekt | Låg | Nej | Projektledare | Låg | Nej | Ja (passiv) | Inget kritiskt | Logga status, använd som passiv info. |
| **05** (Prisändring) | Leverantör | Med-Hög | Ja | Jonas | Medel | Ja (accept) | Nej | Kalkylpåverkan för Q2 | Gör intern kalkylkontroll före svar/Förhandla. |
| **06** (Transporttid)| Leverantör | Låg-Med | Nej | Projektledare / Platschef| Låg | Ja (utkast) | Nej | Operativ status kl 07:00 | Delegera för snabb bekräftelse om 07 funkar. |
| **07** (Snickarfråga)| Intern | Låg | Nej | Projektledare | Låg | Ja (direktiv)| Ja | Avtalad spec, budget för val | Låt projektledare svara utifrån kundavtal. |
| **08** (ÄTA-blocker) | Pågående projekt | Medel | Ja | Jonas (godkänn) / PL | Medel | Ja (ÄTA) | Nej | Sifferunderlag för tid/pris | Be PL ta fram ÄTA-kalkyl innan accept från kund. |
| **09** (Missnöjd) | Kund | Hög | Ja | Jonas | Hög | Ja (utkast) | Nej | Kundens exakta kritik, PL-fakta | Jonas ringer idag. Be PL om bakgrundsfakta. |
| **10** (Nya ritningar)| Pågående projekt | Medel | Nej | Projektledare | Låg | Ja (delegering)| Ja/Nej | Teknisk granskning av påverkan | Delegera teknisk bedömning till PL. Flagga ev. risk. |
| **11** (När kommer ni)| Kund (Info) | Låg | Nej | Projektledare / Schemaläggare| Låg | Ja (utkast) | Ja | Kalender för aktuellt projekt | Låt ansvarig bekräfta från dagens batch-frågor. |
| **12** (Flytta möte) | Admin | Låg-Med | Ja/Nej | Den bokade personen | Låg | Ja (utkast/kal)| Ja | Kalenderstatus för fredag | Kontrollera ledig kalender, föreslå ny tid. |

---

## Sammanfattning av VD-involvering (Jonas)
- **4 av 12** cases blockerar ej, delegeras helt (02, 04, 07, 10).
- **2 av 12** kräver bara kort delegering/godkännande utan operativ ansträngning (06, 11).
- **6 av 12** kräver VD:s strategiska beslutskraft eller relationsbyggande förmåga (01, 03, 05, 08, 09, samt egen kalender i 12). 

Detta visar att motorlogiken aktivt kan störa ut hälften av bruset och låta Jonas arbeta med undantag, affärer och risker.
