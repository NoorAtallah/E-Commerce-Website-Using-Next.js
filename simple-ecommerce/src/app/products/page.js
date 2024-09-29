import Link from 'next/link';

const products = [
  { id: 1, name: 'Product A', price: 50 },
  { id: 2, name: 'Product B', price: 100 },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
      <ul className="space-y-4">
        {products.map(product => (
          <li key={product.id} className="p-4 bg-white rounded-lg shadow-md hover:bg-gray-100">
            <Link href={`/products/${product.id}`}>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{product.name}</span>
                <span className="text-gray-600">${product.price}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
