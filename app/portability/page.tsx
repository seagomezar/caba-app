import Head from 'next/head';

export default async function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Pet Guesser</h1>
        <h2 className="text-1xl font-bold">
          A Welcome Demo to DataPortability API on NextJS
        </h2>
        Click the Button to start:
        <div className="mt-3 text-2xl text-left">
          
          <p>1. This APP will request you Autorize US to Google</p>
          <p>2. This APP will request a copy of your search history data to Google</p>
          <p>3. Download it and parse the data (No worries we won't share your data)</p>
          <p>4. Based on your history Data it will guess if your pet is a Cat or a Dog</p>
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://accounts.google.com/o/oauth2/v2/auth?client_id=523088478173-v9c21g0mju0hau1rrpvmffdr8c51v2sd.apps.googleusercontent.com&redirect_uri=http://localhost:3000/portability/auth&response_type=token&scope=https://www.googleapis.com/auth/dataportability.myactivity.search&include_granted_scopes=true&state=developer-specified-value"
            rel="noopener noreferrer"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h2 className="text-2xl font-bold">Authorize &rarr;</h2>
            <p className="mt-4 text-xl">
              Login
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
