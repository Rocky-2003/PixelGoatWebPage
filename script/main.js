"use strict";
import Dialog from "./dialog.js";

const heroSection = document.querySelector(".brand-section");
const header = document.querySelector(".header");
// console.log(heroSection);

// this function call is for work of dialog open and close module
Dialog();

const options = {
  root: null,
  threshold: 0.1,
};

function callBackFunction(entries) {
  console.log("hello");

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.add("header-box");
      console.log(entry);
    }
  });
}

const obeserver = new IntersectionObserver(callBackFunction, options);
obeserver.observe(heroSection);
