// js/cinematic.js - Cinematic Opening & Bab 12.1 Sequential Engine

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('btn-open-letter');
    const cinematicLayer = document.getElementById('cinematic-layer');
    const cinematicText = document.getElementById('cinematic-text');
    const bgVideoContainer = document.getElementById('bg-video-container');
    const bgVideo = document.getElementById('dynamic-bg-video');

    if (!openBtn || !cinematicLayer || !cinematicText) return;

    const openingSequence = [
        { text: "Hai.", duration: 1500 },
        { text: "Iya...<br><br>Kamu.", duration: 2000 },
        { text: "Kalau kamu sedang membaca ini...", duration: 2000 },
        { text: "Artinya...", duration: 2000 },
        { text: "Kejutan kecil yang beberapa hari ini diam-diam aku siapkan...", duration: 2500 },
        { text: "Akhirnya berhasil sampai ke tanganmu.", duration: 3000 },
        { text: "Selamat datang.", duration: 2000 },
        { text: "🤍", duration: 2000 }
    ];

    const babSequence = [
        { text: "Ada Surat Untukmu", duration: 3000, isTitle: true },
        { text: "“Hai, Ciya. 🤍", duration: 1000 },
        { text: "Kalo kamu lagi baca ini, berarti kejutan kecil yang beberapa hari ini diam-diam aku siapkan akhirnya berhasil sampai ke tanganmu.", duration: 5000 },
        { text: "Selamat datang.", duration: 1000 },
        { text: "Sebelum kamu mulai membaca semuanya, aku cuma ingin minta satu hal.", duration: 3000 },
        { text: "Jangan terburu-buru.", duration: 1000 },
        { text: "Nikmati semuanya pelan-pelan.", duration: 1500 },
        { text: "Karena setiap halaman yang akan kamu lihat setelah ini, setiap foto, setiap video, setiap lagu yang terdengar, sampai setiap kata yang tertulis di dalamnya, semuanya aku siapkan khusus buat kamu.", duration: 10000 },
        { text: "Mungkin aplikasi ini belum sempurna.", duration: 1500 },
        { text: "Masih ada banyak kekurangan di sana-sini.", duration: 1500 },
        { text: "Tapi di balik setiap kekurangan itu, ada waktu, tenaga, dan perasaan yang benar-benar aku berikan untuk membuat sesuatu yang bisa kamu simpan sebagai kenangan.", duration: 5000 },
        { text: "Aku ingin, suatu hari nanti, entah seminggu, setahun, atau bahkan bertahun-tahun dari sekarang, kamu masih bisa membuka aplikasi ini lagi.", duration: 5000 },
        { text: "Karena bagiku, beberapa kenangan memang terlalu berharga kalau hanya disimpan di kepala.", duration: 4000 },
        { text: "Mereka pantas memiliki tempatnya sendiri.", duration: 1500 },
        { text: "Dan... aplikasi ini adalah tempat itu.", duration: 1500 },
        { text: "Jadi...", duration: 1000 },
        { text: "Selamat datang di dalam cerita kita.", duration: 1500 },
        { text: "Cerita yang mungkin belum terlalu panjang.", duration: 1500, showVideo: true }, 
        { text: "Tapi sudah cukup untuk membuat seorang laki-laki merasa sangat bersyukur karena pernah dipertemukan dengan perempuan sebaik, selembut, dan seindah kamu.", duration: 5000 },
        { text: "Sekarang...", duration: 1000 },
        { text: "Yuk, kita mulai dari awal.", duration: 1500 },
        { text: "”Karena semua cerita indah selalu dimulai dari sebuah pertemuan sederhana.”", duration: 5000 }
    ];

    openBtn.addEventListener('click', () => {
        if (typeof window.startBackgroundMusic === 'function') window.startBackgroundMusic();
        setTimeout(() => { startCinematic(); }, 1200); 
    });

    function startCinematic() {
        cinematicLayer.classList.add('active');
        
        setTimeout(() => {
            playSequence(openingSequence, () => {
                setTimeout(() => {
                    playSequence(babSequence, () => {
                        // KETIKA SELESAI: Pudar secara sangat halus ke halaman surat
                        cinematicLayer.style.opacity = '0';
                        setTimeout(() => {
                            cinematicLayer.classList.remove('active');
                            cinematicLayer.style.display = 'none';
                        }, 3000); // Tunggu sampai transisi CSS CSS selesai
                    });
                }, 2500);
            });
        }, 2000);
    }

    function playSequence(sequence, onComplete) {
        let i = 0;

        function showNext() {
            if (i >= sequence.length) {
                if (onComplete) onComplete();
                return;
            }

            const item = sequence[i];

            // Pemicu Video Background agar perlahan muncul
            if (item.showVideo && bgVideoContainer && bgVideo) {
                bgVideoContainer.classList.add('show-video');
                bgVideo.play().catch(e => console.log(e));
            }

            if (item.isTitle) cinematicText.classList.add('title-style');
            else cinematicText.classList.remove('title-style');

            cinematicText.innerHTML = item.text;
            cinematicText.classList.add('fade-in');

            setTimeout(() => {
                cinematicText.classList.remove('fade-in');
                setTimeout(() => {
                    i++;
                    showNext();
                }, 1500); 
            }, item.duration);
        }
        showNext();
    }
});
