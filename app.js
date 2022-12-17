const form = document.querySelector("#content");
const nick = document.querySelector("#nick");
const pass = document.querySelector("#pass");
const rep = document.querySelector("#rep");
const error = document.querySelector(".error");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let char = form.elements.nick.value;
    console.log(char);
    let charNum = char.length;
    console.log(charNum);
    let char2 = form.elements.pass.value;
    console.log(char2);
    let passNum = parseInt(char2.length);
    console.log(passNum);
    let char3 = form.elements.rep.value;
    console.log(char3);

    if (parseInt(charNum) < 5 || (parseInt(charNum)) > 10) {
        error.style.color = "red";
        error.innerHTML = "The Nickname should contain between 5 and 10 letters";
    }
    else if (parseInt(passNum) < 8) {
        error.style.color = "red";
        error.innerHTML = "The Password should contain more than 8 letters";
    } 
    else if (char2 !== char3) {
        error.style.color = "red";
        error.innerHTML = "Password should be the same";
    } 
    else {
        error.style.color = "green";
        error.innerHTML = "Password accepted";
        document.querySelector("#content").reset();
    }
});
