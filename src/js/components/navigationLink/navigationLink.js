import { router } from "/src/js/main"
import "./navigationLink.css"

// Создает ссылку навигации
export function getNavigationLink(path, title = "") {
  let link = document.createElement("a")
  link.href = path
  link.classList.add("navigation-link")
  link.textContent = title
  link.addEventListener("click", function (event) {
    event.preventDefault()
    router.navigate(path);
  })
  return link
}