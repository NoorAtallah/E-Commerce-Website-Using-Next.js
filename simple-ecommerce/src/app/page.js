import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <Head>
        <title>Home | Simple E-Commerce</title>
        <meta name="description" content="Welcome to our simple e-commerce website" />
      </Head>
      <h1 className="text-4xl font-bold mb-8">Welcome to Simple E-Commerce</h1>
      <nav className="flex space-x-6 text-lg">
        <Link href="/products" className="hover:underline">Products</Link>
        <Link href="/about" className="hover:underline">About Us</Link>
      </nav>
    </div>
  );
}
