function postQilish(values) {
    fetch("https://641d8a704b6990486afd882d.mockapi.io/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    })
      .then((res) => res && window.location.reload())
      .catch((err) => console.log(err));
  }
  
  const inputs = document.querySelectorAll("[input]");
  const btn = document.querySelector("[btn]");
  
  let values = {};
  
  btn.addEventListener("click", () => {
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
  
    postQilish(values);
  });