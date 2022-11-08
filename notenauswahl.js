let currentTab = "Fachwissen";

let gender = 0;
let nachname;

let fachwissenTexts = [
    // Sehr gut
    [
        'Herr @nachname verfügt über ein sehr großes und beachtliches Fachwissen und fundierte Fachkenntnisse. Er beherrschte seinen Arbeitsbereich stets umfassend und sicher, hatte oft neue Ideen und fand optimale Lösungen.',
        "Er besitzt ein äußerst solides Fachwissen, das er zur Lösung seiner Aufgaben stets sehr sicher und erfolgreich einsetzte. Daher war Herr @nachname in unserem Hause ein allseits geschätzter Ansprechpartner bei allen fachlichen Problemstellungen.", 
        "Herr @nachname besitzt ein umfassendes und hervorragendes, jederzeit verfügbares Fachwissen, mit dessen Hilfe er auch überaus schwierige Fragen sehr erfolgreich löste. Er verband exzellente technische Kompetenz mit ausgezeichnetem wirtschaftlichem Sachverstand."
    ],
    // Gut
    [
        "Herr @nachname verfügt über ein großes und beachtliches Fachwissen. Er beherrschte seinen Arbeitsbereich umfassend und überdurchschnittlich, fand gute Lösungen und hatte neue Ideen.", 
        "Er verfügt über ein solides Fachwissen, das er zur Lösung seiner Aufgaben stets sicher und wirksam einsetzte. Daher war Herr @nachname in unserem Hause ein allseits geschätzter Ansprechpartner bei allen fachlichen Problemstellungen.", 
        "Herr @nachname besitzt ein umfassendes und gutes, jederzeit verfügbares Fachwissen, mit dessen Hilfe er auch schwierige Fragen erfolgreich löste. Er verband hohe technische Kompetenz mit gutem wirtschaftlichem Sachverstand.",
        "Herr @nachname hat ein umfassendes und detailliertes Fachwissen, das er beim Auftreten neuer Fragen und Entwicklungen sicher einsetzte. Er aktualisierte beständig sein Wissen und hat die erworbenen Kenntnisse stets gut praktisch umgesetzt."
    ],
    // Befriedigend
    [
        "Herr @nachname beherrschte seinen Arbeitsbereich umfassend und fand brauchbare Lösungen.",
        "Er verfügt über ein solides Fachwissen in seinem Fachgebiet, das er zur Lösung seiner Aufgaben einsetzte. Daher war Herr @nachname in unserem Hause ein oft gesuchter Ansprechpartner.",
        "Herr @nachname besitzt ein jederzeit verfügbares Fachwissen, mit dessen Hilfe er seine Aufgaben erfolgreich löste. Er verband technische Kompetenz mit wirtschaftlichem Sachverstand.",
        "Herr @nachname hat ein detailliertes Fachwissen, das er beim Auftreten neuer Fragen und Entwicklungen sicher einsetzte. Er aktualiserte sein Wissen und hat die erworbenen Kenntnisse gut praktisch umgesetzt."
    ],
    // Ausreichend 
    [
        "Herr @nachname beherrschte seinen Arbeitsbereich den Anforderungen entsprechend.",
        "Herr @nachname verfügt über ein ausbaufähiges Grundwissen. Seine Leistungen entsprachen im Wesentlichen unseren Anforderungen."
    ]
]
let fachwissenTextsFrau = [
    // Sehr gut
    [
        "Frau @nachname verfügt über ein sehr großes und beachtliches Fachwissen und fundierte Fachkenntnisse. Sie beherrschte ihren Arbeitsbereich stets umfassend und sicher, hatte oft neue Ideen und fand optimale Lösungen.",
        "Sie besitzt ein äußerst solides Fachwissen, das sie zur Lösung ihrer Aufgaben stets sehr sicher und erfolgreich einsetzte. Daher war Frau @nachname in unserem Hause eine allseits geschätzte Ansprechpartnerin bei allen fachlichen Problemstellungen.",
        "Frau @nachname besitzt ein umfassendes und hervorragendes, jederzeit verfügbares Fachwissen, mit dessen Hilfe sie auch überaus schwierige Fragen sehr erfolgreich löste. Sie verband exzellente technische Kompetenz mit ausgezeichnetem wirtschaftlichem Sachverstand."
    ],
    // Gut
    [
        "Frau @nachname verfügt über ein großes und beachtliches Fachwissen. Sie beherrschte ihren Arbeitsbereich umfassend und überdurchschnittlich, fand gute Lösungen und hatte neue Ideen.",
        "Sie verfügt über ein solides Fachwissen, das sie zur Lösung ihrer Aufgaben stets sicher und wirksam einsetzte. Daher war Frau @nachname in unserem Hause eine allseits geschätzte Ansprechpartnerin bei allen fachlichen Problemstellungen.",
        "Frau @nachname besitzt ein umfassendes und gutes, jederzeit verfügbares Fachwissen, mit dessen Hilfe sie auch schwierige Fragen erfolgreich löste. Sie verband hohe technische Kompetenz mit gutem wirtschaftlichem Sachverstand.",
        "Frau @nachname hat ein umfassendes und detailliertes Fachwissen, das sie beim Auftreten neuer Fragen und Entwicklungen sicher einsetzte. Sie aktualisierte beständig ihr Wissen und hat die erworbenen Kenntnisse stets gut praktisch umgesetzt."
    ],
    // Befriedigen
    [
        "Frau @nachname beherrschte ihren Arbeitsbereich umfassend und fand brauchbare Lösungen.",
        "Sie verfügt über ein solides Fachwissen in ihrem Fachgebiet, das sie zur Lösung ihrer Aufgaben einsetzte. Daher war Frau @nachname in unserem Hause eine oft gesuchte Ansprechpartnerin.",
        "Frau @nachname besitzt ein jederzeit verfügbares Fachwissen, mit dessen Hilfe sie ihre Aufgaben erfolgreich löste. Sie verband technische Kompetenz mit wirtschaftlichem Sachverstand.",
        "Frau @nachname hat ein detailliertes Fachwissen, das sie beim Auftreten neuer Fragen und Entwicklungen sicher einsetzte. Sie aktualiserte ihr Wissen und hat die erworbenen Kenntnisse gut praktisch umgesetzt."
    ],
    // Ausreichend
    [
        "Frau @nachname beherrschte ihren Arbeitsbereich den Anforderungen entsprechend.",
        "Frau @nachname verfügt über ein ausbaufähiges Grundwissen. Ihre Leistungen entsprachen im Wesentlichen unseren Anforderungen."
    ] 
]

