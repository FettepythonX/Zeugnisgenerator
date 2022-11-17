let currentTab = "Fachwissen";
let tabDone = [false, false, false, false, false, false, false, false, false];
let gender = 0;
let nachname = "Mustermann";
let vorname = "Max";
let geburtsort;
let geburtstag;
let ausbildungsende;
let ausbildungsbeginn;
let ausbilder;
let ausbilderName;
let praktikum;
let programme = "";
let tabColorWrong = "rgb(255,0,0)";
let tabColorRight = "rgb(15, 148, 53)";
let categories = ["Fachwissen", "Einsatz", "Arbeitsweise", "Pensum", "Arbeitserfolg", "Leistung", "Soziales", "Abschied"];



function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // zeige/verstecke Print-Buttons

    if(tabName=="Erstellen")
    {
        document.getElementById("pdf_printer").style.display="block";
    }
    else
    {
        document.getElementById("pdf_printer").style.display="none";
    }

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

    // Initialize certain tabs when opening them
    if(nachname == "") nachname = "Mustermann";
    switch(currentTab){
        case "Individuell":
            textauswahl = document.getElementById("textIndividuell");
            //console.log(document.getElementById("job").selectedIndex);
            if(gender == 0)
                    textauswahl.innerHTML = individuellTexts[document.getElementById("job").selectedIndex];
                else
                    textauswahl.innerHTML = individuellTextsFrau[document.getElementById("job").selectedIndex];
            textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@nachname", nachname);
            textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@programme", programme);
            break;
        case "Erstellen":
            geburtstag = document.getElementById("geburtstag").value;
            ausbildungsende = document.getElementById("ausbildungsende").value;
            ausbildungsbeginn = document.getElementById("ausbildungsbeginn").value;
            
            // Azubi info
            textauswahl = document.getElementById("azubiInfoText");
            let azubiInfo = azubiInfoText;
            if(gender == 0)
                azubiInfo = azubiInfo.replace("@anrede", "Herr");
            else
                azubiInfo = azubiInfoTextFrau;
                azubiInfo = azubiInfo.replace("@anrede", "Frau");
                
            azubiInfo = azubiInfo.replace("@vorname", vorname);
            azubiInfo = azubiInfo.replace("@nachname", nachname);
            azubiInfo = azubiInfo.replace("@geburtsort", geburtsort);
            azubiInfo = azubiInfo.replace("@geburtstag", getDateString(geburtstag));
            azubiInfo = azubiInfo.replace("@ausbildungsbeginn", getDateString(ausbildungsbeginn));
            azubiInfo = azubiInfo.replace("@ausbildungsende", getDateString(ausbildungsende));
            berufText = document.getElementById("job").value;
            // Long forms of some jobs
            switch(berufText){
                case "Technischer Produktdesigner Maschinen- & Anlangenkonst":
                    berufText = "Technischer Produktdesigner Fachrichtung Maschinen- und Anlagenkonstruktion";
                    break;
                case "Technischer Produktdesignerin Maschinen- & Anlagenkonst":
                    berufText = "Technischer Produktdesignerin Fachrichtung Maschinen- und Anlagenkonstruktion";
                    break;
                case "Fachpraktiker TPD Maschinen- & Anlagenkonstr.":
                    berufText = "Fachpraktiker Technisches Produktdesign Fachrichtung Maschinen- und Anlagenkonstruktion";
                    break;
                case "Fachpraktikerin TPD Maschinen- & Anlagenkonstr.":
                    berufText = "Fachpraktikerin Technisches Produktdesign Fachrichtung Maschinen- und Anlagenkonstruktion";
                    break;
                case "Fachangestellter Medien-& Informationsdienst Bibliothek+":
                    berufText = "Fachangestellten für Medien- und Informationsdienst, Fachrichtung Bibliothek";
                    break;
                case "Fachangestellte Medien-& Informationsdienst Bibliothek":
                    berufText = "Fachangestellte für Medien- und Informationsdienst, Fachrichtung Bibliothek";
                    break;
            }
            azubiInfo = azubiInfo.replace("@ausbildungsberuf", berufText);
            textauswahl.value = azubiInfo;

            document.getElementById("srhInfoText").value = srhInfoText;

            // User has not written any custom text, use the gender specific default text
            textauswahl = document.getElementById("individuellText");
            if(document.getElementById("customTextIndividuell").innerHTML == "null" || document.getElementById("customTextIndividuell").value == ""){
                if(gender == 0)
                    textauswahl.innerHTML = individuellTexts[document.getElementById("job").selectedIndex];
                else
                    textauswahl.innerHTML = individuellTextsFrau[document.getElementById("job").selectedIndex];
                textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@nachname", nachname);
                textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@programme", programme);
                textauswahl.style.display = "none";
            }
            // User has entered custom text, write that into textarea
            else{
                textauswahl.innerHTML = document.getElementById("customTextIndividuell").value;
                textauswahl.style.display = "Block";
            }
            
            // Write selected grade text into textarea, if something is selected
            textRadios = document.getElementsByName("radioFachwissen");
            document.getElementById("fachwissenText").value = "";
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("fachwissenText").value = document.getElementById("fachwissen"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioEinsatz");
            document.getElementById("einsatzText").value = "";
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("einsatzText").value = document.getElementById("einsatz"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioArbeitsweise");
            document.getElementById("arbeitsweiseText").value = "";
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("arbeitsweiseText").value = document.getElementById("arbeitsweise"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioPensum");
            document.getElementById("pensumText").value = "";
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("pensumText").value = document.getElementById("pensum"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioArbeitserfolg");
            document.getElementById("arbeitserfolgText").value = "";
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("arbeitserfolgText").value = document.getElementById("arbeitserfolg"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioLeistung");
            document.getElementById("leistungText").value = "";
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("leistungText").value = document.getElementById("leistung"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioSoziales");
            document.getElementById("sozialesText").value = "";
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("sozialesText").value = document.getElementById("soziales"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioAbschied");
            document.getElementById("abschiedText").value = "";
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("abschiedText").value = document.getElementById("abschied"+(i+1)).innerHTML;
                }
            }
            break;
    }
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
            document.getElementById("tabFachwissen").style.backgroundColor = tabColorWrong;
            tabDone[1] = false;
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
				textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Einsatz":
            document.getElementById("tabEinsatz").style.backgroundColor = tabColorWrong;
            tabDone[2] = false;
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
				textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Arbeitsweise":
            document.getElementById("tabArbeitsweise").style.backgroundColor = tabColorWrong;
            tabDone[3] = false;
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
				textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Pensum":
            document.getElementById("tabPensum").style.backgroundColor = tabColorWrong;
            tabDone[4] = false;
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
				textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Arbeitserfolg":
            document.getElementById("tabArbeitserfolg").style.backgroundColor = tabColorWrong;
            tabDone[5] = false;
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
				textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Leistung":
            document.getElementById("tabLeistung").style.backgroundColor = tabColorWrong;
            tabDone[6] = false;
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
				textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Soziales":
            document.getElementById("tabSoziales").style.backgroundColor = tabColorWrong;
            tabDone[7] = false;
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
				textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
        case "Abschied":
            document.getElementById("tabAbschied").style.backgroundColor = tabColorWrong;
            tabDone[8] = false;
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
				textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@nachname", nachname);
                textauswahlen[i].style.display = "block";
            }
            break;
    }
}

function changeSelectText(name){
    switch(name){
        case "radioFachwissen":
            document.getElementById("tabFachwissen").style.backgroundColor = tabColorRight;
            tabDone[1] = true;
            break;
        case "radioEinsatz":
            document.getElementById("tabEinsatz").style.backgroundColor = tabColorRight;
            tabDone[2] = true;
            break;
        case "radioArbeitsweise":
            document.getElementById("tabArbeitsweise").style.backgroundColor = tabColorRight;
            tabDone[3] = true;
            break;
        case "radioPensum":
            document.getElementById("tabPensum").style.backgroundColor = tabColorRight;
            tabDone[4] = true;
            break;
        case "radioArbeitserfolg":
            document.getElementById("tabArbeitserfolg").style.backgroundColor = tabColorRight;
            tabDone[5] = true;
            break;
        case "radioLeistung":
            document.getElementById("tabLeistung").style.backgroundColor = tabColorRight;
            tabDone[6] = true;
            break;
        case "radioSoziales":
            document.getElementById("tabSoziales").style.backgroundColor = tabColorRight;
            tabDone[7] = true;
            break;
        case "radioAbschied":
            document.getElementById("tabAbschied").style.backgroundColor = tabColorRight;
            tabDone[8] = true;
            break;
    }
}

function update(){
    let gender = document.getElementById('gender');
    let job = document.getElementById('job');
    let valjob = job.options[job.selectedIndex];										
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
    currentIndex = document.getElementById('job').selectedIndex;
    switch(gender){
        case "0": 				
            document.getElementById('job').innerHTML = "";

            let jobsM = [
                'Bürokraft', 
                'Büropraktiker', 
                'Elektroniker Automatisierungstechnik',
                'Elektroniker Energie & Gebäude', 
                'Elektroniker Geräte & Systeme', 
                'Elektroniker Informations & Systemtechnik',
                'Fachangestellten Medien-& Informationsdienst Bibliothek',
                'Fachinformatiken Anwendungsentwicklung',
                'Fachinformatiken Systemintegration',
                'Fachlagerist',
                'Fachkraft für Lagerlogistik',
                'Fachkraft f. Metalltechnik FR Montagetechnik',
                'Fachpraktiker f. elektr. Geräte und Systemen',
                'Fachpraktiker f. Industriemechanik',
                'Fachpraktiker für IT-Systemelektronik',
                'Fachpraktiker TPD Maschinen- & Anlagenkonstr.',
                'Industriekaufmann',
                'Industriemechaniker FR Feinwerktechnik',
                'Informatikkaufmann',
                'IT-Systemelektroniker',
                'Kaufmann f. Büromanagement (WQ1-8)',
                'Kaufmann f. Büromanagement (WQ9-10)',
                'Kaufmann im Einzelhandel',
                'Steuerfachangestellten',
                'Technischen Produktdesigner Maschinen- & Anlangenkonst',
                'Verkäufer',
                'Verwaltungsfachangestellten',
                'Mediengestalter Bild und Ton',
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
        
            let jobsF = [
                'Bürokraft',
                'Büropraktikerin',
                'Elektronikerin Automatisierungstechnik',
                'Elektronikerin Energie & Gebäude',
                'Elektronikerin Geräte & Systeme',
                'Elektronikerin Informations & Systemtechnik',
                'Fachangestellten Medien-& Informationsdienst Bibliothek',
                'Fachinformatikerin Anwendungsentwicklung',
                'Fachinformatikerin Systemintegration',
                'Fachlageristin',
                'Fachkraft für Lagerlogistik',
                'Fachkraft f. Metalltechnik FR Montagetechnik',
                'Fachpraktikerin f. elektr. Geräte und Systemen',
                'Fachpraktikerin f. Industriemechanik',
                'Fachpraktikerin für IT-Systemelektronik',
                'Fachpraktikerin TPD Maschinen- & Anlagenkonstr.',
                'Industriekauffrau',
                'Industriemechanikerin FR Feinwerktechnik',
                'Informatikkauffrau','IT-Systemelektronikerin',
                'Kauffrau f. Büromanagement (WQ1-8)',
                'Kauffrau f. Büromanagement (WQ9-10)',
                'Kauffrau im Einzelhandel',
                'Steuerfachangestellten',
                'Technischer Produktdesignerin Maschinen- & Anlagenkonst',
                'Verkäuferin','Verwaltungsfachangestellten',
                'Mediengestalterin Bild und Ton',
                'Mediangestalterin Digital und Print'];
            
                for(i=0; i<jobsF.length; i++){
                let option = document.createElement("option");
                option.text = jobsF[i];
                    
                document.getElementById('job').add(option);
            }
            
            //console.log(jobsF.length);
            break;    
    }
    document.getElementById('job').selectedIndex = currentIndex;
    updateNachname(nachname);
    update();
}

// Set nachname to value of texbox and change value in currently displayed options
function updateNachname(nachnameNeu){
    nachname = nachnameNeu;
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
    checkDateneingabeFilled();
}

function updateProgramme(programmeNeu){
    programme = programmeNeu;
    checkDateneingabeFilled();
}

function updateVorname(voranmeNeu){
    vorname = voranmeNeu;
    checkDateneingabeFilled();
}

function updateGeburtsort(geburtsortNeu){
    geburtsort = geburtsortNeu;
    checkDateneingabeFilled();
}

function updateGeburtstag(geburtstagNeu){
    geburtstag = geburtstagNeu;
    checkDateneingabeFilled();
}

function updateAusbilderName(ausbilderNameNeu){
    ausbilderName = ausbilderNameNeu;
    checkDateneingabeFilled();
}

function updateAusbildungsbeginn(ausbildungsbeginnNeu){
    ausbildungsbeginn = ausbildungsbeginnNeu;
    checkDateneingabeFilled();
}

function updateAusbildungsende(ausbildungsendeNeu){
    ausbildungsende = ausbildungsendeNeu;
    checkDateneingabeFilled();
}

function checkDateneingabeFilled(){
    if(document.getElementById("nachname").value == "" || document.getElementById("nachname").value == null 
        || document.getElementById("vorname").value == "" || document.getElementById("vorname").value == null
        || document.getElementById("geburtsort").value == "" || document.getElementById("geburtsort") == null
        || document.getElementById("geburtstag").value == "" || document.getElementById("geburtstag") == null
        || document.getElementById("ausbilder").value == "" || document.getElementById("ausbilder") == null
        || document.getElementById("ausbildungsbeginn").value == "" || document.getElementById("ausbildungsbeginn").value == null
        || document.getElementById("ausbildungsende").value == "" || document.getElementById("ausbildungsende").value == null)
    {
        tabDone[0] = false;
        document.getElementById("tabDateneingabe").style.backgroundColor = tabColorWrong;
    }
    else{
        tabDone[0] = true;
        document.getElementById("tabDateneingabe").style.backgroundColor = tabColorRight;
    }
}

function getMonthString(monthIndex){
    monthName = "";
    switch(monthIndex){
        case "01":
            monthName = "Januar";
            break;
        case "02":
            monthName = "Februar";
            break;
        case "03":
            monthName = "März";
            break;
        case "04":
            monthName = "April";
            break;
        case "05":
            monthName = "Mai";
            break;
        case "06":
            monthName = "Juni";
            break;
        case "07":
            monthName = "Juli";
            break;
        case "08":
            monthName = "August";
            break;
        case "09":
            monthName = "September";
            break;
        case "10":
            monthName = "Oktober";
            break;
        case "11":
            monthName = "November";
            break;
        case "12":
            monthName = "Dezember";
            break;    
    }
    return monthName;
}

function getDateString(date){
    let yyyy_mm_dd = date.split('-');
    return yyyy_mm_dd[2] + ". " + getMonthString(yyyy_mm_dd[1]) + " " + yyyy_mm_dd[0]
}

function zuruecksetzen(){

    document.getElementById("pdf_printer").style.display="none"; // Print-Buttons wieder verbergen

    for(i = 0; i < tabDone.length; i++){
        tabDone[i] = false;
    }
    // Change tab from Erstellen to Dateneingabe
    document.getElementById("Erstellen").style.display = "none";
    document.getElementById("tabErstellen").className = document.getElementById("tabErstellen").className.replace(" active", "");
    document.getElementById("Dateneingabe").style.display = "block";
    document.getElementById("tabDateneingabe").className += " active";
    currentTab = "Dateneingabe";

    // Change tab colors to red
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        if(tablinks[i].innerHTML != "Individuell" && tablinks[i].innerHTML != "Erstellen"){
            tablinks[i].style.backgroundColor = tabColorWrong;
        }
    }

    // Reset left column in Dateneingabe
    document.getElementById("gender").value = "0";
    document.getElementById("nachname").value = "";
    document.getElementById("vorname").value = "";
    document.getElementById("geburtsort").value = "";
    document.getElementById("geburtstag").value = null;

    // Reset individual text
    document.getElementById("customTextIndividuell").value = "";

    // Reset grade values
    for(ci = 0; ci < categories.length; ci++){
        radioTexts = document.getElementsByName("auswahl" + categories[ci]);
        radioNoten = document.getElementsByName("radioNote" + categories[ci]);
        for(i = 0; i < radioTexts.length; i++)
            radioTexts[i].style.display = "none";
        for(i = 0; i < radioNoten.length; i++)
            radioNoten[i].checked = false;
    }
    radioTexts = document.getElementsByClassName("textbaustein");
    for(i = 0; i < radioTexts.length; i++){
        radioTexts[i].innerHTML = "";
    }
    
    // Reset final texts
    document.getElementById("azubiInfoText").value = "";
    document.getElementById("srhInfoText").value = "";
    for(i = 0; i < categories.length; i++){
        document.getElementById(categories[i].toLowerCase() + "Text").value = "";
    }

    // Reset variables
    vorname = "Max";
    nachname = "Mustermann";
    geburtsort = "";
    geburtstag = "";
}

function getBrowserName(){
    var test = function(regexp) {return regexp.test(window.navigator.userAgent)}
      switch (true) {
          case test(/edg/i): return "Microsoft Edge";
          case test(/trident/i): return "Microsoft Internet Explorer";
          case test(/firefox|fxios/i): return "Mozilla Firefox";
          case test(/opr\//i): return "Opera";
          case test(/ucbrowser/i): return "UC Browser";
          case test(/samsungbrowser/i): return "Samsung Browser";
          case test(/chrome|chromium|crios/i): return "Google Chrome";
          case test(/safari/i): return "Apple Safari";
          default: return "Other";
      }
  }

  function printDiv() // printDiv() Parameter entgegennehmen & zuweisen
  {
    // Check if all tabs have something selected
    // if not, inform user and exit function
    for(i = 0; i < tabDone.length; i++){
      if(tabDone[i] == false){
        //alert("All tabs must be green");
        //return;
      }
    }

    document.getElementById("printMe").innerHTML = `
  <table role="presentation">
    <thead>
      <tr>
        <td>
          <div class="kopfzeile-platz"></div>
        </td>
      </tr>
    </thead>

    <tbody class="report-content">
      <tr>
        <td>
          <br>
          <br>
          <h2>Ausbildungszeugnis</h2>

          <p>@azubiInfo</p>

          <p>@srhInfo</p>

          <p>@individuellText</p>

          <p>@fachwissenText</p>

          <p>@einsatzText</p>

          <p>@arbeitsweiseText</p>

          <p>@pensumText</p>

          <p>@arbeitserfolgText</p>

          <p>@leistungText</p>

          <p>@sozialesText</p>

          <p>@abschiedText</p>



          <div class="ending">
            <div class="datum">@datum</div>
            <div class="ausbildungsleiter">@ausbildungsleiter<br><br><br><br>@ausbildungsleiterName</div>
            <div class="ausbilder">@ausbilder<br><br><br><br>@ausbilderName</div>
          </div>

        </td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td>
          <div class="fusszeile-platz"></div>
        </td>
      </tr>
    </tfoot>

  </table>

  <div class="fusszeile">
    <div>
      <div class="fusszeileTitel" style="margin-left: 14.6px">Ein Unternehmen der SRH</div>
      <img class="fusszeileLogo" src="styles/shr_logo.png">
      <div class="fusszeileLogoText" style="right: 286px; bottom: 111px; text-align: right;">
        Organisation der
        <br>
        Vereinten Nationen für
        <br>
        Bildung, Wissenschaft,
        <br>
        Kultur und Kommunikation
      </div>

      <div class="fusszeileLogoText" style="right: 182px; bottom: 111px; text-align: left;">
        <b>
        Berufsbildungswerk <br>
        Neckargemünd <br>
        </b>
        Mitglied des Netzwerks der <br>
        UNESCO-Projektschulen <br>
      </div>
    </div>

    <div>
      <div class="fusszeileText" style="margin-left: 14.6px">
        <br>
        SRH Berufsbildungswerk
        <br> 
        Neckargemünd GmbH
        <br>
        Im Spitzerfeld 25
        <br>
        69151 Neckargemünd
        <br>
        Telefon<pre class="whitespace" style="font-size: 6px;">    </pre>+49 (0) 6223 89-1010
        <br>
        Telefax<pre class="whitespace" style="font-size: 6px;">    </pre>+49 (0) 6223 89-2123
      </div>

      <div class="fusszeileText" style="margin-left: 20px;">
        <br>
        Info.bbwn@srh.de
        <br>
        www.bbw-neckargemuend.de
        <br>
        Geschäftsführung:
        <br>
        Sascha Lohwaßer
      </div>

      <div class="fusszeileText" style="margin-left: 20px;">
        <br>
        HRB 335376 Amtsgericht Mannheim
        <br>
        USt.-IdNr.: DE 174 981 459
      </div>

      <div class="fusszeileText" style="float: right; margin-right: 0px;">
        <br>
        Bankverbindung:
        <br>
        Evangelische Bank eG
        <br>
        BLZ 520 604 10
        <br>
        Konto 5 010 357
        <br>
        IBAN DE 91 5206 0410 0005 0103 57
        <br>
        BIC GENODEF1EK1
      </div>
    </div>
  </div>`;
    let html = document.getElementById("printMe").innerHTML;

    let azubiInfo = document.getElementById("azubiInfoText").value;
    let srhInfo = document.getElementById("srhInfoText").value;
    let individuellText = document.getElementById("individuellText").value;
    let fachwissenText = document.getElementById("fachwissenText").value;
    let einsatzText = document.getElementById("einsatzText").value;
    let arbeitsweiseText = document.getElementById("arbeitsweiseText").value;
    let pensumText = document.getElementById("pensumText").value;
    let arbeitserfolgText = document.getElementById("arbeitserfolgText").value;
    let leistungText = document.getElementById("leistungText").value;
    let sozialesText = document.getElementById("sozialesText").value;
    let abschiedText = document.getElementById("abschiedText").value;

    let datum = "Neckargemünd, 09. Juni 2022";
    datum = "Neckargemünd, " + getDateString(ausbildungsende);
    let ausbildungsleiter = "Ausbildungsleiter";
    let ausbildungsleiterName = "Jörg Trabold";
    let ausbilder = document.getElementById("ausbilderGender").value;
    
    // Textbausteine in print div einfügen
    html = html.replace("@azubiInfo", azubiInfo);
    html = html.replace("@srhInfo", srhInfo);
    html = html.replace("@individuellText", individuellText);
    html = html.replace("@fachwissenText", fachwissenText);
    html = html.replace("@einsatzText", einsatzText);
    html = html.replace("@arbeitsweiseText", arbeitsweiseText);
    html = html.replace("@pensumText", pensumText);
    html = html.replace("@arbeitserfolgText", arbeitserfolgText);
    html = html.replace("@leistungText", leistungText);
    html = html.replace("@sozialesText", sozialesText);
    html = html.replace("@abschiedText", abschiedText);

    // Datum, Ausbildungsleiter und Ausbilder mit variablen ersetzen
    html = html.replace("@datum", datum);
    html = html.replace("@ausbildungsleiter", ausbildungsleiter);
    html = html.replace("@ausbildungsleiterName", ausbildungsleiterName);
    html = html.replace("@ausbilder", ausbilder);
    html = html.replace("@ausbilderName", ausbilderName);
    document.getElementById("printMe").innerHTML = html;

    window.print();
  }

  let azubiInfoText = "@anrede @vorname @nachname, geboren am @geburtstag in @geburtsort, hat in der Berufsbildungswerk Neckargemünd GmbH die Ausbildung vom @ausbildungsbeginn bis @ausbildungsende zum @ausbildungsberuf absolviert.";

  let azubiInfoTextFrau = "@anrede @vorname @nachname, geboren am @geburtstag in @geburtsort, hat in der Berufsbildungswerk Neckargemünd GmbH die Ausbildung vom @ausbildungsbeginn bis @ausbildungsende zur @ausbildungsberuf absolviert.";
  
  let srhInfoText = "Die SRH ist eine überregional tätige Unternehmensgruppe in den Bereichen Bildung, Gesundheit und Rehabilitation und beschäftigt insgesamt 15.000 Mitarbeiter. Dazu gehört auch die Berufsbildungswerk Neckargemünd GmbH mit rund 700 Mitarbeitern. Die Berufsbildungswerk Neckargemünd GmbH ist ein Unternehmen der außerbetrieblichen Berufsausbildung. Sie bietet vielfältige stationäre und ambulante Dienstleistungen der beruflichen Rehabilitation, der Jugendhilfe und Arbeitsmarktintegration. Darüber hinaus stehen umfangreiche medizinische, therapeutische, psychologische und sozialpädagogische Fachdienste zur Verfügung. Die Berufsbildungswerk Neckargemünd GmbH mit ihrer privaten, staatlich anerkannten Berufsschule verfügt derzeit über rund 900 Ausbildungsplätze und bildet in mehr als 40 staatlich anerkannten Berufen qualifiziert und zukunftsorientiert aus.";
  
  let individuellTexts = [
      "Während der Ausbildung konnte Herr @nachname moderne EDV-Systeme sowie die MS-Office-Programme Word, Excel, Outlook und PowerPoint zur Erledigung seiner Aufgaben intensiv nutzen und gute Kenntnisse im Umgang damit erlangen. Herr @nachname führte kaufmännische, organisatorische und verwaltende Tätigkeiten in den Abteilungen Materialwirtschaft, Absatzwirtschaft, Zahlungsverkehr, Rechnungswesen und Personalwesen aus. Er kann durch seine Mitarbeit Abläufe in Unternehmen und Verwaltungen unterstützen."
      ,
      "Während der Ausbildung konnte Herr @nachname EDV-Kenntnisse erwerben. Durch die Nutzung der MS-office-Programme Word, Excel, Outlook sowie die wiederkehrende Anwendung von PowerPoint wurden die täglichen Aufgaben erledigt und das Wissen in diesem Bereich gefestigt. Durch seine Tätigkeiten im Bereich der Materialbestellung, des Kassenbuches, der Rechnungsprüfung sowie der Büroprozesse, hat er sich ein fundiertes Wissen erarbeitet, welches er in einem Betriebspraktikum vertiefen konnte. Herr @nachname kann durch seine Mitarbeit Abläufe in Unternehmen und Verwaltungen unterstützen."
      ,
      "Während der Ausbildung zum Elektroniker für Automatisierungstechnik konnte Herr @nachname unter anderem erweiterte Programmierkenntnisse SPS TIA Portal erwerben.<br>Darüber hinaus konnte er sich weitreichende Kenntnisse in IO-Link Protokoll und Konfiguration aneignen.<br>Durch die intensive Nutzung der Software konnte Herr @nachname sehr gute SPS-Kenntnisse erlangen und im Rahmen von Projektarbeiten im Bereich Industrie 4.0 an Kollegen weitergeben."
      ,
      `Herr @nachname plante und installierte elektrotechnische Anlagen. Er montierte diese und nahm sie in Betrieb, wartete und reparierte sie. Dazu gehört zum Beispiel die Konzeption von Systemen der Energieversorgung und Gebäudetechnik, das Installieren von Beleuchtungsanlagen, Antrieben, Schalt-, Steuer- und Regelungseinrichtungen, Empfangs- und Breitbandkommunikationsanlagen und Datennetze sowie das Planen, Installieren und Anschließen von Telekommunikationsanlagen/Fernmeldeanlagen. Für Heizungs-, Lüftungs- und Klimaanlagen nahm er Steuerungs- und Regelungseinrichtungen in Betrieb. Hierfür erstellte er Steuerungsprogramme, definierte Parameter, maß elektrische Größen und testete die Systeme. Die Planung Montage und Installation von Anlagen für erneuerbare Energien, wie Photovoltaik, Energiespeicher ergänzen das Tätigkeitsprofil.
  
  Bei Wartungsarbeiten überprüfte er die elektrischen Sicherheitseinrichtungen und überprüfte die elektrische Sicherheit von Geräten, Maschinen und Anlagen mittels Messgeräten nach VDE 0100 und 0701 / 0702, ermittelte Störungsursachen und beseitigte Fehler.
      
  Er übte die Tätigkeiten unter Beachtung ökonomischer und ökologischer Aspekte sowie der einschlägigen technischen Regeln und Vorschriften auch selbständig aus.
  <dt>Während der Ausbildung erwarb er Kenntnisse in:
      <dd>- Betriebliche und technische Kommunikation, mittels Standard Bürosoftware,</dd>
      <dd>- Planen und Organisieren der Arbeit, Bewerten der Arbeitsergebnisse,</dd>
      <dd>- Einrichten des Arbeitsplatzes,</dd>
      <dd>- Montieren und Installieren,</dd>
      <dd>- Installieren von Systemkomponenten und Netzwerken,</dd>
      <dd>- Planen, Aufbauen, Messen und Analysieren, TARGET V17 mit versch. Messgeräten und Oszilloskop,</dd>
      <dd>- Prüfen der Schutzmaßnahmen, mittels Messgeräten nach VDE 0100 und VDE 0701/702,</dd>
      <dd>- Aufbauen und Prüfen von Steuerungen, mit Siemens Software LOGO! 8.1,</dd>
      <dd>- Durchführen von Serviceleistungen,
    mit dem Erwerb der: Geprüfte Fachkraft für Rauchwarnmelder nach DIN14676,</dd>
      <dd>- Analysieren von Fehlern und Instandhalten von Geräten und Systemen,</dd>
      <dd>- Konzipieren von Systemen, mittels Planungssoftware EP INSTROM,</dd>
      <dd>- Konzeption von Beleuchtungsanlagen, hier Lackierhalle mittels DIAL Software,</dd>
      <dd>- Installieren und Inbetriebnahme von Sicherheits- und Kommunikationssystemen, TELENOT Systemen,</dd>
      <dd>- Installieren und Konfigurieren von Gebäudeleit- und Fernwirkeinrichtungen, mittels KNX EIB 5.0,</dd>
      <dd>- Installieren, Parametrieren und Testen von Software, SIEMENS Step 7,</dd>
      <dd>- Prüfen und Instandhalten von Informations- und Telekommunikationssystemen AUERSWALD.</dd></dt>`
      ,
  
      `Begleitend zu den berufsspezifischen praktischen Ausbildungsinhalten, wurden die
  theoretischen Kenntnisse engverzahnt mit der Berufsfachschule vermittelt. Die betrieblichen Abläufe konnte Herr @nachname im Rahmen eines sechsmonatigen Praktikums/VAmB bei der Firma/dem Unternehmen XXXXXXXX in XXXXXXX kennenlernen.
      
  Begleitet wurde die Ausbildung durch die hardwareseitige Generierung elektronischer Schaltungen durch CAD-gestützter Applikationen wie Target!3001, unter Berücksichtigung der gültigen Normen der Leiterplattenfertigung. Die Entwicklung von Software fand in den Hochsprachen C und C++ nach den Regeln der „Unified Modeling Language“ statt. Die Konfiguration der betrieblich verwendeten Hardware (Atmel 89c51cc03) erfolgte in maschinennahem Assembler sowie in der Hochsprache C.`
      ,
      "Begleitet wurde die Ausbildung durch die hardwareseitige Generierung elektronischer Schaltungen durch CAD-gestützter Applikationen wie Target!3001, unter Berücksichtigung der gültigen Normen der Leiterplattenfertigung. Die Entwicklung von Software fand in den Hochsprachen C und C++ nach den Regeln der „Unified Modeling Language“ statt. Die Konfiguration der betrieblich verwendeten Hardware (Atmel 89c51cc03) erfolgte im maschinennahem Assembler so wie in der Hochsprache C."
      ,
      "Im Laufe der Ausbildung konnte sich Herr @nachname vertiefte Fachkenntnisse in allen Bereichen der bibliotheksspezifischen Arbeit aneignen, darunter Erwerbung, formale und inhaltliche Erschließung, bibliothekstechnische Medienbearbeitung, Beschaffen und Bereitstellen von Medien und Informationen, Benutzungsdienst, Beratung, Öffentlichkeits- und Veranstaltungsarbeit, sowie in der Nutzung der Bibliothekssoftware BibliothecaPlus von OCLC."
      ,
      "Während der Ausbildung erwarb Herr @nachname erweiterte Kenntnisse in den Programmiersprachen Java und C++. Er erstellte serverseitige Webapplikationen mit der Scriptsprache PHP und HTML/CSS. Als Datenbankmanagementsysteme wurden Microsoft Access und Oracle MySQL verwendet. Darüber hinaus konnte er sich weitreichende Anwenderkenntnisse in Microsoft Desktop- und Serverbetriebssystemen sowie Grundlagen in Linux und Netzwerktechnik aneignen."
      ,
      "Während der Ausbildung erwarb Herr @nachname erweiterte Kenntnisse in den Programmiersprachen Java sowie C++ und erstellte Webapplikationen mit der Scriptsprache PHP und HTML/CSS. Darüber hinaus konnte er sich vertiefte Kenntnisse in der Administration von Microsoft Desktop- und Serverbetriebssystemen sowie Grundlagen in Linux aneignen. Als Datenbankmanagementsysteme wurden Microsoft Access und Oracle MySQL verwendet. In der Netzwerktechnik erwarb er fundierte Kenntnisse in der Planung und Konfiguration von Netzwerken mit CISCO-Netzwerkkomponenten."
      ,
      `<dt>Im Rahmen der bisherigen Ausbildung wurden bislang folgende Kenntnisse vermittelt:
      <dd>- Kommissionierung und Verpacken von Aufträgen</dd> 
      <dd>- Wareneingangskontrolle, Bearbeitung von Retouren, Prüfung auf Vollständigkeit und Unversehrtheit</dd>
      <dd>- Einlagerung von Gütern mithilfe von Fördergeräten</dd> 
      <dd>- Persönliche Kundenbetreuung im Lager</dd>
      <dd>- Ermittlung und Durchführung von Inventurdaten</dd>
      <dd>- Sämtliche Inhalte des Ausbildungsrahmenplanes</dd></dt>`
      ,
      `<dt>Im Rahmen der bisherigen Ausbildung wurden bislang folgende Kenntnisse vermittelt:
  
      <dd>- Kommissionierung und Verpacken von Aufträgen</dd>
      <dd>- Wareneingangskontrolle, Bearbeitung von Retouren, Prüfung auf Vollständigkeit und Unversehrtheit</dd>
      <dd>- Einlagerung von Gütern mithilfe von Fördergeräten</dd>
      <dd>- Persönliche Kundenbetreuung im Lager</dd>
      <dd>- Ermittlung und Durchführung von Inventurdaten</dd>
      <dd>- Buchung des Wareneingang und Warenausgang mit Lagerverwaltungsprogramm</dd>
      <dd>- Dokumentation der Einlagerung mit spezieller Software</dd>
      <dd>- Dienstplanerstellung</dd>
      <dd>- Verantwortung in Bezug der Nachlieferungen und Sonderbestellungen</dd>
      <dd>- Sämtliche Inhalte des Ausbildungsrahmenplanes</dd></dt>`
      ,
      `Während der Ausbildung konnte Herr @nachname sich insbesondere Fertigkeiten in der Herstellung von Bauteilen mithilfe von Werkzeugmaschinen erwerben. Dazu gehörte auch die Montage und Demontage von Baugruppen sowie die Qualitätskontrolle, das Prüfen und Einstellen von Funktionen an Baugruppen.
  
  Das Überwachen und Optimieren von Arbeitsprozessen waren weitere Inhalte der Ausbildung.`
      ,
      ""
      ,
      `Während der Ausbildung hat Herr @nachname sich insbesondere Fertigkeiten in der Herstellung von Geräteteilen mithilfe von Werkzeugmaschinen erworben. Dazu gehörte die Montage und Demontage von Baugruppen für Maschinen und Produktionsanlagen sowie die Qualitätskontrolle.
  
  Auch wurden Reparaturaufgaben übernommen sowie Arbeitsprozesse überwacht.`
      ,
      ""
      ,
      `Im ersten Ausbildungsjahr wurden Herr @nachname mittels Ausbildungsmodulen und Projektarbeiten grundlegende Kenntnisse und Fertigkeiten des technischen Zeichnens und der Metalltechnik vermittelt. Schwerpunkte der fachlichen Qualifizierung war das Kennenlernen von fertigungs- und montagetechnischen Abläufen durch gezielte Projekte im Bereich Neu- und Umkonstruktion. Unter Berücksichtigung von Gestaltungsvorgaben für Bauteilformen wurden mittels CAD virtuelle Bauteile und Baugruppen, Fertigungszeichnungen und Stücklisten erstellt.
  
  Schwerpunkte der fachlichen Qualifizierung im zweiten Ausbildungsjahr waren Produktentwicklungsprozesse unter sicherheitstechnischen, ökonomischen und ökologischen Aspekten geplant und begleitet. Anschließend wurden die so erworbenen Kenntnisse und Fertigkeiten an praxisorientierten Projekten mit dem Schwerpunkt Konstruktionstechnik vertieft. Dadurch konnten Eigeninitiative, Selbstständigkeit, Teamfähigkeit und Qualitätsbewusstsein gefördert werden. Herr @nachname entwickelte zielführende Modellierungsstrategien und wandte diese an. Daraus erstellte er Datensätze und technische Dokumente, die visualisiert und präsentiert wurden.
      
  Im dritten und vierten Ausbildungsjahr wurde Herr @nachname auf die zukünftigen betrieblichen Anforderungen vorbereitet. Das Planen und kundenorientierte Durchführen von Projekten berücksichtigt Methoden des Projekt- und Qualitätsmanagements. Normen und Richtlinien zur Sicherung von Prozess- und Produktqualität wurden angewendet und durch Berechnen von mechanischen und physikalischen Größen ermittelt. Die Ausbildung schloss die umfassende Vermittlung und Anwendung von CAD-Kenntnissen sowohl in 2D als auch in 3D ein.`
      ,
      "Während der Ausbildung konnte Herr @nachname vertiefte EDV-Fachkenntnisse erwerben, insbesondere durch die intensive Nutzung der MS-Office-Programme Word, Excel, Outlook sowie PowerPoint 2010. Darüber hinaus konnte er sich weitrechende Anwenderkenntnisse in MS-Navision, sowie SAP R/3 (Module MM, SD, FI) aneignen."
      ,
      `Während der Ausbildung hat Herr @nachname sich insbesondere Fertigkeiten in der Herstellung von Bauteilen mithilfe von Werkzeugmaschinen erworben. Dazu gehört die Montage und Demontage von Baugruppen sowie die Qualitätskontrolle.
  
  Das Überwachen und Optimieren von Arbeitsprozessen waren Inhalte seiner Ausbildung, ebenso der Umgang mit modernen CNC Fertigungsmaschinen.
      
  Darüber hinaus wurden in der Steuerungstechnik der Pneumatik/Elektropneumatik weitere Anwendungskenntnisse erworben.`
      ,
      "Während der Ausbildung konnte Herr @nachname erweiterte Programmier- und Webdesignkenntnisse erwerben, insbesondere in Java und C++. Darüber hinaus konnte er sich weitreichende Anwenderkenntnisse in Microsoft Desktop- und Serverbetriebssystemen sowie Grundlagen in OS X und Linux aneignen. Durch die intensive Nutzung der MS-Office-Programme konnte Herr @nachname sehr gute Anwenderkenntnisse erlangen und im Rahmen von Mitarbeiterschulungen an Kollegen und Kolleginnen weitergeben."
      ,
      "Während der Ausbildung erwarb Herr @nachname grundlegende Kenntnisse in den Programmiersprachen Java und C++. Er erstellte Webapplikationen mit der Scriptsprache PHP und HTML/CSS. Darüber hinaus konnte er sich vertiefte Kenntnisse in der Administration von Microsoft Desktop- und Serverbetriebssystemen sowie Grundlagen in Linux aneignen. Als Datenbankmanagementsysteme wurden Microsoft Access und Oracle MySQL verwendet. In der Netzwerktechnik erwarb er fundierte Kenntnisse in der Planung und Konfiguration von Netzwerken mit CISCO-Netzwerkkomponenten. Neben Kenntnissen der Netzwerktechnik wurden auch praktische Erfahrungen in der Elektroinstallation vermittelt."
      ,
      `Herr @nachname hat im Rahmen seiner Ausbildung die Abteilungen Einkauf, Verkauf, Rechnungswesen und Personalwesen durchlaufen und eignete sich umfangreiche Fertigkeiten und Fähigkeiten an. Zudem erlangte er in seinen Wahlqualifikationen Einkauf und Logistik sowie Kaufmännische Steuerung und Kontrolle weiteres spezifisches Wissen.
  Während der Ausbildung konnte Herr @nachname vertiefte EDV-Fachkenntnisse erwerben, insbesondere durch die intensive Nutzung der MS-Office-Programme Word, Excel, Outlook sowie PowerPoint 2010. Darüber hinaus konnte er sich weitrechende Anwenderkenntnisse in SAP R/3 (Module MM, SD, FI) aneignen.`
      ,
      "In der Ausbildung zum Kaufmann für Büromanagement wurden Kenntnisse und Fertigkeiten in der elektronischen Datenverarbeitung - MS-Office: Word, Excel, Outlook, PowerPoint - vermittelt. Daneben wurden insbesondere und schwerpunktmäßig Fertigkeiten, Kenntnisse und Fähigkeiten in den Bereichen „Verwaltung und Recht“ und „öffentliche Finanzwirtschaft“ weitergegeben. Während eines ca. 7-monatigen Praktikums wurden überdies die in der kommunalen Praxis eingesetzten Programme - @programme - angewendet."
      ,
      `Im Rahmen der Ausbildung wurden folgende Kenntnisse vermittelt:
  Wareneingangskontrolle, Auszeichnung, Verräumung und Lagerhaltung der Waren nach Verkaufsoptimierungsgrundsätzen. Des Weiteren wurden Grundlagen der Verkaufsfördernden Warenpräsentation vermittelt. In praktischen Teilen wurde die Durchführung von Verkauf-/ Werbeaktionen geübt. Im Rahmen der Ausbildung wurden verschiedene Wege der Warenbeschaffung durchgesprochen und praktische Disposition über Telefon und PC geübt. Im Kassenbereich wurde die allgemeine Kassentätigkeit wie Bargeld, Bargeldlose Zahlung und Kassenabschluss vermittelt. Weiterführend kamen Grundsätze der Buchhaltung sowie die Führung eines SAP-Kassenbuches und die Durchführung einer Inventur dazu. Zur Ausbildung gehörte auch die Vermittlung von rechtlichen Grundlagen, wie Reklamation und Umtausch, Kulanz, Mindesthaltbarkeit, Geschäftsfähigkeit, Bewältigung von speziellen Verkaufs Situationen sowie die allgemeinen HACCP-Richtlinien.`
      ,
      `<dt><dd>- Lohnabrechnungen manuell und mit dem Programm DATEV Lohn- und Gehalt,</dd>
      <dd>- Einkommensteuererklärungen mit den Programmen DATEV Einkommensteuer und TAX,</dd>
      <dd>- Kleinere Buchhaltungen mit den Programmen DATEV Rewe und MMS,</dd>
      <dd>- Musterfall DATEV zur Erstellung eines Jahresabschlusses mit Steuererklärungen mit den DATEV-Programmen.</dd></dt>`
      ,
      `Im ersten Ausbildungsjahr wurden Herr @nachname mittels Ausbildungsmodulen und Projektarbeiten grundlegende Kenntnisse und Fertigkeiten des technischen Zeichnens und der Metalltechnik vermittelt. Schwerpunkte der fachlichen Qualifizierung war das Kennenlernen von fertigungs- und montagetechnischen Abläufen durch gezielte Projekte im Bereich Neu- und Umkonstruktion. Unter Berücksichtigung von Gestaltungsvorgaben für Bauteilformen wurden mittels CAD virtuelle Bauteile und Baugruppen, Fertigungszeichnungen und Stücklisten erstellt.
  
  Schwerpunkte der fachlichen Qualifizierung im zweiten Ausbildungsjahr waren Produktentwicklungsprozesse unter sicherheitstechnischen, ökonomischen und ökologischen Aspekten geplant und begleitet. Anschließend wurden die so erworbenen Kenntnisse und Fertigkeiten an praxisorientierten Projekten mit dem Schwerpunkt Konstruktionstechnik vertieft. Dadurch konnten Eigeninitiative, Selbstständigkeit, Teamfähigkeit und Qualitätsbewusstsein gefördert werden. Herr @nachname entwickelte zielführende Modellierungsstrategien und wandte diese an. Daraus erstellte er Datensätze und technische Dokumente, die visualisiert und präsentiert wurden.
      
  Im dritten und vierten Ausbildungsjahr wurde Herr @nachname auf die zukünftigen betrieblichen Anforderungen vorbereitet. Das Planen und kundenorientierte Durchführen von Projekten berücksichtigt Methoden des Projekt- und Qualitätsmanagements. Normen und Richtlinien zur Sicherung von Prozess- und Produktqualität wurden angewendet und durch Berechnen von mechanischen und physikalischen Größen ermittelt. Die Ausbildung schloss die umfassende Vermittlung und Anwendung von CAD-Kenntnissen sowohl in 2D als auch in 3D ein.
      `,
      `Im Rahmen der Ausbildung wurden folgende Kenntnisse vermittelt:
  Wareneingangskontrolle, Auszeichnung, Verräumung und Lagerhaltung der Waren nach Verkaufsoptimierungsgrundsätzen. Des Weiteren wurden Grundlagen der Verkaufsfördernden Warenpräsentation vermittelt. In praktischen Teilen wurde die Durchführung von Verkauf-/ Werbeaktionen geübt. Im Kassenbereich wurde die allgemeine Kassentätigkeit wie Bargeld, Bargeldlose Zahlung und Kassenabschluss vermittelt. Zur Ausbildung gehörte auch die Vermittlung von rechtlichen Grundlagen, wie Reklamation und Umtausch, Mindesthaltbarkeit, Geschäftsfähigkeit sowie die allgemeinen HACCP-Richtlinien.
      `,
      "In der Ausbildung zum Verwaltungsfachangestellten wurden insbesondere Kenntnisse in der Rechtsanwendung in den Bereichen Organisation, Personalwesen, Finanzwesen und Sozialrecht vermittelt und berufliche Inhalte vertraut gemacht. Weiterhin wurden Fertigkeiten und Kenntnisse der wichtigsten MS-Office-Produkte, wie Word, Excel, Outlook und auch PowerPoint weitergegeben. Während eines 6-monatigen Praktikums wurden überdies die in der kommunalen Praxis eingesetzten Programme - @programme - angewendet."
      ,
      `Während der Ausbildung konnte Herr @nachname vertiefte Programmkenntnisse erwerben, insbesondere durch die intensive Nutzung der Programme Final Cut 10, Adobe After Effects, Cubase sowie dem Programm DramaQueen zur Drehbucherstellung. Bei Liveproduktionen wurde er an der Bildregie und als Kameramann eingesetzt. Dort lernte er unter realen Arbeitsbedingungen die Abläufe von Liveproduktionen kennen.
  
  Bei allen Produktionen zeigte Herr @nachname großes Interesse und überzeugte durch seine gewissenhafte, analytische und präzise Mitarbeit, unter anderem bei der Filmproduktion eines Imagefilms für das Technische Hilfswerk für die er die gesamte Leitung übernahm.
      
  Für die Schauspielproduktion Der Prozess des Theater und Orchester Heidelberg produzierte er die Videohintergründe sowie die Einspieler. Er war während der gesamten dreimonatigen Spielzeit als Kameramann vor und hinter der Bühne tätig. Beim Entstehungsprozess arbeitete er eng mit dem Team der Schauspielproduktion zusammen um die technische Umsetzung zu gestalten.
      
  Im Jahresprojekt GoTango übernahm er die Planung, Regie und den Live-Schnitt während der Veranstaltung. Das Multimedia-Event war mit 500 Besuchern ein voller Erfolg.`
      ,
      "Während der Ausbildungszeit konnte Herr @nachname vertiefte Fachkenntnisse erwerben, insbesondere durch die Adobe Programme InDesign, Illustrator, sowie im EBV Bereich mit Photoshop. Mit Hilfe dieses Wissens konnte er seine kreativen Stärken optimal in die Auftragsbearbeitung einfließen lassen. Er konnte Kundenwünsche schnell erfassen und lieferte so sehr effektiv passgenaue Lösungen. Darüber hinaus konnte er weitreichende Anwenderkenntnisse mit dem Apple iPad und dem digitalen Arbeiten damit erlangen. Insbesondere im Bereich Gestaltung zeigte Herr @nachname großes Interesse und überzeugte durch seine kreative, gewissenhafte, analytische und präzise Mitarbeit.",
  ]
  let individuellTextsFrau = [
      `Während der Ausbildung konnte Frau @nachname moderne EDV-Systeme sowie die MS-Office-Programme Word, Excel, Outlook und PowerPoint zur Erledigung ihrer Aufgaben intensiv nutzen und gute Kenntnisse im Umgang damit erlangen. Frau @nachname führte kaufmännische, organisatorische und verwaltende Tätigkeiten in den Abteilungen Materialwirtschaft, Absatzwirtschaft, Zahlungsverkehr, Rechnungswesen und Personalwesen aus. Sie kann durch ihre Mitarbeit Abläufe in Unternehmen und Verwaltungen unterstützen.`
      ,
      `Während der Ausbildung konnte Frau @nachname EDV-Kenntnisse erwerben. Durch die Nutzung der MS-office-Programme Word, Excel, Outlook sowie die wiederkehrende Anwendung von PowerPoint wurden die täglichen Aufgaben erledigt und das Wissen in diesem Bereich gefestigt. Durch ihre Tätigkeiten im Bereich der Materialbestellung, des Kassenbuches, der Rechnungsprüfung sowie der Büroprozesse, hat sie sich ein fundiertes Wissen erarbeitet, welches sie in einem Betriebspraktikum vertiefen konnte. Frau @nachname kann durch ihre Mitarbeit Abläufe in Unternehmen und Verwaltungen unterstützen.`
      ,
      `Während der Ausbildung zur Elektronikerin für Automatisierungstechnik konnte Frau @nachname unter anderem erweiterte Programmierkenntnisse SPS TIA Portal erwerben.
  Darüber hinaus konnte sie sich weitreichende Kenntnisse in IO-Link Protokoll und Konfiguration aneignen.
  Durch die intensive Nutzung der Software konnte Frau @nachname sehr gute SPS-Kenntnisse erlangen und im Rahmen von Projektarbeiten im Bereich Industrie 4.0 an Kollegen weitergeben.`
      ,
      `Frau @nachname plante und installierte elektrotechnische Anlagen. Sie montierte diese und nahm sie in Betrieb, wartete und reparierte sie. Dazu gehört zum Beispiel die Konzeption von Systemen der Energieversorgung und Gebäudetechnik, das Installieren von Beleuchtungsanlagen, Antrieben, Schalt-, Steuer- und Regelungseinrichtungen, Empfangs- und Breitbandkommunikationsanlagen und Datennetze sowie das Planen, Installieren und Anschließen von Telekommunikationsanlagen/Fernmeldeanlagen. Für Heizungs-, Lüftungs- und Klimaanlagen nahm sie Steuerungs- und Regelungseinrichtungen in Betrieb. Hierfür erstellte sie Steuerungsprogramme, definierte Parameter, maß elektrische Größen und testete die Systeme. Die Planung Montage und Installation von Anlagen für erneuerbare Energien, wie Photovoltaik, Energiespeicher ergänzen das Tätigkeitsprofil.
  
  Bei Wartungsarbeiten überprüfte sie die elektrischen Sicherheitseinrichtungen und überprüfte die elektrische Sicherheit von Geräten, Maschinen und Anlagen mittels Messgeräten nach VDE 0100 und 0701 / 0702, ermittelte Störungsursachen und beseitigte Fehler.
      
  Sie übte die Tätigkeiten unter Beachtung ökonomischer und ökologischer Aspekte sowie der einschlägigen technischen Regeln und Vorschriften auch selbständig aus.
      <dt>Während der Ausbildung erwarb sie Kenntnisse in:
        <dd>- Betriebliche und technische Kommunikation, mittels Standard Bürosoftware,</dd>
        <dd>- Planen und Organisieren der Arbeit, Bewerten der Arbeitsergebnisse,</dd>
        <dd>- Einrichten des Arbeitsplatzes,</dd>
        <dd>- Montieren und Installieren,</dd>
        <dd>- Installieren von Systemkomponenten und Netzwerken,</dd>
        <dd>- Planen, Aufbauen, Messen und Analysieren, TARGET V17 mit versch. Messgeräten und Oszilloskop,</dd>
        <dd>- Prüfen der Schutzmaßnahmen, mittels Messgeräten nach VDE 0100 und VDE 0701/702,</dd>
        <dd>- Aufbauen und Prüfen von Steuerungen, mit Siemens Software LOGO! 8.1,</dd>
        <dd>- Durchführen von Serviceleistungen,
    mit dem Erwerb der: Geprüfte Fachkraft für Rauchwarnmelder nach DIN14676,</dd>
        <dd>- Analysieren von Fehlern und Instandhalten von Geräten und Systemen,</dd>
        <dd>- Konzipieren von Systemen, mittels Planungssoftware EP INSTROM,</dd>
        <dd>- Konzeption von Beleuchtungsanlagen, hier Lackierhalle mittels DIAL Software,</dd>
        <dd>- Installieren und Inbetriebnahme von Sicherheits- und Kommunikationssystemen, TELENOT Systemen,</dd>
        <dd>- Installieren und Konfigurieren von Gebäudeleit- und Fernwirkeinrichtungen, mittels KNX EIB 5.0,</dd>
        <dd>- Installieren, Parametrieren und Testen von Software, SIEMENS Step 7,</dd>
        <dd>- Prüfen und Instandhalten von Informations- und Telekommunikationssystemen AUERSWALD.</dd></dt>`
      ,
      `Begleitend zu den berufsspezifischen praktischen Ausbildungsinhalten, wurden die
  theoretischen Kenntnisse engverzahnt mit der Berufsfachschule vermittelt. Die betrieblichen Abläufe konnte Frau @nachname im Rahmen eines sechsmonatigen Praktikums/VAmB bei der Firma/dem Unternehmen XXXXXXXX in XXXXXXX kennenlernen.
      
  Begleitet wurde die Ausbildung durch die hardwareseitige Generierung elektronischer Schaltungen durch CAD-gestützter Applikationen wie Target!3001, unter Berücksichtigung der gültigen Normen der Leiterplattenfertigung. Die Entwicklung von Software fand in den Hochsprachen C und C++ nach den Regeln der „Unified Modeling Language“ statt. Die Konfiguration der betrieblich verwendeten Hardware (Atmel 89c51cc03) erfolgte in maschinennahem Assembler sowie in der Hochsprache C.`
      ,
      `Begleitet wurde die Ausbildung durch die hardwareseitige Generierung elektronischer Schaltungen durch CAD-gestützter Applikationen wie Target!3001, unter Berücksichtigung der gültigen Normen der Leiterplattenfertigung. Die Entwicklung von Software fand in den Hochsprachen C und C++ nach den Regeln der „Unified Modeling Language“ statt. Die Konfiguration der betrieblich verwendeten Hardware (Atmel 89c51cc03) erfolgte im maschinennahem Assembler so wie in der Hochsprache C.`
      ,
      `Im Laufe der Ausbildung konnte sich Frau @nachname vertiefte Fachkenntnisse in allen Bereichen der bibliotheksspezifischen Arbeit aneignen, darunter Erwerbung, formale und inhaltliche Erschließung, bibliothekstechnische Medienbearbeitung, Beschaffen und Bereitstellen von Medien und Informationen, Benutzungsdienst, Beratung, Öffentlichkeits- und Veranstaltungsarbeit, sowie in der Nutzung der Bibliothekssoftware BibliothecaPlus von OCLC.`
      ,
      `Während der Ausbildung erwarb Frau @nachname erweiterte Kenntnisse in den Programmiersprachen Java und C++. Sie erstellte serverseitige Webapplikationen mit der Scriptsprache PHP und HTML/CSS. Als Datenbankmanagementsysteme wurden Microsoft Access und Oracle MySQL verwendet. Darüber hinaus konnte sie sich weitreichende Anwenderkenntnisse in Microsoft Desktop- und Serverbetriebssystemen sowie Grundlagen in Linux und Netzwerktechnik aneignen.`
      ,
      `Während der Ausbildung erwarb Frau @nachname erweiterte Kenntnisse in den Programmiersprachen Java sowie C++ und erstellte Webapplikationen mit der Scriptsprache PHP und HTML/CSS. Darüber hinaus konnte sie sich vertiefte Kenntnisse in der Administration von Microsoft Desktop- und Serverbetriebssystemen sowie Grundlagen in Linux aneignen. Als Datenbankmanagementsysteme wurden Microsoft Access und Oracle MySQL verwendet. In der Netzwerktechnik erwarb sie fundierte Kenntnisse in der Planung und Konfiguration von Netzwerken mit CISCO-Netzwerkkomponenten.`
      ,
      `<dt>Im Rahmen der bisherigen Ausbildung wurden bislang folgende Kenntnisse vermittelt:
      <dd>- Kommissionierung und Verpacken von Aufträgen</dd>
      <dd>- Wareneingangskontrolle, Bearbeitung von Retouren, Prüfung auf Vollständigkeit und Unversehrtheit</dd>
      <dd>- Einlagerung von Gütern mithilfe von Fördergeräten</dd> 
      <dd>- Persönliche Kundenbetreuung im Lager</dd>
      <dd>- Ermittlung und Durchführung von Inventurdaten </dd>
      <dd>- Sämtliche Inhalte des Ausbildungsrahmenplanes</dd></dt>`
      ,
      `<dt>Im Rahmen der bisherigen Ausbildung wurden bislang folgende Kenntnisse vermittelt:
  
      <dd>- Kommissionierung und Verpacken von Aufträgen</dd>
      <dd>- Wareneingangskontrolle,  Bearbeitung von Retouren, Prüfung auf Vollständigkeit und Unversehrtheit</dd>
      <dd>- Einlagerung von Gütern mithilfe von Fördergeräten</dd>
      <dd>- Persönliche Kundenbetreuung im Lager</dd>
      <dd>- Ermittlung und Durchführung von Inventurdaten</dd>
      <dd>- Buchung des Wareneingang und Warenausgang mit Lagerverwaltungsprogramm</dd>
      <dd>- Dokumentation der Einlagerung mit spezieller Software</dd>
      <dd>- Dienstplanerstellung</dd>
      <dd>- Verantwortung in Bezug der Nachlieferungen und Sonderbestellungen</dd>
      <dd>- Sämtliche Inhalte des Ausbildungsrahmenplanes</dd></dt>`
      ,
      `Während der Ausbildung konnte Frau @nachname sich insbesondere Fertigkeiten in der Herstellung von Bauteilen mithilfe von Werkzeugmaschinen erwerben. Dazu gehörte auch die Montage und Demontage von Baugruppen sowie die Qualitätskontrolle, das Prüfen und Einstellen von Funktionen an Baugruppen.
  
  Das Überwachen und Optimieren von Arbeitsprozessen waren weitere Inhalte der Ausbildung.`
      ,
      ``
      ,
      `Während der Ausbildung hat Frau @nachname sich insbesondere Fertigkeiten in der Herstellung von Geräteteilen mithilfe von Werkzeugmaschinen erworben. Dazu gehörte die Montage und Demontage von Baugruppen für Maschinen und Produktionsanlagen sowie die Qualitätskontrolle.
  
  Auch wurden Reparaturaufgaben übernommen sowie Arbeitsprozesse überwacht.`
      ,
      ``
      ,
      `Im ersten Ausbildungsjahr wurden Frau @nachname mittels Ausbildungsmodulen und Projektarbeiten grundlegende Kenntnisse und Fertigkeiten des technischen Zeichnens und der Metalltechnik vermittelt. Schwerpunkte der fachlichen Qualifizierung war das Kennenlernen von fertigungs- und montagetechnischen Abläufen durch gezielte Projekte im Bereich Neu- und Umkonstruktion. Unter Berücksichtigung von Gestaltungsvorgaben für Bauteilformen wurden mittels CAD virtuelle Bauteile und Baugruppen, Fertigungszeichnungen und Stücklisten erstellt.
  
  Schwerpunkte der fachlichen Qualifizierung im zweiten Ausbildungsjahr waren Produktentwicklungsprozesse unter sicherheitstechnischen, ökonomischen und ökologischen Aspekten geplant und begleitet. Anschließend wurden die so erworbenen Kenntnisse und Fertigkeiten an praxisorientierten Projekten mit dem Schwerpunkt Konstruktionstechnik vertieft. Dadurch konnten Eigeninitiative, Selbstständigkeit, Teamfähigkeit und Qualitätsbewusstsein gefördert werden. Frau @nachname entwickelte zielführende Modellierungsstrategien und wandte diese an. Daraus erstellte sie Datensätze und technische Dokumente, die visualisiert und präsentiert wurden.
      
  Im dritten und vierten Ausbildungsjahr wurde Frau @nachname auf die zukünftigen betrieblichen Anforderungen vorbereitet. Das Planen und kundenorientierte Durchführen von Projekten berücksichtigt Methoden des Projekt- und Qualitätsmanagements. Normen und Richtlinien zur Sicherung von Prozess- und Produktqualität wurden angewendet und durch Berechnen von mechanischen und physikalischen Größen ermittelt. Die Ausbildung schloss die umfassende Vermittlung und Anwendung von CAD-Kenntnissen sowohl in 2D als auch in 3D ein.`
      ,
      `Während der Ausbildung konnte Frau @nachname vertiefte EDV-Fachkenntnisse erwerben, insbesondere durch die intensive Nutzung der MS-Office-Programme Word, Excel, Outlook sowie PowerPoint 2010. Darüber hinaus konnte sie sich weitrechende Anwenderkenntnisse in MS-Navision, sowie SAP R/3 (Module MM, SD, FI) aneignen.`
      ,
      `Während der Ausbildung hat Frau @nachname sich insbesondere Fertigkeiten in der Herstellung von Bauteilen mithilfe von Werkzeugmaschinen erworben. Dazu gehört die Montage und Demontage von Baugruppen sowie die Qualitätskontrolle.
  
  Das Überwachen und Optimieren von Arbeitsprozessen waren Inhalte ihrer Ausbildung, ebenso der Umgang mit modernen CNC Fertigungsmaschinen.
      
  Darüber hinaus wurden in der Steuerungstechnik der Pneumatik/Elektropneumatik weitere Anwendungskenntnisse erworben.`
      ,
      `Während der Ausbildung konnte Frau @nachname erweiterte Programmier- und Webdesignkenntnisse erwerben, insbesondere in Java und C++. Darüber hinaus konnte sie sich weitreichende Anwenderkenntnisse in Microsoft Desktop- und Serverbetriebssystemen sowie Grundlagen in OS X und Linux aneignen. Durch die intensive Nutzung der MS-Office-Programme konnte Frau @nachname sehr gute Anwenderkenntnisse erlangen und im Rahmen von Mitarbeiterschulungen an Kollegen und Kolleginnen weitergeben.`
      ,
      `Während der Ausbildung erwarb Frau @nachname grundlegende Kenntnisse in den Programmiersprachen Java und C++. Sie erstellte Webapplikationen mit der Scriptsprache PHP und HTML/CSS. Darüber hinaus konnte sie sich vertiefte Kenntnisse in der Administration von Microsoft Desktop- und Serverbetriebssystemen sowie Grundlagen in Linux aneignen. Als Datenbankmanagementsysteme wurden Microsoft Access und Oracle MySQL verwendet. In der Netzwerktechnik erwarb sie fundierte Kenntnisse in der Planung und Konfiguration von Netzwerken mit CISCO-Netzwerkkomponenten. Neben Kenntnissen der Netzwerktechnik wurden auch praktische Erfahrungen in der Elektroinstallation vermittelt.`
      ,
      `Frau @nachname hat im Rahmen ihrer Ausbildung die Abteilungen Einkauf, Verkauf, Rechnungswesen und Personalwesen durchlaufen und eignete sich umfangreiche Fertigkeiten und Fähigkeiten an. Zudem erlangte sie in ihren Wahlqualifikationen Einkauf und Logistik sowie Kaufmännische Steuerung und Kontrolle weiteres spezifisches Wissen.
  Während der Ausbildung konnte Frau @nachname vertiefte EDV-Fachkenntnisse erwerben, insbesondere durch die intensive Nutzung der MS-Office-Programme Word, Excel, Outlook sowie PowerPoint 2010. Darüber hinaus konnte sie sich weitrechende Anwenderkenntnisse in SAP R/3 (Module MM, SD, FI) aneignen.`
      ,
      `In der Ausbildung zur Kauffrau für Büromanagement wurden Kenntnisse und Fertigkeiten in der elektronischen Datenverarbeitung - MS-Office: Word, Excel, Outlook, PowerPoint - vermittelt. Daneben wurden insbesondere und schwerpunktmäßig Fertigkeiten, Kenntnisse und Fähigkeiten in den Bereichen „Verwaltung und Recht“ und „öffentliche Finanzwirtschaft“ weitergegeben. Während eines ca. 7-monatigen Praktikums wurden überdies die in der kommunalen Praxis eingesetzten Programme - @programme - angewendet.`
      ,
      `Im Rahmen der Ausbildung wurden folgende Kenntnisse vermittelt:
  Wareneingangskontrolle, Auszeichnung, Verräumung und Lagerhaltung der Waren nach Verkaufsoptimierungsgrundsätzen. Des Weiteren wurden Grundlagen der Verkaufsfördernden Warenpräsentation vermittelt. In praktischen Teilen wurde die Durchführung von Verkauf-/ Werbeaktionen geübt. Im Rahmen der Ausbildung wurden verschiedene Wege der Warenbeschaffung durchgesprochen und praktische Disposition über Telefon und PC geübt. Im Kassenbereich wurde die allgemeine Kassentätigkeit wie Bargeld, Bargeldlose Zahlung und Kassenabschluss vermittelt. Weiterführend kamen Grundsätze der Buchhaltung sowie die Führung eines SAP-Kassenbuches und die Durchführung einer Inventur dazu. Zur Ausbildung gehörte auch die Vermittlung von rechtlichen Grundlagen, wie Reklamation und Umtausch, Kulanz, Mindesthaltbarkeit, Geschäftsfähigkeit, Bewältigung von speziellen Verkaufs Situationen sowie die allgemeinen HACCP-Richtlinien.`
      ,
      `<dt><dd>- Lohnabrechnungen manuell und mit dem Programm DATEV Lohn- und Gehalt,</dd>
      <dd>- Einkommensteuererklärungen mit den Programmen DATEV Einkommensteuer und TAX,</dd>
      <dd>- Kleinere Buchhaltungen mit den Programmen DATEV Rewe und MMS,</dd>
      <dd>- Musterfall DATEV zur Erstellung eines Jahresabschlusses mit Steuererklärungen mit den DATEV-Programmen.</dd></dt>`
      ,
      `Im ersten Ausbildungsjahr wurden Frau @nachname mittels Ausbildungsmodulen und Projektarbeiten grundlegende Kenntnisse und Fertigkeiten des technischen Zeichnens und der Metalltechnik vermittelt. Schwerpunkte der fachlichen Qualifizierung war das Kennenlernen von fertigungs- und montagetechnischen Abläufen durch gezielte Projekte im Bereich Neu- und Umkonstruktion. Unter Berücksichtigung von Gestaltungsvorgaben für Bauteilformen wurden mittels CAD virtuelle Bauteile und Baugruppen, Fertigungszeichnungen und Stücklisten erstellt.
  
  Schwerpunkte der fachlichen Qualifizierung im zweiten Ausbildungsjahr waren Produktentwicklungsprozesse unter sicherheitstechnischen, ökonomischen und ökologischen Aspekten geplant und begleitet. Anschließend wurden die so erworbenen Kenntnisse und Fertigkeiten an praxisorientierten Projekten mit dem Schwerpunkt Konstruktionstechnik vertieft. Dadurch konnten Eigeninitiative, Selbstständigkeit, Teamfähigkeit und Qualitätsbewusstsein gefördert werden. Frau @nachname entwickelte zielführende Modellierungsstrategien und wandte diese an. Daraus erstellte sie Datensätze und technische Dokumente, die visualisiert und präsentiert wurden.
      
  Im dritten und vierten Ausbildungsjahr wurde Frau @nachname auf die zukünftigen betrieblichen Anforderungen vorbereitet. Das Planen und kundenorientierte Durchführen von Projekten berücksichtigt Methoden des Projekt- und Qualitätsmanagements. Normen und Richtlinien zur Sicherung von Prozess- und Produktqualität wurden angewendet und durch Berechnen von mechanischen und physikalischen Größen ermittelt. Die Ausbildung schloss die umfassende Vermittlung und Anwendung von CAD-Kenntnissen sowohl in 2D als auch in 3D ein.`
      ,
      `Im Rahmen der Ausbildung wurden folgende Kenntnisse vermittelt:
  Wareneingangskontrolle, Auszeichnung, Verräumung und Lagerhaltung der Waren nach Verkaufsoptimierungsgrundsätzen. Des Weiteren wurden Grundlagen der Verkaufsfördernden Warenpräsentation vermittelt. In praktischen Teilen wurde die Durchführung von Verkauf-/ Werbeaktionen geübt. Im Kassenbereich wurde die allgemeine Kassentätigkeit wie Bargeld, Bargeldlose Zahlung und Kassenabschluss vermittelt. Zur Ausbildung gehörte auch die Vermittlung von rechtlichen Grundlagen, wie Reklamation und Umtausch, Mindesthaltbarkeit, Geschäftsfähigkeit sowie die allgemeinen HACCP-Richtlinien.`
      ,
      `In der Ausbildung zur Verwaltungsfachangestellten wurden insbesondere Kenntnisse in der Rechtsanwendung in den Bereichen Organisation, Personalwesen, Finanzwesen und Sozialrecht vermittelt und berufliche Inhalte vertraut gemacht. Weiterhin wurden Fertigkeiten und Kenntnisse der wichtigsten MS-Office-Produkte, wie Word, Excel, Outlook und auch PowerPoint weitergegeben. Während eines 6-monatigen Praktikums wurden überdies die in der kommunalen Praxis eingesetzten Programme - @programme - angewendet.`
      ,
      `Während der Ausbildung konnte Frau @nachname vertiefte Programmkenntnisse erwerben, insbesondere durch die intensive Nutzung der Programme Final Cut 10, Adobe After Effects, Cubase sowie dem Programm DramaQueen zur Drehbucherstellung. Bei Liveproduktionen wurde sie an der Bildregie und als Kamerafrau eingesetzt. Dort lernte sie unter realen Arbeitsbedingungen die Abläufe von Liveproduktionen kennen.
  
  Bei allen Produktionen zeigte Frau @nachname großes Interesse und überzeugte durch ihre gewissenhafte, analytische und präzise Mitarbeit, unter anderem bei der Filmproduktion eines Imagefilms für das Technische Hilfswerk für die sie die gesamte Leitung übernahm.
      
  Für die Schauspielproduktion Der Prozess des Theater und Orchester Heidelberg produzierte sie die Videohintergründe sowie die Einspieler. Sie war während der gesamten dreimonatigen Spielzeit als Kamerafrau vor und hinter der Bühne tätig. Beim Entstehungsprozess arbeitete sie eng mit dem Team der Schauspielproduktion zusammen um die technische Umsetzung zu gestalten.
      
  Im Jahresprojekt GoTango übernahm sie die Planung, Regie und den Live-Schnitt während der Veranstaltung. Das Multimedia-Event war mit 500 Besuchern ein voller Erfolg.`
      ,
      `Während der Ausbildungszeit konnte Frau @nachname vertiefte Fachkenntnisse erwerben, insbesondere durch die Adobe Programme InDesign, Illustrator, sowie im EBV Bereich mit Photoshop. Mit Hilfe dieses Wissens konnte sie ihre kreativen Stärken optimal in die Auftragsbearbeitung einfließen lassen. Sie konnte Kundenwünsche schnell erfassen und lieferte so sehr effektiv passgenaue Lösungen. Darüber hinaus konnte sie weitreichende Anwenderkenntnisse mit dem Apple iPad und dem digitalen Arbeiten damit erlangen. Insbesondere im Bereich Gestaltung zeigte Frau @nachname großes Interesse und überzeugte durch ihre kreative, gewissenhafte, analytische und präzise Mitarbeit.`
  ]
  
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
          "Herr @nachname hat ein detailliertes Fachwissen, das er beim Auftreten neuer Fragen und Entwicklungen sicher einsetzte. Er aktualisierte sein Wissen und hat die erworbenen Kenntnisse gut praktisch umgesetzt."
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
          "Frau @nachname hat ein detailliertes Fachwissen, das sie beim Auftreten neuer Fragen und Entwicklungen sicher einsetzte. Sie aktualisierte ihr Wissen und hat die erworbenen Kenntnisse gut praktisch umgesetzt."
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
          "Wegen seiner freundlichen und zuvorkommenden Art wurde er von Kunden, Vorgesetzten und Kollegen stets hochgeschätzt und respektiert."
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
          "Wegen ihrer freundlichen und zuvorkommenden Art wurde sie von Kunden, Vorgesetzten und Kollegen stets hochgeschätzt und respektiert."
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
  