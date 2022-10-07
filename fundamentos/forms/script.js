let formProps;
document.querySelector("#forms").addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  formProps = Object.fromEntries(formData);
});

