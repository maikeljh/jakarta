function showSlides(n) {
    let slides = document.getElementsByClassName("slide"); // Mengambil div dengan class slide
  
    if (n > slides.length) { // Kembali ke slide pertama
      slideIndex = 1
    }
  
    if (n < 1) { // Ke slide terakhir jika mundur dari slide pertama
      slideIndex = slides.length
    }
    
    for (let i = 0; i < slides.length; i++) { // Membuat style display untuk gambar lainnya menjadi none
      slides[i].style.display = "none";
    }
  
    slides[slideIndex-1].style.display = "block"; // Membuat style display untuk gambar yang sedang ingin ditampilkan menjadi block
}

let slideIndex = 1; // Mulai dari slide pertama
showSlides(slideIndex);

// Fungsi untuk berpindah slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

