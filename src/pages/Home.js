import React from 'react';
import SignupForm from '../components/SignupForm';

const HomePage = () => {

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Recruitment Portal</h1>
        <p className="text-xl">Find top talent for your company</p>
      </header>
      <main className="container mx-auto py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="text-lg">
            We help you find the best software engineers, product managers, data scientists, and more to
            take your company to new heights.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Software Engineer Hiring</li>
            <li>Product Manager Hiring</li>
            <li>Data Scientist Hiring</li>
          </ul>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-bold">Get Started</h2>
          <p className="text-lg mb-4">
            Register your company with us to start finding the perfect candidates for your open positions.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700" 
           >
          </button>
        </section>
      </main>
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Recruitment Startup. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
