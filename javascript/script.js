let captchaCode = document.querySelector("#captchaText"),
captchaInsert = document.querySelector("#captchaInsert"),
captchaBtn = document.querySelector (".formButton"),
captchaVerificated = document.querySelector("#captchaVerification");

let characteres =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                    't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function newCaptcha(){
    for (let i = 0; i < 6; i++) {
        let randomCharacter = characteres[Math.floor(Math.random() * characteres.length)];
        captchaCode.textContent += randomCharacter;
    }
}
captchaBtn.addEventListener("click", e=>{
    e.preventDefault()
    let captchaInserted = captchaInsert.value;
    captchaVerificated.style.display = "block";
    if(captchaInserted == captchaCode.textContent){
        captchaVerificated.style.color = "rgb(0, 255, 0)";
        captchaVerificated.textContent = "Felicidades!, no sos un robot :D"
    }
    else{
        captchaVerificated.style.color = "rgb(255, 0, 0)";
        captchaVerificated.textContent = "Sos un robot >:("
    }
})

newCaptcha()