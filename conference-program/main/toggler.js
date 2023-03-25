$(function() {
  /*
    .toggler = click to toggle visibility of subsequent rows until the next
      .toggler or an .end is reached. The class .toggler-hidden is used to keep
      track of whether the subsequent rows are hidden.
    .head = always show, overriding the behavior above.
  */
  $('tr.toggler').click(function () {
    let toExpand = $(this).hasClass('toggler-hidden');
    $(this).nextAll().each(function (i, x) {
      x = $(x);
      if (x.hasClass('end') || x.hasClass('toggler'))
        return false;
      if (toExpand) {
        x.show();
      } else if (!x.hasClass('head')) {
        x.hide();
      }
    });
    $(this).toggleClass('toggler-hidden');
  });

  $('#expand-all').click(function () {
    $('.toggler-hidden').click();
  });
  $('#collapse-all').click(function () {
    $('.toggler:not(.toggler-hidden)').click();
  });

  // Hide everything on start
  $('tr.toggler').click();
});
