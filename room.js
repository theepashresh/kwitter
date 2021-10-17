var firebaseConfig = {
      apiKey: "AIzaSyDziAwSOGMHpI6JyJWVOYs5Bo21wrRxRxY",
      authDomain: "kwitter-a9c1f.firebaseapp.com",
      databaseURL: "https://kwitter-a9c1f-default-rtdb.firebaseio.com",
      projectId: "kwitter-a9c1f",
      storageBucket: "kwitter-a9c1f.appspot.com",
      messagingSenderId: "1076991688428",
      appId: "1:1076991688428:web:7e97c27463daf0ee562fc9",
      measurementId: "G-V81NTNTZ0T"
    };

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room-name", name);
      window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

