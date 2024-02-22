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
    //         console.log(pair[0] + ': ' + pair[1]);
    text += pair[0] + ": " + pair[1];
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
  .querySelector('form[name="form_question"]')
  .addEventListener("submit", handleSubmit);


//   form-name=form_question&user_name=%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80+%D0%97%D0%B4%D1%80%D0%BE%D0%BA&user_telephone=%2B380637274024&user_email=vovavova44%40gmail.com&user_question=767676786

// 767676786