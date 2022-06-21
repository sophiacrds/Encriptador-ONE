const input = document.getElementById("input");
const output = document.getElementById("output");
const imgCover = document.getElementById("imgOutput");
const error = ["Não utilizar letras maiúsculas ou com acento!", "Texto não localizado!"];
const key = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

output.style.display = "none";
input.focus();

function crypt(text){
    let check = text.search(/[A-ZÁ-ú]/);
    if(text != ""){
        if(check !== -1){
            alert(error[0]);
        }else{
            for(let i = 0; i < key.length; i++){
                if(text.includes(key[i][0])){
                    text = text.replaceAll(key[i][0], key[i][1]);
                }
            }
            return text;            
        }
    }else{
        alert(error[1]);
    }
}

function decrypt(text){
    let check = text.search(/[A-ZÁ-ú]/);
    if(text != ""){
        if(check !== -1){
            alert(error[0]);
        }else{
            for(let i = 0; i < key.length; i++){
                if(text.includes(key[i][1])){
                    text = text.replaceAll(key[i][1], key[i][0]);
                }
            }
            return text;            
        }
    }else{
        alert(error[1]);
    }
}

function show(){
    imgCover.classList.add("uncover")
    imgCover.classList.remove("cover");
    document.querySelector(".btnCopy").style.display = "block";
    output.style.display = "block";
}

function hide(){
    imgCover.classList.remove("uncover");
    imgCover.classList.add("cover");
    document.querySelector(".btnCopy").style.display = "none";
    output.style.display = "none";
}

function btnCrypt(){
    let finalText = crypt(input.value);
    output.value = finalText;
    input.value = "";
    if (finalText != undefined){
        show(); 
    }

}

function btnDecrypt(){
    let finalText = decrypt(input.value);
    output.value = finalText;
    input.value = "";
    if (finalText != undefined){
        show(); 
    }

}

function btnCopy(){
    output.select();
    navigator.clipboard.writeText(output.value);
    input.focus();
    hide();
}