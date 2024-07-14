document.getElementById('suggestBtn').addEventListener('click', () => {
    const message = document.getElementById('message').value;
  
    chrome.runtime.sendMessage(
      { action: 'getEmojiSuggestions', text: message },
      response => {
        const suggestionsDiv = document.getElementById('suggestions');
        if (response.emojis && response.emojis.length > 0) {
          suggestionsDiv.textContent = message + ' ' + response.emojis.join(' ');
        } else {
          suggestionsDiv.textContent = 'No suggestions found.';
        }
      }
    );
  });
  