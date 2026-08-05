// js/capsule.js - Memory Capsule Engine (Tahap 10)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof CAPSULE_CONFIG === 'undefined' || !CAPSULE_CONFIG.enabled) return;

    const letterContainer = document.querySelector('.letter-container');
    if (!letterContainer) return;

    // 1. Buat dan Sisipkan Elemen Pemicu (Trigger) di Ujung Halaman Surat
    const triggerWrapper = document.createElement('div');
    triggerWrapper.id = 'capsule-trigger-container';
    // PERBAIKAN: Tambah z-index agar tombol tidak terhalang elemen transparan (daun/bunga)
    triggerWrapper.style.position = 'relative';
    triggerWrapper.style.zIndex = '9999';
    triggerWrapper.innerHTML = `
        <p class="capsule-hint-text">...masih ada satu hadiah terakhir untukmu.</p>
        <button id="btn-open-capsule" class="btn-capsule">Buka Hadiah Terakhir</button>
    `;
    letterContainer.appendChild(triggerWrapper);

    // 2. Buat Elemen Overlay Memory Capsule secara Dinamis
    const capsuleOverlay = document.createElement('div');
    capsuleOverlay.id = 'memory-capsule-overlay';
    // PERBAIKAN: Pastikan popup terbuka di lapisan paling depan menutupi segalanya
    capsuleOverlay.style.zIndex = '99999';
    capsuleOverlay.innerHTML = `
        <div class="capsule-box">
            <h3 class="capsule-title">Memory Capsule</h3>
            
            <!-- Video Spesial -->
            <div class="capsule-media-section">
                <video src="${CAPSULE_CONFIG.videoSrc}" class="capsule-video-player" controls preload="metadata"></video>
            </div>

            <!-- Voice Note Placeholder -->
            <div class="capsule-voicenote-box">
                <span class="vn-icon">🎙️</span>
                <audio src="${CAPSULE_CONFIG.voiceNoteSrc}" class="vn-player" controls preload="none"></audio>
            </div>

            <!-- Foto Terakhir -->
            <div class="capsule-media-section">
                <img src="${CAPSULE_CONFIG.photoSrc}" class="capsule-photo-item" alt="Final Memory" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23e2e8f0\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%2394a3b8\\' text-anchor=\\'middle\\' dy=\\'.3em\\' font-family=\\'sans-serif\\' font-size=\\'12\\'>[FOTO TERAKHIR]</text></svg>'">
            </div>

            <!-- Surat Terakhir -->
            <div class="capsule-letter-area">
                <div class="capsule-letter-heading">${CAPSULE_CONFIG.finalLetterTitle}</div>
                <div class="capsule-letter-body">${CAPSULE_CONFIG.finalLetterText}</div>
            </div>

            <!-- Pesan Penutup Capsule -->
            <p class="capsule-closing-text">${CAPSULE_CONFIG.closingMessage}</p>

            <button id="btn-close-capsule" class="capsule-close-btn">[ Tutup Kembali ]</button>
        </div>
    `;
    document.body.appendChild(capsuleOverlay);

    // 3. Deteksi Saat Pengguna Mencapai Bagian Bawah Surat (Scroll Trigger)
    let triggered = false;
    window.addEventListener('scroll', () => {
        if (triggered) return;
        
        const scrollPosition = window.innerHeight + window.scrollY;
        const threshold = document.documentElement.scrollHeight - 150; // 150px dari bawah

        if (scrollPosition >= threshold) {
            triggered = true;
            // Beri jeda ketenangan 2-3 detik sesuai konsep
            setTimeout(() => {
                triggerWrapper.classList.add('show');
            }, 2500);
        }
    });

    // 4. Interaksi Buka / Tutup Capsule
    // PERBAIKAN: Cari tombol secara presisi di dalam wrapper yang baru dibuat
    const btnOpen = triggerWrapper.querySelector('#btn-open-capsule');
    const btnClose = capsuleOverlay.querySelector('#btn-close-capsule');

    if (btnOpen) {
        btnOpen.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah bentrok dengan scroll Android
            capsuleOverlay.classList.add('active');
        });
    }

    if (btnClose) {
        btnClose.addEventListener('click', (e) => {
            e.preventDefault();
            capsuleOverlay.classList.remove('active');
            // Pause video/audio di dalam capsule saat ditutup
            const mediaElements = capsuleOverlay.querySelectorAll('video, audio');
            mediaElements.forEach(el => el.pause());
        });
    }
});
