
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      <Head>
        <title>Blaked to Perfection</title>
      </Head>
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold italic text-rose-500 mb-4">Blaked to Perfection</h1>
        <p className="text-lg mb-6">Where cookies compile.</p>
        <button className="bg-rose-500 text-white py-2 px-4 rounded hover:bg-rose-600">View the Menu</button>
      </main>
    </div>
  );
}
