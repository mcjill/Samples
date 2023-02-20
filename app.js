const checkIpButton = document.getElementById("check-ip-button");
const ipDisplay = document.getElementById("ip-display");

checkIpButton.addEventListener("click", () => {
  fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
      const { ip } = data;
      ipDisplay.innerHTML = `Your IP address is: ${ip}`;
    });
});
