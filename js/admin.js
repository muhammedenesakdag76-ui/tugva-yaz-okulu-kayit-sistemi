import {
  db
} from "./firebase.js";

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const tbody = document.getElementById("tbody");
const totalCount = document.getElementById("totalCount");
const search = document.getElementById("search");
const refreshBtn = document.getElementById("refreshBtn");

let kayitlar = [];

async function listele() {

    tbody.innerHTML = "";

    const snapshot = await getDocs(collection(db, "kayitlar"));

    kayitlar = [];

    snapshot.forEach((item) => {

        kayitlar.push({
            id: item.id,
            ...item.data()
        });

    });

    kayitlar.sort((a, b) => {

        if (!a.kayitNo || !b.kayitNo) return 0;

        return a.kayitNo.localeCompare(b.kayitNo);

    });

    tabloDoldur(kayitlar);

}

function tabloDoldur(veriler) {

    tbody.innerHTML = "";

    totalCount.textContent = `${veriler.length} / 85`;

    veriler.forEach((kisi, index) => {

        tbody.innerHTML += `

<tr>

<td>${index + 1}</td>

<td>${kisi.kayitNo}</td>

<td>${kisi.adSoyad}</td>

<td>${kisi.tc}</td>

<td>${kisi.telefon}</td>

<td>${kisi.cinsiyet}</td>

<td>

<button
class="deleteBtn"
data-id="${kisi.id}">

Sil

</button>

</td>

</tr>

`;

    });

    document.querySelectorAll(".deleteBtn").forEach(btn => {

        btn.addEventListener("click", async () => {

            if (!confirm("Bu kayıt silinsin mi?")) return;

            await deleteDoc(doc(db, "kayitlar", btn.dataset.id));

            await listele();

        });

    });

}

search.addEventListener("input", () => {

    const kelime = search.value.toLowerCase();

    const sonuc = kayitlar.filter(kisi =>

        kisi.adSoyad.toLowerCase().includes(kelime) ||

        kisi.tc.includes(kelime)

    );

    tabloDoldur(sonuc);

});

refreshBtn.addEventListener("click", listele);

listele();