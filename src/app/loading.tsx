export default function Loadingpage () {
    return (
        <div className="bg-cover h-screen bg-center text-black" 
        style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
        <div className="flex flex-col min-h-screen"><main className="flex-grow"><h1 className="font-serif font-semibold text-2xl text-center">Please Wait..........</h1>
        </main>
        </div>
        </div>
        

    )
}