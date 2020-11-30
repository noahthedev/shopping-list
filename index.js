function addNewItem() {
    // this takes the form input and add it to the list
    $("#js-shopping-list-form").submit(event => {
        let newItem = $('#shopping-list-entry').val();
        $('.shopping-list').append(`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
        // clear the input
        $('#shopping-list-entry').val(' ');
        // prevent the form from attempting to submit to server
        event.preventDefault();
    })
};



function shoppingListMain() {
    addNewItem();
};

$(shoppingListMain);