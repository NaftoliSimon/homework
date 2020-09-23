(function () {
  'use strict';

  const sidebar = $('#sidebar');
  const selected = $('#selected');
  const catagory = $('#catagory');
  const title = $('#title');

  $('#button').click(() =>

    $.ajax({
      url: `https://api.flickr.com/services/feeds/photos_public.gne?tags=${catagory.val()}&format=json&jsoncallback=foo`,
      dataType: 'jsonp',
      jsonpCallback: 'foo'
    })
      .done(pictureData => {
        clearPhotos();
        let picItems = pictureData.items;
        picItems.forEach(elem => {
          let url = elem.media.m;
          $(`<li>
         <img src="${url}">
         <span>${elem.title}<span>
       </li>`)
            .appendTo('#sidebar ul')
            .click(function () {
              selected.attr('src', url);
              title.text(elem.title);
            });
        });
      })
      .catch(e => console.error(e)));
  function clearPhotos() {
    $('li').remove();
  }
}());