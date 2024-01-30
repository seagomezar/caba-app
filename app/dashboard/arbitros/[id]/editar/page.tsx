import Form from '@/app/ui/arbitros/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchArbitroById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [arbitro] = await Promise.all([
        fetchArbitroById(id),
      ]);
      if (!arbitro) {
        notFound();
      }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Arbitros', href: '/dashboard/arbitros' },
          {
            label: 'Editar Arbitro',
            href: `/dashboard/arbitros/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form arbitro={arbitro} />
    </main>
  );
}