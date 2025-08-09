document.addEventListener('DOMContentLoaded', () => {
  // Updated event date: August 9, 2025 at 7:45 PM
  const eventDate = new Date('2025-08-09T19:45:00');

  const daysSpan = document.getElementById('days');
  const hoursSpan = document.getElementById('hours');
  const minutesSpan = document.getElementById('minutes');
  const secondsSpan = document.getElementById('seconds');
  const rsvpButton = document.getElementById('rsvpButton');
  const surpriseMessage = document.getElementById('surpriseMessage');

  function updateCountdown() {
    const now = new Date();
    let diff = eventDate.getTime() - now.getTime();
    if (diff < 0) diff = 0;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    daysSpan.textContent = String(days).padStart(2, '0');
    hoursSpan.textContent = String(hours).padStart(2, '0');
    minutesSpan.textContent = String(minutes).padStart(2, '0');
    secondsSpan.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  rsvpButton.addEventListener('click', () => {
    if (surpriseMessage) {
      surpriseMessage.classList.toggle('hidden');
      rsvpButton.textContent = surpriseMessage.classList.contains('hidden')
        ? "Hell Yeahhh!"
        : 'Scroll Downn';
    }
  });
});
