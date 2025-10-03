document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="index.html" class="text-2xl md:text-3xl font-playfair font-bold text-gray-800">
        Mercedes <span style="color: var(--gold-color);">Feedback & Booking</span>
      </a>
      <nav class="hidden md:flex items-center space-x-6">
        <a href="index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="sentiment.html" class="nav-link">Sentiment Analysis</a>
        <a href="tts.html" class="nav-link">TTS</a>
        <div id="auth-links"></div>
      </nav>
    </div>
  `;

  const footerHTML = `
    <div class="container mx-auto text-center">
      <p class="text-lg font-bold">Mercedes Feedback & Booking</p>
      <p class="text-sm text-gray-400 mt-2">© 2025 Mercedes-Benz. All Rights Reserved.</p>
    </div>
  `;

  document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("footer").innerHTML = footerHTML;

  // Login/logout logic
  const authLinks = document.getElementById("auth-links");
  const user = localStorage.getItem("loggedInUser");
  if (user) {
    authLinks.innerHTML = `<span class="mr-4">Welcome, ${user}</span>
    <button id="logout-btn" class="bg-red-500 text-white px-3 py-1 rounded-full">Logout</button>`;
    document.getElementById("logout-btn").onclick = () => {
      localStorage.removeItem("loggedInUser");
      location.reload();
    };
  } else {
    authLinks.innerHTML = `<a href="login.html" class="px-4 py-2 border rounded-full">Login</a>`;
  }
});