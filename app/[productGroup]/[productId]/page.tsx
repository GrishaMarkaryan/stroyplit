import { allProducts } from "../all-products"
import ProductClient, { Product } from "./product-client"

export async function generateStaticParams() {
  // allProducts — это объект, где ключ = productGroup, а значение = массив товаров
  return Object.entries(allProducts).flatMap(([groupKey, products]) =>
    products.map((product) => ({
      productGroup: groupKey,
      productId: product.id,
    }))
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productGroup: string; productId: string }>
}) {
  const { productGroup, productId } = await params

  const groupArray: Product[] = allProducts[productGroup] || []
  const product = groupArray.find((item) => item.id === productId) || null

  return (
    <ProductClient
      product={product}
      productGroup={productGroup}
      productId={productId}
    />
  )
}
