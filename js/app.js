import { qrOlustur } from "./qr.js";
import { formKontrol } from "./validation.js";
import { kayitYap } from "./register.js";

const form = document.getElementById("registerForm");

const formCard = document.getElementById("formCard");
const successCard = document.getElementById("successCard");

const remainingCount =
document.getElementById("remainingCount");

const registerNumber =
document.getElementById("registerNumber");

const newRegister =
document.getElementById("newRegister");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const veri = {

name:
document.getElementById("name").value,

tc:
document.getElementById("tc").value,

birth:
document.getElementById("birth").value,

phone:
document.getElementById("phone").value,

gender:
document.getElementById("gender").value,

parent:
document.getElementById("parent").checked,

kvkk:
document.getElementById("kvkk").checked

};

const hata = formKontrol(veri);

if (hata) {

alert(hata);

return;

}

try {

const sonuc = await kayitYap(veri);

remainingCount.textContent =
sonuc.kalanKontenjan;

registerNumber.textContent =
sonuc.kayitNo;

formCard.classList.add("hidden");

successCard.classList.remove("hidden");

form.reset();

}
catch(error){

alert(error.message);

}

});

newRegister.addEventListener("click",()=>{

successCard.classList.add("hidden");

formCard.classList.remove("hidden");

});