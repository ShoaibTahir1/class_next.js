export default function NotFound() {
    return (
        <main className="bg-cover h-screen bg-center text-white" 
              style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
            <div className="flex items-center justify-center h-full bg-black bg-opacity-60 p-8">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">
                        <b>Oops! That Page Does Not Exist</b>
                    </h1>
                    <p className="font-semibold text-2xl mb-6">
                        The page you are looking for might have been removed or is temporarily unavailable.
                    </p>
                    <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                        Go Back Home
                    </a>
                </div>
            </div>
        </main>
    );
}