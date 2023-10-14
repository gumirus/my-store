import { getMainTitle } from "/src/js/components/mainTitle/mainTitle"
import { getDesc } from "/src/js/components/desc/desc"

// Страница каталога
export function getOrderPage() {
  const page = document.createElement("div")
  page.classList.add("page", "catalog-page")

  const mainTitle = getMainTitle("Оформление")
  const desc = getDesc("Здесь оформление заказа")

  page.append(mainTitle, desc)
  return page
}