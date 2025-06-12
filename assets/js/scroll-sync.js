document.addEventListener("DOMContentLoaded", function () {
    const syncedScrollContainers = document.querySelectorAll(".synced-scroll");

    if (syncedScrollContainers.length < 2) return;

    let isSyncingScroll = false;

    syncedScrollContainers.forEach((container, index) => {
      container.addEventListener("scroll", function () {
        if (isSyncingScroll) return;

        isSyncingScroll = true;

        const otherContainers = Array.from(syncedScrollContainers).filter((_, i) => i !== index);

        otherContainers.forEach((other) => {
          other.scrollTop = container.scrollTop;
        });

        isSyncingScroll = false;
      });
    });
});