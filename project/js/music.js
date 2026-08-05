// js/music.js - Immersion & Playlist Music Engine (Fixed Auto-Loop)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof MUSIC_CONFIG === 'undefined' || !MUSIC_CONFIG.enabled) return;

    const audio = document.getElementById('bg-music');
    if (!audio) return;

    let currentTrack = 0;
    let isPlaying = false;

    // Load lagu pertama
    audio.src = MUSIC_CONFIG.playlist[currentTrack];
    audio.volume = 0; 

    // Membuat Container Navigasi Musik
    const musicContainer = document.createElement('div');
    musicContainer.id = 'music-control-container';
    musicContainer.style.cssText = `
        position: fixed; bottom: 25px; right: 25px;
        background: rgba(253, 251, 247, 0.85); backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 40px; display: flex; align-items: center; justify-content: center;
        padding: 10px 18px; gap: 15px; z-index: 10000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.15); transition: transform 0.3s ease;
    `;

    musicContainer.innerHTML = `
        <div id="btn-prev" style="cursor:pointer; display:flex; color:#444; transition: transform 0.2s;"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg></div>
        <div id="btn-play" style="cursor:pointer; display:flex; color:#444; transition: transform 0.2s;"><svg id="icon-play" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
        <div id="btn-next" style="cursor:pointer; display:flex; color:#444; transition: transform 0.2s;"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg></div>
    `;
    document.body.appendChild(musicContainer);

    const btnPrev = document.getElementById('btn-prev');
    const btnPlay = document.getElementById('btn-play');
    const btnNext = document.getElementById('btn-next');
    const iconPlay = document.getElementById('icon-play');

    function updatePlayIcon() {
        if (isPlaying) iconPlay.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
        else iconPlay.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    }

    function loadAndPlay(trackIndex) {
        currentTrack = trackIndex;
        audio.src = MUSIC_CONFIG.playlist[currentTrack];
        audio.load();
        audio.volume = MUSIC_CONFIG.defaultVolume;
        
        // Memastikan lagu langsung diputar otomatis saat berpindah/lanjut track
        let playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                updatePlayIcon();
            }).catch(e => {
                console.log("Autoplay prevented or interrupted:", e);
                isPlaying = false;
                updatePlayIcon();
            });
        }
    }

    window.startBackgroundMusic = function() {
        if (!MUSIC_CONFIG.enabled || isPlaying) return;
        audio.play().then(() => {
            isPlaying = true; updatePlayIcon();
            let targetVol = MUSIC_CONFIG.defaultVolume, currentVol = 0;
            audio.volume = currentVol;
            const increment = targetVol / 25;
            const fadeInterval = setInterval(() => {
                currentVol += increment;
                if (currentVol >= targetVol) { audio.volume = targetVol; clearInterval(fadeInterval); }
                else { audio.volume = currentVol; }
            }, 100);
        }).catch(err => console.log(err));
    };

    btnNext.addEventListener('click', () => { 
        let nextTrack = (currentTrack + 1) % MUSIC_CONFIG.playlist.length; 
        loadAndPlay(nextTrack); 
    });

    btnPrev.addEventListener('click', () => { 
        let prevTrack = (currentTrack - 1 + MUSIC_CONFIG.playlist.length) % MUSIC_CONFIG.playlist.length; 
        loadAndPlay(prevTrack); 
    });
    
    btnPlay.addEventListener('click', () => {
        if (isPlaying) { audio.pause(); isPlaying = false; }
        else { 
            audio.play().then(() => { isPlaying = true; }).catch(e => console.log(e)); 
        }
        updatePlayIcon();
    });

    // SISTEM AUTO-PLAYLIST BERIKUTNYA YANG DISEMPURNAKAN
    audio.addEventListener('ended', () => {
        let nextTrack = (currentTrack + 1) % MUSIC_CONFIG.playlist.length;
        loadAndPlay(nextTrack);
    });
});
