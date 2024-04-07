"use strict";
import Dialog from "./dialog.js";
import HideMenu from "./menu.js";
import StickyHeader from "./stickyMenu.js";

// console.log(heroSection);

// this function call is for work of dialog open and close module
Dialog();

// this function will add the functionality to hide or unhide the menu on small screen
HideMenu();

// this function will add the functionality to the header to become fixed when we scroll
StickyHeader();
