document.addEventListener("DOMContentLoaded", function () {
  const scrollContainers = document.querySelectorAll(".scroll-container");
  let isSyncingScroll = false;

  // check if we should allow synced scrolling
  function shouldAllowSync() {
    return window.innerWidth > 880; // Only sync on larger screens
  }

  // handle scroll event
  function handleScroll(container, index) {
    if (!shouldAllowSync()) return; // Exit if we're on mobile
    if (isSyncingScroll) return;
    
    isSyncingScroll = true;
    const syncedScrollContainers = document.querySelectorAll(".synced-scroll");
    const otherContainers = Array.from(syncedScrollContainers)
      .filter((_, i) => i !== index);
    
    otherContainers.forEach((other) => {
      other.scrollTop = container.scrollTop;
    });
    
    isSyncingScroll = false;
  }

  // set up or remove scroll listeners
  function updateScrollListeners() {
    scrollContainers.forEach((container, index) => {
      // Remove existing listener if any
      container.removeEventListener("scroll", () => handleScroll(container, index));
      
      if (shouldAllowSync()) {
        // Add scroll listener only if we're on desktop
        container.addEventListener("scroll", () => handleScroll(container, index));
      }
    });
  }

  // Initial setup
  updateScrollListeners();

  // Listen for window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateScrollListeners, 250);
  });
});