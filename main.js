$(document).ready(function () {
  $('input[type=text]').keyup(function () {
    $this = $(this);
    var p = $('#price'),
        tx = $('#tax'),
        tt = $('#total');
    // Empty siblings field
    $this.parent('.calc-field').siblings('.calc-field').find('input').val('');

    switch ($this.attr('id')) {
      case 'price':
        if (!isNaN(parseInt($this.val()))) {
          tx.val(Math.round(parseInt($this.val()) * 0.05));
          tt.val(parseInt($this.val()) + parseInt(tx.val()));
        }
        break;
      case 'tax':
        break;
      case 'total':
        if (!isNaN(parseInt($this.val()))) {
          p.val(Math.round(parseInt($this.val()) / 1.05));
          tx.val(parseInt($this.val()) - parseInt(p.val()));
        }
        break;
    }
  });
});
