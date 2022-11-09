let currentTab = "Fachwissen";

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

            // User has not written any custom text, use the gender specific default text
            textauswahl = document.getElementById("individuellText");
            if(document.getElementById("customTextIndividuell").innerHTML == "null" || document.getElementById("customTextIndividuell").value == ""){
                if(gender == 0)
                    textauswahl.innerHTML = individuellTexts[document.getElementById("job").selectedIndex];
                else
                    textauswahl.innerHTML = individuellTextsFrau[document.getElementById("job").selectedIndex];
                textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@nachname", nachname);
                textauswahl.innerHTML = textauswahl.innerHTML.replaceAll("@programme", programme);
            }
            // User has entered custom text, write that into textarea
            else{
                textauswahl.innerHTML = document.getElementById("customTextIndividuell").value;
            }
            
            // Grades
            textRadios = document.getElementsByName("radioFachwissen");
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("fachwissenText").value = document.getElementById("fachwissen"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioEinsatz");
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("einsatzText").value = document.getElementById("einsatz"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioArbeitsweise");
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("arbeitsweiseText").value = document.getElementById("arbeitsweise"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioPensum");
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("pensumText").value = document.getElementById("pensum"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioArbeitserfolg");
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("arbeitserfolgText").value = document.getElementById("arbeitserfolg"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioLeistung");
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("leistungText").value = document.getElementById("leistung"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioSoziales");
            for(i = 0; i < textRadios.length; i++){
                if(textRadios[i].checked == true){
                    document.getElementById("sozialesText").value = document.getElementById("soziales"+(i+1)).innerHTML;
                }
            }
            textRadios = document.getElementsByName("radioAbschied");
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
                'Fachangestellter Medien-& Informationsdienst Bibliothek',
                'Fachinformatiker Anwendungsentwicklung',
                'Fachinformatiker Systemintegration',
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
                'Steuerfachangestellter',
                'Technischer Produktdesigner Maschinen- & Anlangenkonst',
                'Verkäufer',
                'Verwaltungsfachangestellter',
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
                'Büropraktikerin','Elektronikerin Automatisierungstechnik','Elektronikerin Energie & Gebäude',
                'Elektronikerin Geräte & Systeme','Elektronikerin Informations & Systemtechnik','Fachangestellte Medien-& Informationsdienst Bibliothek',
                'Fachinformatikerin Anwendungsentwicklung','Fachinformatikerin Systemintegration','Fachlageristin','Fachkraft für Lagerlogistik',
                'Fachkraft f. Metalltechnik FR Montagetechnik','Fachpraktikerin f. elektr. Geräte und Systemen','Fachpraktikerin f. Industriemechanik',
                'Fachpraktikerin für IT-Systemelektronik','Fachpraktikerin TPD Maschinen- & Anlagenkonstr.','Industriekauffrau',
                'Industriemechanikerin FR Feinwerktechnik','Informatikkauffrau','IT-Systemelektronikerin','Kauffrau f. Büromanagement (WQ1-8)',
                'Kauffrau f. Büromanagement (WQ9-10)','Kauffrau im Einzelhandel','Steuerfachangestellte',
                'Technischer Produktdesignerin Maschinen- & Anlagenkonst','Verkäuferin','Verwaltungsfachangestellte','Mediengestalterin Bild und Ton',
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
}

function updateProgramme(programmeNeu){
    programme = programmeNeu;
}

function updateVorname(voranmeNeu){
    vorname = voranmeNeu;
}

function updateGeburtsort(geburtsortNeu){
    geburtsort = geburtsortNeu;
}

function updateGeburtstag(geburtstagNeu){
    geburtstag = geburtstagNeu;
}

function updateAusbilderName(ausbilderNameNeu){
    ausbilderName = ausbilderNameNeu;
}

function updateAusbildungsbeginn(ausbildungsbeginnNeu){
    ausbildungsbeginn = ausbildungsbeginnNeu;
}

function updateAusbildungsende(ausbildungsendeNeu){
    ausbildungsende = ausbildungsendeNeu;
}

function eraseval(){
    sessionStorage.clear();
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