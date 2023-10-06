// Elements
const editor = document.getElementById("editor");
const fontSelect = document.getElementById("fontSelect");
const fontSizeSelect = document.getElementById("fontSizeSelect");
const colorPicker = document.getElementById("colorPicker");
const imageUploader = document.getElementById("imageUploader");
const videoUploader = document.getElementById("videoUploader");
const preview = document.getElementById("preview");
const exportButton = document.getElementById("exportButton");
const menu = document.getElementById("menu");

// Menu visibility toggle
document.addEventListener("keydown", (event) => {
    if (event.shiftKey && event.key === "/") {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
});

// Font selection handler
fontSelect.addEventListener("change", () => {
    const selectedFont = fontSelect.value;
    preview.style.fontFamily = selectedFont;
});

// Font size selection handler
fontSizeSelect.addEventListener("change", () => {
    const selectedFontSize = fontSizeSelect.value;
    preview.style.fontSize = selectedFontSize;
});

// Color selection handler
colorPicker.addEventListener("input", () => {
    const selectedColor = colorPicker.value;
    preview.style.color = selectedColor;
});

// Image insertion handler
imageUploader.addEventListener("change", () => {
    const file = imageUploader.files[0];
    if (file) {
        // Handle image insertion here (e.g., displaying the image in the preview)
        const imageURL = URL.createObjectURL(file);
        const img = document.createElement("img");
        img.src = imageURL;
        preview.appendChild(img);
    }
});

// Video insertion handler
videoUploader.addEventListener("change", () => {
    const file = videoUploader.files[0];
    if (file) {
        // Handle video insertion here (e.g., displaying the video in the preview)
        const videoURL = URL.createObjectURL(file);
        const video = document.createElement("video");
        video.src = videoURL;
        video.controls = true; // Show video controls
        preview.appendChild(video);
    }
});

// Export HTML handler
exportButton.addEventListener("click", () => {
    // Generate HTML based on user input and update preview
    const htmlContent = editor.value;
    preview.innerHTML = htmlContent;
});

// Hide the menu initially
menu.style.display = "none";
