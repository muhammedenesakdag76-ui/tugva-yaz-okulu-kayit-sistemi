import * as XLSX from "https://cdn.sheetjs.com/xlsx-0.20.3/package/xlsx.mjs";

export function excelOlustur(kayitlar) {

    const veri = kayitlar.map(kisi => ({

        "Kayıt No": kisi.kayitNo,

        "Ad Soyad": kisi.adSoyad,

        "T.C. Kimlik No": kisi.tc,

        "Telefon": kisi.telefon,

        "Doğum Tarihi": kisi.dogumTarihi,

        "Cinsiyet": kisi.cinsiyet

    }));

    const ws = XLSX.utils.json_to_sheet(veri);

    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
        wb,
        ws,
        "Kayıtlar"
    );

    XLSX.writeFile(
        wb,
        "TUGVA_Yaz_Okulu_Kayitlari.xlsx"
    );

}