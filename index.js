$(function() {
    ('#shopping-list-entry').on('submit', function(e) {
    e.preventDefault();
    var text = $('#shopping-list-entry').val();
    ('.shopping-item').append(`<li>
    <span class="shopping-item">${text}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
   
}

)});

$('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
    $(this).closest('<li>').find('.shopping-item').toggle('.shopping-item');

}
);

$('.shopping-list').on('click', '.shopping-item-delete', function(e) {
    $(this).closest('<li>').find('.shopping-item').remove('.shopping-item');

}
);
