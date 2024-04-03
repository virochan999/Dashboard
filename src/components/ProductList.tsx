import ProductImage from "../assets/product.jpg";

export const ProductList = () => {
  const products = [
    {
      name: "Abstract 3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stock: 32,
      price: 45.99,
      sales: 20,
      image: ProductImage,
    },
    {
      name: "Sarphens Illustration",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stock: 32,
      price: 45.99,
      sales: 20,
      image: ProductImage,
    },
    {
      name: "Sarphens Illustration",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stock: 32,
      price: 45.99,
      sales: 20,
      image: ProductImage,
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-8 gap-4 text-sm font-semibold text-gray-500 mb-4 shadow-sm py-4">
        <div className="col-span-6">Product Name</div>
        <div className="col-span-2 flex justify-between gap-6">
          <div className="flex-grow text-center">Stock</div>
          <div className="flex-grow text-center">Price</div>
          <div className="flex-grow text-center">Total Sales</div>
        </div>
      </div>
      {products.map((product, index) => (
        <div
          key={index}
          className="grid grid-cols-8 gap-4 items-center mb-4 bg-white rounded-md"
        >
          <div className="col-span-6 flex flex-row items-center gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-12 rounded-md object-cover"
            />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500 opacity-50">
                {product.description}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex justify-between">
            <div className="text-center flex-grow sm:text-left font-sm">{`${product.stock} in stock`}</div>
            <div className="text-center flex-grow sm:text-left font-bold font-sm">
              ${product.price.toFixed(2)}
            </div>
            <div className="text-center flex-grow sm:text-left font-sm">
              {product.sales}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
