import { notFound } from 'next/navigation';

const products = [
  { id: 1, name: 'Product A', price: 50, description: 'Description for Product A' },
  { id: 2, name: 'Product B', price: 100, description: 'Description for Product B' },
];

export default function ProductDetailsPage({ params }) {
  const { id } = params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return notFound();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
        <p className="text-gray-600 text-lg mb-2">Price: ${product.price}</p>
        <p className="text-gray-500 mb-4">{product.description}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
