document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('button');
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(this.responseText);
      document.getElementById('loaded-title').innerHTML = jsonData.title;
      document.getElementById('loaded-body').innerHTML = jsonData.body;
    }
  };

  button.onclick = function() {
    var randomPostId = Math.floor((Math.random() * 100) + 1);
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts/' + randomPostId, true);
    xhttp.send();
  }

});