let einsatzTexts = [
    // Sehr gut
    [
        "Herr @nachname hat sich äußerst engagiert in sein neues Aufgabengebiet eingearbeitet und verfolgte nachhaltig und sehr erfolgreich die vereinbarten Ziele.",
        "Herr @nachname zeichnete sich stets durch hohe Arbeitsmotivation aus. Er zeigte ausgezeichnete Einsatzbereitschaft, auch über die übliche Arbeitszeit hinaus.",
        "Herr @nachname zeigte ein außerordentlich hohes Maß an Einsatzbereitschaft und Motivation.",
        "Herr @nachname verfügt über ein außerordentlich hohes Maß an Eigeninitiative, Selbstständigkeit und Einsatzbereitschaft und war jederzeit bereit, Verantwortung zu übernehmen."
    ],
    // Gut
    [
        "Herr @nachname hat sich sehr engagiert in sein neues Aufgabengebiet eingearbeitet und verfolgte nachhaltig und erfolgreich die vereinbarten Ziele.",
        "Herr @nachname zeichnete sich durch hohe Arbeitsmotivation aus. Er zeigte hohe Einsatzbereitschaft, auch über die übliche Arbeitszeit hinaus.",
        "Herr @nachname zeigte ein hohes Maß an Einsatzbereitschaft und Motivation.",
        "Herr @nachname verfügt über ein hohes Maß an Eigeninitiative, Selbstständigkeit und Einsatzbereitschaft und war bereit, Verantwortung zu übernehmen."
    ],
    // Befriedigent
    [
        "Herr @nachname hat sich engagiert in sein neues Aufgabengebiet eingearbeitet und verfolgte nachhaltig die vereinbarten Ziele.",
        "Herr @nachname zeichnete sich durch gute Arbeitsmotivation aus. Er zeigte Einsatzbereitschaft, auch über die übliche Arbeitszeit hinaus.",
        "Herr @nachname zeigte Einsatzbereitschaft und Motivation.",
        "Er war motiviert und verfolgte die ihm gesetzten Ziele. Wir lernten Herrn @nachname als einsatzfreudigen und agilen Auszubildenden kennen."
    ],
    //Ausreichend
    [
        "Herr @nachname hat sich in sein neues Aufgabengebiet eingearbeitet.",
        "Herr @nachname erfüllte seine Aufgaben mit der nötigen Einsatzbereitschaft entsprechend unseren Erwartungen.",
        "Herr @nachname arbeitete nicht ohne Einsatzbereitschaft. Seine Aufgaben erfüllte er im Allgemeinen mit dem nötigen Engagement entsprechend unseren Erwartungen."
    ]
]
let einsatzTextsFrau = [
    // Sehr gut
    [
        "Frau @nachname hat sich äußerst engagiert in ihr neues Aufgabengebiet eingearbeitet und verfolgte nachhaltig und sehr erfolgreich die vereinbarten Ziele.",
        "Frau @nachname zeichnete sich stets durch hohe Arbeitsmotivation aus. Sie zeigte ausgezeichnete Einsatzbereitschaft, auch über die übliche Arbeitszeit hinaus.",
        "Frau @nachname zeigte ein außerordentlich hohes Maß an Einsatzbereitschaft und Motivation.",
        "Frau @nachname verfügt über ein außerordentlich hohes Maß an Eigeninitiative, Selbstständigkeit und Einsatzbereitschaft und war jederzeit bereit, Verantwortung zu übernehmen."
    ],
    // Gut
    [
        "Frau @nachname hat sich sehr engagiert in ihr neues Aufgabengebiet eingearbeitet und verfolgte nachhaltig und erfolgreich die vereinbarten Ziele.",
        "Frau @nachname zeichnete sich durch hohe Arbeitsmotivation aus. Sie zeigte hohe Einsatzbereitschaft, auch über die übliche Arbeitszeit hinaus.",
        "Frau @nachname zeigte ein hohes Maß an Einsatzbereitschaft und Motivation.",
        "Frau @nachname verfügt über ein hohes Maß an Eigeninitiative, Selbstständigkeit und Einsatzbereitschaft und war bereit, Verantwortung zu übernehmen."
    ],
    // Befriedigen
    [
        "Frau @nachname hat sich engagiert in ihr neues Aufgabengebiet eingearbeitet und verfolgte nachhaltig die vereinbarten Ziele.",
        "Frau @nachname zeichnete sich durch gute Arbeitsmotivation aus. Sie zeigte Einsatzbereitschaft, auch über die übliche Arbeitszeit hinaus.",
        "Frau @nachname zeigte Einsatzbereitschaft und Motivation.",
        "Sie war motiviert und verfolgte die ihr gesetzten Ziele. Wir lernten Frau @nachname als einsatzfreudige und agile Auszubildende kennen."
    ],
    // Ausreichend
    [
        "Frau @nachname hat sich in ihr neues Aufgabengebiet eingearbeitet.",
        "Frau @nachname erfüllte ihre Aufgaben mit der nötigen Einsatzbereitschaft entsprechend unseren Erwartungen.",
        "Frau @nachname arbeitete nicht ohne Einsatzbereitschaft. Ihre Aufgaben erfüllte sie im Allgemeinen mit dem nötigen Engagement entsprechend unseren Erwartungen."
    ] 
]

