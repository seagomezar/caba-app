'use client';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { createArbitro } from '@/app/lib/arbitros/actions';
import { Button } from '@/app/ui/button';
import { UserCircleIcon, AtSymbolIcon, PhoneIcon, IdentificationIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function ArbitroForm() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createArbitro, initialState);

    return (
        <form action={dispatch} className="space-y-6">
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="block w-full rounded-md border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
                            placeholder="Full name"
                        />
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name &&
                            state.errors.name.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="block w-full rounded-md border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
                            placeholder="Email address"
                        />
                        <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="email-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.email &&
                            state.errors.email.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
                            placeholder="Enter password"
                        />
                        <LockClosedIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="password-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.password &&
                            state.errors.password.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>


                {/* Phone */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                    <div className="relative">
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            className="block w-full rounded-md border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
                            placeholder="Phone number"
                        />
                        <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="phone-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.phone &&
                            state.errors.phone.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Identificacion */}
                <div className="mb-4">
                    <label htmlFor="identificacion" className="block text-sm font-medium mb-2">ID</label>
                    <div className="relative">
                        <input
                            id="identificacion"
                            name="identificacion"
                            type="text"
                            className="block w-full rounded-md border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
                            placeholder="Identification number"
                        />
                        <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="identificacion-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.identificacion &&
                            state.errors.identificacion.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Especialidad 1 */}
                <div className="mb-4">
                    <label htmlFor="especialidad_1" className="block text-sm font-medium mb-2">Especialidad 1</label>
                    <select
                        id="especialidad_1"
                        name="especialidad_1"
                        className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-none"
                        defaultValue=""
                    >
                        <option value="" disabled>Select especialidad 1</option>
                        {/* Opciones de especialidad 1 */}
                        <option value="Especialidad1Option1">Especialidad 1 Opción 1</option>
                        <option value="Especialidad1Option2">Especialidad 1 Opción 2</option>
                        {/* Añadir más opciones según sea necesario */}
                    </select>
                    <div id="especialidad_1-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.especialidad_1 &&
                            state.errors.especialidad_1.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Categoria 1 */}
                <div className="mb-4">
                    <label htmlFor="categoria_1" className="block text-sm font-medium mb-2">Categoría 1</label>
                    <select
                        id="categoria_1"
                        name="categoria_1"
                        className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-none"
                        defaultValue=""
                    >
                        <option value="" disabled>Select categoría 1</option>
                        {/* Opciones de categoría 1 */}
                        <option value="Categoria1Option1">Categoría 1 Opción 1</option>
                        <option value="Categoria1Option2">Categoría 1 Opción 2</option>
                        {/* Añadir más opciones según sea necesario */}
                    </select>
                    <div id="categoria_1-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.categoria_1 &&
                            state.errors.categoria_1.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Especialidad 2 */}
                <div className="mb-4">
                    <label htmlFor="especialidad_2" className="block text-sm font-medium mb-2">Especialidad 2</label>
                    <select
                        id="especialidad_2"
                        name="especialidad_2"
                        className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-none"
                        defaultValue=""
                    >
                        <option value="" disabled>Select especialidad 2</option>
                        {/* Opciones de especialidad 2 */}
                        <option value="Especialidad2Option1">Especialidad 2 Opción 1</option>
                        <option value="Especialidad2Option2">Especialidad 2 Opción 2</option>
                        {/* Añadir más opciones según sea necesario */}
                    </select>
                    <div id="especialidad_2-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.especialidad_2 &&
                            state.errors.especialidad_2.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Categoria 2 */}
                <div className="mb-4">
                    <label htmlFor="categoria_2" className="block text-sm font-medium mb-2">Categoría 2</label>
                    <select
                        id="categoria_2"
                        name="categoria_2"
                        className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-none"
                        defaultValue=""
                    >
                        <option value="" disabled>Select categoría 2</option>
                        {/* Opciones de categoría 2 */}
                        <option value="Categoria2Option1">Categoría 2 Opción 1</option>
                        <option value="Categoria2Option2">Categoría 2 Opción 2</option>
                        {/* Añadir más opciones según sea necesario */}
                    </select>
                    <div id="categoria_2-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.categoria_2 &&
                            state.errors.categoria_2.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>


                {/* Estado */}
                {/* Invoice Status */}
                <fieldset aria-describedby="status-error">
                    <legend className="mb-2 block text-sm font-medium">
                        Estado
                    </legend>
                    <div className="mb-4">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input
                                    id="habilitado"
                                    name="status"
                                    type="radio"
                                    value="habilitado"
                                    className="h-4 w-4 cursor-pointer text-gray-600 focus:ring-2"
                                />
                                <label htmlFor="habilitado" className="ml-2 text-sm">Habilitado</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="desabilitado"
                                    name="status"
                                    type="radio"
                                    value="desabilitado"
                                    className="h-4 w-4 cursor-pointer text-gray-600 focus:ring-2"
                                />
                                <label htmlFor="desabilitado" className="ml-2 text-sm">Desabilitado</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div id="status-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.status &&
                        state.errors.status.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                </div>
                <div id="status-error" aria-live="polite" aria-atomic="true">
                    {state.message &&
                        <p className="mt-2 text-sm text-red-500" key={state.message}>
                            {state.message}
                        </p>
                    }
                </div>

                {/* Submit button */}
                <div className="flex justify-end gap-4">
                    <Button type="submit">Crear Arbitro</Button>
                </div>
            </div>
        </form>
    );
}
