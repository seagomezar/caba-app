'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Definición del esquema para la creación de árbitros usando zod
const ArbitroSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email({ message: 'Invalid email format.' }),
    phone: z.string(),
    identificacion: z.string(),
    especialidad_1: z.string(),
    categoria_1: z.string(),
    especialidad_2: z.string().optional(),
    categoria_2: z.string().optional(),
    status: z.enum(['desabilitado', 'habilitado']),
    password: z.string(),
});

export type State = {
    errors?: {
        [key: string]: string[];
    };
    message?: string | null;
};

const CreateArbitro = ArbitroSchema.omit({ id: true });


export async function createArbitro(prevState: State, formData: FormData) {
    // Convert FormData to JSON
    const formDataJson = Object.fromEntries(formData.entries());

    // Validate form using Zod
    const validatedFields = CreateArbitro.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        identificacion: formData.get('identificacion'),
        especialidad_1: formData.get('especialidad_1'),
        categoria_1: formData.get('categoria_1'),
        especialidad_2: formData.get('especialidad_2'),
        categoria_2: formData.get('categoria_2'),
        password: formData.get('password'),
        status: formData.get('status'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing or invalid fields. Failed to create árbitro.',
        };
    }

    // Extract validated data
    const { name, email, phone, status, identificacion, especialidad_1, especialidad_2, categoria_1, categoria_2, password } = CreateArbitro.parse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        identificacion: formData.get('identificacion'),
        especialidad_1: formData.get('especialidad_1'),
        categoria_1: formData.get('categoria_1'),
        especialidad_2: formData.get('especialidad_2'),
        categoria_2: formData.get('categoria_2'),
        password: formData.get('password'),
        status: formData.get('status'),
    });

    try {
        console.log("AQUI", `
        INSERT INTO arbitros (name, email,  phone, status, identificacion, especialidad_1, especialidad_2, categoria_1, categoria_2, password)
        VALUES (${name}, ${email}, ${status}, ${phone}, ${identificacion}, ${especialidad_1}, ${especialidad_2}, ${categoria_1}, ${categoria_2}, ${password})
      `)
        // Insert new árbitro into the database
        await sql`
      INSERT INTO arbitros (name, email, status, phone, identificacion, especialidad_1, especialidad_2, categoria_1, categoria_2, password)
      VALUES (${name}, ${email}, ${status}, ${phone}, ${identificacion}, ${especialidad_1}, ${especialidad_2}, ${categoria_1}, ${categoria_2}, ${password})
    `;
    console.log("Termino")
    } catch (error) {
        console.log(error)
        return {
            message: 'Database Error: Failed to create árbitro.',
        };
    }

    // Optionally revalidate the arbitros page to reflect the new addition
    revalidatePath('/dashboard/arbitros');
    // Redirect to the arbitros dashboard or another relevant page
    redirect('/dashboard/arbitros');

    return { message: 'Árbitro created successfully!' };
}

const UpdateArbitro = ArbitroSchema.omit({ id: true });

export async function updateArbitro(id: string, prevState: State, formData: FormData) {

    console.log("AQUI", id, prevState, formData)

    // Validate form data using Zod
    const validatedFields = UpdateArbitro.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        identificacion: formData.get('identificacion'),
        especialidad_1: formData.get('especialidad_1'),
        categoria_1: formData.get('categoria_1'),
        especialidad_2: formData.get('especialidad_2'),
        categoria_2: formData.get('categoria_2'),
        password: formData.get('password'),
        status: formData.get('status'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing or invalid fields. Failed to update Arbitro.',
        };
    }

    const { name, email, phone, identificacion, especialidad_1, categoria_1, categoria_2, especialidad_2, password, status } = validatedFields.data;

    try {
        await sql`
          UPDATE arbitros
          SET name = ${name}, email = ${email}, phone = ${phone}, identificacion = ${identificacion}, especialidad_1 = ${especialidad_1}, especialidad_2 = ${especialidad_2}, categoria_1 = ${categoria_1}, categoria_2 = ${categoria_2}, password = ${password}, status = ${status}
          WHERE id = ${id}
        `;
    } catch (error) {
        return { message: 'Database Error: Failed to Update Arbitro.' };
    }

    // Opcionalmente, revalida la página de árbitros para reflejar los cambios
    revalidatePath('/dashboard/arbitros');
    // Redirige al usuario hacia la página de árbitros o a otra página relevante
    redirect('/dashboard/arbitros');

    return { message: 'Árbitro updated successfully!' };
}

/** Arbitro */

export async function deleteArbitro(id: string) {
    // throw new Error('Failed to Delete Invoice');
    try {
        await sql`DELETE FROM arbitros WHERE id = ${id}`;
        revalidatePath('/dashboard/arbitros');
        return { message: 'Arbitro Borrado!' };
    } catch (error) {
        return { message: 'Database Error: Failed to Delete Invoice.' };
    }
}

