export default function Contact() {
    return (
        <div 
            className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: 'url(/images/bg.jpg)' }}
        >
            <div className="bg-white bg-opacity-60 rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="font-semibold text-3xl mb-4 text-balck text-center">
                    <b><u>Contact Us:</u></b>
                </h1>
            <div className="text-justify font-arial text-black">
                    <h2 className="font-semibold text-lg">Address: </h2>
                    <p>B-20 Block 13/D Gulshan-e-Iqbal,</p>
                    <p>Karachi.</p>
                    <br />
                    
                     <h3 className="font-semibold text-lg">Phone:</h3>
                    <p>0311-2025000</p>

                    <br />

                    <h4 className="font-semibold text-lg">Email:</h4>
                    <p>info@example.com</p>

                    <br />
                    
                </div>
            </div>
        </div>
    );
}