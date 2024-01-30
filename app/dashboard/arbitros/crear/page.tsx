import Form from '@/app/ui/arbitros/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// import { fetchEspecialidades,  fetchCategorias} from '@/app/lib/data';
 
export default async function Page() {
    /*
    const [especialidades, categorias] = await Promise.all([
        fetchEspecialidades(),
        fetchCategorias(),
      ]);
      */
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Arbitros', href: '/dashboard/arbitros' },
          {
            label: 'Create Invoice',
            href: '/dashboard/arbitros/crear',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}