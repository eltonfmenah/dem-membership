const form = document.getElementById('demForm');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = "Sending...";
  const data = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    });
    if (response.ok) {
      status.textContent = "✅ Submitted successfully!";
      form.reset();
    } else {
      const errData = await response.json();
      status.textContent = "❌ Error: " + (errData.error || 'Submission failed');
    }
  } catch (err) {
    status.textContent = "❌ Error sending form";
    console.error(err);
  }
});
