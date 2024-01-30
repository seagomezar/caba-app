

type JobStatus = {
    state: string;
    // Incluye otros campos relevantes que puedas recibir en la respuesta.
    "urls": string[]
};
import { SearchBlock } from '@/app/ui/portability/search-block';
import JSZip from 'jszip';
export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: { token: string } }) {
    let final, data, fileContent, zipFile, datos;

    const fetchJobStatus = async (archiveJobId: string, token: string): Promise<JobStatus> => {
        const response = await fetch(`https://dataportability.googleapis.com/v1alpha/archiveJobs/${archiveJobId}/portabilityArchiveState`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'X-Goog-Api-Key': 'AIzaSyDSu2onCtaM8usWEB3gTPq42YK3EJ2UVTM',
                'Content-Type': 'application/json; charset=utf-8',
            },
        });
        const data: JobStatus = await response.json();
        console.log(data);
        return data;
    };
    if (params.token) {
        const response = await fetch('https://dataportability.googleapis.com/v1alpha/portabilityArchive:initiate', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${params.token}`,
                'X-Goog-Api-Key': 'AIzaSyDSu2onCtaM8usWEB3gTPq42YK3EJ2UVTM',
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({ resources: ['myactivity.search'] }),
        });
        final = await response.json();
        console.log("JOBID", final.archiveJobId)
        data = await fetchJobStatus(final.archiveJobId, params.token);

        if (data.state === 'COMPLETE') {
            const options = {
                method: 'GET',
                encoding: 'binary',
                headers: {
                    'Content-Type': 'application/json',
                },
                rejectUnauthorized: false,
            };

            const binaryStream = await fetch(data.urls[0],
                options
            );
            zipFile = await binaryStream.arrayBuffer()
            const zip = new JSZip();
            // Suponiendo que el archivo ZIP viene en el cuerpo de la solicitud
            const unzippedContent = await zip.loadAsync(zipFile);
            console.log(unzippedContent)
            // Procesar los archivos descomprimidos según sea necesario
            // Por ejemplo, leer el contenido de un archivo específico
            fileContent = await unzippedContent.file("Takeout/My Activity/Search/MyActivity.json").async("text");
        } else {
            setTimeout(async()=>{
                data = await fetchJobStatus(final.archiveJobId, params.token);
            }, 30000)
            
        }
    } else {
        return <h1>An invalid token has been provided</h1>
    }



    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1 className="text-6xl font-bold">Pet Guesser</h1>
                <h2 className="text-1xl font-bold">
                    A Welcome Demo to DataPortability API on NextJS
                </h2>
                <p>1. This APP will request you Autorize US to Google ✅</p>
                <p>2. This APP will request a copy of your search history data to Google {data && data.state === 'IN_PROGRESS' && (
                    <span>🌀 Waiting for Data to be ready...</span>
                )}{data && data.state === 'COMPLETE' && (<span>✅</span>)}</p>
                <div>3. Download it and parse the data (No worries we won't share your data) {data && data.state === 'COMPLETE' && (
                    <><span>✅</span> <SearchBlock fileContent={fileContent} token={params.token} /></>
                )}</div>
            </main >
        </div>
    );
}
