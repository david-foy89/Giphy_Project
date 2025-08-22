// main.js
// Handles Giphy search and image display

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  const results = document.getElementById('results');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    results.innerHTML = '<p>Loading...</p>';
    try {
  const apiKey = 'nqAZHEEVPuFvDNS2S9BqsWZaombdzs4E';
      const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=${apiKey}&limit=24`;
      const res = await fetch(url);
      const data = await res.json();
      results.innerHTML = '';
      if (data.data.length === 0) {
        results.innerHTML = '<p>No results found.</p>';
        return;
      }
      data.data.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.className = 'gif-img';
        results.appendChild(img);
      });
    } catch (err) {
      results.innerHTML = '<p>Error fetching GIFs. Please try again.</p>';
    }
  });
});
