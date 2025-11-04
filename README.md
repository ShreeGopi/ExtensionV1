# 🧩 Chrome Tab Title Extension

A simple yet powerful **Chrome Extension** that automatically fetches and displays the **title of the current browser tab** in a clean popup window.

---

## 🚀 Features
✅ Instantly shows the title of the active browser tab  
✅ Lightweight and built using Manifest V3  
✅ Uses Chrome’s built-in **Tabs API**  
✅ Works on all websites  
✅ Simple UI with a single button and dynamic text display  

---

## 📸 Demo
🎥 **Watch the demo video:** [Add your video link here after uploading]  
Here’s what the popup looks like when running:

![Extension Screenshot](<img width="936" height="590" alt="image" src="https://github.com/user-attachments/assets/b4e9806f-4422-4eaf-8967-fbf23332c41c" />
)  
*(Replace with your actual screenshot if available)*

---

## 🧱 Project Structure

chrome-tab-title-extension/
├── manifest.json – Defines permissions, name, version, and popup
├── popup.html – UI displayed when clicking the extension icon
├── popup.js – Logic to fetch and show tab title
├── icon.png – Optional icon
└── README.md – Project documentation




## ⚙️ How It Works

The extension uses the **Chrome Tabs API** to fetch details about the current tab.

```javascript
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  document.getElementById("title").textContent = tabs[0].title;
});
