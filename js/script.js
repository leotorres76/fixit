let buttonSend = document.querySelector('.button-send')
buttonSend.addEventListener('click', formJSON)

function formJSON(event) {
  event.preventDefault()
  let name = document.querySelector('#name').value
  let email = document.querySelector('#email').value
  let cargo = document.querySelector('#cargo').value
  let empresa = document.querySelector('#empresa').value
  let ip = document.querySelector('#txtIp').value

  var Pessoa = function(name,email,cargo,empresa,ip) {
    this.name = name
    this.email = email
    this.ip = ip

    if (cargo) {
      this.cargo = cargo
    }
    if (empresa) { 
      this.empresa = empresa
    }
  }
  var lead = new Pessoa(name,email,cargo,empresa,ip)
}

function sendDataLead(lead) {

  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Requisiçao HTTP", this.responseText)
    }
  }
  xhttp.open('POST',lead,true)
  xhttp.send()
}

function getIp(callback)
{
    function response(s)
    {
        callback(window.userip);

        s.onload = s.onerror = null;
        document.body.removeChild(s);
    }

    function trigger()
    {
        window.userip = false;

        var s = document.createElement("script");
        s.async = true;
        s.onload = function() {
            response(s);
        };
        s.onerror = function() {
            response(s);
        };

        s.src = "https://l2.io/ip.js?var=userip";
        document.body.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(document.readyState)) {
        trigger();
    } else {
        document.addEventListener('DOMContentLoaded', trigger);
    }
}

getIp(function (ip) {
    console.log(ip);
    let txIp = document.querySelector('#txtIp')
      txIp.value = ip
});