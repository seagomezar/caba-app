import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/arbitros/table';
import { CreateArbitro } from '@/app/ui/arbitros/buttons';
import { lusitana } from '@/app/ui/fonts';
import { ArbitrosTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchArbitrosPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arbitros | CABA Dashboard',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchArbitrosPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Arbitros</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar Arbitros..." />
        <CreateArbitro />
      </div>
      <Suspense key={query + currentPage} fallback={<ArbitrosTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}