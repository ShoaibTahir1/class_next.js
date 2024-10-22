import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-1">
            <div className="container mx-auto text-center">
                
                <p className="font-semibold">Connect with us on social media:</p>
                <div className="flex justify-center space-x-2"> {/* Adjust space here */}
                    <a href="https://github.com/shoaibtahir1" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                            alt="GitHub Logo"
                            className="mb-2 transition-transform duration-400 hover:scale-110"
                            style={{ width: '40px', height: 'auto' }} // Set width to 40px
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/shoaibtahir90/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.icons8.com/?size=48&id=vWcULbkKy3DN&format=png"
                            alt="Another Logo"
                            className="mb-2 rounded-full transition-transform duration-400 hover:scale-110"
                            style={{ width: '40px', height: 'auto' }} // Set width to 40px
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}