fetch(`https://641d8a704b6990486afd882d.mockapi.io/products/`)
  .then((res) => res.json())
  .then((data) => render(data));

const inputs = document.querySelectorAll("[inpt]");

const btn = document.querySelector("[btn]");

function render(data) {
  let res = "";
  data.forEach((element) => {
    res += `<div class="card-items"> 
              <div class="card-img">
                <img src="${element.image}" alt=${element.title} />
              </div>
              <div class="pricees">
                <p>${element.title}</p>
                <span>${element.price}</span>
              </div>
              <p>${element.text}</p>
             <div class="d-flex gap-2"> <button class="btn btn-primary" onclick="deleteCart(${element.id})">🗑️</button>
              <button btnn id="${element.id}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                ✏️
              </button>
              </div>
            </div>`;
  });

  document.querySelector(".cards").innerHTML = res;
}

document.body.addEventListener("click", (e) => {
  let values = {};
  if (e.target.matches("[btnn]")) {
    btn.addEventListener("click", () => {
      console.log(e.target.id);
      inputs.forEach((input) => {
        values[input.name] = input.value;
        console.log(input.name);
      });
      console.log(values);

      fetch(
        `https://641d8a704b6990486afd882d.mockapi.io/products/${e.target.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: values.title,
            image: values.image,
            text: values.text,
            price: values.price,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => render(data) && window.location.reload());
    });
  }
});

function deleteCart(id) {
  fetch(`https://641d8a704b6990486afd882d.mockapi.io/products/${id}`, {
    method: "DELETE",
  }).then((res) => res && window.location.reload());
}