const API_URL = "http://localhost:5000";

async function checkHealth() {
  const status = document.getElementById("status");

  try {
    const response = await fetch(`${API_URL}/api/health`);
    const data = await response.json();

    status.textContent = `${data.status} - ${data.service}`;
  } catch (error) {
    status.textContent = "Backend unavailable";
  }
}

async function loadInfo() {
  const info = document.getElementById("info");

  try {
    const response = await fetch(`${API_URL}/api/info`);
    const data = await response.json();

    info.textContent = `${data.application} | Version ${data.version}`;
  } catch (error) {
    info.textContent = "Unable to load application information";
  }
}

checkHealth();
loadInfo();