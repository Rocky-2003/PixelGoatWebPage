export default function Dialog() {

  const dialogs = document.querySelectorAll(".showDialog");
  const closeDialogs = document.querySelectorAll(".close-widnowBtn");
  const window = document.querySelector("body");
  let dialogBox;

  dialogs.forEach((dialog) => {
    dialog.addEventListener("click", function (e) {
      const dialogBox = document.querySelector(
        `.${e.target.closest(".showDialog").dataset.id}`
      );
      dialogBox.show();
  
      
    });
  });

  closeDialogs.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.target.closest(".myDialog").close();
    });
  });

  window.addEventListener("click", function (e) {
    
    
    if (e.target.closest(".showDialog") == null) {
      dialogBox.close();
    } else {
      dialogBox = document.querySelector(
        `.${e.target.closest(".showDialog").dataset.id}`
      );
     
    }
  });
}
