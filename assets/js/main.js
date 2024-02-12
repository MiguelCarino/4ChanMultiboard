document.addEventListener('DOMContentLoaded', function() {
    const iframeSources = [
        { url: 'https://4chan.org/a/catalog#index-options', name: '/a/ - Anime & Manga' },
        { url: 'https://4chan.org/c/#index-options', name: '/c/ - Anime/Cute' },
        { url: 'https://4chan.org/w/#index-options', name: '/w/ - Anime/Wallpapers' },
        { url: 'https://4chan.org/m/#index-options', name: '/m/ - Mecha' },
        { url: 'https://4chan.org/cgl/#index-options', name: '/cgl/ - Cosplay & EGL' },
        { url: 'https://4chan.org/cm/#index-options', name: '/cm/ - Cute/Male' },
        { url: 'https://4chan.org/f/#index-options', name: '/f/ - Flash' },
        { url: 'https://4chan.org/n/#index-options', name: '/n/ - Transportation' },
        { url: 'https://4chan.org/jp/#index-options', name: '/jp/ - Japan General' },
        { url: 'https://4chan.org/v/#index-options', name: '/v/ - Video Games' },
        { url: 'https://4chan.org/vg/#index-options', name: '/vg/ - Video Game Generals' },
        { url: 'https://4chan.org/vp/#index-options', name: '/vp/ - Pokémon' },
        { url: 'https://4chan.org/vr/#index-options', name: '/vr/ - Retro Games' },
        { url: 'https://4chan.org/co/#index-options', name: '/co/ - Comics & Cartoons' },
        { url: 'https://4chan.org/g/#index-options', name: '/g/ - Technology' },
        { url: 'https://4chan.org/tv/#index-options', name: '/tv/ - Television & Film' },
        { url: 'https://4chan.org/k/#index-options', name: '/k/ - Weapons' },
        { url: 'https://4chan.org/o/#index-options', name: '/o/ - Auto' },
        { url: 'https://4chan.org/an/#index-options', name: '/an/ - Animals & Nature' },
        { url: 'https://4chan.org/tg/#index-options', name: '/tg/ - Traditional Games' },
        { url: 'https://4chan.org/sp/#index-options', name: '/sp/ - Sports' },
        { url: 'https://4chan.org/asp/#index-options', name: '/asp/ - Alternative Sports' },
        { url: 'https://4chan.org/sci/#index-options', name: '/sci/ - Science & Math' },
        { url: 'https://4chan.org/his/#index-options', name: '/his/ - History & Humanities' },
        { url: 'https://4chan.org/int/#index-options', name: '/int/ - International' },
        { url: 'https://4chan.org/out/#index-options', name: '/out/ - Outdoors' },
        { url: 'https://4chan.org/toy/#index-options', name: '/toy/ - Toys' },
        { url: 'https://4chan.org/i/#index-options', name: '/i/ - Oekaki' },
        { url: 'https://4chan.org/po/#index-options', name: '/po/ - Papercraft & Origami' },
        { url: 'https://4chan.org/p/#index-options', name: '/p/ - Photography' },
        { url: 'https://4chan.org/ck/#index-options', name: '/ck/ - Food & Cooking' },
        { url: 'https://4chan.org/lit/#index-options', name: '/lit/ - Literature' },
        { url: 'https://4chan.org/mu/#index-options', name: '/mu/ - Music' },
        { url: 'https://4chan.org/fa/#index-options', name: '/fa/ - Fashion' },
        { url: 'https://4chan.org/3/#index-options', name: '/3/ - 3DCG' },
        { url: 'https://4chan.org/gd/#index-options', name: '/gd/ - Graphic Design' },
        { url: 'https://4chan.org/diy/#index-options', name: '/diy/ - Do It Yourself' },
        { url: 'https://4chan.org/wsg/#index-options', name: '/wsg/ - Worksafe GIF' },
        { url: 'https://4chan.org/qst/#index-options', name: '/qst/ - Quests' },
        { url: 'https://4chan.org/biz/#index-options', name: '/biz/ - Business & Finance' },
        { url: 'https://4chan.org/trv/#index-options', name: '/trv/ - Travel' },
        { url: 'https://4chan.org/fit/#index-options', name: '/fit/ - Fitness' },
        { url: 'https://4chan.org/adv/#index-options', name: '/adv/ - Advice' },
        { url: 'https://4chan.org/b/#index-options', name: '/b/ - Random' },
        { url: 'https://4chan.org/r9k/#index-options', name: '/r9k/ - ROBOT9001' },
        { url: 'https://4chan.org/pol/#index-options', name: '/pol/ - Politically Incorrect' },
        { url: 'https://4chan.org/bant/#index-options', name: '/bant/ - International/Random' },
        { url: 'https://4chan.org/soc/#index-options', name: '/soc/ - Cams & Meetups' },
        { url: 'https://4chan.org/s4s/#index-options', name: '/s4s/ - Shit 4chan Says' },
        { url: 'https://4chan.org/x/#index-options', name: '/x/ - Paranormal' },
        { url: 'https://4chan.org/qa/#index-options', name: '/qa/ - Questions & Answers' },
    ];

    const buttonsContainer = document.getElementById('buttons');
    const iframesContainer = document.getElementById('iframes');

    iframeSources.forEach((iframeSource, index) => {
        // Creates button
        let button = document.createElement('button');
        button.textContent = iframeSource.name; // Use the name property for the button text
        button.addEventListener('click', function() {
            toggleIframe(`iframe${index + 1}`); // Pass the iframe ID directly
        });
        buttonsContainer.appendChild(button);

        // Create iframe with URL from the iframeSource
        let iframe = document.createElement('iframe');
        iframe.classList.add('flex-item');
        iframe.style.display = 'none'; // Start hidden
        iframe.setAttribute('src', iframeSource.url); // Use the url property for the iframe source
        iframe.setAttribute('id', `iframe${index + 1}`);
        iframesContainer.appendChild(iframe);
    });

    function toggleIframe(iframeId) {
        let iframe = document.getElementById(iframeId);
        // Determine current visibility before toggling
        let isVisible = iframe.style.display !== 'none'; 
        // Toggle visibility
        iframe.style.display = isVisible ? 'none' : ''; 
        // Update URL after toggling visibility
        updateURL(iframeId, !isVisible); // Pass the new visibility state
    }    

    function updateURL(iframeId, isVisible) {
        const url = new URL(window.location);
        url.searchParams.set(iframeId, isVisible ? '1' : '0'); // Set parameter for visibility
        history.pushState({}, '', url); // Update URL without reloading
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    iframeSources.forEach((iframeSource, index) => {
        const iframeId = `iframe${index + 1}`;
        if (urlParams.has(iframeId)) {
            const isVisible = urlParams.get(iframeId) === '1';
            let iframe = document.getElementById(iframeId);
            iframe.style.display = isVisible ? '' : 'none';
        }
    });
});