class Erinnerung {
    constructor(name){
        this.checked = false;
        this.name = name;
        let ErinnerungHTML = document.createElement("p")
        let checkboxHTML = document.createElement("input")
        let nameHTML = document.createElement("label")
        ErinnerungHTML.appendChild(checkboxHTML)
        ErinnerungHTML.appendChild(nameHTML)
        nameHTML.innerHTML = " " + this.name
        checkboxHTML.type = "checkbox"
        checkboxHTML.checked 
        document.getElementById("erinnerungsListe").appendChild(ErinnerungHTML)
    }
    
}

function neueErinnerung(){
    let neueErinnerungWert = document.getElementById("nameErinnerung").value
    let neueErinnerung = new Erinnerung(neueErinnerungWert)
    console.log(neueErinnerung.name)
    console.log(document)
}