const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
    

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {alert("Thank you for your submission");
      $('#askModal').modal('hide');
    $('#thanksModal').modal('show');
    })
      .catch((error) => alert(error));
  };
  
  document
    .querySelector("#askModal-form")
    .addEventListener("submit", handleSubmit);
  