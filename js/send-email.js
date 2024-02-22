import { clearForm } from "./utils/clearForm.js";

const handleSubmit = (e) => {
  e.preventDefault();
  const myForm = e.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      if (myForm.getAttribute("name").includes("contact")) {
        $("#askModal").modal("hide");
        $("#sentModal").modal("show");
      } else {
        $("#thanksModal").modal("show");
      }
      clearForm(myForm);
    })
    .catch((error) => alert(error));
};

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", handleSubmit);
});

