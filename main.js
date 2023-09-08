function updateDateTime() {
  const dayOfWeek = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const utcDate = new Date().toUTCString();

  // Extract just the time from the UTC string
  const utcTime = new Date().toUTCString();

  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    dayOfWeek;
  document.querySelector('[data-testid="currentUTCTime"]').textContent =
    utcTime;
}

setInterval(updateDateTime, 1000); // Update every second
