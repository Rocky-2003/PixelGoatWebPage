export default function StickyHeader() {
  const brandSection = document.querySelector(".brand-section");
  const heroSection = document.querySelector(".hero-section");
  const header = document.querySelector(".header");

  const options = {
    root: null,
    threshold: 0.1,
  };

  function callBackFunction(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        header.classList.add("header-box");
      }
    });
  }
  function callBackFunction2(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        header.classList.remove("header-box");
      }
    });
  }

  const obeserver = new IntersectionObserver(callBackFunction, options);
  const obeserver2 = new IntersectionObserver(callBackFunction2, options);
  obeserver.observe(brandSection);
  obeserver2.observe(heroSection);
}
