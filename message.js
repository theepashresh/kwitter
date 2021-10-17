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

  function send()
  {
    msg = document.getElementById("msg").value;
    firebaseConfig.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("msg").value = "";
  }