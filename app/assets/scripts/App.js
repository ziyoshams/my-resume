import $ from "jquery";
import mobileMenu from './modules/MobileMenu.js';
import Bars from './modules/Bars.js';
import RecentWorks from './modules/RecentWork.js';
import Modal from './modules/Modal.js';
import RevealOnScroll from './modules/RevealOnScroll.js';


//new RecentWorks();
new Bars('PHP' ,'#php', '#8892BF', 1, 1000);
new Bars('JAVASCRIPT' ,'#javascript', '#9CD4DF', 1, 1500);
new Bars('C++' ,'#c', '#B0C0D0', 1, 2000);
new Bars('RUBY' ,'#ruby', '#E27274', 1, 2500);
new Bars('jQUERY' ,'#jquery', '#347baa', 1, 3000);
new Bars('SWIFT' ,'#swift', '#fca964', 1, 3500);
new Bars('JAVA' ,'#java', '#d15959', 1, 4000);
new Bars('MySQL' ,'#mysql', '#20869D', 1, 4500);

var mm = new mobileMenu();
new Modal();

new RevealOnScroll($(".skills-section__list-item"), "80%");
new RevealOnScroll($(".recent-work-section__projects"), "80%");
