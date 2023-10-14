import { getMainTitle } from "/src/js/components/mainTitle/mainTitle"
import { getProductList } from "/src/js/components/productsList/productsList"
import { URL } from "/src/js/config"

// Главная страница
export function getMainPage() {
  const page = document.createElement("div")
  page.classList.add("page", "main-page")

  const mainTitle = getMainTitle("Главная страница")

  const product = getProductList()
  product.getProducts(`${URL}/wp-json/wp/v1/products?count=4`)

  page.append(mainTitle, product.productsList)
  return page
}