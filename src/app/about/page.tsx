export default async function About() {
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    });

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
            <main className="bg-black bg-opacity-50 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-white">About This Project</h1>

                <h2 className="text-2xl font-semibold mt-4 underline text-white">Key Features:</h2>
                <ul className="list-disc list-inside mb-4 text-white">
                    <li><strong>Responsive Design:</strong> Works well on all devices.</li>
                    <li><strong>Loading States:</strong> Provides visual feedback while data is being fetched.</li>
                    <li><strong>Error Handling:</strong> Manages errors gracefully with error boundaries.</li>
                    <li><strong>Custom 404 Page:</strong> Offers user-friendly guidance for missing pages.</li>
                    <li><strong>File-Based Routing:</strong> Enables smooth navigation between pages.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4 underline text-white">Technologies Used:</h2>
                <ul className="list-disc list-inside mb-4 text-white">
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4 underline text-white">Conclusion:</h2>
                <p className="text-white">This project highlights modern web development practices and focuses on enhancing user experience.

</p>
            </main>
        </div>
    );
}