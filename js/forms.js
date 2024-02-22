// const handleSubmit = (event) => {
//     event.preventDefault();

//     const myForm = event.target;
//     const formData = new FormData(myForm);

//     for (var pair of formData.entries()) {
//         console.log(pair[0] + ': ' + pair[1]);
//     }

//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams(formData).toString(),
//     })
//       .then(() => {alert("Thank you for your submission");
//       $('#askModal').modal('hide');
//     $('#thanksModal').modal('show');
//     })
//       .catch((error) => alert(error));
//   };

//   document
//     .querySelector("#askModal-form")
//     .addEventListener("submit", handleSubmit);

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  let text = "";
  for (var pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
    // text += pair[0] + ": " + pair[1];
  }

  console.log(
    "new URLSearchParams(formData).toString(),",
    new URLSearchParams(formData).toString()
  );
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log("Form successfully submitted");
      $("#askModal").modal("hide");
      $("#thanksModal").modal("show");
    })
    .catch((error) => alert(error));
};

document
  .querySelector('form[name="contact"]')
  .addEventListener("submit", handleSubmit);

  document
  .querySelector('form[name="form"]')
  .addEventListener("submit", handleSubmit);

