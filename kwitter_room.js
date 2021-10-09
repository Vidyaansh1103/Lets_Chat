

const firebaseConfig = {
      apiKey: "AIzaSyAwaopOR4AWHxdwuzhC0VQcthyiFm5umHo",
      authDomain: "kwitter-b4372.firebaseapp.com",
      projectId: "kwitter-b4372",
      storageBucket: "kwitter-b4372.appspot.com",
      messagingSenderId: "614813464395",
      appId: "1:614813464395:web:bcac176aec5d757f575ace"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
