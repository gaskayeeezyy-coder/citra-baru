// js/scroll.js - Story Engine (Observer & Progress Bar)
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SISTEM OBSERVER CERITA (STAGGER REVEAL) ---
    const observerOptions = {
        root: null, 
        rootMargin: '0px 0px -10% 0px', // Memicu animasi saat elemen masuk 10% dari bawah layar
        threshold: 0.1 
    };

    const storyObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Memberikan sinyal ke CSS untuk memulai sequence stagger
                entry.target.classList.add('is-visible');
                
                // Unobserve agar animasi tidak mengulang-ulang dan menghemat memori HP
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Pantau setiap komponen cerita
    const storySections = document.querySelectorAll('.story-section');
    storySections.forEach(section => storyObserver.observe(section));


    // --- 2. SISTEM READING PROGRESS BAR ---
    const progressBar = document.getElementById('progress-bar');
    let ticking = false; // Mencegah fungsi scroll dipanggil terlalu sering (Lag prevention)

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                
                // Hitung seberapa jauh user sudah scroll (dalam persen)
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                
                // Cegah error pembagian nol saat halaman belum bisa discroll
                const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
                
                // Terapkan ke lebar progress bar
                if (progressBar) {
                    progressBar.style.width = scrollPercent + '%';
                }
                
                ticking = false;
            });
            ticking = true;
        }
    });
});
