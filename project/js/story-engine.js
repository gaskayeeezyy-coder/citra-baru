// js/story-engine.js - Merender data dari story.js menjadi HTML dinamis
(function() {
    const container = document.getElementById('dynamic-story-content');
    if (!container || typeof STORY_CONTENT === 'undefined') return;

    let html = '';
    let staggerIdx = 1;
    
    // Fungsi pembagi kelas animasi agar natural
    function getStagger() {
        let cls = `stagger-${staggerIdx}`;
        staggerIdx = staggerIdx >= 3 ? 1 : staggerIdx + 1;
        return cls;
    }

    STORY_CONTENT.forEach(block => {
        const stag = getStagger();

        switch(block.type) {
            case 'section_start':
                const speed = block.parallax ? `data-speed="${block.parallax}"` : '';
                html += `<article id="${block.id || ''}" class="story-section parallax-item" ${speed}>\n`;
                staggerIdx = 1; // Reset hitungan animasi per section
                break;
                
            case 'section_end':
                html += `</article>\n`;
                break;
                
            case 'title':
                html += `<h2 class="handwriting-title ${stag}">${block.text}</h2>\n`;
                break;
                
            case 'paragraph':
                html += `<p class="handwriting-text ${stag}">${block.text}</p>\n`;
                break;
                
            case 'quote':
                html += `<blockquote class="quote-block ${stag}">${block.text}</blockquote>\n`;
                break;
                
            case 'photo':
            case 'video':
                let decor = block.decor ? `<div class="${block.decor}"></div>` : '';
                html += `<div id="${block.id}" class="media-container ${block.align || ''} ${stag}">${decor}</div>\n`;
                break;
                
            case 'stacked_photos':
                html += `<div class="stacked-photos-wrapper ${stag}">
                            <div class="paperclip-metal"></div>
                            <div id="${block.bottomId}" class="media-container stacked-bottom"></div>
                            <div id="${block.topId}" class="media-container stacked-top"></div>
                         </div>\n`;
                break;
                
            case 'signature':
                html += `<div class="signature-area ${stag}">
                            <span class="sign-closing">${block.closing}</span>
                            <span class="sign-name">${block.name}</span>
                            <span class="sign-date">${block.date}</span>
                         </div>\n`;
                break;
                
            case 'divider':
                html += `<div class="torn-paper-divider"></div>\n`;
                break;
                
            case 'decoration':
                const style = block.style ? `style="${block.style}"` : '';
                const text = block.text ? block.text : '';
                html += `<div class="${block.class} ${stag}" ${style}>${text}</div>\n`;
                break;
        }
    });

    // Suntikkan ke HTML
    container.innerHTML = html;
})();
