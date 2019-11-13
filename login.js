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
        
        let username =  document.getElementById("username").value;
        let password =  document.getElementById("password").value;

        firebase.database().ref("Users/" + username).once('value').then((snapshot)=>{
            console.log(snapshot.val())
            if(snapshot.val() == null){
                alert("usuario não cadastrado");
            }else{
                if(snapshot.val().Senha == password){
                    alert("Usuario pode logar-se")
                }else{
                    alert("senha incorreta");
                }
            }

        })
    })
        
}