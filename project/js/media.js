// js/media.js - Art Direction & Media Injector (v1.5.0)
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SETUP ASSETS DASAR
    const bgOpening = document.getElementById('dynamic-bg-opening');
    const bgVideo = document.getElementById('dynamic-bg-video');
    const bgMusic = document.getElementById('bg-music');

    if (bgOpening) bgOpening.style.backgroundImage = `url('${APP_CONFIG.assets.bgOpening}')`;
    if (bgVideo) {
        bgVideo.src = APP_CONFIG.assets.bgVideo;
        bgVideo.onerror = () => bgVideo.style.display = 'none';
    }
    if (bgMusic) bgMusic.src = APP_CONFIG.assets.music;

    // 2. INJECTOR FOTO (Organik ke dalam cerita HTML)
    if (APP_CONFIG.photos && APP_CONFIG.photos.length > 0) {
        APP_CONFIG.photos.forEach(photo => {
            const container = document.getElementById(photo.targetId);
            if (container) {
                const frame = document.createElement('div');
                // Menggabungkan kelas frame & tape dari config
                frame.className = `polaroid-frame ${photo.frame || 'frame-classic'} ${photo.tape || 'tape-masking'}`;
                frame.style.transform = `rotate(${photo.rotation})`;
                
                frame.innerHTML = `
                    <img src="${photo.src}" class="media-item" loading="lazy" alt="Kenangan" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23e2e8f0\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%2394a3b8\\' text-anchor=\\'middle\\' dy=\\'.3em\\' font-family=\\'sans-serif\\' font-size=\\'12\\'>[FOTO]</text></svg>'">
                    <div class="polaroid-caption">${photo.caption}</div>
                `;
                
                frame.addEventListener('click', () => openLightbox(photo.src));
                container.appendChild(frame);
            }
        });
    }

    // 3. INJECTOR VIDEO
    if (APP_CONFIG.videos && APP_CONFIG.videos.length > 0) {
        APP_CONFIG.videos.forEach(vid => {
            const container = document.getElementById(vid.targetId);
            if (container) {
                const frame = document.createElement('div');
                frame.className = `polaroid-frame ${vid.frame || 'frame-classic'} ${vid.tape || 'none'}`;
                frame.style.transform = `rotate(${vid.rotation || '1deg'})`;
                
                frame.innerHTML = `
                    <video src="${vid.src}" class="media-item scrapbook-video" loop muted playsinline></video>
                    <div class="polaroid-caption">${vid.caption}</div>
                `;
                container.appendChild(frame);
            }
        });
    }

    // 4. GENERATOR KELOPAK BUNGA (Sangat Pelan & Halus)
    const petalsOverlay = document.getElementById('petals-overlay');
    if (petalsOverlay) {
        const petalCount = 8; // Sedikit saja agar terkesan elegan, tidak berlebihan
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            
            const size = Math.random() * 6 + 6; // 6-12px
            petal.style.width = `${size}px`;
            petal.style.height = `${size * 1.5}px`;
            petal.style.left = `${Math.random() * 100}vw`;
            
            // Sangat pelan (15 - 25 detik)
            const duration = Math.random() * 10 + 15; 
            const delay = Math.random() * 15;
            petal.style.animationDuration = `${duration}s`;
            petal.style.animationDelay = `${delay}s`;
            
            petalsOverlay.appendChild(petal);
        }
    }

    // 5. EFEK PARALLAX HALUS SAAT SCROLL (Ide #14)
    const parallaxItems = document.querySelectorAll('.parallax-item');
    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            parallaxItems.forEach(item => {
                const speed = item.getAttribute('data-speed') || 0.02;
                // Menggeser elemen sedikit berdasarkan arah scroll
                item.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    });

    // 6. SISTEM LIGHTBOX & VIDEO AUTOPLAY
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const btnClose = document.getElementById('lightbox-close');

    function openLightbox(src) { lightboxImg.src = src; lightbox.classList.remove('hidden'); setTimeout(() => lightbox.classList.add('active'), 10); }
    function closeLightbox() { lightbox.classList.remove('active'); setTimeout(() => { lightbox.classList.add('hidden'); lightboxImg.src = ''; }, 400); }
    if (btnClose) btnClose.addEventListener('click', closeLightbox);
    if (lightbox) lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.play().catch(()=>{});
            else entry.target.pause();
        });
    }, { threshold: 0.4 });
    document.querySelectorAll('.scrapbook-video').forEach(v => videoObserver.observe(v));
});
