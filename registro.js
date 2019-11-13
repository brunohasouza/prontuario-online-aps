document.addEventListener("DOMContentLoaded", load, false);

function load(){
    submitEvent();


    
}

(function () {

  var firebaseConfig = {
    apiKey: "AIzaSyD17kUgDpc_krgIl8lXEYLeNEfNV4fhftM",
    authDomain: "testepront-4592c.firebaseapp.com",
    databaseURL: "https://testepront-4592c.firebaseio.com",
    projectId: "testepront-4592c",
    storageBucket: "testepront-4592c.appspot.com",
    messagingSenderId: "322725973081",
    appId: "1:322725973081:web:f18e93e08dd39ff7c93548",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
})()



function submitEvent(){

    let form = document.getElementById("formCadastro");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        let login = document.getElementById("name").value;
        let apelido = document.getElementById("username").value;
        let senha = document.getElementById("password").value;

        novoUser(apelido, login, senha);


        
    })

};

function novoUser(login, apelido, senha){
    let user = {
        Apelido: apelido,
        Senha: senha
    }

    firebase.database().ref("Users/" + login).set(user).then((snapshot)=>{
        alert("Usuario cadastrado");
    })
}