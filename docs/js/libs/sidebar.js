$('#slider-range').slider({
  range: true,
  min: 0,
  max: 320,
  step: 10,
  values: [0, 320],
  slide: function (event, ui) {
    $('#min-price').html('$' + ui.values[0]);

    suffix = '';
    if (ui.values[1] == $('#max-price').data('max')) {
      suffix = '';
    }
    $('#max-price').html('$' + ui.values[1] + suffix);
  },
});
