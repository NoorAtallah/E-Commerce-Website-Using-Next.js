import Image from 'next/image';
import Head from 'next/head';
// import aboutImg from '../../public/about-us.jpg';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10">
      <Head>
        <title>About Us | Simple E-Commerce</title>
        <meta name="description" content="Learn more about our e-commerce site" />
      </Head>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      {/* <Image src={aboutImg} alt="About Us" width={500} height={300} className="rounded-lg shadow-lg mb-6" /> */}
      <p className="text-gray-600 max-w-2xl text-center">
        We are an e-commerce company offering the best products at competitive prices. Our goal is to provide
        an excellent shopping experience.
      </p>
    </div>
  );
}
