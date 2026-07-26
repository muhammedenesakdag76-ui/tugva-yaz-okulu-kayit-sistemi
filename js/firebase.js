import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1PwF_MonQVMQ2zXnCJZbQWYkRgHpxxb8",
  authDomain: "tugva-kayit-sistemi.firebaseapp.com",
  projectId: "tugva-kayit-sistemi",
  storageBucket: "tugva-kayit-sistemi.firebasestorage.app",
  messagingSenderId: "497137562254",
  appId: "1:497137562254:web:0dae95a054ac7e21424fdf"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

export async function tcVarMi(tc) {
  const q = query(
    collection(db, "kayitlar"),
    where("tc", "==", tc)
  );

  const sonuc = await getDocs(q);

  return !sonuc.empty;
}

export async function kayitSayisi() {
  const sonuc = await getDocs(collection(db, "kayitlar"));
  return sonuc.size;
}

export async function kayitOlustur(veri) {
  await addDoc(collection(db, "kayitlar"), {
    ...veri,
    createdAt: serverTimestamp()
  });
}
