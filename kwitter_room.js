
var firebaseConfig = {
      apiKey: "AIzaSyA1mAZ3R7aZ6XQ4sTuprWC1WDYTzucm7h4",
      authDomain: "kwitter-a2b53.firebaseapp.com",
      databaseURL: "https://kwitter-a2b53-default-rtdb.firebaseio.com",
      projectId: "kwitter-a2b53",
      storageBucket: "kwitter-a2b53.appspot.com",
      messagingSenderId: "493091349178",
      appId: "1:493091349178:web:da715e37637d6a07529883",
      measurementId: "G-JK044TMQMW"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name;
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><chr></chr>";
      document.getElementById("output").innerHTML += row;     
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}