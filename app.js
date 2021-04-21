// Init Github
const github = new Github();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    //Make HTTP CALL
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show Alert
      } else {
        //Show Profile
      }
    });
  } else {
    //Clear the profile
  }
});
