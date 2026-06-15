// Smooth-scroll helper: navigates to a section id and updates the URL hash without reloading
export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (!element) return

  element.scrollIntoView({ behavior: 'smooth' })
  window.history.pushState(null, '', `#${sectionId}`)
}
