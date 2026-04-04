# Antigravity Tvåhands-Handover (Two-Hand MD)

**Syfte:** Omfattande överlämning (*full handover*) av globala Antigravity-färdigheter, kommandon och systemverktyg. Detta dokument tillgodoser kravet på implementation-ready transparens för nästa utvecklare eller agent enligt `handover.rules`.

**Status:** Verifierat uppdaterad mot aktuell `GEMINI.md` global agentkonfiguration och lokala paketerade skills. 

## 1. Scope och Gränser
- **In Scope:** Antigravitys inbyggda verktyg (`tools`), globala systemkommandon via agent runtime, säkerhetsregler (`deny list`) och installerade skills.
- **Out of Scope:** Förändring eller omprövning av Fail-closed governance för projektet. Vi förändrar inte core-reglering genom detta handover-dokument.

---

## 2. Globala Antigravity Skills (Kapaciteter)

Dessa `skills` är globalt installerade via `~/.gemini/antigravity/skills/` och kan instrueras att stiga fram vid specifika mönster och behov.

*   **code-reviewer:** Analyserar PR, kodkomplexitet, säkerhetsrisker och SOLID-principer i bland annat TypeScript, Python, Go.
*   **codebase-onboarding:** Hanterar snabb teknisk inkörning och kontextbygge kring främmande kodbaser.
*   **find-skills:** Utforskar och hjälper systemet att hitta lämpliga agentskills för ospecificerade uppgifter.
*   **incident-commander:** (POWERFUL) Ramverk för SRE-utredningar. Strukturerar tidslinjer, klassificerar severity (SEV1-SEV4) och bygger PIR (Post-Incident Reviews) via strukturerade templates.
*   **migration-architect:** Handleder större tekniska migrationsstrategier och dataöverflytt.
*   **monorepo-navigator:** Avancerad navigering för storskaliga arkitektoniska strukturer.
*   **observability-designer:** (POWERFUL) Bygger ramverk för logs, APM, tracing och systemhälsa.
*   **self-improving-agent:** Analyserar `.genimi`-minnet för att uppdatera `CLAUDE.md`, upptäcka fallgropar och permanent lagra projektmönster för iterativ förbättring.
*   **senior-architect:** Genererar Architectural Decision Records (ADRs), systemdiagram (Mermaid/PlantUML), databasrekommendationer och mönsterskanning i källkoden.
*   **tech-debt-tracker:** Poängsätter och strukturerar rensningssprintar för utdaterad legacy-kod och teknisk skuld.

---

## 3. Globala Antigravity Commands & Verktyg

Agent-motorn är utrustad med följande inbyggda interaktionsverktyg. Systemet tvingas prioritera det smalaste verktyget möjligast:

1.  **Filhantering:**
    *   `view_file` — Läser in filinnehåll säkert.
    *   `list_dir` — Listar biblioteksträd rekursivt.
    *   `grep_search` — Snabb mönstersökning i kodbas (tvingande framför `grep` via bash).
    *   `replace_file_content` / `multi_replace_file_content` — Finstyrda AST/regexp-ersättningar utan the risker kopplade till `sed`.
    *   `write_to_file` — Skapar filer på ett säkert sätt och triggar vid behov artefakt-systemet.
2.  **Terminal & Exekvering:**
    *   `run_command` — Kör asynkrona eller synkrona terminalkommandon på Mac/zsh. Notera: Skyddat av strikt *Deny List*.
    *   `command_status` / `send_command_input` — Spårar stående bakgrundsprocesser, matar interaktiva scripts (t.ex. dev servers).
3.  **Insikt och Automation:**
    *   `browser_subagent` — Autonom headless-interaktion (klicka/scrolla) i appen med videobevisföring.
    *   `search_web` / `read_url_content` — Extern datahämtning.
    *   `generate_image` — För framtagning av mockups.
4.  **Model Context Protocol (MCP)**:
    *   `google-developer-knowledge` — Söker djupt i källdokumentation från Android/Chrome/Firebase/GCP mm.

---

## 4. Säkerhet & Global Deny List (GEMINI.md)

För att bibehålla en **Fail-closed-arkitektur** blockeras alla root- och systemförändrande terminalkommandon från att köras automatiskt (kräver tvingande manuellt ägargodkännande). 

**Urval av skyddade kommandon:**
- *System/User:* `sudo`, `su`, `passwd`, `security`
- *Filsystem:* `rm -rf`, `chmod -R`, `chown -R`, `mkfs`
- *Nätverk/Auth:* `ssh`, `scp`, `aws`, `gcloud`, `docker push`
- *Infrastruktur:* `terraform apply`, `kubectl`, `fly deploy`, `vercel --prod`
- *Databas:* `supabase db push`, `prisma migrate`, `rails db:drop`, `redis-cli FLUSHALL`
- *Dev/Install:* `npm install -g`, `brew`, `git filter-branch`, `python -c`

---

## 5. Handover Sign-off & Riskbedömning

**Kritiska risker & Beroenden:**
1.  Inga Antigravity-system får operera utan bekräftad inläsning av projektets `AGENTS.md`. Följs inte entrypoint/shim är kedjan obruten (BROKEN).
2.  Dessa `skills` tenderar att expandera scope autonomt (ex. `incident-commander` bygger egna ramverk). Det strider ibland mot projektets lokala `.agentrules` som förbjuder otillåten utvidgning. Därför kräver alla arkitekturs- och strategivalägandesignaturen enligt "Proposal-Only" / Exekutions-grind (Execution Gate).

**Next Step/Execution Package:**
Dokumentet är här med överlämnat som en `two-hand.md` reference frame för den globala agentkontexten.
