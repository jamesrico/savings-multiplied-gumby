(function(){
  'use strict';
  var url = 'https://savingsmultipliedssh.firebaseio.com/items.json';

  $(document).ready(function () {

    $.get(url, getItems);

  function getItems(res) {

    var $item = $('<div></div>');

    $.each(res, function(i, merch) {
        var $itemPrice = $('<p></p>');
        var $itemTitle = $('<p></p>');
        var $itemSeller = $('<p></p>');
        var $itemContainer  = $('<div class="productContainer"></div>');
        var $itemImage = $('<img src="' + merch.image + '" class="listImage">');

        $itemTitle.text(merch.title);
        $itemPrice.text("$" + merch.price);
        $itemSeller.text(merch.seller);

        $itemContainer.append($itemImage);
        $itemContainer.append($itemTitle);
        $itemContainer.append($itemPrice);
        $itemContainer.append($itemSeller);

        $item.append($itemContainer);
    });

    $('#content').append($item);
    };
  });


})();

