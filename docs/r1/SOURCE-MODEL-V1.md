# Source Model v1 — VD-assistent

## Syfte
Definiera första källmodellen för VD-assistent så att allt beslutsunderlag i Fas 1 kan:
- hämtas från råmaterial
- struktureras till retrieval-resultat
- härledas tillbaka till tydliga referenskällor
- granskas i UI utan att huvudytan blir stökig

## Grundprincip
Source Model v1 ska vara source-first.
Råmaterialet är primär sanning.
Systemet ska inte presentera starka slutsatser utan att kunna visa vilket underlag de bygger på.

## Mål
Source Model v1 ska göra det möjligt att:
- lagra råmaterial strukturerat
- dela upp råmaterial i retrieval-bar form
- koppla varje bedömning till tydliga evidensobjekt
- visa spårbarhet i UI
- senare kunna lägga till embeddings/hybrid search utan att kasta bort datagrunden

## Modellnivåer
Source Model v1 ska delas i fem nivåer:

### 1. Source Asset
Det ursprungliga råmaterialet.

Exempel:
- mejl
- dokument
- webbsideinnehåll
- ritning
- underlag från framtida system

Detta objekt ska representera originalkällan, inte en tolkning av den.

### 2. Source Segment
En avgränsad del av ett Source Asset som kan användas i retrieval och visning.

Exempel:
- ett stycke i ett dokument
- ett mejlavsnitt
- en sektion på en webbsida
- ett relevant utdrag ur ritningsbeskrivning

### 3. Retrieval Result
Ett träffobjekt som säger att ett visst Source Segment eller Source Asset var relevant för ett specifikt case, en fråga eller en bedömning.

### 4. Evidence Link
Kopplingen mellan ett beslutsunderlag i UI och det råmaterial som stöder det.

Detta objekt ska göra det möjligt att säga:
- varför denna rekommendation visades
- vilka källor som stödjer den
- hur starkt stödet är
- om flera källor pekar åt samma håll eller konflikt finns

### 5. Case Context
Det sammanhang där retrieval och evidens används.

Exempel:
- ett inkommande mejlcase
- ett arbetsblock
- en beslutsvy
- ett senare AI-assistentärende

## Kärnobjekt i Source Model v1

### A. source_asset
Syfte:
Representera originalkällan.

Minimikrav:
- source_asset_id
- source_type
- title_or_subject
- original_date
- source_origin
- source_status
- raw_content_reference
- display_label
- trust_tier
- owner_scope
- created_at
- updated_at

### B. source_segment
Syfte:
Representera retrieval-bara delar av en källa.

Minimikrav:
- source_segment_id
- source_asset_id
- segment_index
- segment_type
- segment_text
- segment_start_marker
- segment_end_marker
- segment_summary
- retrieval_ready
- created_at

### C. retrieval_result
Syfte:
Representera att ett visst segment eller asset har matchat ett behov.

Minimikrav:
- retrieval_result_id
- case_context_id
- source_asset_id
- source_segment_id
- retrieval_mode
- retrieval_reason
- relevance_rank
- match_strength
- matched_terms
- created_at

### D. evidence_link
Syfte:
Koppla en UI-slutsats eller rekommendation till faktisk källa.

Minimikrav:
- evidence_link_id
- case_context_id
- ui_statement_id
- source_asset_id
- source_segment_id
- evidence_role
- evidence_strength
- evidence_note
- created_at

### E. case_context
Syfte:
Representera den arbetsyta eller det ärende där källor används.

Minimikrav:
- case_context_id
- context_type
- context_title
- input_source
- status
- created_at
- updated_at

## source_type — tillåtna grundtyper i v1
Minst:
- email
- document
- website_page
- attachment
- drawing
- note
- future_system_record

## trust_tier
Källor ska kunna märkas med tillitsnivå.

V1-nivåer:
- owner_confirmed
- internal_primary
- internal_secondary
- public_reference
- inferred_context

## source_origin
Ska ange varifrån källan kommer.

Exempel:
- gmail
- website_ingest
- uploaded_document
- future_boomr_sync
- future_fortnox_sync
- manual_entry

## source_status
Ska ange källans tillstånd.

Exempel:
- active
- superseded
- archived
- incomplete
- conflicted

## retrieval_mode
V1 ska minst kunna markera:
- keyword
- fulltext
- manual_link
- structured_filter
- future_semantic
- future_hybrid

## evidence_role
Varje evidenslänk ska säga vilken roll källan spelar.

V1-värden:
- primary_support
- secondary_support
- contextual_reference
- conflict_source
- missing_context_indicator

## evidence_strength
V1-värden:
- strong
- medium
- weak
- unresolved

## Källprioritet
Vid konflikt ska följande prioritet gälla:
1. owner-confirmed eller senare owner-godkänd sanning
2. intern primärkälla
3. intern sekundärkälla
4. publik referens
5. infererad kontext

## Kritisk princip
En rekommendation i UI får aldrig stå ensam.
Den ska kunna knytas till minst ett evidence_link-objekt, eller tydligt markeras som osäker/inte tillräckligt underbyggd.

## Fail-closed-regel
Om retrieval inte hittar tillräckligt tydligt underlag ska systemet:
- markera osäkerhet
- visa att underlag saknas
- undvika stark rekommendation

## Ej mål i v1
Source Model v1 ska inte ännu låsas till:
- fysisk SQL-implementation
- exakt tabellnamngivning
- embeddingsmodell
- pgvector-spec
- chunkstorlekar
- indexstrategi i detalj

Detta hör till senare teknisk specifikation.

## Acceptance Criteria
Source Model v1 är godkänd endast om:
- råmaterial, segment, retrieval, evidens och case_context är tydligt åtskilda
- modellen stöder spårbarhet från UI tillbaka till källa
- modellen stöder källprioritet och konfliktmarkering
- modellen fungerar utan AI-modell i första läget
- modellen kan byggas vidare med semantic/hybrid retrieval senare
