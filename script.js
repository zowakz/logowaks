document.addEventListener("DOMContentLoaded", function() {
    const projectItems = document.querySelectorAll(".project-item");

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target); // Hentikan pengamatan setelah elemen muncul
            }
        });
    }, { threshold: 0.05 }); // 0.05 berarti elemen muncul saat 5% terlihat

    projectItems.forEach(item => appearOnScroll.observe(item));
});

document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.background-video');
    const heading = document.querySelector('.hero h2');
    const paragraph = document.querySelector('.hero p');
    const button = document.querySelector('.hero .btn');

    // Menambahkan kelas 'appear' untuk memunculkan efek
    setTimeout(() => {
        video.classList.add('appear');
        heading.classList.add('appear');
        paragraph.classList.add('appear');
        button.classList.add('appear');
    }, 500); // Waktu delay sebelum efek muncul
});

document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector('h2');

    // Fungsi untuk menambahkan kelas 'show' pada teks
    const showHeading = () => {
        heading.classList.add('show');
    };

    // Memanggil fungsi saat halaman dimuat
    showHeading();
});

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');

    // Fungsi untuk menambahkan kelas 'show' pada logo
    const showLogo = () => {
        logo.classList.add('show');
    };

    // Memanggil fungsi saat halaman dimuat
    showLogo();
});

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');
    const heading = document.querySelector('h2');

    // Fungsi untuk menambahkan kelas 'show' pada logo dan teks
    const showElements = () => {
        setTimeout(() => {
            logo.classList.add('show');
        }, 1000); // Delay 500ms untuk logo

        setTimeout(() => {
            heading.classList.add('show');
        }, 1000); // Delay 1000ms untuk heading
    };

    // Memanggil fungsi saat halaman dimuat
    showElements();
});

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');
    const heading = document.querySelector('h2'); // Heading di hero
    const contactHeading = document.querySelector('.contact h2'); // Heading di Hubungi Saya
    const contactForm = document.querySelector('.contact-form'); // Form di Hubungi Saya

    // Fungsi untuk menambahkan kelas 'show' pada logo dan teks
    const showElements = () => {
        setTimeout(() => {
            logo.classList.add('show'); // Menampilkan logo setelah 500ms
        }, 500); // Delay 500ms untuk logo

        setTimeout(() => {
            heading.classList.add('show'); // Menampilkan heading hero setelah 1000ms
        }, 1000); // Delay 1000ms untuk heading hero

        setTimeout(() => {
            contactHeading.classList.add('show'); // Menampilkan heading "Hubungi Saya" setelah 1500ms
        }, 1500); // Delay 1500ms untuk heading "Hubungi Saya"

        setTimeout(() => {
            contactForm.classList.add('show'); // Menampilkan form setelah 2000ms
        }, 2000); // Delay 2000ms untuk form
    };

    // Memanggil fungsi saat halaman dimuat
    showElements();
});

// script.js
document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("active");
});


