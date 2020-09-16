(function () {
    'use strict';

    const defaultPhoto = "https://www.pngkit.com/png/full/0-4474_facebook-play-button-png-clip-art-white-video.png";

    fetch('json/animals.json')
        .then(r => {
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            return r.json();
        })
        .then(videos => {
            const videoList = $('#videos');
            videos.forEach(video => {
                $(`<li><img id="${video.title}" src="${video.image || defaultPhoto}" alt="" class="video"><h3>${video.title}</h3></li>`)
                    .appendTo(videoList)
                    .click(() => $(`#${video.title}`).replaceWith(`<video autoplay  controls><source src="${video.url}" type="video/mp4">
          Your browser does not support the video tag.</video>`));
            });
        })
        .catch(err => console.error(err));
}());