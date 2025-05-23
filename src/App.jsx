import React from 'react';
import Home from './components/Home';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gray-100 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Image Enhancer
          </h1>
        <p className="text-gray-600">
          Enhance your images with ease.
        </p>
      </div>

      <Home />

      <div className="mt-8">
        <p className="text-sm text-gray-600">
          Made with ❤️ by <a href="index.html" className="text-blue-500 hover:underline">Babblu</a>
        </p>
      </div>
    </div>
  );
}
export default App;