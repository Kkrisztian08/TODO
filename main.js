function athuz(e){
    e.target.classList.toggle("kiemelt");
}
function listaGomb() {

    let szoveg=document.getElementById("szoveg").value;
    if (szoveg=="") {
        alert("a beviteli mező nem lehet üres!");
        return;
    }else{
        document.getElementById("szoveg").value="";
        let li= document.createElement("li");
        let input= document.createElement("input");
        input.type="checkbox";
        let p= document.createElement("p");
        let span= document.createElement("span");
        span.innerHTML =" X";
        p.appendChild(input);
        p.innerHTML +=szoveg;
        p.appendChild(span);
        p.addEventListener("click", athuz);
        li.appendChild(p);
        document.getElementById("lista").appendChild(li);
    }
    
    
}

function init(){
    document.getElementById("listaGomb").addEventListener("click", listaGomb);
}
document.addEventListener("DOMContentLoaded", init);


