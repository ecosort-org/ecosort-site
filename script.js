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
          <strong>🏷️ Kategori Sampah</strong>
          <p>${foundWaste.category}</p>
        </div>

        <div class="info-box">
          <strong>🎨 Warna Tempat Sampah</strong>
          <p>${foundWaste.binColor}</p>
        </div>

        <div class="info-box">
          <strong>⚙️ Cara Pengelolaan</strong>
          <p>${foundWaste.treatment}</p>
        </div>

        <div class="info-box">
          <strong>✨ Tips</strong>
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


/* ================= ECO-QUIZ LOGIC ================= */

const quizData = [
  {
    question: "Manakah di bawah ini yang termasuk sampah organik?",
    options: ["Botol Plastik", "Kulit Pisang", "Baterai", "Kardus"],
    answer: 1
  },
  {
    question: "Tempat sampah berwarna merah digunakan untuk kategori apa?",
    options: ["Organik", "Kertas", "B3 (Bahan Berbahaya)", "Residu"],
    answer: 2
  },
  {
    question: "Kardus bekas kemasan paket sebaiknya dibuang ke tempat sampah warna?",
    options: ["Hijau", "Kuning", "Biru", "Abu-abu"],
    answer: 2
  },
  {
    question: "Sampah manakah yang sulit didaur ulang dan masuk kategori residu?",
    options: ["Majalah", "Tisu Kotor", "Kaleng Soda", "Gelas Kaca"],
    answer: 1
  },
  {
    question: "Apa yang harus dilakukan sebelum membuang botol plastik?",
    options: ["Langsung dibuang", "Diisi air penuh", "Dikosongkan dan diringkas", "Dibakar"],
    answer: 2
  }
];

const iconCorrect = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const iconWrong = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

let currentQuestionIndex = 0;
let score = 0;

const quizQuestionEl = document.getElementById("quizQuestion");
const quizOptionsEl = document.getElementById("quizOptions");
const quizProgressEl = document.getElementById("quizProgress");
const quizContentEl = document.getElementById("quizContent");
const quizResultEl = document.getElementById("quizResult");
const resultScoreEl = document.getElementById("resultScore");
const resultMessageEl = document.getElementById("resultMessage");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestionIndex];
  
  quizProgressEl.innerText = `Pertanyaan ${currentQuestionIndex + 1} dari ${quizData.length}`;
  quizQuestionEl.innerText = currentQuiz.question;
  quizOptionsEl.innerHTML = "";

  currentQuiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerHTML = `
      <div class="option-content">
        <span class="option-number">${index + 1}</span>
        <span>${option}</span>
      </div>
    `;
    button.classList.add("option-btn");
    button.onclick = () => checkAnswer(index);
    quizOptionsEl.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestionIndex].answer;
  const options = quizOptionsEl.querySelectorAll(".option-btn");

  // Disable all buttons after choice
  options.forEach(btn => btn.disabled = true);

  if (selectedIndex === correctIndex) {
    score++;
    options[selectedIndex].classList.add("correct");
    options[selectedIndex].innerHTML += iconCorrect;
  } else {
    options[selectedIndex].classList.add("wrong");
    options[selectedIndex].innerHTML += iconWrong;
    options[correctIndex].classList.add("correct");
    options[correctIndex].innerHTML += iconCorrect;
  }

  // Next question after short delay
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  quizContentEl.classList.add("hidden");
  quizResultEl.classList.remove("hidden");
  
  resultScoreEl.innerText = `Skor kamu: ${score} / ${quizData.length}`;
  
  if (score === quizData.length) {
    resultMessageEl.innerText = "Luar biasa! Kamu adalah Master Pemilah Sampah!";
  } else if (score >= 3) {
    resultMessageEl.innerText = "Bagus! Kamu sudah cukup paham cara memilah sampah.";
  } else {
    resultMessageEl.innerText = "Jangan menyerah! Ayo baca lagi panduan di atas dan coba lagi.";
  }
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  quizContentEl.classList.remove("hidden");
  quizResultEl.classList.add("hidden");
  loadQuestion();
}

// Start quiz on load
loadQuestion();


/* ================= REPORT FORM LOGIC ================= */

const reportForm = document.getElementById("reportForm");
const reportSuccess = document.getElementById("reportSuccess");

if (reportForm) {
  reportForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Simulasi pengiriman data
    reportForm.classList.add("hidden");
    reportSuccess.classList.remove("hidden");

    // Scroll ke atas card agar notifikasi terlihat jelas
    document.getElementById("report").scrollIntoView({
      behavior: "smooth"
    });
  });
}

function resetReportForm() {
  reportForm.reset();
  reportForm.classList.remove("hidden");
  reportSuccess.classList.add("hidden");
}


/* ================= SCROLL REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // Optional: stop observing after reveal
      // revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15 // Trigger when 15% of the element is visible
});

revealElements.forEach((el) => {
  revealObserver.observe(el);
});
