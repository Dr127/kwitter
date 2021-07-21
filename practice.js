 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
     apiKey: "AIzaSyCZaAIaWm2uniiQm-1JrWdt2O-kD1SoYo4",
     authDomain: "classtest-e92a8.firebaseapp.com",
     databaseURL: "https://classtest-e92a8-default-rtdb.firebaseio.com",
     projectId: "classtest-e92a8",
     storageBucket: "classtest-e92a8.appspot.com",
     messagingSenderId: "516825638176",
     appId: "1:516825638176:web:8c66cae3f16f58c5bce345",
     measurementId: "G-M1PEV9RL8J"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 //ADD YOUR FIREBASE LINKS
 function addUser() {
     user_name = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose: "adding user"
     });
}
//firebase - is used to set the reference for adding data to the database
//database() - means we want to add data to the database.
//ref(“/”) - ref() means the reference, where we want to add a user name in the database.
//“/” - this means we want to add the user name in the root as the main folder
//child(user_name) - child() function is used to give the name to the main folder. user_name is the name of the main folder.