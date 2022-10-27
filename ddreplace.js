function xFunction(sel, y) {
    var text = sel.options[sel.selectedIndex].value;  //send to dropdown-text fx

    var x = document.getElementById("txtBst");
    x.disabled = false;

    editBewertungsTextBaustein(sel.value, y);
}
function editBewertungsTextBaustein(note, y) {
    let x = -1;
    const texte = [];
    switch (note) {
        case '0': //Sehr Gut
            x = 3;
            texte [0]= "Herr Mustermann verfügt über ein sehr großes und beachtliches Fachwissen und fundierte Fachkenntnisse. Er beherrschte seinen Arbeitsbereich stets umfassend und sicher, hatte oft neue Ideen und fand optimale Lösungen.";
            texte [1]= "Er besitzt ein äußerst solides Fachwissen, das er zur Lösung seiner Aufgaben stets sehr sicher und erfolgreich einsetzte. Daher war Herr Mustermann in unserem Hause ein allseits geschätzter Ansprechpartner bei allen fachlichen Problemstellungen.";
            texte [2]= "Herr Mustermann besitzt ein umfassendes und hervorragendes, jederzeit verfügbares Fachwissen, mit dessen Hilfe er auch überaus schwierige Fragen sehr erfolgreich löste. Er verband exzellente technische Kompetenz mit ausgezeichnetem wirtschaftlichem Sachverstand.";
            break;
        case '1': //Gut
            x = 4;
            texte [0]= "Herr Mustermann verfügt über ein großes und beachtliches Fachwissen. Er beherrschte seinen Arbeitsbereich umfassend und überdurchschnittlich, fand gute Lösungen und hatte neue Ideen.";
            texte [1]= "Er verfügt über ein solides Fachwissen, das er zur Lösung seiner Aufgaben stets sicher und wirksam einsetzte. Daher war Herr Mustermann in unserem Hause ein allseits geschätzter Ansprechpartner bei allen fachlichen Problemstellungen.";
            texte [2]= "Herr Mustermann besitzt ein umfassendes und gutes, jederzeit verfügbares Fachwissen, mit dessen Hilfe er auch schwierige Fragen erfolgreich löste. Er verband hohe technische Kompetenz mit gutem wirtschaftlichem Sachverstand.";
            texte [3]= "Herr Mustermann hat ein umfassendes und detailliertes Fachwissen, das er beim Auftreten neuer Fragen und Entwicklungen sicher einsetzte. Er aktualisierte beständig sein Wissen und hat die erworbenen Kenntnisse stets gut praktisch umgesetzt.";
            break;
        case '2': //Befriedigend
            x = 4;
            texte [0]= "Herr Mustermann beherrschte seinen Arbeitsbereich umfassend und fand brauchbare Lösungen.";
            texte [1]= "Er verfügt über ein solides Fachwissen in seinem Fachgebiet, das er zur Lösung seiner Aufgaben einsetzte. Daher war Herr Mustermann in unserem Hause ein oft gesuchter Ansprechpartner.";
            texte [2]= "Herr Mustermann besitzt ein jederzeit verfügbares Fachwissen, mit dessen Hilfe er seine Aufgaben erfolgreich löste. Er verband technische Kompetenz mit wirtschaftlichem Sachverstand.";
            texte [4]= "Herr Mustermann hat ein detailliertes Fachwissen, das er beim Auftreten neuer Fragen und Entwicklungen sicher einsetzte. Er aktualiserte sein Wissen und hat die erworbenen Kenntnisse gut praktisch umgesetzt.";

            break;
        case '3': //Ausreichend
            x = 2;
            texte [0]= "Herr Mustermann beherrschte seinen Arbeitsbereich den Anforderungen entsprechend.";
            texte [1]= "Herr Mustermann verfügt über ein ausbaufähiges Grundwissen. Seine Leistungen entsprachen im Wesentlichen unseren Anforderungen.";
            break;
    }
    var y = document.getElementById("txtBst");
    removeOptions(y);
    for (let i = 0; i <= x; i++) {
        y.add(new Option(texte[i],i));
    }


}

function removeOptions(selectElement) {
    var i, L = selectElement.options.length;
    alert(L);
    for(i = L+1; i >= 0; i--) {
        selectElement.remove(i);
    }
}