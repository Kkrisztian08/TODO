function athuz(e){
    let szoveg = e.target.parentNode.getElementsByTagName("text")[0];
    szoveg.classList.toggle("athuzas");
}
function torles(e){
    e.target.parentNode.remove();
}
function listaGomb() {

    let szoveg=document.getElementById("szoveg").value;
    if (szoveg.trim()=="") {
        alert("a beviteli mező nem lehet üres!");
        return;
    }else{
        document.getElementById("szoveg").value="";
        let ujListaElem= document.createElement("li");
        ujListaElem.setAttribute("class", "elem")
        ujListaElem.setAttribute("class", "list-group-item")
        //checkbox
        let kipipalo= document.createElement("input");
        kipipalo.type="checkbox";
        kipipalo.addEventListener("click",athuz);
        ujListaElem.appendChild(kipipalo);
        kipipalo.setAttribute("class", "kipipalo")
        //bekért szöveg
        let bekertSzoveg= document.createElement("text");
        bekertSzoveg.innerHTML +=szoveg;
        ujListaElem.appendChild(bekertSzoveg);
        bekertSzoveg.setAttribute("class", "szoveg")
        //törléshez szükséges x betű
        let x= document.createElement("text");
        x.innerHTML ="X";
        x.addEventListener("click", torles);
        ujListaElem.appendChild(x);
        x.setAttribute("class", "x")

        document.getElementById("lista").appendChild(ujListaElem);
    }    
}

function init(){
    document.getElementById("listaGomb").addEventListener("click", listaGomb);
}
document.addEventListener("DOMContentLoaded", init);


