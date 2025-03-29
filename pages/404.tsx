import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="grid place-items-center min-h-screen p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="mb-4">Could not find the requested page</p>
        <Link
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 