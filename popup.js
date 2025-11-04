document.getElementById("getTitle").addEventListener("click", async () => {
  try {
    // Query active tab in the current window
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Display tab title in popup
    document.getElementById("title").textContent = tab.title;
  } 
  catch (error) 
  {
    document.getElementById("title").textContent = "Error fetching title!";
    console.error(error);
  }
});
