const wasteData = [
  {
    name: "Botol Plastik",
    keywords: ["botol plastik", "plastik", "botol", "aqua", "kemasan minuman"],
    category: "Plastik",
    binColor: "Kuning",
    icon: "🥤",
    treatment:
      "Kosongkan isi botol, bilas jika perlu, keringkan, lalu pisahkan dari sampah basah.",
    tip:
      "Botol plastik yang bersih lebih mudah diterima untuk didaur ulang atau disetor ke bank sampah."
  },
  {
    name: "Kardus",
    keywords: ["kardus", "dus", "box", "kertas", "karton"],
    category: "Kertas",
    binColor: "Biru",
    icon: "📦",
    treatment:
      "Lipat kardus agar tidak memakan tempat. Pastikan kardus dalam keadaan kering.",
    tip:
      "Jangan mencampur kardus dengan sisa makanan atau sampah basah."
  },
  {
    name: "Kertas HVS",
    keywords: ["kertas", "hvs", "kertas hvs", "print", "dokumen"],
    category: "Kertas",
    binColor: "Biru",
    icon: "📄",
    treatment:
      "Kumpulkan kertas dalam kondisi kering dan pisahkan dari sampah basah.",
    tip:
      "Gunakan kedua sisi kertas sebelum membuangnya."
  },
  {
    name: "Kulit Pisang",
    keywords: ["kulit pisang", "pisang", "kulit buah", "buah", "organik"],
    category: "Organik",
    binColor: "Hijau",
    icon: "🍌",
    treatment:
      "Masukkan ke tempat sampah organik atau olah menjadi kompos.",
    tip:
      "Sampah organik sebaiknya dipisahkan agar tidak mengotori sampah daur ulang."
  },
  {
    name: "Sisa Nasi",
    keywords: ["nasi", "sisa nasi", "makanan", "sisa makanan", "organik"],
    category: "Organik",
    binColor: "Hijau",
    icon: "🍚",
    treatment:
      "Masukkan ke tempat sampah organik. Jika memungkinkan, olah menjadi kompos.",
    tip:
      "Ambil makanan secukupnya untuk mengurangi sampah makanan."
  },
  {
    name: "Baterai",
    keywords: ["baterai", "battery", "batre", "b3"],
    category: "B3",
    binColor: "Merah",
    icon: "🔋",
    treatment:
      "Jangan dicampur dengan sampah biasa. Simpan terpisah dan serahkan ke tempat pengumpulan limbah B3.",
    tip:
      "Baterai mengandung bahan berbahaya, sehingga perlu ditangani secara khusus."
  },
  {
    name: "Lampu Bekas",
    keywords: ["lampu", "lampu bekas", "bohlam", "b3"],
    category: "B3",
    binColor: "Merah",
    icon: "💡",
    treatment:
      "Bungkus dengan aman agar tidak pecah, lalu serahkan ke fasilitas pengumpulan limbah khusus.",
    tip:
      "Jangan memecahkan lampu bekas karena beberapa jenis lampu dapat mengandung zat berbahaya."
  },
  {
    name: "Tisu Kotor",
    keywords: ["tisu", "tisu kotor", "residu"],
    category: "Residu",
    binColor: "Abu-abu",
    icon: "🧻",
    treatment:
      "Buang ke tempat sampah residu karena sudah terkontaminasi dan sulit didaur ulang.",
    tip:
      "Gunakan lap kain jika memungkinkan untuk mengurangi penggunaan tisu sekali pakai."
  },
  {
    name: "Charger Rusak",
    keywords: ["charger", "charger rusak", "kabel", "elektronik", "e-waste"],
    category: "Elektronik",
    binColor: "E-Waste",
    icon: "🔌",
    treatment:
      "Jangan dibuang bersama sampah biasa. Kumpulkan dan serahkan ke tempat pengelolaan e-waste.",
    tip:
      "Sampah elektronik perlu dipisahkan karena memiliki komponen yang tidak aman jika dibuang sembarangan."
  },
  {
    name: "Kaleng Minuman",
    keywords: ["kaleng", "kaleng minuman", "logam"],
    category: "Logam",
    binColor: "Kuning",
    icon: "🥫",
    treatment:
      "Bilas kaleng, keringkan, lalu pisahkan dari sampah basah.",
    tip:
      "Kaleng bersih lebih mudah diproses ulang atau dijual ke pengepul."
  }
];


/* ================= MENGAMBIL ELEMEN HTML ================= */

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultArea = document.getElementById("resultArea");


/* ================= FUNGSI PENCARIAN SAMPAH ================= */

function searchWaste() {
  const keyword = searchInput.value.trim().toLowerCase();

  if (keyword === "") {
    resultArea.innerHTML = `
      <div class="empty-result">
        Ketik nama sampah terlebih dahulu, misalnya botol plastik, baterai, atau kardus.
      </div>
    `;
    return;
  }

  const foundWaste = wasteData.find((item) => {
    return item.keywords.some((word) => word.includes(keyword)) ||
           item.name.toLowerCase().includes(keyword) ||
           item.category.toLowerCase().includes(keyword);
  });

  if (!foundWaste) {
    resultArea.innerHTML = `
      <div class="empty-result">
        Data sampah belum ditemukan. Coba gunakan kata kunci lain seperti plastik, kardus, baterai, atau organik.
      </div>
    `;
    return;
  }

  resultArea.innerHTML = `
    <div class="result-card">
      <div class="result-top">
        <div class="result-icon">${foundWaste.icon}</div>

        <div>
          <h3>${foundWaste.name}</h3>
          <span class="badge">${foundWaste.category}</span>
        </div>
      </div>

      <div class="result-info">
        <div class="info-box">
          <strong>Kategori Sampah</strong>
          <p>${foundWaste.category}</p>
        </div>

        <div class="info-box">
          <strong>Warna Tempat Sampah</strong>
          <p>${foundWaste.binColor}</p>
        </div>

        <div class="info-box">
          <strong>Cara Pengelolaan</strong>
          <p>${foundWaste.treatment}</p>
        </div>

        <div class="info-box">
          <strong>Tips</strong>
          <p>${foundWaste.tip}</p>
        </div>
      </div>
    </div>
  `;
}


/* ================= EVENT PENCARIAN ================= */

searchBtn.addEventListener("click", searchWaste);

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchWaste();
  }
});


/* ================= MENU RESPONSIVE (HAMBURGER) ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});


/* ================= SMOOTH SCROLL NAVBAR ================= */

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Tutup menu jika sedang di mode mobile
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});