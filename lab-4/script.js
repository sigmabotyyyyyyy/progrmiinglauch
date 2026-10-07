const form = document.getElementById("orderForm");
const product = document.getElementById("product");
const quantity = document.getElementById("quantity");
const result = document.getElementById("result");

const prices = {
  keyboard: 25000,
  mouse: 12000,
  headphones: 18000
};

const names = {
  keyboard: "Клавиатура",
  mouse: "Мышь",
  headphones: "Наушники"
};

function clearErrors() {
  document.querySelectorAll(".error").forEach(element => {
    element.textContent = "";
  });
}

function selectedExtras() {
  return [...document.querySelectorAll('input[name="extra"]:checked')]
    .map(item => item.value);
}

form.addEventListener("submit", event => {
  event.preventDefault();
  clearErrors();

  const delivery = document.querySelector('input[name="delivery"]:checked');
  let valid = true;

  if (!product.value) {
    document.getElementById("productError").textContent = "Выберите товар.";
    valid = false;
  }

  if (quantity.value === "" || Number(quantity.value) <= 0) {
    document.getElementById("quantityError").textContent = "Количество должно быть больше 0.";
    valid = false;
  }

  if (!delivery) {
    document.getElementById("deliveryError").textContent = "Выберите способ доставки.";
    valid = false;
  }

  if (!valid) {
    result.innerHTML = "";
    return;
  }

  const extras = selectedExtras();
  const baseTotal = prices[product.value] * Number(quantity.value);
  const extraTotal =
    (extras.includes("gift") ? 1500 : 0) +
    (extras.includes("setup") ? 2500 : 0);
  const deliveryTotal = delivery.value === "courier" ? 2000 : 0;
  const total = baseTotal + extraTotal + deliveryTotal;

  result.innerHTML = `
    <div class="success">
      <strong>Заказ принят!</strong><br>
      Товар: ${names[product.value]}<br>
      Количество: ${quantity.value}<br>
      Доставка: ${delivery.value === "courier" ? "Курьер" : "Самовывоз"}<br>
      Доп. услуги: ${extras.length ? extras.join(", ") : "нет"}<br>
      <strong>Итого: ${total.toLocaleString("ru-RU")} ₸</strong>
    </div>
  `;
});

quantity.addEventListener("input", () => {
  if (Number(quantity.value) > 0) {
    document.getElementById("quantityError").textContent = "";
  }
});
