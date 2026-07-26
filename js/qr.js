import QRCode from "https://cdn.jsdelivr.net/npm/qrcode@1.5.4/+esm";

export async function qrOlustur(kayitNo) {

    const alan = document.getElementById("qr");

    if (!alan) return;

    alan.innerHTML = "";

    const canvas = document.createElement("canvas");

    await QRCode.toCanvas(canvas, kayitNo, {
        width: 220,
        margin: 2
    });

    alan.appendChild(canvas);

}