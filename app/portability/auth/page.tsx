
"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Auth() {
    const [token, setToken] = useState('');
    const [tokenInfo, setTokenInfo] = useState(null);

    useEffect(() => {
        // Parsea la URL para obtener el token de acceso
        const hash = window.location.hash;
        const result = hash.match(/access_token=([^&]*)/);
        const accessToken = result ? result[1] : '';

        setToken(accessToken);

        // Realiza la solicitud a la API de Google
        if (accessToken) {
            fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`)
                .then(response => response.json())
                .then(data => {
                    setTokenInfo(data);
                })
                .catch(error => {
                    console.error('Error al obtener información del token:', error);
                });
        }
    }, []);

    return (
        <div className="container mx-auto p-4">
            {/*<h1 className="text-2xl font-bold">Autorization Code</h1>
            {!token ? (
                <div>
                    <h2 className="text-xl">Token:</h2>
                    <p className="break-words">{token}</p>
                </div>
            ) : (
                <p>No authorization token has been provided</p>
            )*/}
            {tokenInfo && (
                <div>
                    <p className="mt-3 text-2xl">
                        <p>1. This APP will request you Autorize US to Google ✅</p>
                        <p>2. This APP will request a copy of your search history data to Google <Link
                            href={`/portability/${token}`}
                            rel="noopener noreferrer"
                            className="text-left hover:text-blue-600 focus:text-blue-600"
                        >
                            (Click Here to Start Portability Job 🔥)
                        </Link></p>
                        <p>3. Download it and parse the data (No worries we won't share your data) </p>
                        <p>4. Based on your history Data it will guess if your pet is a Cat or a Dog</p>
                    </p>
                    {/*<h1 className="text-xl">Información del Token:</h1>
                    <pre>{JSON.stringify(tokenInfo, null, 2)}</pre>
                    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                        <Link
                            href={`/portability/${token}`}
                            rel="noopener noreferrer"
                            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                        >
                            <h2 className="text-2xl font-bold">Start &rarr;</h2>
                            <p className="mt-4 text-xl">
                                Start Portability Job
                            </p>
                        </Link>
            </div>*/}
                </div>

            )}
        </div>
    );
}
