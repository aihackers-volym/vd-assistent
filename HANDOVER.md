# HANDOVER (Two-Hand Process)

**Target System:** Gemini / Next Agent Runtime
**Handover Type:** Status Checkpoint & Implementation Readiness
**Timestamp:** 2026-04-04

---

## 1. PURPOSE CLARITY
Denna handover överbryggar nuvarande session där VD-assistentens "Slice v1" (UI) är godkänd och commitad, över mot projektets formella gränssnitt enligt **L2-R1-KNOWLEDGE-ACQUISITION.md**.
Syftet är att försäkra att all nästkommande exekvering strikt följer R1:s kunskapsinhämtande syfte.

## 2. SCOPE BOUNDARY
**In Scope (Kommande för ny agent):**
- **R1 Knowledge Acquisition:** Extrahera mönster från mejl/webb (punkt 1-7 i L2-R1).
- Konstruera hypotesmotor och fråga-motor för Jonas (`Question Engine v1`).
- Designa strukturerade minnesobjekt och kunskapsartefakter (`Jonas Core Memory`).

**Out of Scope (STRÄNGT FÖRBJUDET FÖR NÄSTA AGENT):**
- Ytterligare UI-förändringar eller funktionell logik (Slice v1 är pausad).
- Systemintegrationer mot APIer (Gmail, Supabase etc.).
- Autonom exekvering utan `READY FOR IMPLEMENTATION + owner OK`.

## 3. STATUS CLARITY
**VERIFIED (Genomfört och låst):**
- UI: Drawer är borttagen och ersatt med `inline-detail`-spalt ("Inkorgs-layout").
- Transparens: Godkänn och Justera-blocket är flyttat för att logiskt följa granskningen innan *Ingen action utförd*-varningen visas.
- Alla ändringar ligger på `dev`-branchen (ref: `feat: migrate ui to inline detail layout, add global handover docs`).
- Global kontext: Antigravitys globala verktyg förtydligades i `two-hand.md`.

**PENDING (För nästa agent):**
- Inläsning av "100 relevanta mejl" och webbplats-analys. Owner behöver förse agenten med dessa inputs.

## 4. NO FAKE COMPLETION
- *Inga* komponenter utöver det kosmetiska regelverket i UI:t är inkopplade mot riktiga system.
- Minnesmodeller och kunskapsartefakter (ex. `tone_rule`, `Org & Responsibility Map`) är *inte* påbörjade i R1 ännu. Agenten måste börja från noll med strukturerna beskrivna i kontrakten.

## 5. MINIMUM EXECUTION PACKAGE (Nästa Steg)
För att inleda R1 måste mottagande Gemini-agent:
1. Ladda in: `docs/L2-R1-KNOWLEDGE-ACQUISITION.md`
2. Begära inputs från owner: "Redo för mejl-batch #1".
3. Validera varje inhämtad insikt enligt L2-regelverkets *Sanningstrappa*.
4. All inferens måste märkas explict: `VERIFIERAT` vs `ANTAGANDE`.

## 6. RISK VISIBILITY & NON-NEGOTIABLES
- **Risk:** Om R1 Knowledge Acquisition görs för "löst" riskerar felaktiga `stop_rules` att byggas in i `Jonas Core Memory`. Falsk säkerhet får INTE uppmuntras (Fail-closed gällande alla mönsterbedömningar).
- **Blocker:** Input-stopp. Saknas kuraterat mejlunderlag samt owner-tillgänglighet kan inte R1 generera sina artefakter.
- **Fail-closed Default:** Ägs av Gemini. Allt som inte står explicit i L2 stängs ute från hypotesmotorn.

---
**Slutsats:** Systemet befinner sig i en låst vänteposition. Kodexekvering är förbjudet. Nästa drag är 100% datadriven *Knowledge Acquisition*.
