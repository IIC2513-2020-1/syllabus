document.addEventListener('DOMContentLoaded', function() {
  var selector = document.getElementById('selector');
  
  selector.onchange = function() {
    var selectedValue = document.getElementById('selected-value');
    selectedValue.innerHTML = 'Selected value is: ' + selector.value;
  }

  /*
   * Una alternativa
   */
  
   /*
   selector.addEventListener('change', function() {
    var selectedValue = document.getElementById('selected-value');
    selectedValue.innerHTML = 'Selected value is: ' + selector.value;
   })
   */
});
