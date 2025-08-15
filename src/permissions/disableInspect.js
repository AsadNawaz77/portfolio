// Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable common DevTools shortcuts
document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" || // F12
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) || // Ctrl+Shift+I/J/C
    (e.ctrlKey && e.key === "U") // Ctrl+U
  ) {
    e.preventDefault();
  }
});

// Detect DevTools open
let devtoolsOpen = false;
const threshold = 160;
setInterval(() => {
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;
  if (widthThreshold || heightThreshold) {
    if (!devtoolsOpen) {
      devtoolsOpen = true;
      alert("Developer tools are disabled on this site.");
      window.location.reload();
    }
  } else {
    devtoolsOpen = false;
  }
}, 1000);
