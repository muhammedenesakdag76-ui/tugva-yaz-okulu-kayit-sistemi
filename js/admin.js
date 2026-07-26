<!DOCTYPE html>
<html lang="tr">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Yönetici Paneli</title>

<link rel="stylesheet" href="css/style.css">

</head>

<body>

<header class="header">

<div class="container">

<h1>Yönetici Paneli</h1>

<p>TÜGVA Yaz Okulu Finali ve İstanbul Gezisi</p>

</div>

</header>

<main class="container">

<section class="card">

<h2>Kayıtlar</h2>

<input
id="search"
type="text"
placeholder="İsim veya T.C. Ara">

<br><br>

<table id="table">

<thead>

<tr>

<th>Kayıt No</th>
<th>Ad Soyad</th>
<th>T.C.</th>
<th>Telefon</th>
<th>İşlem</th>

</tr>

</thead>

<tbody id="tbody">

</tbody>

</table>

<br>

<button id="excelBtn">

Excel'e Aktar

</button>

</section>

</main>

<script type="module" src="js/admin.js"></script>

</body>
</html>