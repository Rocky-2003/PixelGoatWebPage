export default function Dialog() {
  const dialogs = document.querySelectorAll(".showDialog");
  const closeDialogs = document.querySelectorAll(".close-widnowBtn");

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
      console.log(e.target.closest(".myDialog").close());
    });
  });
}
