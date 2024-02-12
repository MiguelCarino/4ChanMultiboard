document.addEventListener('DOMContentLoaded', function() {
    const iframeSources = [
        { url: 'https://4chan.org/int/#index-options', name: '/int/ - International' },
        { url: 'https://4chan.org/g/#index-options', name: '/g/ - Technology' },
        { url: 'https://4chan.org/mu/#index-options', name: '/mu/ - Music' },
        { url: 'https://4chan.org/an/#index-options', name: '/an/ - Animals & Nature' },
        { url: 'https://carino.systems/lurking.html', name: 'Carino Systems - Lurking' },
        { url: 'https://carino.systems/start.html', name: 'Carino Systems - Startpage' },
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
        //iframe.style.display = 'none'; // Start hidden
        iframe.setAttribute('src', iframeSource.url); // Use the url property for the iframe source
        iframe.setAttribute('id', `iframe${index + 1}`);
        iframesContainer.appendChild(iframe);
    });

    function toggleIframe(iframeId) {
        let iframe = document.getElementById(iframeId);
        iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
    }
});