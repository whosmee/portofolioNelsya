// 1. Typing Effect Script
const textElement = document.getElementById('typing-text');
// Ganti kata-kata ini sesuai jurusan atau keahlian pacar kamu
const texts = ["Pendidikan Teknik Informatika", "Web Developer", "UI/UX Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;
    
    // Kecepatan mengetik (ms)
    let typeSpeed = 100;
    
    // Jika kata sudah selesai diketik
    if (letter.length === currentText.length) {
        typeSpeed = 2000; // Tunggu 2 detik sebelum menghapus/ganti kata
        count++;
        index = 0;
    } 
    
    setTimeout(type, typeSpeed);
})();

// 2. Scroll Reveal Animation Script
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100; // Jarak dari bawah layar sebelum elemen muncul

    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger sekali saat load agar elemen paling atas langsung muncul
revealOnScroll();

// 3. Navbar Shadow on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});

// 4. Mobile Menu Toggle (Simple)
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    }
});