document.getElementById('suggestBtn').addEventListener('click', () => {
  const message = document.getElementById('message').value;

  chrome.runtime.sendMessage(
    { action: 'getEmojiSuggestions', text: message },
    response => {
      const suggestionsDiv = document.getElementById('suggestions');
      if (response.modifiedText) {
        suggestionsDiv.textContent = response.modifiedText;
      } else if (response.error) {
        suggestionsDiv.textContent = response.error;
      } else {
        suggestionsDiv.textContent = 'No suggestions found.';
      }
    }
  );
});