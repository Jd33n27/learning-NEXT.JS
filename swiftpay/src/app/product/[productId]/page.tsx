// import { Metadata } from "next";
import products from "../../../../data/products";
import Link from "next/link";
/* This is How to do dynamic Metadata */
// type Props = {
//   params: Promise<{ name: string }>;
// };

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const id = (await params).name;
//   return {
//     title: `Product ${id}`,
//     description: `This is product ${id} and it is perfect for ${id}`,
//   };
// };
interface ProductProps {
  params: Promise<{
    productId: string;
  }>;
}

export default async function Product({ params }: ProductProps) {
  const { productId } = await params;
  const productData = products.find((product) => product.id === productId);

  // The FIX: Gracefully handle the 'undefined' result
  if (!productData) {
    // This is where you prevent the application from crashing
    return <h1>Product with ID "{productId} Not Found</h1>;
  }

  // Safely render the product details now that we know productData is defined
  return (
    <div>
      <h1>{productData.name}</h1>
      {/* ... rest of the product view */}
    </div>
  );
}
