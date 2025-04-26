export const loadGoogleFont = (fontFamily: string) => {
  // Skip if already loaded
  if (
    document.querySelector(`link[href*="${fontFamily.replace(/\s+/g, "+")}"]`)
  ) {
    return;
  }

  // Create a link element to load the font
  const link = document.createElement("link");
  link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g, "+")}:wght@400;500;700&display=swap`;
  link.rel = "stylesheet";

  // Add the link to the document head
  document.head.appendChild(link);
};
