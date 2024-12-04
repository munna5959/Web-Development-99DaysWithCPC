function subscribe() {
    document.getElementById("text").innerHTML="You Have subscribed";
    document.getElementById("btn").innerHTML="Subscribed";
    document.getElementById("btn").style.backgroundColor="#434141";
}

function keyPress() {
    document.getElementById('text').innerHTML = 'Key Presed';
  }
  
  
  function windowResize() {
    document.getElementById('textarea').style.height = '100px';
    document.getElementById('form').style.fontFamily = 'Courier New';
    document.getElementById('form').style.color = '#ff0000';
  }
  
  function onScroll() {
    document.getElementById('text').innerHTML = 'Scrolling';
  }