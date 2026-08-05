// js/config.js - Pusat Konfigurasi Media (10 Foto & 5 Video)
const APP_CONFIG = {
    assets: {
        bgOpening: 'assets/background/background.MOV',
        bgVideo: 'assets/background/background.MOV', 
        music: 'assets/music/Masa ini Nanti dan Masa Indah Lainnya - Nuca.mp3'
    },
    
    photos: [
        { targetId: 'media-foto-1', src: 'assets/images/1.JPEG', caption: 'Awal segalanya.', frame: 'frame-vintage', tape: 'tape-masking', rotation: '-4deg' },
        { targetId: 'media-foto-2', src: 'assets/images/a.JPEG', caption: 'Senyum ini.', frame: 'frame-classic', tape: 'none', rotation: '3deg' },
        { targetId: 'media-foto-3', src: 'assets/images/b.JPEG', caption: 'Tawa lepas.', frame: 'frame-cream', tape: 'tape-washi', rotation: '-6deg' },
        { targetId: 'media-foto-4', src: 'assets/images/c.JPEG', caption: 'Hari yang cerah.', frame: 'frame-classic', tape: 'tape-masking', rotation: '5deg' },
        { targetId: 'media-foto-5', src: 'assets/images/d.JPEG', caption: 'Langkah kecil.', frame: 'frame-vintage', tape: 'none', rotation: '-2deg' },
        { targetId: 'media-foto-6', src: 'assets/images/e.JPEG', caption: 'Waktu berhenti.', frame: 'frame-cream', tape: 'tape-washi', rotation: '4deg' },
        { targetId: 'media-foto-7', src: 'assets/images/14.JPEG', caption: 'Momen berharga.', frame: 'frame-classic', tape: 'tape-masking', rotation: '-5deg' },
        { targetId: 'media-foto-8', src: 'assets/images/8.PNG', caption: 'Tanpa rencana.', frame: 'frame-vintage', tape: 'none', rotation: '2deg' },
        { targetId: 'media-foto-9', src: 'assets/images/9.PNG', caption: 'Selalu ingat.', frame: 'frame-classic', tape: 'tape-masking', rotation: '-3deg' },
        { targetId: 'media-foto-10', src: 'assets/images/10.JPEG', caption: 'Hingga nanti.', frame: 'frame-cream', tape: 'tape-washi', rotation: '5deg' }
    ],

    videos: [
        { targetId: 'media-video-1', src: 'assets/videos/1.MOV', caption: 'Momen berputar.', frame: 'frame-classic', tape: 'tape-washi', rotation: '2deg' },
        { targetId: 'media-video-2', src: 'assets/videos/2.MOV', caption: 'Suara tawa.', frame: 'frame-vintage', tape: 'tape-masking', rotation: '-3deg' },
        { targetId: 'media-video-3', src: 'assets/videos/3.MOV', caption: 'Langkah kita.', frame: 'frame-cream', tape: 'none', rotation: '4deg' },
        { targetId: 'media-video-4', src: 'assets/videos/4.MOV', caption: 'Hari itu.', frame: 'frame-classic', tape: 'tape-masking', rotation: '-2deg' },
        { targetId: 'media-video-5', src: 'assets/videos/5.MOV', caption: 'Kenangan hidup.', frame: 'frame-vintage', tape: 'tape-washi', rotation: '3deg' }
    ]
};
