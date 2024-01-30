"use client";
import { useEffect, useState } from "react";
import { Button } from "../button";
import { redirect } from 'next/navigation'

export function SearchBlock({ fileContent, token }: { fileContent: string, token: string }) {
    const [datos, setDatos] = useState();
    const [tipoDeMascota, setTipoDeMascota] = useState("");
    const presentData = (fileContent: string) => {
        setDatos(JSON.parse(fileContent));
    }
    function determinarTipoDeMascota(fileContent: string) {
        if (!datos) {
            setDatos(JSON.parse(fileContent));
        }

        let conteoPerros = 0;
        let conteoGatos = 0;

        datos.forEach(item => {
            // Consideramos solo las búsquedas
            if (item.title && item.title.startsWith("Searched for ")) {
                const terminoBusqueda = item.title.toLowerCase();

                // Contamos los términos relacionados con perros y gatos
                if (terminoBusqueda.includes("perro") || terminoBusqueda.includes("dog") || terminoBusqueda.includes("cachorro")) {
                    conteoPerros++;
                }
                if (terminoBusqueda.includes("gato") || terminoBusqueda.includes("cat")) {
                    conteoGatos++;
                }
            }
        });

        // Comparamos los conteos para determinar el tipo de mascota
        if (conteoPerros > conteoGatos) {
            return "Dog";
        } else if (conteoGatos > conteoPerros) {
            return "Cat";
        } else {
            return "I can't gess it!";
        }
    }

    useEffect(() => {
        presentData(fileContent);
    }, [])

    async function resetAuthorization() {
        const url = 'https://dataportability.googleapis.com/v1alpha/authorization:reset';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'X-Goog-Api-Key': 'AIzaSyDSu2onCtaM8usWEB3gTPq42YK3EJ2UVTM',
                    'Content-Type': 'application/json; charset=utf-8'
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            alert("Token Reset successfuly!")
            redirect("/");
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            return null;
        }
        
    }

    return (
        <div className="mt-3 text-2xl">
            <p>4. Based on your history Data it will guess if your pet is a Cat or a Dog, are you Ready? {tipoDeMascota && <span>✅</span>}
                <Button className="inline" onClick={() => { setTipoDeMascota(determinarTipoDeMascota(fileContent)) }}>Yeah 😱</Button>
            </p>
            {tipoDeMascota && <p className="p-4">
                <h1 className="text-2xl font-bold mb-4">We guess you should have a: {tipoDeMascota}</h1>
            </p>}
            <Button onClick={() => {
                resetAuthorization();
            }}>Start Over!</Button>
            <div>Last Search detected: {datos&& datos[0].title}</div>
        </div>
    );
}
