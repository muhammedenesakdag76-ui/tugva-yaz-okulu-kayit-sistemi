export function bosAlanKontrol(veri) {
  return (
    veri.name.trim() !== "" &&
    veri.tc.trim() !== "" &&
    veri.birth !== "" &&
    veri.phone.trim() !== "" &&
    veri.gender !== ""
  );
}

export function tcKontrol(tc) {
  if (!/^\d{11}$/.test(tc)) return false;

  const d = tc.split("").map(Number);

  if (d[0] === 0) return false;

  const tek =
    d[0] +
    d[2] +
    d[4] +
    d[6] +
    d[8];

  const cift =
    d[1] +
    d[3] +
    d[5] +
    d[7];

  if (((tek * 7 - cift) % 10) !== d[9]) return false;

  const toplam =
    d.slice(0, 10).reduce((a, b) => a + b, 0);

  if ((toplam % 10) !== d[10]) return false;

  return true;
}

export function telefonKontrol(tel) {
  return /^05\d{9}$/.test(
    tel.replace(/\s/g, "")
  );
}

export function yasHesapla(tarih) {

  const bugun = new Date();
  const dogum = new Date(tarih);

  let yas =
    bugun.getFullYear() -
    dogum.getFullYear();

  const ay =
    bugun.getMonth() -
    dogum.getMonth();

  if (
    ay < 0 ||
    (ay === 0 &&
      bugun.getDate() <
        dogum.getDate())
  ) {
    yas--;
  }

  return yas;
}

export function formKontrol(veri) {

  if (!bosAlanKontrol(veri))
    return "Lütfen tüm alanları doldurun.";

  if (!tcKontrol(veri.tc))
    return "Geçerli bir T.C. Kimlik Numarası giriniz.";

  if (!telefonKontrol(veri.phone))
    return "Telefon numarası geçersiz.";

  const yas = yasHesapla(veri.birth);

  if (yas < 18 && !veri.parent)
    return "18 yaş altı için veli onayı zorunludur.";

  if (!veri.kvkk)
    return "KVKK onayını kabul etmelisiniz.";

  return null;
}