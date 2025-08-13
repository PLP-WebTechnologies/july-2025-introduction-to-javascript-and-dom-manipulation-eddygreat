
// Variable declaration and conditional logic
function checkAge() {
  const ageInput = document.getElementById("userAge").value;
  const age = parseInt(ageInput);
  const result = document.getElementById("ageResult");

  if (isNaN(age)) {
    result.textContent = "⚠️ Please enter a valid number.";
  } else if (age >= 18) {
    result.textContent = "✅ You are eligible to vote!";
  } else {
    result.textContent = "❌ You are not eligible to vote yet.";
  }
}


// Custom function to display a greeting
function showGreeting() {
  const name = prompt("What's your name?");
  const greeting = createGreeting(name);
  document.getElementById("greetingOutput").textContent = greeting;
}

// Reusable function to format greeting
function createGreeting(name) {
  return `👋 Hello, ${name || "Guest"}! Welcome to JavaScript mastery.`;
}


// Loop to generate a list of items
function generateList() {
  const list = document.getElementById("listOutput");
  list.innerHTML = ""; // Clear previous list

  const items = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  // Using forEach loop
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item}`;
    list.appendChild(li);
  });
}

// Countdown using a while loop
function countdown() {
  let count = 5;
  while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
  }
  console.log("🚀 Blast off!");
}
countdown(); // Run once on page load


// Toggle theme by adding/removing a class
function toggleTheme() {
  document.body.classList.toggle("dark-theme");

  const pageHeading = document.getElementById("pageHeading");
 
  const themeStatus = document.getElementById("themeStatus");
  const isDark = document.body.classList.contains("dark-theme"); 
  document.body.style.margin = isDark ? "10px" : "30px";


  themeStatus.textContent = `Current theme: ${isDark ? "Dark" : "Light"}`;
  pageHeading.textContent = isDark ? "🌙JS Fundamentals: Dark Mode Activated"
   :"☀️ JS Fundamentals: Light Mode Activated";
}

// Select all buttons with the class 'toggle-btn'
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    button.classList.add("active");

    // Toggle 'toggled' class to switch color
    button.classList.toggle("toggled");
  });
});

// Dynamically create a new element
const newElement = document.createElement("p");
newElement.textContent = "✨ This paragraph was added dynamically!";
document.body.appendChild(newElement);

// Listen to click events and update content
document.body.addEventListener("click", () => {
  console.log("🖱️ Body was clicked!");
});

function resetUI() {
  document.getElementById("userAge").value = "";
  document.getElementById("ageResult").textContent = "";
}