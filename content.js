// Example content script that could send a message to the background script
chrome.runtime.sendMessage(
    { action: "getEmojiSuggestions", text: "Hello" },
    response => {
      console.log(response.emojis); // Handle the emoji suggestions here
    }
  );
  