import { getMainTitle } from "/src/js/components/mainTitle/mainTitle"

// Страница каталога
export function getNotFoundPage() {
  const page = document.createElement("div")
  page.classList.add("page", "catalog-page")

  const mainTitle = getMainTitle("Страница не найдена")

  page.append(mainTitle)
  return page
}