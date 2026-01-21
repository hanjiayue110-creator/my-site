const btn = document.getElementById("btn");
const title = document.getElementById("title");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

btn.addEventListener("click", () => {
  const now = new Date().toLocaleString();
  title.textContent = "你点击了按钮：" + now;
});
