const currentDate = new Date();
const maxDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

flatpickr("#birthdate", {
//   altInput: true,
  altFormat: "Y-m-d", 
  dateFormat: "Y-m-d",
  maxDate: maxDate,
});
