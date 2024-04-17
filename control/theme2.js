// Objek yang memetakan tema saat ini ke tema berikutnya
const themeMap = {
  light: "solar",
  solar: "light"
};

// Memeriksa tema yang tersimpan di localStorage. Jika tidak ada, tema pertama dalam themeMap akan dipilih.
const defaultTheme = Object.keys(themeMap)[0];
const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme || defaultTheme;
localStorage.setItem('theme', initialTheme);

// Mendapatkan referensi ke classList dari elemen body
const bodyClassList = document.body.classList;

// Menambahkan kelas tema awal ke elemen body
bodyClassList.add(initialTheme);

// Fungsi untuk mengganti tema saat tombol tema diklik
function toggleTheme() {
  // Mengambil tema saat ini dari localStorage
  const currentTheme = localStorage.getItem('theme');
  
  // Menentukan tema berikutnya berdasarkan tema saat ini dari themeMap
  const nextTheme = themeMap[currentTheme];
  
  // Mengganti kelas tema saat ini dengan kelas tema berikutnya pada elemen body
  bodyClassList.replace(currentTheme, nextTheme);
  
  // Menyimpan tema berikutnya ke localStorage
  localStorage.setItem('theme', nextTheme);
}

// Menetapkan event listener untuk tombol tema
document.getElementById('themeButton').onclick = toggleTheme;
