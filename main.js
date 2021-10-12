let tomb=[];
function listaGomb() {

    let szoveg=document.getElementById("szoveg").value;
    if (szoveg=="") {
        alert("a beviteli mező nem lehet üres!");
        return;
    }else{
        tomb.push(szoveg);
        document.getElementById("szoveg").value="";
        let li= document.createElement("li");
        for (let i = 0; i < tomb.length; i++) {
            li.innerHTML ='<input type="checkbox" id="checkbox onclick="athuz()"> '+ szoveg + " X";
        }
        document.getElementById("lista").appendChild(li);
    }
    
}
function athuz(){
    let szoveg=document.getElementById("szoveg").value;
    if (checkbox.checked==true) {
        document.getElementById("szoveg").value='<del>'+szoveg+'</del>';
    }
}
function init(){
    document.getElementById("listaGomb").addEventListener("click", listaGomb);
}
document.addEventListener("DOMContentLoaded", init);


