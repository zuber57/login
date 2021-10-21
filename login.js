function submit(){
    var email = document.getElementById('username');
    var password = document.getElementById('password');
    var jsondata ={
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
    
    var url = "https://reqres.in/api/login";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(jsondata));
    xhr.onload = function () {
        if(xhr.status == 200){
            var data = xhr.responseText;
            console.log(data);
        }
        else{
            console.log("Error");
        }
       
    };
}
   function register(){
    var email = document.getElementById('username');
    var password = document.getElementById('password');
    var jsondata ={
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }
    
    var url = "https://reqres.in/api/login";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(jsondata));
    xhr.onload = function () {
        if(xhr.status == 200){
            var data = xhr.responseText;
            console.log(data);
        }
        else{
            console.log("Error");
        }
       
    };
   }