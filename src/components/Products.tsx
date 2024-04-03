import { ChevronDown } from "lucide-react";
import { ProductList } from "./ProductList";

const Products = () => {
  return (
    <div className="bg-white p-8 space-y-8">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Product Sell</h1>
        <div className="flex gap-4">
          <input
            type="search"
            id="search-products"
            placeholder="search"
            className="px-2 rounded-md bg-[#f5f6f8]"
          />
          <div className="flex justify-between gap-4 rounded-md items-center px-2 bg-[#f5f6f8] cursor-pointer">
            <span className="opacity-50 text-sm">Last 30 days</span>
            <ChevronDown />
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default Products;
