// Fungsi untuk mengganti gambar hero secara otomatis
function changeHeroImage() {
    const heroImage = document.querySelector('.hero-section img');
    const images = ['assets/dashboard.png', 'assets/dashboard2.png'];
    let currentIndex = 0;

    // Set interval untuk mengganti gambar setiap 3 detik
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        heroImage.style.opacity = 0;
        
        setTimeout(() => {
            heroImage.src = images[currentIndex];
            heroImage.style.opacity = 1;
        }, 500);
    }, 3000);
}

// Jalankan fungsi saat dokumen siap
document.addEventListener('DOMContentLoaded', changeHeroImage);