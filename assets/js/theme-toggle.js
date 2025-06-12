document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const logoImg = document.getElementById("site-logo-img");

  const setLogoForSkin = (skin) => {
    if (!logoImg) return;
    const logoPath = skin === "dark"
      ? "/assets/images/header/writing-icon-dark.png"
      : "/assets/images/header/writing-icon.png";
    logoImg.src = logoPath;
  };

  // Apply stored skin
  const currentSkin = localStorage.getItem("skin") || "default";
  document.documentElement.setAttribute("data-skin", currentSkin);
  setLogoForSkin(currentSkin);

  toggleBtn.addEventListener("click", () => {
    const newSkin = document.documentElement.getAttribute("data-skin") === "dark"
      ? "default"
      : "dark";
    document.documentElement.setAttribute("data-skin", newSkin);
    localStorage.setItem("skin", newSkin);
    setLogoForSkin(newSkin);

    // Optional: reload if needed, or comment out if not
    location.reload();
  });
});
