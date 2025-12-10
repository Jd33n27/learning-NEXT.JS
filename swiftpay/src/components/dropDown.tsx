import { useState } from "react";
import Link from "next/link";
import products from "../../data/products";

export default function DropDown() {
  const [isDown, setIsDown] = useState(false);

  const handleDropDown = () => {
    setIsDown(!isDown);
  };

  return (
    <div className="grid place-center w-20">
      <button
        onClick={handleDropDown}
        className="glass-card px-4 py-1 rounded-xl"
      >
        {isDown ? "Up" : "Down"}
      </button>
      <ul
        className={`flex flex-col fixed top-20 ${
          isDown ? "block" : "hidden"
        }`}
      >
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              <h3 className="text-2xl text-sky-300">{product.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
