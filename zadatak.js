function prikaziElement(element) {
  //pod e
  var el = document.getElementById(element);
  el.style.display = "block"; //veya IZMEDJU CSS I JS jer je display u css
}

function sakrijElement(element) {
  //pod e
  var el = document.getElementById(element);
  el.style.display = "none";
}

function odrediPrikazOpisaPlanete(planeta) {
  var planetaDiv = document.getElementById(planeta);
  var planetsDiv = document.getElementsByClassName("divPlanets"); //uyima onu sto smo kliknuli
  for (var i = 0; i < planetsDiv.length; i++)
    planetsDiv[i].setAttribute("hidden", "hidden"); //ostale sakriva
  planetaDiv.removeAttribute("hidden"); //iybacuje atribut hiden kod one sto smo kliknuli
  //da ona samo bude vidljiva VEZA IZMEDJU HTML I JS jer je hidden u html
}
/* DRUGI NACIN PREKO VEZE IZMEDJU HTML I CSS PREKO STYLE DISPLEY
function odrediPrikazOpisaPlanete(element)
{
var planete=document.getElementsByClassName("divPlanets");
    for(var i=0;i<planete.length;i++)
    {
        planete[i].style.display="none";
    }
    var el=document.getElementById(element);
    el.style.display="block";

}
*/

function prikaziTekstZaOmiljenuPlanetu(sel) {
  odrediPrikazOpisaPlanete(sel.options[sel.selectedIndex].value);
  //sel html element options je takodje html element u selectu
  //sel.selectedIndex je index koji je izabran
  //value njegova vrijednost
}

function checkForm() {
  var password = document.getElementById("password").value;
  if (password.length < 8) alert("Lozinka mora biti najmanje 8 karaktera!");
}