let arbeitsweiseTexts = [
    // Sehr gut
    [
        "Der Arbeitsstil von Herrn @nachname war jederzeit in höchstem Maße geprägt von Zuverlässigkeit, Systematik, Verantwortungs- und Kostenbewusstsein.",
        "Herr @nachname war ein äußerst zuverlässiger Auszubildender. Sein Arbeitsstil zeichnete sich stets durch eine sehr sorgfältige Planung, Systematik und klare Strukturierung aus.",
        "Herr @nachname arbeitete stets äußerst gewissenhaft und selbstständig. Er bearbeitete und erledigte seine Aufgaben stets planvoll und systematisch.",
        "Herr @nachname hatte ein sicheres Gespür für das Wichtige und Wesentliche und arbeitete stets zielgerichtet, methodisch und sehr gewissenhaft."
    ],
    // Gut
    [
        "Der Arbeitsstil von Herrn @nachname war jederzeit in hohem Maße geprägt von Zuverlässigkeit, Systematik, Verantwortungs- und Kostenbewusstsein.",
        "Herr @nachname war ein sehr zuverlässiger Auszubildender. Sein Arbeitsstil zeichnete sich durch sorgfältige Planung, Systematik und klare Strukturierung aus.",
        "Herr @nachname arbeitete zuverlässig und selbstständig. Er bearbeitete und erledigte seine Aufgaben planvoll und systematisch.",
        "Herr @nachname hatte einen sicheren Blick für das Wichtige und Wesentliche und arbeitete methodisch und sehr gewissenhaft."
    ],
    // Befriedigent
    [
        "Herr @nachname war ein zuverlässiger Auszubildender. Sein Arbeitsstil zeichnete sich durch Planung, Systematik und klare Strukturierung aus.",
        "Seine Arbeitsweise war umsichtig und die von ihm erarbeiteten Lösungen bewährten sich in der Praxis.",
        "Herr @nachname arbeitete selbstständig und erledigte die ihm übertragenen Aufgaben zielgerichtet und zu unserer Zufriedenheit.",
        "Herr @nachname arbeitete strukturiert und zuverlässig und die Ergebnisse seiner Arbeit waren zu unserer Zufriedenheit."
    ],
    //Ausreichend
    [
        "Herr @nachname erledigte alle ihm übertragenen Aufgaben korrekt und zufriedenstellend.",
        "Herr @nachname erwies sich als zuverlässiger Auszubildender, der die entscheidenden Aufgaben problemlos bewältigte.",
        "Aufgrund seiner gründlichen Arbeitsweise übersah er nichts Wesentliches."
    ]
]
let arbeitsweiseTextsFrau = [
    // Sehr gut
    [
        "Der Arbeitsstil von Frau @nachname war jederzeit in höchstem Maße geprägt von Zuverlässigkeit, Systematik, Verantwortungs- und Kostenbewusstsein.",
        "Frau @nachname war eine äußerst zuverlässige Auszubildende. Ihr Arbeitsstil zeichnete sich stets durch eine sehr sorgfältige Planung, Systematik und klare Strukturierung aus.",
        "Frau @nachname arbeitete stets äußerst gewissenhaft und selbstständig. Sie bearbeitete und erledigte ihre Aufgaben stets planvoll und systematisch.",
        "Frau @nachname hatte ein sicheres Gespür für das Wichtige und Wesentliche und arbeitete stets zielgerichtet, methodisch und sehr gewissenhaft."
    ],
    // Gut
    [
        "Der Arbeitsstil von Frau @nachname war jederzeit in hohem Maße geprägt von Zuverlässigkeit, Systematik, Verantwortungs- und Kostenbewusstsein.",
        "Frau @nachname war eine sehr zuverlässige Auszubildende. Ihr Arbeitsstil zeichnete sich durch sorgfältige Planung, Systematik und klare Strukturierung aus.",
        "Frau @nachname arbeitete zuverlässig und selbstständig. Sie bearbeitete und erledigte ihre Aufgaben planvoll und systematisch.",
        "Frau @nachname hatte einen sicheren Blick für das Wichtige und Wesentliche und arbeitete methodisch und sehr gewissenhaft."
    ],
    // Befriedigen
    [
        "Frau @nachname war eine zuverlässige Auszubildende. Ihr Arbeitsstil zeichnete sich durch Planung, Systematik und klare Strukturierung aus.",
        "Ihre Arbeitsweise war umsichtig und die von ihr erarbeiteten Lösungen bewährten sich in der Praxis.",
        "Frau @nachname arbeitete selbstständig und erledigte die ihr übertragenen Aufgaben zielgerichtet und zu unserer Zufriedenheit.",
        "Frau @nachname arbeitete strukturiert und zuverlässig und die Ergebnisse ihrer Arbeit waren zu unserer Zufriedenheit."
    ],
    // Ausreichend
    [
        "Frau @nachname erledigte alle ihr übertragenen Aufgaben korrekt und zufriedenstellend.",
        "Frau @nachname erwies sich als zuverlässige Auszubildende, die die entscheidenden Aufgaben problemlos bewältigte.",
        "Aufgrund ihrer gründlichen Arbeitsweise übersah sie nichts Wesentliches."
    ] 
]

let pensumTexts = [
    // Sehr gut
    [
        "Auch höchstem Arbeitsaufwand und Termindruck war er jederzeit gewachsen."
    ],
    // Gut
    [
        "Auch erhöhtem Arbeitsaufwand und Termindruck war er gut gewachsen."
    ],
    // Befriedigent
    [
        "Auch hohem Arbeitsaufwand und Termindruck war er gewachsen."
    ],
    //Ausreichend
    [
        "Auch üblichem Arbeitsaufwand und Termindruck war er durchwegs gewachsen."
    ]
]
let pensumTextsFrau = [
    // Sehr gut
    [
        "Auch höchstem Arbeitsaufwand und Termindruck war sie jederzeit gewachsen."
    ],
    // Gut
    [
        "Auch erhöhtem Arbeitsaufwand und Termindruck war sie gut gewachsen."
    ],
    // Befriedigen
    [
        "Auch hohem Arbeitsaufwand und Termindruck war sie gewachsen."
    ],
    // Ausreichend
    [
        "Auch üblichem Arbeitsaufwand und Termindruck war sie durchwegs gewachsen."
    ] 
]

