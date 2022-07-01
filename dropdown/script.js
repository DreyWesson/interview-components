document
  .querySelectorAll(".dropdown")
  .forEach((el) => el.addEventListener("click", handleClick));

function handleClick(e) {
  // Prevent <a> links from changing the page
  e.preventDefault();
  const classList = e.currentTarget.classList;

  // Check if the dropdown is currently open
  const isOpen = classList.contains("dropdown--open");
  isOpen ? classList.remove("dropdown--open") : classList.add("dropdown--open");
}
