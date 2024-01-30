'use client';

import { ArbitroForm } from '@/app/lib/definitions'; // Asegúrate de definir esta estructura
import { UserCircleIcon, AtSymbolIcon, PhoneIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateArbitro } from '@/app/lib/arbitros/actions'; // Asegúrate de tener esta acción definida
import { useFormState } from 'react-dom';

export default function EditArbitroForm({
    arbitro
}: {
    arbitro: ArbitroForm;
}) {
    const initialState = { message: null, errors: {} };
    const updateArbitroWithId = updateArbitro.bind(null, arbitro.id);
    const [state, dispatch] = useFormState(updateArbitroWithId, initialState);

    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Name
                    </label>
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            defaultValue={arbitro.name}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                    </label>
                    <div className="relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            defaultValue={arbitro.email}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Phone
                    </label>
                    <div className="relative">
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            defaultValue={arbitro.phone}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Password (Considera si es necesario editar este campo y cómo manejarlo de manera segura) */}
                <div className="mb-4">
                    <label htmlFor="password" className="mb-2 block text-sm font-medium">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            defaultValue={arbitro.password}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <LockClosedIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Especialidad 1 */}
                <div className="mb-4">
                    <label htmlFor="especialidad_1" className="block text-sm font-medium mb-2">
                        Especialidad 1
                    </label>
                    <select
                        id="especialidad_1"
                        name="especialidad_1"
                        className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-none"
                        defaultValue={arbitro.especialidad_1}
                    >
                        <option value="" disabled>Seleccione Especialidad 1</option>
                        {/* Opciones de Especialidad 1 */}
                        <option value="Especialidad1Opcion1">Especialidad 1 Opción 1</option>
                        <option value="Especialidad1Opcion2">Especialidad 1 Opción 2</option>
                        {/* Añadir más opciones según sea necesario */}
                    </select>
                </div>

                {/* Categoria 1 */}
                <div className="mb-4">
                    <label htmlFor="categoria_1" className="block text-sm font-medium mb-2">
                        Categoría 1
                    </label>
                    <select
                        id="categoria_1"
                        name="categoria_1"
                        className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-none"
                        defaultValue={arbitro.categoria_1}
                    >
                        <option value="" disabled>Seleccione Categoría 1</option>
                        {/* Opciones de Categoría 1 */}
                        <option value="Categoria1Opcion1">Categoría 1 Opción 1</option>
                        <option value="Categoria1Opcion2">Categoría 1 Opción 2</option>
                        {/* Añadir más opciones según sea necesario */}
                    </select>
                </div>

                {/* Especialidad 2 */}
                <div className="mb-4">
                    <label htmlFor="especialidad_2" className="block text-sm font-medium mb-2">
                        Especialidad 2
                    </label>
                    <select
                        id="especialidad_2"
                        name="especialidad_2"
                        className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-none"
                        defaultValue={arbitro.especialidad_2}
                    >
                        <option value="" disabled>Seleccione Especialidad 2</option>
                        {/* Opciones de Especialidad 2 */}
                        <option value="Especialidad2Opcion1">Especialidad 2 Opción 1</option>
                        <option value="Especialidad2Opcion2">Especialidad 2 Opción 2</option>
                        {/* Añadir más opciones según sea necesario */}
                    </select>
                </div>

                {/* Categoria 2 */}
                <div className="mb-4">
                    <label htmlFor="categoria_2" className="block text-sm font-medium mb-2">
                        Categoría 2
                    </label>
                    <select
                        id="categoria_2"
                        name="categoria_2"
                        className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-none"
                        defaultValue={arbitro.categoria_2}
                    >
                        <option value="" disabled>Seleccione Categoría 2</option>
                        {/* Opciones de Categoría 2 */}
                        <option value="Categoria2Opcion1">Categoría 2 Opción 1</option>
                        <option value="Categoria2Opcion2">Categoría 2 Opción 2</option>
                        {/* Añadir más opciones según sea necesario */}
                    </select>
                </div>


            </div>

            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/arbitros"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Editar Arbitro</Button>
            </div>
        </form>
    );
}
