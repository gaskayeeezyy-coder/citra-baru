// js/config.js - Pusat Konfigurasi Media (10 Foto & 5 Video)
const APP_CONFIG = {
    assets: {
        bgOpening: './assets/background/background.mov',
        bgVideo: './assets/videos/background.MOV', 
        music: './assets/music/Masa - Nuca.mp3'
    },
    
    photos: [
        { targetId: 'media-foto-1', src: './assets/images/1.jpeg', caption: 'Awal segalanya.', frame: 'frame-vintage', tape: 'tape-masking', rotation: '-4deg' },
        { targetId: 'media-foto-2', src: './assets/images/a.jpg', caption: 'Senyum ini.', frame: 'frame-classic', tape: 'none', rotation: '3deg' },
        { targetId: 'media-foto-3', src: './assets/images/b.jpg', caption: 'Tawa lepas.', frame: 'frame-cream', tape: 'tape-washi', rotation: '-6deg' },
        { targetId: 'media-foto-4', src: './assets/images/c.jpg', caption: 'Hari yang cerah.', frame: 'frame-classic', tape: 'tape-masking', rotation: '5deg' },
        { targetId: 'media-foto-5', src: './assets/images/d.jpg', caption: 'Langkah kecil.', frame: 'frame-vintage', tape: 'none', rotation: '-2deg' },
        { targetId: 'media-foto-6', src: './assets/images/e.jpg', caption: 'Waktu berhenti.', frame: 'frame-cream', tape: 'tape-washi', rotation: '4deg' },
        { targetId: 'media-foto-7', src: './assets/images/x.jpg', caption: 'Momen berharga.', frame: 'frame-classic', tape: 'tape-masking', rotation: '-5deg' },
        { targetId: 'media-foto-8', src: './assets/images/8.png', caption: 'Tanpa rencana.', frame: 'frame-vintage', tape: 'none', rotation: '2deg' },
        { targetId: 'media-foto-9', src: './assets/images/9.png', caption: 'Selalu ingat.', frame: 'frame-classic', tape: 'tape-masking', rotation: '-3deg' },
        { targetId: 'media-foto-10', src: './assets/images/10.jpeg', caption: 'Hingga nanti.', frame: 'frame-cream', tape: 'tape-washi', rotation: '5deg' }
    ],

    videos: [
        { targetId: 'media-video-1', src: './assets/videos/1.mov', caption: 'Momen berputar.', frame: 'frame-classic', tape: 'tape-washi', rotation: '2deg' },
        { targetId: 'media-video-2', src: './assets/videos/2.mov', caption: 'Suara tawa.', frame: 'frame-vintage', tape: 'tape-masking', rotation: '-3deg' },
        { targetId: 'media-video-3', src: './assets/videos/3.mov', caption: 'Langkah kita.', frame: 'frame-cream', tape: 'none', rotation: '4deg' },
        { targetId: 'media-video-4', src: './assets/videos/4.mov', caption: 'Hari itu.', frame: 'frame-classic', tape: 'tape-masking', rotation: '-2deg' },
        { targetId: 'media-video-5', src: './assets/videos/5.mov', caption: 'Kenangan hidup.', frame: 'frame-vintage', tape: 'tape-washi', rotation: '3deg' }
    ]
};
