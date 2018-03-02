// VolEd Site
// Project 1

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAESVnD8XLRFzhK_vlaDfV8UlKiEZBIqMA",
    authDomain: "voledrcb.firebaseapp.com",
    databaseURL: "https://voledrcb.firebaseio.com",
    projectId: "voledrcb",
    storageBucket: "",
    messagingSenderId: "172361308768"
  };
  firebase.initializeApp(config);

// Global variables to hold reference to firebase database and user id
var database = firebase.database();
var userId;

// On click function for the register button on reg page
$("#register").on("click", e =>
{
  e.preventDefault();
  e.stopPropagation();
// Make reference variables for the display name, email, and password entered on the page
  const txtEmail = document.getElementById("email");
  const txtPassword = document.getElementById("password");
  const txtDisplay = document.getElementById("display-name");
  const display = txtDisplay.value;
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();
 // console.log("Email: " + email);
 // console.log("Password: " + password);
// Create promise to create new user using email and password
  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise
  // Display error in modal
    .catch(e =>
      {
       // console.log(e.message)
        $("#error-msg").text(e.message);
        $("#modal2").show();
      })
  // Then send email to verify the users email address
    .then(e =>
  {
    var curser = auth.currentUser;
    curser.sendEmailVerification().then(e =>
    {
      // Email sent.
     // console.log("Email sent.");
    }).catch(e =>
    {
      // An error happened.
     // console.log(e.message);
      $("#error-msg").text(e.message);
      $("#modal2").show();
    });
  // Create uid for user set to display value
    createUserData(curser.uid, display);

   });
});

// On click event listener for the Sign-in Button on reg page
$("#sign-in").on("click", e =>
{
  // Don't reload the page
  e.preventDefault();
  e.stopPropagation();
  // Make reference variables for the email and password entered on the page
  const txtEmail = document.getElementById("email");
  const txtPassword = document.getElementById("password");
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();
 // console.log("Email: " + email);
 // console.log("Password: " + password);
// Create promise to sign user in using the email and password entered
  const promise = auth.signInWithEmailAndPassword(email, password);
  promise
  .catch(e =>
   {
  // Display error in modal
    // console.log(e.message);

     $("#error-msg").text(e.message);
      $("#modal2").show();

   })
  // After successful sign in, redirect to profile page

});
// On click event listener for Sign-out button on reg page
$("#sign-out").on("click", e =>
{
    firebase.auth().signOut();
});

// Realtime listener
firebase.auth().onAuthStateChanged(firebaseUser =>
{
// If a user is logged in, hide register and sign in buttons, display sign out
  if(firebaseUser)
  {
   // console.log(firebaseUser);
    $("#register").hide();
    $("#sign-in").hide();
    $("#sign-out").show();

    userId = firebase.auth().currentUser.uid;
  //If the signed in user verified their email, allow them to access their profile features
    if (firebaseUser.emailVerified)
  {
   // console.log("email verified");
    getUsername();
    getJoinDate();
    getEmail();
  }
  else
  {
  // Otherwise show modal indicating their email needs to be verified
    $("#error-msg").text("Please verify your email address by clicking the link in the email we sent you!");
    $("#modal2").show();
   // console.log('Email is not verified');
  }

  }
// Otherwise, show register and sign in button, and hide sign out button
  else
  {
   // console.log("Not logged in.");
    $("#register").show();
    $("#sign-in").show();
    $("#sign-out").hide();
  }
});

//Variable to hold database reference to users subset
var userRef = database.ref("users/");

// Function to initialize user data upon registration
function createUserData(id, username)
{
	userRef.child(id).set(
	{
		username: username,
		// movies: {},
		joinDate: moment().format("MM/DD/YYYY")
	});
}

// Function to add movie from discover page to your movie list

// Function to display join date on profile page
function getJoinDate()
{
//	console.log(userId);
	thisUserRef = database.ref("users/" + userId);
	thisUserRef.once("value", function(snapshot)
	{
	//	console.log(snapshot.val().joinDate);
		$("#date-joined").html("Member since: " + snapshot.val().joinDate);
  });
}

// Function to display username on profile page
function getUsername()
{
	thisUserRef = database.ref("users/" + userId);
  thisUserRef.once("value", function(snapshot)
  {
   // console.log(snapshot.val().username);
    $("#username-display").html(snapshot.val().username);
    $("#display-name").attr("placeholder", snapshot.val().username);
  });
}

// Function to display email on profile page
function getEmail()
{
	var email = firebase.auth().currentUser.email;
//	console.log(email);
	$("#email-used").html(email);
  $("#email").attr("placeholder", email);
}