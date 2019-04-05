function addToList() {
    ('#shopping-list-entry').on('submit', function(e) {
    var text = $('#shopping-list-entry').val();
    ('#shopping-item').append('<span>' + text + '</span>');
    e.preventDefault();
}

)};

function removeItem() {

}

function checkItem() {

}

function uncheckItem() {

}
