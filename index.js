function addNewItem() {
  // this takes the form input and adds it to the list
  $("#js-shopping-list-form").submit(function(event) {
  // prevent the form from attempting to submit to server
  event.preventDefault();
  let newItem = $('#shopping-list-entry').val();
  $('.shopping-list').append(
    `<li>
      <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button> 
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
    </li>`
  );
  // clear the form input
  $('#shopping-list-entry').val(' ');
  });
};

function checkItem() {
  // applies line-through CSS class to item
  $("ul").on("click", ".shopping-item-toggle", function() {
    $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");
  });
};

function deleteItem() {
  // deletes item from list
  $("ul").on("click", ".shopping-item-delete", function() {
    $(event.target).closest("li").remove();
  });

};

function shoppingListMain() {
  addNewItem();
  checkItem();
  deleteItem();
};

$(shoppingListMain);