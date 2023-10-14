import { getMainTitle } from "/src/js/components/mainTitle/mainTitle"
import { getDesc } from "/src/js/components/desc/desc"

// Страница товара
export function getProductPage(title) {
  const page = document.createElement("div")
  page.classList.add("page", "product-page")

  const mainTitle = getMainTitle(title)
  const desc = getDesc("Страница в разработке")

  page.append(mainTitle, desc)
  return page
}