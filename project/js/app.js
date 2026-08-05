// Registrasi Service Worker untuk kapabilitas Offline
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('ServiceWorker berhasil diregistrasi dengan scope:', registration.scope);
            })
            .catch((err) => {
                console.log('ServiceWorker registrasi gagal:', err);
            });
    });
}

// Persiapan untuk logika inti aplikasi di tahap berikutnya
console.log("App.js initialized.");
