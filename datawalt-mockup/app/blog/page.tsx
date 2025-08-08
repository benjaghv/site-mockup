import Navbar from "../components/Navbar";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-[80vh] pt-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4" style={{ color: 'var(--datawalt-purple)' }}>
            Blog
          </h1>
          <p className="text-2xl text-gray-600">
            Artículos y noticias
          </p>
        </div>
      </div>
    </div>
  );
}