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
      <img class="fusszeileLogo" src="shr_logo.png">
      <div class="fusszeileLogoText" style="right: 276px; bottom: 111px; text-align: right;">
        Organisation der
        <br>
        Vereinten Nationen für
        <br>
        Bildung, Wissenschaft,
        <br>
        Kultur und Kommunikation
      </div>

      <div class="fusszeileLogoText" style="right: 170px; bottom: 111px; text-align: left;">
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

      <div class="fusszeileText" style="margin-left: 35px;">
        <br>
        Info.bbwn@srh.de
        <br>
        www.bbw-neckargemuend.de
        <br>
        Geschäftsführung:
        <br>
        Sascha Lohwaßer
      </div>

      <div class="fusszeileText" style="margin-left: 40px;">
        <br>
        HRB 335376 Amtsgericht Mannheim
        <br>
        USt.-IdNr.: DE 174 981 459
      </div>

      <div class="fusszeileText" style="float: right; margin-right: 5px;">
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