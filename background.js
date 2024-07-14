chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getEmojiSuggestions") {
      fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer AIzaSyC-dXIN7cZpY5YWKjhUoaPTODVTnYnYXDs"
        },
        body: JSON.stringify({ text: request.text })
      })
      .then(response => response.json())
      .then(data => sendResponse({ emojis: data.suggestions }))
      .catch(error => console.error("Error:", error));
      
      return true;  // Keep the messaging channel open for sendResponse
    }
  });
  