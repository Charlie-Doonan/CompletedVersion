// Goal read more popup

// Select buttons for opening popups
const openButton = document.getElementById("openInfo");
const openButton1 = document.getElementById("openInfo1");
const openButton2 = document.getElementById("openInfo2");

// Select buttons for closing popups
const closeButton = document.getElementById("closeInfo");
const closeButton1 = document.getElementById("closeInfo1");
const closeButton2 = document.getElementById("closeInfo2");

// Select ections for popup info
const Info = document.getElementById("Info");
const Info1 = document.getElementById("Info1");
const Info2 = document.getElementById("Info2");

// Add event listeners to open popups when open buttons are clicked
openButton.addEventListener("click", () => {
  Info.classList.add("open");
});

openButton1.addEventListener("click", () => {
  Info1.classList.add("open");
});

openButton2.addEventListener("click", () => {
  Info2.classList.add("open");
});

// Add event listeners to close popups when close buttons are clicked
closeButton.addEventListener("click", () => {
  Info.classList.remove("open");
});

closeButton1.addEventListener("click", () => {
  Info1.classList.remove("open");
});

closeButton2.addEventListener("click", () => {
  Info2.classList.remove("open");
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

      // Update logo img source
      document.getElementById("Nav_Img").src = data["Nav_Img"];

      // Set headings and paragraphs for each goal
      document.getElementById("goalsHead").textContent = data["goalsHead"];
      document.getElementById("goal1Head").textContent = data["goal1Head"];
      document.getElementById("goal2Head").textContent = data["goal2Head"];
      document.getElementById("goal3Head").textContent = data["goal3Head"];
      document.getElementById("goal1Para").textContent = data["goal1Para"];
      document.getElementById("goal2Para").textContent = data["goal2Para"];
      document.getElementById("goal3Para").textContent = data["goal3Para"];

      // Set text for open info buttons
      document.getElementById("openInfo").textContent = data["openInfo"];
      document.getElementById("openInfo1").textContent = data["openInfo1"];
      document.getElementById("openInfo2").textContent = data["openInfo2"];

      // Set text for close info buttons
      document.getElementById("closeInfo").textContent = data["closeInfo"];
      document.getElementById("closeInfo1").textContent = data["closeInfo1"];
      document.getElementById("closeInfo2").textContent = data["closeInfo2"];

      // Set headings and paragraphs for 'read more' goal info sections
      document.getElementById("goalsInfo1Head").textContent = data["goalsInfo1Head"];
      document.getElementById("goalsInfo2Head").textContent = data["goalsInfo2Head"];
      document.getElementById("goalsInfo3Head").textContent = data["goalsInfo3Head"];

      document.getElementById("goalsInfo1Para").textContent = data["goalsInfo1Para"];
      document.getElementById("goalsInfo2Para").textContent = data["goalsInfo2Para"];
      document.getElementById("goalsInfo3Para").textContent = data["goalsInfo3Para"];

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