(function () {
    'use strict';

    const defaultPhoto = "https://www.pngkit.com/png/full/0-4474_facebook-play-button-png-clip-art-white-video.png";

    $('#button').click(() =>
        fetch(`json/${$('#catagory').val()}.json`)
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                return r.json();
            })
            .then(videos => {
                removeOldVideos();
                const videoList = $('#videos');
                videos.forEach(video => {
                    $(`<li><img id="${video.ID}" src="${video.image || defaultPhoto}" alt="" class="video"><h3>${video.title}</h3></li>`)
                        .appendTo(videoList)
                        .click(function () {
                            $(`#${video.ID}`).replaceWith(`<video autoplay  controls><source src="${video.url}" type="video/mp4">
          Your browser does not support the video tag.</video>`);
                        });
                });
            })
            .catch(err => console.error(err))
    );
    function removeOldVideos() {
        $('li').remove();
    }
}());