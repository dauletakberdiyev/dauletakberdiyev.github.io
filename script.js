document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;
    const button = document.getElementById("showUsername");
    const output = document.getElementById("output");
  
    tg.expand(); // Expands the web app to full height
  
    button.addEventListener("click", () => {
      const username = tg.initDataUnsafe.user?.username;
      if (username) {
        output.textContent = `Your Telegram username: @${username}`;
      } else {
        output.textContent = "Username not found or not available.";
      }
    });
});
  