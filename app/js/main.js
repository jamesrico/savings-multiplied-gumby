(function(){
  'use strict';
  var url = 'https://savingsmultipliedssh.firebaseio.com/items.json';

  $(document).ready(function () {

    $.get(url, getItems);
  function getItems(res) {
    var $item = $('<div class="three columns"></div>');
    var $itemPrice = $('<p></p>');
    var $itemTitle = $('<p></p>');
    var $itemSeller = $('<p></p>');
    var $itemContainer  = $('<div class="overbox"></div>');


    $.each(res, function(i, merch) {
        var $itemImage = $('<img src="' + merch.image + '" class="image">');
        $itemTitle.text(merch.title);
        $itemPrice.text(merch.price);
        $itemSeller.text(merch.seller);

        $itemContainer.append($itemImage);
        $itemContainer.append($itemTitle);
        $itemContainer.append($itemPrice);
        $itemContainer.append($itemSeller);

        $itemContainer.appendTo($item);
    });

    $('#content').append($item);
    };
  });


})();

