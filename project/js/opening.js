document.addEventListener('DOMContentLoaded', () => {
    const btnOpenLetter = document.getElementById('btn-open-letter');
    const openingPage = document.getElementById('opening-page');
    const letterPage = document.getElementById('letter-page');
    
    // Elemen Transisi
    const transitionTargets = document.querySelectorAll('.transition-target');
    const bgImage = document.querySelector('.bg-image');
    const bgOverlay = document.querySelector('.bg-overlay');
    const envelope = document.querySelector('.css-envelope');
    const floatAnimContainer = document.getElementById('animatable-envelope');
    const transitionOverlay = document.getElementById('transition-overlay');

    if (btnOpenLetter) {
        btnOpenLetter.addEventListener('click', () => {
            
            // 0. Putar Musik (Fade in)
            if (typeof window.startBackgroundMusic === 'function') {
                window.startBackgroundMusic();
            }

            // 1. Hilangkan teks dan tombol dengan halus
            transitionTargets.forEach(el => el.classList.add('fade-out-content'));

            // 2. Background perlahan blur dan meredup
            bgImage.classList.add('bg-blur');
            bgOverlay.classList.add('bg-darken');

            // 3. Hentikan animasi mengambang (floating) agar posisi amplop stabil saat dizoom
            floatAnimContainer.classList.remove('float-anim');

            // --- SEQUENCE ANIMASI BERUNTUN ---
            
            // Step 1: Amplop sedikit membesar & naik (t = 300ms)
            setTimeout(() => {
                envelope.classList.add('env-zoom-in');
            }, 300);

            // Step 2: Penutup amplop (flap) terbuka (t = 1200ms)
            setTimeout(() => {
                envelope.classList.add('env-open-flap');
            }, 1200);

            // Step 3: Kertas surat perlahan keluar (t = 2000ms)
            setTimeout(() => {
                envelope.classList.add('env-pull-paper');
            }, 2000);

            // Step 4: Kamera zoom in ke arah kertas & layar mulai memutih (t = 3200ms)
            setTimeout(() => {
                envelope.classList.add('env-camera-zoom');
                transitionOverlay.classList.remove('hidden');
                
                // Beri sedikit jeda sebelum transisi opacity berjalan
                setTimeout(() => {
                    transitionOverlay.classList.add('show');
                }, 50);
            }, 3200);

                        // Step 5: Pindah ke halaman surat di balik layar putih (t = 4500ms)
            setTimeout(() => {
                openingPage.classList.add('hidden');
                letterPage.classList.remove('hidden');

                // TAHAP 4: Izinkan Scroll (Unlock Body)
                document.body.style.overflowY = 'auto'; 
                document.body.style.overflowX = 'hidden'; // Tetap kunci horizontal

                // Hilangkan layar putih secara perlahan
                setTimeout(() => {
                    transitionOverlay.classList.remove('show');
                    setTimeout(() => { transitionOverlay.classList.add('hidden'); }, 1000);
                }, 300);
            }, 4500);
        });
    }
});