let arbeitserfolgTexts = [
    // Sehr gut
    [
        "Herr @nachname lieferte immer qualitativ und quantitativ hervorragende Ergebnisse.",
        "Die gesteckten Ausbildungsziele übertraf er stets erheblich. Herr @nachname erzielte bei der Erfüllung seiner Aufgaben stets hervorragende Leistungen in qualitativer und quantitativer Hinsicht.",
        "Er beeindruckte stets durch hervorragende Arbeitsqualität.",
        "Die Arbeit von Herrn @nachname war stets von ausgezeichneter Qualität. Er hat seine fachlichen Fähigkeiten zu unserem Nutzen voll entfaltet."
    ],
    // Gut
    [
        "Herr @nachname lieferte immer qualitativ und quantitativ gute Ergebnisse.",
        "Die gesteckten Ausbildungsziele übertraf er sogar zumeist. Herr @nachname erzielte bei der Erfüllung seiner Aufgaben stets gute Leistungen in qualitativer und quantitativer Hinsicht.",
        "Er überzeugte durch sehr gute Arbeitsqualität.",
        "Die Arbeit von Herrn @nachname war von guter Qualität und seine fachlichen Fähigkeiten überzeugten uns."
    ],
    // Befriedigent
    [
        "Die Qualität seiner Arbeitsergebnisse erfüllte in vollem Umfang die gestellten Anforderungen.",
        "Herr @nachname lieferte eine unseren Erwartungen entsprechende Arbeitsqualität.",
        "Bei seiner täglichen Arbeit erzielte er gute Ergebnisse.",
        "Die Arbeitsleistung von Herrn @nachname war von guter Qualität und den Anforderungen entsprechend."
    ],
    //Ausreichend
    [
        "Herr @nachname zeigte eine zufriedenstellende Arbeitsweise. Die Qualität seiner Arbeitsergebnisse erfüllte unsere Anforderungen.",
        "Herr @nachname lieferte eine dem Durchschnitt entsprechende Arbeitsqualität.",
        "Herr @nachname strebte optimale Lösungen an.",
        "Herr @nachname arbeitete planvoll und erreichte praxisnahe Lösungen."
    ]
]
let arbeitserfolgTextsFrau = [
    // Sehr gut
    [
        "Frau @nachname lieferte immer qualitativ und quantitativ hervorragende Ergebnisse.",
        "Die gesteckten Ausbildungsziele übertraf sie stets erheblich. Frau @nachname erzielte bei der Erfüllung ihrer Aufgaben stets hervorragende Leistungen in qualitativer und quantitativer Hinsicht.",
        "Sie beeindruckte stets durch hervorragende Arbeitsqualität.",
        "Die Arbeit von Frau @nachname war stets von ausgezeichneter Qualität. Sie hat ihre fachlichen Fähigkeiten zu unserem Nutzen voll entfaltet."
    ],
    // Gut
    [
        "Frau @nachname lieferte immer qualitativ und quantitativ gute Ergebnisse.",
        "Die gesteckten Ausbildungsziele übertraf sie sogar zumeist. Frau @nachname erzielte bei der Erfüllung ihrer Aufgaben stets gute Leistungen in qualitativer und quantitativer Hinsicht.",
        "Sie überzeugte durch sehr gute Arbeitsqualität.",
        "Die Arbeit von Frau @nachname war von guter Qualität und ihre fachlichen Fähigkeiten überzeugten uns."
    ],
    // Befriedigen
    [
        "Die Qualität ihrer Arbeitsergebnisse erfüllte in vollem Umfang die gestellten Anforderungen.",
        "Frau @nachname lieferte eine unseren Erwartungen entsprechende Arbeitsqualität.",
        "Bei ihrer täglichen Arbeit erzielte sie gute Ergebnisse.",
        "Die Arbeitsleistung von Frau @nachname war von guter Qualität und den Anforderungen entsprechend."
    ],
    // Ausreichend
    [
        "Frau @nachname zeigte eine zufriedenstellende Arbeitsweise. Die Qualität ihrer Arbeitsergebnisse erfüllte unsere Anforderungen.",
        "Frau @nachname lieferte eine dem Durchschnitt entsprechende Arbeitsqualität.",
        "Frau @nachname strebte optimale Lösungen an.",
        "Frau @nachname arbeitete planvoll und erreichte praxisnahe Lösungen."
    ] 
]

let leistungTexts = [
    // Sehr gut
    [
        "Herr @nachname übertraf die Anforderungen und unsere Erwartungen stets in hohem Maße, sodass wir mit seinen Leistungen stets außerordentlich zufrieden waren.",
        "Die ihm übertragenen Aufgaben erfüllte er stets zu unserer vollsten Zufriedenheit.",
        "Er hat mit seinen ausgezeichneten Leistungen unsere Erwartungen in jeder Hinsicht übertroffen. Herr @nachname war ein ausgezeichneter Auszubildender.",
        "Mit den Leistungen von Herrn @nachname waren wir immer voll und ganz zufrieden. Er war ein ausgezeichneter Auszubildender."
    ],
    // Gut
    [
        "Die ihm übertragenen Aufgaben erfüllte er stets zu unserer vollen Zufriedenheit.",
        "Seine guten Leistungen haben unseren Anforderungen voll entsprochen.",
        "Über die gesamte Ausbildungsdauer zeigte sich Herr @nachname als Auszubildender, der seine Aufgaben zu unserer vollsten Zufriedenheit erledigte.",
        "Er zeigte konstant sehr gute Leistungen, die den Anforderungen voll und ganz gerecht wurden."
    ],
    // Befriedigent
    [
        "Die ihm übertragenen Aufgaben erfüllte er zu unserer vollen Zufriedenheit.",
        "Seine Leistungen haben unseren Anforderungen voll entsprochen.",
        "Die Leistungen von Herrn @nachname waren zu unserer vollen Zufriedenheit.",
        "Die an ihn geknüpften Anforderungen erfüllte er zu unserer vollen Zufriedenheit."
    ],
    //Ausreichend
    [
        "Die ihm übertragenen Aufgaben erfüllte er zu unserer Zufriedenheit.",
        "Seine Leistung hat unseren Anforderungen entsprochen.",
        "Er nahm seine Aufgaben mit großem Engagement und Interesse wahr. Seine Leistungen entsprachen unseren Anforderungen.",
        "Er erfüllte die in ihn gesetzten Erwartungen in Bezug auf seine Leistungen."
    ]
]
let leistungTextsFrau = [
    // Sehr gut
    [
        "Frau @nachname übertraf die Anforderungen und unsere Erwartungen stets in hohem Maße, sodass wir mit ihren Leistungen stets außerordentlich zufrieden waren.",
        "Die ihr übertragenen Aufgaben erfüllte sie stets zu unserer vollsten Zufriedenheit.",
        "Sie hat mit ihren ausgezeichneten Leistungen unsere Erwartungen in jeder Hinsicht übertroffen. Frau @nachname war eine ausgezeichnete Auszubildende.",
        "Mit den Leistungen von Frau @nachname waren wir immer voll und ganz zufrieden. Sie war eine ausgezeichnete Auszubildende."
    ],
    // Gut
    [
        "Die ihr übertragenen Aufgaben erfüllte sie stets zu unserer vollen Zufriedenheit.",
        "Ihre guten Leistungen haben unseren Anforderungen voll entsprochen.",
        "Über die gesamte Ausbildungsdauer zeigte sich Frau @nachname als Auszubildende, die ihre Aufgaben zu unserer vollsten Zufriedenheit erledigte.",
        "Sie zeigte konstant sehr gute Leistungen, die den Anforderungen voll und ganz gerecht wurden."
    ],
    // Befriedigen
    [
        "Die ihr übertragenen Aufgaben erfüllte sie zu unserer vollen Zufriedenheit.",
        "Ihre Leistungen haben unseren Anforderungen voll entsprochen.",
        "Die Leistungen von Frau @nachname waren zu unserer vollen Zufriedenheit.",
        "Die an sie geknüpften Anforderungen erfüllte sie zu unserer vollen Zufriedenheit."
    ],
    // Ausreichend
    [
        "Die ihr übertragenen Aufgaben erfüllte sie zu unserer Zufriedenheit.",
        "Ihre Leistung hat unseren Anforderungen entsprochen.",
        "Sie nahm ihre Aufgaben mit großem Engagement und Interesse wahr. Ihre Leistungen entsprachen unseren Anforderungen.",
        "Sie erfüllte die in sie gesetzten Erwartungen in Bezug auf ihre Leistungen."
    ] 
]

