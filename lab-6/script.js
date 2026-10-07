const nameInput = document.querySelector("#studentName");
const scoreInput = document.querySelector("#score");
const addBtn = document.querySelector("#addBtn");
const table = document.querySelector("#studentTable");
const message = document.querySelector("#message");
const search = document.querySelector("#search");
const sortBtn = document.querySelector("#sortBtn");

function addStudent() {
  const name = nameInput.value.trim();
  const score = Number(scoreInput.value);

  if (!name || scoreInput.value === "" || score < 0 || score > 100) {
    message.textContent = "Введите имя и балл от 0 до 100.";
    return;
  }

  message.textContent = "";

  const row = document.createElement("tr");
  row.dataset.name = name.toLowerCase();
  row.dataset.score = String(score);

  const nameCell = document.createElement("td");
  nameCell.textContent = name;

  const scoreCell = document.createElement("td");
  scoreCell.textContent = score;

  const actionCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Удалить";
  deleteBtn.className = "small-btn";

  deleteBtn.addEventListener("click", () => {
    row.remove();
  });

  actionCell.append(deleteBtn);
  row.append(nameCell, scoreCell, actionCell);
  table.append(row);

  nameInput.value = "";
  scoreInput.value = "";
  nameInput.focus();
}

addBtn.addEventListener("click", addStudent);

nameInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    addStudent();
  }
});

scoreInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    addStudent();
  }
});

search.addEventListener("input", () => {
  const query = search.value.toLowerCase().trim();
  document.querySelectorAll("#studentTable tr").forEach(row => {
    row.style.display = row.dataset.name.includes(query) ? "" : "none";
  });
});

sortBtn.addEventListener("click", () => {
  const rows = [...document.querySelectorAll("#studentTable tr")];
  rows
    .sort((a, b) => Number(b.dataset.score) - Number(a.dataset.score))
    .forEach(row => table.append(row));
});
