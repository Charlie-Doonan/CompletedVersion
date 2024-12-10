// Dynamically loading elements

document.addEventListener("DOMContentLoaded", () => {

    // Fetch content from JSON file
    fetch("packages/content.json")

    // Parse(breaking down complex sets of data structures) the response as JSON 
    .then(response => response.json())
    .then(data => {

        // Update image source for navigation and welcome images
        document.getElementById("Nav_Img").src = data["Nav_Img"];
        document.getElementById("Welcome_Image").src = data["Welcome_Image"];

        // Update navigation links with content from JSON file
        document.getElementById("navHome").textContent = data["navHome"];
        document.getElementById("navGoals").textContent = data["navGoals"];
        document.getElementById("navTeam").textContent = data["navTeam"];
        document.getElementById("navSignup").textContent = data["navSignup"];

        // Set heading and text for welcome section, including text for button
        document.getElementById("welcomeHead").textContent = data["welcomeHead"];
        document.getElementById("welcomeText").textContent = data["welcomeText"];
        document.getElementById("signupButton").textContent = data["signupButton"];

        // Set text for footer
        document.getElementById("footer").textContent = data["footer"];
    })
    .catch(error => console.error("You made an error stupid:", error));
  });

  //hamburger menu

  document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger_menu");
    const navMenu = document.getElementById("navMenu");

    // Toggle show class when hamburger is clicked
    hamburgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});

// Prevent rightclick and f12 for security 

document.addEventListener("keydown", event => {
    if (event.key === "F12") {
        event.preventDefault();
        alert("You cant access inspect element");
    }
});

document.addEventListener("contextmenu", event => {
        event.preventDefault();
        alert("You cant access inspect element");
});