let sozialesTexts = [
    // Sehr gut
    [
        "Sein Verhalten gegenüber Kunden, Vorgesetzten und Kollegen war stets ausgezeichnet.",
        "Herr @nachname war ein allseits beliebter Auszubildender. Sein Verhalten gegenüber Kunden, Vorgesetzten und Kollegen war stets vorbildlich.",
        "Aufgrund seines hilfsbereiten und freundlichen Wesens erfreute Herr @nachname sich hoher Wertschätzung seiner Kunden, Vorgesetzten und Kollegen. Sein Verhalten war stets vorbildlich.",
        "Wegen seiner freundlichen und zuvorkommenden Art wurde er von Kunden, Vorgesetzten und Kollegen stets hoch geschätzt und respektiert."
    ],
    // Gut
    [
        "Sein Verhalten gegenüber Kunden, Vorgesetzten und Kollegen war jederzeit einwandfrei.",
        "Herr @nachname war ein beliebter Auszubildender. Sein Verhalten gegenüber Kunden, Vorgesetzten und Kollegen war stets gut.",
        "Aufgrund seines hilfsbereiten und freundlichen Wesens erfreute Herr @nachname sich bei Kunden, Vorgesetzten und Kollegen hoher Wertschätzung. Sein Verhalten war einwandfrei.",
        "Wegen seiner freundlichen und zuvorkommenden Art war er bei Kunden, Vorgesetzten und Kollegen stets geschätzt und respektiert."
    ],
    // Befriedigent
    [
        "Sein Verhalten gegenüber Kunden, Vorgesetzten und Kollegen war einwandfrei.",
        "Er war ein beliebter Auszubildender. Sein Verhalten gegenüber Kunden, Vorgesetzten und Kollegen war gut.",
        "Aufgrund seiner zuvorkommenden Art war Herr @nachname bei seinen Kunden, Vorgesetzten und Kollegen beliebt. Sein Verhalten war einwandfrei.",
        "Wegen seiner freundlichen und zuvorkommenden Art war Herr @nachname bei Kunden, Vorgesetzten und Kollegen geschätzt und respektiert."
    ],
    //Ausreichend
    [
        "Sein Verhalten gegenüber Kunden, Kollegen und Vorgesetzten war zufriedenstellend.",
        "Seine Führung war ohne Tadel. Gegenüber den Kunden, Kollegen und Vorgesetzten verhielt er sich korrekt.",
        "Gegenüber den Kollegen verhielt er sich kollegial; sein Verhalten gegenüber Kunden und Vorgesetzten war insgesamt nicht zu beanstanden.",
        "Er kam mit seinen Kollegen, Kunden und auch den Vorgesetzten gut aus und verhielt sich korrekt."
    ]
]
let sozialesTextsFrau = [
    // Sehr gut
    [
        "Ihr Verhalten gegenüber Kunden, Vorgesetzten und Kollegen war stets ausgezeichnet.",
        "Frau @nachname war eine allseits beliebte Auszubildende. Ihr Verhalten gegenüber Kunden, Vorgesetzten und Kollegen war stets vorbildlich.",
        "Aufgrund ihres hilfsbereiten und freundlichen Wesens erfreute Frau @nachname sich hoher Wertschätzung ihrer Kunden, Vorgesetzten und Kollegen. Ihr Verhalten war stets vorbildlich.",
        "Wegen ihrer freundlichen und zuvorkommenden Art wurde sie von Kunden, Vorgesetzten und Kollegen stets hoch geschätzt und respektiert."
    ],
    // Gut
    [
        "Ihr Verhalten gegenüber Kunden, Vorgesetzten und Kollegen war jederzeit einwandfrei.",
        "Frau @nachname war eine beliebte Auszubildende. Ihr Verhalten gegenüber Kunden, Vorgesetzten und Kollegen war stets gut.",
        "Aufgrund ihres hilfsbereiten und freundlichen Wesens erfreute Frau @nachname sich bei Kunden, Vorgesetzten und Kollegen hoher Wertschätzung. Ihr Verhalten war einwandfrei.",
        "Wegen ihrer freundlichen und zuvorkommenden Art war sie bei Kunden, Vorgesetzten und Kollegen stets geschätzt und respektiert."
    ],
    // Befriedigen
    [
        "Ihr Verhalten gegenüber Kunden, Vorgesetzten und Kollegen war einwandfrei.",
        "Sie war eine beliebte Auszubildende. Ihr Verhalten gegenüber Kunden, Vorgesetzten und Kollegen war gut.",
        "Aufgrund ihrer zuvorkommenden Art war Frau @nachname bei ihren Kunden, Vorgesetzten und Kollegen beliebt. Ihr Verhalten war einwandfrei.",
        "Wegen ihrer freundlichen und zuvorkommenden Art war Frau @nachname bei Kunden, Vorgesetzten und Kollegen geschätzt und respektiert."
    ],
    // Ausreichend
    [
        "Ihr Verhalten gegenüber Kunden, Kollegen und Vorgesetzten war zufriedenstellend.",
        "Ihre Führung war ohne Tadel. Gegenüber den Kunden, Kollegen und Vorgesetzten verhielt sie sich korrekt.",
        "Gegenüber den Kollegen verhielt sie sich kollegial; ihr Verhalten gegenüber Kunden und Vorgesetzten war insgesamt nicht zu beanstanden.",
        "Sie kam mit ihren Kollegen, Kunden und auch den Vorgesetzten gut aus und verhielt sich korrekt."
    ] 
]

let abschiedTexts = [
    // Sehr gut
    [
        "Herrn @nachname danken wir für die stets sehr gute Zusammenarbeit und wünschen ihm für seinen weiteren Berufs- und Lebensweg alles Gute und weiterhin viel Erfolg."
    ],
    // Gut
    [
        "Herrn @nachname danken wir für die stets gute Zusammenarbeit und wünschen ihm für seinen weiteren Berufs- und Lebensweg alles Gute und weiterhin viel Erfolg."
    ],
    // Befriedigent
    [
        "Herrn @nachname danken wir für die Zusammenarbeit und wünschen ihm für seinen weiteren Berufs- und Lebensweg alles Gute und weiterhin viel Erfolg."
    ],
    //Ausreichend
    [
        "Herrn @nachname wünschen wir für seinen weiteren Berufs- und Lebensweg alles Gute und weiterhin viel Erfolg."
    ]
]
let abschiedTextsFrau = [
    // Sehr gut
    [
       "Frau @nachname danken wir für die stets sehr gute Zusammenarbeit und wünschen ihr für ihren weiteren Berufs- und Lebensweg alles Gute und weiterhin viel Erfolg." 
    ],
    // Gut
    [
        "Frau @nachname danken wir für die stets gute Zusammenarbeit und wünschen ihr für ihren weiteren Berufs- und Lebensweg alles Gute und weiterhin viel Erfolg."
    ],
    // Befriedigend
    [
        "Frau @nachname danken wir für die Zusammenarbeit und wünschen ihr für ihren weiteren Berufs- und Lebensweg alles Gute und weiterhin viel Erfolg."
    ],
    // Ausreichend
    [
        "Frau @nachname wünschen wir für ihren weiteren Berufs- und Lebensweg alles Gute und weiterhin viel Erfolg."
    ]
]



