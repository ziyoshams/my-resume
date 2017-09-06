import $ from "jquery";
import mobileMenu from './modules/MobileMenu.js';
//import Bars from './modules/Bars.js';
import RecentWorks from './modules/RecentWork.js';
import Modal from './modules/Modal.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import SmoothScroll from './modules/SmoothScroll.js';

new mobileMenu();
new Modal();
new SmoothScroll();

new RevealOnScroll($(".recent-work-section__projects"), "80%");
new RevealOnScroll($(".skills-section__left-item-container"), "80%");
new RevealOnScroll($(".skills-section__right-item-container"), "80%");
