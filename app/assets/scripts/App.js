import $ from "jquery";
import mobileMenu from "./modules/MobileMenu.js";
import Modal from "./modules/Modal.js";
import RevealOnScroll from "./modules/RevealOnScroll.js";
import SmoothScroll from "./modules/SmoothScroll.js";
import StickyHeader from "./modules/StickyHeader.js";

new mobileMenu();
new Modal();
new SmoothScroll();
new StickyHeader();

window.addEventListener("load", () => {
  const mainText = document.getElementsByClassName("header-box--middle");
  if (mainText.length) {
    setTimeout(() => {
      mainText[0].classList.add("reveal-item--is-visible");
    }, 300);
  }
});
new RevealOnScroll($(".recent-work-section__projects"), "80%");
new RevealOnScroll($(".skills-section__left-item-container"), "80%");
new RevealOnScroll($(".skills-section__right-item-container"), "80%");
new RevealOnScroll($(".education-section--school-section"), "80%");
new RevealOnScroll($(".activity-section__activity-box"), "90%");
