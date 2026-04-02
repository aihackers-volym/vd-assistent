export const currentCustomer = {
  name: "Byggprojekt X",
  contact: "Projektledare Anna",
  status: "Pågående",
  lastActivity: "Uppdatering av tidsplan (igår)"
};

export const emails = [
  {
    id: "case-03",
    from: "projektledare@bolaget.se",
    subject: "Problem med leverans – risk för försening",
    priority: "high",
    tag: "TIDSRISK",
    tagColor: "red",
    bedomning: "Stålbalkarna är sena med en vecka. Detta utgör en direkt risk för projektets tidsplan och kundens inflyttningsdatum.",
    nextStep: "Informera kunden skriftligt om förseningen och föreslå ett kort avstämningsmöte för att diskutera justerad tidsplan.",
    draft: "Hej,\nVi vill informera om att leveransen av stålbalkar är försenad med ca 1 vecka från vår leverantör. Vi arbetar på att minimera påverkan på projektet.\n\nKan vi ta en snabb avstämning via telefon imorgon kl 10:00 för att gå igenom den justerade tidsplanen?\n\nMvh Jonas",
    assignee: "Jonas",
    konversation: [
      { sender: "leverantor@stal.se", time: "Igår 14:00", snippet: "Hej, Tyvärr är sändningen med era stålbalkar fast i hamnen, vi räknar med minst 1 veckas försening. Beklagar detta." }
    ],
    kallor: [
      {
        type: "Projektkontrakt",
        title: "Avtal Byggprojekt X",
        date: "2025-10-01",
        snippet: "§4 Förseningar som beror på underleverantörer ska meddelas beställaren skriftligt utan dröjsmål.",
        relevance: "Kräver omedelbar skriftlig kommunikation vid försening.",
        rawLink: "#"
      }
    ]
  },
  {
    id: "case-04",
    from: "projektledare@bolaget.se",
    subject: "Status vecka 12",
    priority: "low",
    tag: "INFO",
    tagColor: "gray",
    bedomning: "Statusuppdatering för vecka 12. Inga avvikelser rapporterade, allt rullar på enligt plan.",
    nextStep: "Notera i systemet och skicka ett kort bekräftelsemejl till projektledaren.",
    draft: "Tack för uppdateringen! Bra jobbat, let me know om något förändras.\n\nMvh Jonas",
    assignee: "Delegera",
    konversation: [],
    kallor: []
  },
  {
    id: "case-05",
    from: "leverantor@material.se",
    subject: "Justering av priser Q2",
    priority: "medium",
    tag: "EKONOMI",
    tagColor: "amber",
    bedomning: "Leverantören aviserar 8% prishöjning. Detta kommer att påverka marginalen på kommande projekt om inte priser kan omförhandlas eller låsas.",
    nextStep: "Boka in ett möte med leverantören för att diskutera prisökningen innan Q2. Förbered volymavtal som motbud.",
    draft: null,
    assignee: "Jonas",
    konversation: [],
    kallor: [
      {
        type: "Inköpsavtal",
        title: "Ramavtal Material",
        date: "2025-01-15",
        snippet: "Prisjusteringar från leverantören måst aviseras 60 dagar innan de träder i kraft.",
        relevance: "Kontrollera att 60-dagarsregeln följs.",
        rawLink: "#"
      }
    ]
  },
  {
    id: "case-10",
    from: "arkitekt@projekt.se",
    subject: "Reviderade ritningar",
    priority: "medium",
    tag: "HANDLINGAR",
    tagColor: "blue",
    bedomning: "Arkitekten har skickat reviderade ritningar för projektet. Kräver genomgång för att säkerställa att inga kritiska mått ändrats.",
    nextStep: "Dela ritningarna med konstruktör och platschef, och samla in feedback innan godkännande.",
    draft: "Hej,\nTack, vi har mottagit ritningarna. Jag distribuerar dem till teamet intern för kontroll och vi återkommer senast torsdag om vi ser att detta påverkar vår del.\n\nMvh Jonas",
    assignee: "Delegera",
    konversation: [
      { sender: "arkitekt@projekt.se", time: "2 dagar sedan", snippet: "Hej, jag upptäckte ett fel i förra ritningen, skickar en reviderad version till er i veckan." }
    ],
    kallor: []
  }
];
