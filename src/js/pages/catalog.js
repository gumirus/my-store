import { getMainTitle } from "/src/js/components/mainTitle/mainTitle"
import { getProductList } from "/src/js/components/productsList/productsList"
import { URL } from "/src/js/config"

// Страница каталога
export function getCatalogPage() {
  const page = document.createElement("div")
  page.classList.add("page", "catalog-page")

  const mainTitle = getMainTitle("Каталог")

  const product = getProductList()
  product.getProducts(`${URL}/wp-json/wp/v1/products`)

  page.append(mainTitle, product.productsList)
  return page
}