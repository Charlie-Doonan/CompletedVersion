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
        
        // Set text for heading and button on signup form
        document.getElementById("signupHead").textContent = data["signupHead"];
        document.getElementById("signupButton").textContent = data["signupButton"];

        // Set text for form labels 
        document.getElementById("Label_fName").textContent = data["Label_fName"];
        document.getElementById("Label_lName").textContent = data["Label_lName"];
        document.getElementById("Label_email").textContent = data["Label_email"];
        document.getElementById("Label_comments").textContent = data["Label_comments"];

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

//signup page 
let myForm = document.querySelector('form');
let myName = document.querySelector('#fName');
let lastName =document.querySelector('#lName');
let myEmail = document.querySelector('#email')
let SignupButton = document.getElementsByClassName('SignupButton')[0]

// If form is active, add a submit event listener
if (myForm) {
    myForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Update button text after submission
        SignupButton.textContent = `Hi ${myName.value}  ${lastName.value}, your message has been received, we will contact you at ${myEmail.value}`;
        
        // Create object with form dara
        const formBody = {
            fName: myName.value,
            lName: lastName.value,
            email: myEmail.value,
            SignupButton: SignupButton.value
        };

        const requestHeaders = {
            "Content-Type": "application/json"
        }
        
       // Log form data 
       console.log(JSON.stringify(formBody))

       // Send form data to server via POST request
        fetch('/signup', {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify(formBody)
            })

            .then(res => res.json())
            .then((responsedata) => {
                // console.log(responsedata); //testing
                SignupButton.textContent=`Hi ${responsedata.fName}, your message has been received, we will contact you at ${responsedata.email}`;
                 })
                 .catch((error) => console.error("Error:", error));
        });
    }
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

