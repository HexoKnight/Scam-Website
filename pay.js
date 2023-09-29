function finish(){
  if (8 <= document.getElementById("cardnum").value.length && document.getElementById("cardnum").value.length <= 19 && /^\d+$/.test(document.getElementById("cardnum").value)){
    if (document.getElementById("pass").value.length > 0){
      window.location.replace("/Scam-Website/finished.html")
    } else{
      document.getElementById("error").innerHTML = "Please enter a password"
    }
  } else{
    document.getElementById("error").innerHTML = "Invalid card number"
  }
}

expires = decodeURIComponent(document.cookie).substring("expiry=".length)
if (expires == ""){
  expiredate = new Date();
  expiredate.setTime(expiredate.getTime() + 24*60*60*1000);
  expires = expiredate.getTime()
  document.cookie = "expiry=" + expires + ";expires=" + expiredate.toGMTString() + ";path=/"
}

//const Client = require("@replit/database");
//const client = new Client();
//Client.set("key", "value");
//let key = Client.get("key");
//console.log(key);


// Update the count down every 1 second
var x = setInterval(function() {
  var distance = expires - new Date().getTime();
    
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("clock").innerHTML = "TIME LEFT: <b>" + hours + "h " + minutes + "m " + seconds + "s</b>";
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "TIME LEFT: <b>EXPIRED</b>";
  }
}, 1000);