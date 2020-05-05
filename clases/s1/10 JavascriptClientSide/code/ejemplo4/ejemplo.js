$(function() {
  $('#selector').change(function() {
    $('#selected-value').text('Selected value is: ' + this.value);
  });
});
