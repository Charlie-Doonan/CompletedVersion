// Wait until DOM is fully loaded before executing code

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    // Select all student photo buttons
    const teamButtons = document.querySelectorAll(".studentPhoto");

    // Loop through each button, add a click event listener
    teamButtons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("Button clicked:", button);

            // Target all ID's for team member information
            const targetId = button.getAttribute("data-target");

            // Remove active class from all name sections
            document.querySelectorAll(".namesSection").forEach((section) => {
                section.classList.remove("active");
            });

            // Add active class to target section- whichever team memebers photo was clicked
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            } else {
                console.error(`No section found with ID: ${targetId}`);
            }
        });
    });
});

// Dynamically loading elements

document.addEventListener("DOMContentLoaded", () => {

    // Fetch content from JSON file
    fetch("packages/content.json")

    // Parse(breaking down complex sets of data structures) the response as JSON 
    .then(response => response.json())
    .then(data => {

        // Update navigation links with content from JSON file
        document.getElementById("navHome").textContent = data["navHome"];
        document.getElementById("navGoals").textContent = data["navGoals"];
        document.getElementById("navTeam").textContent = data["navTeam"];
        document.getElementById("navSignup").textContent = data["navSignup"];
        document.getElementById("Nav_Img").src = data["Nav_Img"];

        // Update team photos with img sources from JSON
        document.getElementById("teamphoto1").src = data["teamphoto1"];
        document.getElementById("teamphoto2").src = data["teamphoto2"];
        document.getElementById("teamphoto3").src = data["teamphoto3"];

        // Set heading, team member names and information
        document.getElementById("teamHead").textContent = data["teamHead"];
        document.getElementById("studentName1").textContent = data["studentName1"];
        document.getElementById("studentName2").textContent = data["studentName2"];
        document.getElementById("studentName3").textContent = data["studentName3"];
        document.getElementById("student1info").textContent = data["student1info"];
        document.getElementById("student2info").textContent = data["student2info"];
        document.getElementById("student3info").textContent = data["student3info"];
        document.getElementById("teamHead").textContent = data["teamHead"];
        
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


// Prevent rightclick and f12 for security- disables inspect element

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