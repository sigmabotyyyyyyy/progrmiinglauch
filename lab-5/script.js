const nameInput = document.querySelector("#name");
const groupInput = document.querySelector("#group");
const courseSelect = document.querySelector("#course");
const createBtn = document.querySelector("#createBtn");
const themeBtn = document.querySelector("#themeBtn");
const output = document.querySelector("#output");

function buildStudentCard(name, group, course) {
  return `
    <div class="card">
      <h2>${name}</h2>
      <p><strong>Группа:</strong> ${group}</p>
      <p><strong>Курс:</strong> ${course}</p>
    </div>
  `;
}

function validateData(name, group, course) {
  if (!name || !group || !course) {
    return "Заполните все поля.";
  }
  return "";
}

createBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const group = groupInput.value.trim();
  const course = courseSelect.value;

  const values = [name, group, course];
  let filledCount = 0;

  for (const value of values) {
    if (value) {
      filledCount++;
    }
  }

  const error = validateData(name, group, course);

  if (error) {
    output.innerHTML = `<p class="error">${error} Заполнено полей: ${filledCount}/3.</p>`;
  } else {
    output.innerHTML = buildStudentCard(name, group, `${course} курс`);
  }
});

themeBtn.addEventListener("click", () => {
  const container = document.querySelector(".container");
  const dark = container.dataset.dark === "true";

  container.dataset.dark = String(!dark);
  container.style.background = dark ? "white" : "#1f2937";
  container.style.color = dark ? "#1f2937" : "white";
});

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim().length > 20) {
    nameInput.value = nameInput.value.trim().slice(0, 20);
  }
});