function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // Change current tab
    currentTab = evt.currentTarget.innerHTML;
    //console.log(currentTab);
} 

function changeGrade(value){
    //console.log(value);
    //console.log(currentTab);
    let textauswahlen;
    let textauswahl;
    let textRadios;
    if(nachname == null) nachname = "Mustermann"
    switch(currentTab){
        case "Fachwissen":
            textauswahlen = document.getElementsByName("auswahlFachwissen");
            textRadios = document.getElementsByName("radioFachwissen");
            for(i = 0; i < textauswahlen.length; i++){
                textauswahlen[i].style.display = "none";
                textRadios[i].checked = false;
            }
            for(let i = 0; i < fachwissenTexts[(value-1)].length; i++){
                textauswahl = document.getElementById("fachwissen" + (i+1));
                if(gender == 0)
                    textauswahl.innerHTML = fachwissenTexts[(value-1)][i];
                else
                    textauswahl.innerHTML = fachwissenTextsFrau[(value-1)][i];
				textauswahl.innerHTML = textauswahl.innerHTML.replace("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Einsatz":
            textauswahlen = document.getElementsByName("auswahlEinsatz");
            textRadios = document.getElementsByName("radioEinsatz");
            for(i = 0; i < textauswahlen.length; i++){
                textauswahlen[i].style.display = "none";
                textRadios[i].checked = false;
            }
            for(let i = 0; i < einsatzTexts[(value-1)].length; i++){
                textauswahl = document.getElementById("einsatz" + (i+1));
                if(gender == 0)
                    textauswahl.innerHTML = einsatzTexts[(value-1)][i];
                else
                    textauswahl.innerHTML = einsatzTextsFrau[(value-1)][i];
				textauswahl.innerHTML = textauswahl.innerHTML.replace("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Arbeitsweise":
            textauswahlen = document.getElementsByName("auswahlArbeitsweise");
            textRadios = document.getElementsByName("radioArbeitsweise");
            for(i = 0; i < textauswahlen.length; i++){
                textauswahlen[i].style.display = "none";
                textRadios[i].checked = false;
            }
            for(let i = 0; i < arbeitsweiseTexts[(value-1)].length; i++){
                textauswahl = document.getElementById("arbeitsweise" + (i+1));
                if(gender == 0)
                    textauswahl.innerHTML = arbeitsweiseTexts[(value-1)][i];
                else
                    textauswahl.innerHTML = arbeitsweiseTextsFrau[(value-1)][i];
				textauswahl.innerHTML = textauswahl.innerHTML.replace("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Pensum":
            textauswahlen = document.getElementsByName("auswahlPensum");
            textRadios = document.getElementsByName("radioPensum");
            for(i = 0; i < textauswahlen.length; i++){
                textauswahlen[i].style.display = "none";
                textRadios[i].checked = false;
            }
            for(let i = 0; i < pensumTexts[(value-1)].length; i++){
                textauswahl = document.getElementById("pensum" + (i+1));
                if(gender == 0)
                    textauswahl.innerHTML = pensumTexts[(value-1)][i];
                else
                    textauswahl.innerHTML = pensumTextsFrau[(value-1)][i];
				textauswahl.innerHTML = textauswahl.innerHTML.replace("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Arbeitserfolg":
            textauswahlen = document.getElementsByName("auswahlArbeitserfolg");
            textRadios = document.getElementsByName("radioArbeitserfolg");
            for(i = 0; i < textauswahlen.length; i++){
                textauswahlen[i].style.display = "none";
                textRadios[i].checked = false;
            }
            for(let i = 0; i < arbeitserfolgTexts[(value-1)].length; i++){
                textauswahl = document.getElementById("arbeitserfolg" + (i+1));
                if(gender == 0)
                    textauswahl.innerHTML = arbeitserfolgTexts[(value-1)][i];
                else
                    textauswahl.innerHTML = arbeitserfolgTextsFrau[(value-1)][i];
				textauswahl.innerHTML = textauswahl.innerHTML.replace("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Leistung":
            textauswahlen = document.getElementsByName("auswahlLeistung");
            textRadios = document.getElementsByName("radioLeistung");
            for(i = 0; i < textauswahlen.length; i++){
                textauswahlen[i].style.display = "none";
                textRadios[i].checked = false;
            }
            for(let i = 0; i < leistungTexts[(value-1)].length; i++){
                textauswahl = document.getElementById("leistung" + (i+1));
                if(gender == 0)
                    textauswahl.innerHTML = leistungTexts[(value-1)][i];
                else
                    textauswahl.innerHTML = leistungTextsFrau[(value-1)][i];
				textauswahl.innerHTML = textauswahl.innerHTML.replace("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Soziales":
            textauswahlen = document.getElementsByName("auswahlSoziales");
            textRadios = document.getElementsByName("radioSoziales");
            for(i = 0; i < textauswahlen.length; i++){
                textauswahlen[i].style.display = "none";
                textRadios[i].checked = false;
            }
            for(let i = 0; i < sozialesTexts[(value-1)].length; i++){
                textauswahl = document.getElementById("soziales" + (i+1));
                if(gender == 0)
                    textauswahl.innerHTML = sozialesTexts[(value-1)][i];
                else
                    textauswahl.innerHTML = sozialesTextsFrau[(value-1)][i];
				textauswahl.innerHTML = textauswahl.innerHTML.replace("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Abschied":
            textauswahlen = document.getElementsByName("auswahlAbschied");
            textRadios = document.getElementsByName("radioAbschied");
            for(i = 0; i < textauswahlen.length; i++){
                textauswahlen[i].style.display = "none";
                textRadios[i].checked = false;
            }
            for(let i = 0; i < abschiedTexts[(value-1)].length; i++){
                textauswahl = document.getElementById("abschied" + (i+1))
                if(gender == 0)
                    textauswahl.innerHTML = abschiedTexts[(value-1)][i];
                else
                    textauswahl.innerHTML = abschiedTextsFrau[(value-1)][i];
				textauswahl.innerHTML = textauswahl.innerHTML.replace("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
    }
}



function update(){
    let gender = document.getElementById('gender');
    let valgender = gender.options[gender.selectedIndex];
    let job = document.getElementById('job');
    let valjob = job.options[job.selectedIndex];							
    let nachname = document.getElementById('nachname').value;
    let prakt;
    let valpraktikum = document.getElementById("praktikum");
    if (valpraktikum.checked == true){

        prakt = "Praktikum";

    } else { 

        prakt = "";

    }				
    let vorname = document.getElementById('vorname').value;					
    let ausbilder = document.getElementById('ausbilder').value;				
    let geburtsort = document.getElementById('geburtsort').value;			
    let ausbildungsbeginn = document.getElementById('ausbildungsbeginn').value;			
    let geburtstag = document.getElementById('geburtstag').value;			
    let ausbildungsende = document.getElementById('ausbildungsende').value;			
    let vgender = valgender.value;
    let vjob = valjob.value;
        
    if(vjob == "Verwaltungsfachangestellter"|| vjob == "Kaufmann f. Büromanagement (WQ1-8)"|| vjob == "Kaufmann f. Büromanagement (WQ9-10)"  || 
    vjob == "Verwaltungsfachangestellte" || vjob == "Kauffrau f. Büromanagement (WQ1-8)" || vjob == "Kauffrau f. Büromanagement (WQ9-10)"){
        document.getElementById("pr").hidden = false;
        document.getElementById("programme").hidden = false;
    }
    else{
        document.getElementById("programme").value = "";
        document.getElementById("pr").hidden = true;
        document.getElementById("programme").hidden = true;
    }
        
    if(vjob =="Fachangestellter Medien-& Informationsdienst Bibliothek"|| vjob == "Fachpraktiker TPD Maschinen- & Anlagenkonstr."||vjob == "Technischer Produktdesigner Maschinen- & Anlangenkonst" ||
    vjob == "Fachangestellte Medien-& Informationsdienst Bibliothek" || vjob == "Fachpraktikerin TPD Maschinen- & Anlagenkonstr." || vjob == "Technischer Produktdesignerin Maschinen- & Anlangenkonst"){
        document.getElementById("praktikum").disabled = false;
    }
    else{
        document.getElementById("praktikum").disabled = true;
        document.getElementById("praktikum").checked = false;
    }

    let programme = document.getElementById('programme').value;		
}	

function updateGender(){
    gender = document.getElementById("gender").value;
    switch(gender){
        case "0": 				
            document.getElementById('job').innerHTML = "";

            let jobsM = ['Bürokraft', 'Büropraktiker', 'Elektroniker Automatisierungstechnik','Elektroniker Energie & Gebäude', 
            'Elektroniker Geräte & Systeme', 'Elektroniker Informations & Systemtechnik','Fachangestellter Medien-& Informationsdienst Bibliothek',
            'Fachinformatiker Anwendungsentwicklung','Fachinformatiker Systemintegration','Fachlagerist','Fachkraft für Lagerlogistik',
            'Fachkraft f. Metalltechnik FR Montagetechnik','Fachpraktiker f. elektr. Geräte und Systemen','Fachpraktiker f. Industriemechanik',
            'Fachpraktiker für IT-Systemelektronik','Fachpraktiker TPD Maschinen- & Anlagenkonstr.','Industriekaufmann',
            'Industriemechaniker FR Feinwerktechnik','Informatikkaufmann','IT-Systemelektroniker','Kaufmann f. Büromanagement (WQ1-8)',
            'Kaufmann f. Büromanagement (WQ9-10)','Kaufmann im Einzelhandel','Steuerfachangestellter',
            'Technischer Produktdesigner Maschinen- & Anlangenkonst','Verkäufer','Verwaltungsfachangestellter','Mediengestalter Bild und Ton',
            'Mediangestalter Digital und Print'];
            
            for(i=0; i<jobsM.length; i++){
                let option = document.createElement("option");
                option.text = jobsM[i];
                    
                document.getElementById('job').add(option);
            }
            
            //console.log(jobsM.length);
            break;
        case "1":	
            document.getElementById('job').innerHTML = "";
        
            let jobsF = ['Bürokraft','Büropraktikerin','Elektronikerin Automatisierungstechnik','Elektronikerin Energie & Gebäude',
            'Elektronikerin Geräte & Systeme','Elektronikerin Informations & Systemtechnik','Fachangestellte Medien-& Informationsdienst Bibliothek',
            'Fachinformatikerin Anwendungsentwicklung','Fachinformatikerin Systemintegration','Fachlageristin','Fachkraft für Lagerlogistik',
            'Fachkraft f. Metalltechnik FR Montagetechnik','Fachpraktikerin f. elektr. Geräte und Systemen','Fachpraktikerin f. Industriemechanik',
            'Fachpraktikerin für IT-Systemelektronik','Fachpraktikerin TPD Maschinen- & Anlagenkonstr.','Industriekauffrau',
            'Industriemechanikerin FR Feinwerktechnik','Informatikkauffrau','IT-Systemelektronikerin','Kauffrau f. Büromanagement (WQ1-8)',
            'Kauffrau f. Büromanagement (WQ9-10)','Kauffrau im Einzelhandel','Steuerfachangestellte',
            'Technischer Produktdesignerin Maschinen- & Anlangenkonst','Verkäuferin','Verwaltungsfachangestellte','Mediengestalterin Bild und Ton',
            'Mediangestalterin Digital und Print'];
            
                for(i=0; i<jobsF.length; i++){
                let option = document.createElement("option");
                option.text = jobsF[i];
                    
                document.getElementById('job').add(option);
            }
            
            //console.log(jobsF.length);
            break;    
    }
    updateNachname(nachname);
    update();
}

// Set nachname to value of texbox and change value in currently displayed options
function updateNachname(nachnameneu){
    nachname = nachnameneu;
    let noteRadios;
    let noteRadioIndex;
    let textAuswahl;

    noteRadios = document.getElementsByName("radioNoteFachwissen");
    noteRadioIndex = -1;
    for(i = 0; i < noteRadios.length; i++)
        if(noteRadios[i].checked == true)
            noteRadioIndex = noteRadios[i].value;
    if(noteRadioIndex != -1)
        for(i = 0; i < fachwissenTexts[(noteRadioIndex-1)].length; i++){
            textAuswahl = document.getElementById("fachwissen" + (i+1));
            if(gender == 0)
                textAuswahl.innerHTML = fachwissenTexts[(noteRadioIndex-1)][i];
            else
                textAuswahl.innerHTML = fachwissenTextsFrau[(noteRadioIndex-1)][i];
            textAuswahl.innerHTML = textAuswahl.innerHTML.replace("@nachname", nachname);
        }

    noteRadios = document.getElementsByName("radioNoteFachwissen");
    noteRadioIndex = -1;
    for(i = 0; i < noteRadios.length; i++){
        if(noteRadios[i].checked == true)
            noteRadioIndex = noteRadios[i].value;
    }
    if(noteRadioIndex != -1){
        for(i = 0; i < fachwissenTexts[(noteRadioIndex-1)].length; i++){
            textAuswahl = document.getElementById("fachwissen" + (i+1));
            if(gender == 0)
                textAuswahl.innerHTML = fachwissenTexts[(noteRadioIndex-1)][i];
            else
                textAuswahl.innerHTML = fachwissenTextsFrau[(noteRadioIndex-1)][i];
            textAuswahl.innerHTML = textAuswahl.innerHTML.replace("@nachname", nachname);
        }
    }
        
    noteRadios = document.getElementsByName("radioNoteEinsatz");
    noteRadioIndex = -1;
    for(i = 0; i < noteRadios.length; i++){
        if(noteRadios[i].checked == true)
            noteRadioIndex = noteRadios[i].value;
    }
    if(noteRadioIndex != -1){
        for(i = 0; i < einsatzTexts[(noteRadioIndex-1)].length; i++){
            textAuswahl = document.getElementById("einsatz" + (i+1));
            if(gender == 0)
                textAuswahl.innerHTML = einsatzTexts[(noteRadioIndex-1)][i];
            else
                textAuswahl.innerHTML = einsatzTextsFrau[(noteRadioIndex-1)][i];
            textAuswahl.innerHTML = textAuswahl.innerHTML.replace("@nachname", nachname);
        }
    }

    noteRadios = document.getElementsByName("radioNoteArbeitsweise");
    noteRadioIndex = -1;
    for(i = 0; i < noteRadios.length; i++){
        if(noteRadios[i].checked == true)
            noteRadioIndex = noteRadios[i].value;
    }
    if(noteRadioIndex != -1){
        for(i = 0; i < arbeitsweiseTexts[(noteRadioIndex-1)].length; i++){
            textAuswahl = document.getElementById("arbeitsweise" + (i+1));
            if(gender == 0)
                textAuswahl.innerHTML = arbeitsweiseTexts[(noteRadioIndex-1)][i];
            else
                textAuswahl.innerHTML = arbeitsweiseTextsFrau[(noteRadioIndex-1)][i];
            textAuswahl.innerHTML = textAuswahl.innerHTML.replace("@nachname", nachname);
        }
    }

    noteRadios = document.getElementsByName("radioNotePensum");
    noteRadioIndex = -1;
    for(i = 0; i < noteRadios.length; i++){
        if(noteRadios[i].checked == true)
            noteRadioIndex = noteRadios[i].value;
    }
    if(noteRadioIndex != -1){
        for(i = 0; i < pensumTexts[(noteRadioIndex-1)].length; i++){
            textAuswahl = document.getElementById("pensum" + (i+1));
            if(gender == 0)
                textAuswahl.innerHTML = pensumTexts[(noteRadioIndex-1)][i];
            else
                textAuswahl.innerHTML = pensumTextsFrau[(noteRadioIndex-1)][i];
            textAuswahl.innerHTML = textAuswahl.innerHTML.replace("@nachname", nachname);
        }
    }

    noteRadios = document.getElementsByName("radioNoteArbeitserfolg");
    noteRadioIndex = -1;
    for(i = 0; i < noteRadios.length; i++){
        if(noteRadios[i].checked == true)
            noteRadioIndex = noteRadios[i].value;
    }
    if(noteRadioIndex != -1){
        for(i = 0; i < arbeitserfolgTexts[(noteRadioIndex-1)].length; i++){
            textAuswahl = document.getElementById("arbeitserfolg" + (i+1));
            if(gender == 0)
                textAuswahl.innerHTML = arbeitserfolgTexts[(noteRadioIndex-1)][i];
            else
                textAuswahl.innerHTML = arbeitserfolgTextsFrau[(noteRadioIndex-1)][i];
            textAuswahl.innerHTML = textAuswahl.innerHTML.replace("@nachname", nachname);
        }
    }

    noteRadios = document.getElementsByName("radioNoteLeistung");
    noteRadioIndex = -1;
    for(i = 0; i < noteRadios.length; i++){
        if(noteRadios[i].checked == true)
            noteRadioIndex = noteRadios[i].value;
    }
    if(noteRadioIndex != -1){
        for(i = 0; i < leistungTexts[(noteRadioIndex-1)].length; i++){
            textAuswahl = document.getElementById("leistung" + (i+1));
            if(gender == 0)
                textAuswahl.innerHTML = leistungTexts[(noteRadioIndex-1)][i];
            else
                textAuswahl.innerHTML = leistungTextsFrau[(noteRadioIndex-1)][i];
            textAuswahl.innerHTML = textAuswahl.innerHTML.replace("@nachname", nachname);
        }
    }

    noteRadios = document.getElementsByName("radioNoteSoziales");
    noteRadioIndex = -1;
    for(i = 0; i < noteRadios.length; i++){
        if(noteRadios[i].checked == true)
            noteRadioIndex = noteRadios[i].value;
    }
    if(noteRadioIndex != -1){
        for(i = 0; i < sozialesTexts[(noteRadioIndex-1)].length; i++){
            textAuswahl = document.getElementById("soziales" + (i+1));
            if(gender == 0)
                textAuswahl.innerHTML = sozialesTexts[(noteRadioIndex-1)][i];
            else
                textAuswahl.innerHTML = sozialesTextsFrau[(noteRadioIndex-1)][i];
            textAuswahl.innerHTML = textAuswahl.innerHTML.replace("@nachname", nachname);
        }
    }

    noteRadios = document.getElementsByName("radioNoteAbschied");
    noteRadioIndex = -1;
    for(i = 0; i < noteRadios.length; i++){
        if(noteRadios[i].checked == true)
            noteRadioIndex = noteRadios[i].value;
    }
    if(noteRadioIndex != -1){
        for(i = 0; i < abschiedTexts[(noteRadioIndex-1)].length; i++){
            textAuswahl = document.getElementById("abschied" + (i+1));
            if(gender == 0)
                textAuswahl.innerHTML = abschiedTexts[(noteRadioIndex-1)][i];
            else
                textAuswahl.innerHTML = abschiedTextsFrau[(noteRadioIndex-1)][i];
            textAuswahl.innerHTML = textAuswahl.innerHTML.replace("@nachname", nachname);
        }
    }
}

function eraseval(){
    sessionStorage.clear();
}