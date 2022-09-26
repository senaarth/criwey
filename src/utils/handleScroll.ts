export function handleScroll(elIdentifier: string) {
  const el = document.querySelector(elIdentifier);

  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY;
  const isMobile = window.innerWidth < 900;

  window.scroll({
    top: isMobile ? y - 68 : y - 121,
    behavior: "smooth",
  });
}
