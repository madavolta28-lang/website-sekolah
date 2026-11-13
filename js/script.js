const tombolTema = document.getElementById("theme");
tombolTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const gelap = document.body.classList.contains("dark-mode");
  tombolTema.textContent = gelap ? "☀️" : "🌙";
});


const menu = document.getElementById("menu");
const tombol = document.getElementById("hamburger");
tombol.addEventListener("click", function () {
  menu.classList.toggle("active");
});
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () { menu.classList.remove("active"); });
});


function cariJurusan() {
  let input = document.getElementById("cari").value.toLowerCase();
  let daftar = document.querySelectorAll(".jurusan");
  let ada = 0;
  daftar.forEach(function (item) {
    let nama = item.textContent.toLowerCase();
    if (nama.includes(input)) { item.style.display = "block"; ada++; }
    else { item.style.display = "none"; }
  });
  document.getElementById("kosong").hidden = ada > 0;
}


function validasiForm(e) {
  e.preventDefault();
  let nama = document.getElementById("nama").value.trim();
  let email = document.getElementById("email").value.trim();
  let pesan = document.getElementById("pesan").value.trim();
  if (nama === "" || email === "" || pesan === "") {
    alert("Semua kolom harus diisi!");
  } else {
    alert("Pesan berhasil divalidasi!");
    document.getElementById("formKontak").reset();
  }
  return false;
}


const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
document.querySelectorAll(".gallery img").forEach(function (foto) {
  foto.addEventListener("click", function () {
    modalImg.src = foto.src;
    modalImg.alt = foto.alt;
    modal.hidden = false;
  });
});
modal.addEventListener("click", function () { modal.hidden = true; });
document.addEventListener("keydown", function (e) { if (e.key === "Escape") modal.hidden = true; });


const tombolAtas = document.getElementById("top");
window.addEventListener("scroll", function () {
  tombolAtas.hidden = window.scrollY < 300;
});
tombolAtas.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


document.querySelectorAll(".faq-q").forEach(function (q) {
  q.addEventListener("click", function () {
    const item = q.parentElement;
    const jawaban = item.querySelector(".faq-a");
    item.classList.toggle("open");
    jawaban.style.maxHeight = item.classList.contains("open") ? jawaban.scrollHeight + "px" : "0";
  });
});
