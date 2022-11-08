let currentTab = "Fachwissen";


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
    let textRadios;
    switch(currentTab){
        case "Fachwissen":
            textauswahlen = document.getElementsByName("auswahlFachwissen");
            textRadios = document.getElementsByName("radioFachwissen");
            for(i = 0; i < textauswahlen.length; i++){
                textauswahlen[i].style.display = "none";
                textRadios[i].checked = false;
            }
            for(let i = 0; i < fachwissenTexts[(value-1)].length; i++){
                document.getElementById("fachwissen" + (i+1)).innerHTML = fachwissenTexts[(value-1)][i];
				document.getElementById("fachwissen" + (i+1)).innerHTML = document.getElementById("fachwissen" + (i+1)).innerHTML.replace("@nachname", sessionStorage.getItem("nachname"));
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
                document.getElementById("einsatz" + (i+1)).innerHTML = einsatzTexts[(value-1)][i];
				document.getElementById("einsatz" + (i+1)).innerHTML = document.getElementById("einsatz" + (i+1)).innerHTML.replace("@nachname", sessionStorage.getItem("nachname"));
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
                document.getElementById("arbeitsweise" + (i+1)).innerHTML = arbeitsweiseTexts[(value-1)][i];
				document.getElementById("arbeitsweise" + (i+1)).innerHTML = document.getElementById("arbeitsweise" + (i+1)).innerHTML.replace("@nachname", sessionStorage.getItem("nachname"));
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
                document.getElementById("pensum" + (i+1)).innerHTML = pensumTexts[(value-1)][i];
				document.getElementById("pensum" + (i+1)).innerHTML = document.getElementById("pensum" + (i+1)).innerHTML.replace("@nachname", sessionStorage.getItem("nachname"));
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
                document.getElementById("arbeitserfolg" + (i+1)).innerHTML = arbeitserfolgTexts[(value-1)][i];
				document.getElementById("arbeitserfolg" + (i+1)).innerHTML = document.getElementById("arbeitserfolg" + (i+1)).innerHTML.replace("@nachname", sessionStorage.getItem("nachname"));
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
                document.getElementById("leistung" + (i+1)).innerHTML = leistungTexts[(value-1)][i];
				document.getElementById("leistung" + (i+1)).innerHTML = document.getElementById("leistung" + (i+1)).innerHTML.replace("@nachname", sessionStorage.getItem("nachname"));
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
                document.getElementById("soziales" + (i+1)).innerHTML = sozialesTexts[(value-1)][i];
				document.getElementById("soziales" + (i+1)).innerHTML = document.getElementById("soziales" + (i+1)).innerHTML.replace("@nachname", sessionStorage.getItem("nachname"));
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
                document.getElementById("abschied" + (i+1)).innerHTML = abschiedTexts[(value-1)][i];
				document.getElementById("abschied" + (i+1)).innerHTML = document.getElementById("abschied" + (i+1)).innerHTML.replace("@nachname", sessionStorage.getItem("nachname"));
                textauswahlen[i].style.display = "block";
            }
            break;
    }
}

