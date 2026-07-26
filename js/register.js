import {
  tcVarMi,
  kayitSayisi,
  kayitOlustur
} from "./firebase.js";

export async function kayitYap(veri) {

  // Aynı T.C. kontrolü
  if (await tcVarMi(veri.tc)) {
    throw new Error("Bu T.C. Kimlik Numarası ile daha önce kayıt yapılmış.");
  }

  // Kontenjan kontrolü
  const toplam = await kayitSayisi();

  if (toplam >= 85) {
    throw new Error("Kontenjan dolmuştur.");
  }

  // Kayıt numarası
  const kayitNo =
    "TYG-" +
    String(toplam + 1).padStart(4, "0");

  // Firestore kaydı
  await kayitOlustur({
    kayitNo,
    adSoyad: veri.name,
    tc: veri.tc,
    dogumTarihi: veri.birth,
    telefon: veri.phone,
    cinsiyet: veri.gender
  });

  return {
    kayitNo,
    kalanKontenjan: 85 - (toplam + 1)
  };
}