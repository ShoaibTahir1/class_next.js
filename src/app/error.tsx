"use client";

export default function Errorpage() {
    return (
        <div 
            className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: 'url(/images/bg.jpg)' }}
        >
            <div className="bg-black bg-opacity-60 rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="font-serif font-semibold text-3xl underline text-red-600">
                    Error:
                </h1>
                <p className="p-6 font-semibold font-serif text-2xl text-white">
                    Implemented a custom <span className="text-red-400">error.tsx</span> file to handle and display error messages elegantly on the page. This ensures users receive clear feedback when issues occur, enhancing the overall user experience.
                </p>
                <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="font-semibold text-xl mb-4">Job-Related Information</h2>
                    <ul className="list-disc list-inside">
                        <li className="text-lg">Position: Frontend Developer</li>
                        <li className="text-lg">Company: Example Corp</li>
                        <li className="text-lg">Location: Cityville, ST</li>
                        <li className="text-lg">Requirements: React, Tailwind CSS, Next.js</li>
                        <li className="text-lg">Apply at: <a href="mailto:jobs@example.com" className="text-blue-500 underline">jobs@example.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}