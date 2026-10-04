// Store workshop information for simple interaction.
let totalPlaces = 28;
let reservedPlaces = 9;
let enrollmentActive = true;

function displayEnrollment() {
  let target = document.getElementById("enrollmentOutput");
  if (enrollmentActive) {
    target.textContent = "Applications are being accepted for this workshop.";
  } else {
    target.textContent = "Enrollment is currently closed.";
  }
}

function displayCapacity() {
  let freePlaces = totalPlaces - reservedPlaces;
  let target = document.getElementById("capacityOutput");
  if (freePlaces > 0) {
    target.textContent = "Open places: " + freePlaces + " out of " + totalPlaces + ".";
  } else {
    target.textContent = "The workshop is fully booked.";
  }
}

function displayPersonalNote() {
  let visitor = document.getElementById("participantFullName").value;
  let target = document.getElementById("personalOutput");
  target.textContent = "Hello, " + visitor + "! We look forward to seeing you.";
}

function displayReminder() {
  let target = document.getElementById("reminderOutput");
  target.textContent = "Please arrive 15 minutes before the session begins.";
}
