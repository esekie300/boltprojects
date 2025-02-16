import React from 'react';
import { Menu, X, Phone, Car, PenTool as Tools, ShoppingBag, MessageSquare } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">EVERYTHING-AUTOMOTIVE</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Parts Store</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Buy/Sell Cars</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Login
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-3 pb-6 space-y-3 bg-white shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition">Home</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition">Services</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition">Parts Store</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition">Buy/Sell Cars</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition">About</a>
              <button className="w-full mt-4 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition shadow-md">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
            alt="Luxury car background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
              Your Complete Automotive Solution
            </h1>
            <p className="text-xl text-white mb-24 max-w-3xl mx-auto drop-shadow">
              From buying and selling cars to maintenance and repairs - we've got everything you need under one roof.
            </p>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition group shadow-lg">
                <Tools className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>Book a Service</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white text-gray-900 px-6 py-4 rounded-lg hover:bg-gray-100 transition group shadow-lg">
                <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Find Parts</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white text-gray-900 px-6 py-4 rounded-lg hover:bg-gray-100 transition group shadow-lg">
                <Car className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span>Buy/Sell Cars</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition group shadow-lg">
                <Phone className="h-5 w-5 group-hover:-rotate-12 transition-transform" />
                <span>Free Manager Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Chat Widget Button */}
        <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 group">
          <MessageSquare className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default App;