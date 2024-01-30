import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

/**
 * 
 * That's something to keep in mind, notFound will 
 * take precedence over error.tsx, so you can reach out for it 
 * when you want to handle more specific errors!
 */

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 No Encontrado.</h2>
      <p>No fue posible encontrar el árbitro selecccionado.</p>
      <Link
        href="/dashboard/arbitros"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Volver
      </Link>
    </main>
  );
}