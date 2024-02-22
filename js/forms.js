// const handleSubmit = (e) => {
//   e.preventDefault();

//   const myForm = e.target;
//   const formData = new FormData(myForm);

//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString(),
//   })
//     .then(() => {
//       if (myForm.getAttribute("name").includes("contact")) {
//         $("#askModal").modal("hide");
//         $("#sentModal").modal("show");
//       } else {
//         $("#thanksModal").modal("show");
//       }
//     })
//     .catch((error) => alert(error));
// };

// document
//   .querySelector('form[name="contact"]')
//   .addEventListener("submit", handleSubmit);

// document
//   .querySelector('form[name="form"]')
//   .addEventListener("submit", handleSubmit);

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
    })
    .catch((error) => alert(error));
};


document.querySelectorAll('form').forEach(form => {
  form.addEventListener("submit", handleSubmit);
});
