import Link from 'next/link';

export default function Home() {
  return (
    <main
      className="bg-cover bg-no-repeat h-screen bg-center text-gray-100"
      style={{ backgroundImage: 'url(/images/bg.jpg)' }} 
    >
      <div className="flex items-center justify-center h-full bg-gray-800 bg-opacity-70 p-4 md:p-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Hello! I'm SHOAIB TAHIR</h1> 
          <p className="text-lg md:text-2xl mb-6">
            Explore my journey and skills!
          </p>
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4">
            <Link href="/about" className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-200">
              About Me
            </Link>
            <Link href="/skills" className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-200">
              My Skills
            </Link>
            <Link href="/projects" className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-200">
              My Projects
            </Link>
            <Link href="/contact" className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
