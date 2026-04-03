const NAVBAR_HEIGHT = 80;

/**
 * Smoothly scrolls to a section by ID, offsetting for the fixed navbar.
 * Call this directly for in-page navigation (e.g. in Navbar onClick handlers).
 * For cross-page navigation, navigate to '/' first, then call this after ~300ms.
 */
export const scrollToSection = (sectionId: string) => {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  window.scrollTo({ top, behavior: 'smooth' });
};
