// Function to show the popup confirmation message
function showPopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");

  // Automatically hide the popup after 3 seconds
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 3000);
}

// Handle new recommendation submissions
document.getElementById("recommendationForm").addEventListener("submit", function (event) {
  // Prevent the form from reloading the page
  event.preventDefault();

  const authorInput = document.getElementById("recAuthor");
  const textInput = document.getElementById("recText");

  const author = authorInput.value.trim();
  const text = textInput.value.trim();

  // Basic validation - don't add empty recommendations
  if (author === "" || text === "") {
    alert("Please fill in both your name and your recommendation.");
    return;
  }

  // Create the new recommendation card
  const li = document.createElement("li");
  li.className = "recommendation-card";

  const textPara = document.createElement("p");
  textPara.className = "rec-text";
  textPara.textContent = `"${text}"`;

  const authorPara = document.createElement("p");
  authorPara.className = "rec-author";
  authorPara.textContent = `— ${author}`;

  li.appendChild(textPara);
  li.appendChild(authorPara);

  // Add the new recommendation to the list
  const list = document.getElementById("recommendationList");
  list.appendChild(li);

  // Clear the form fields
  authorInput.value = "";
  textInput.value = "";

  // Show the popup ONLY when a new recommendation is successfully submitted
  showPopup();
});
