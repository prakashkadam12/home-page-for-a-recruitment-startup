// src/components/JobSeekers.js
import React from 'react';

const JobSeekers = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-purple-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Join Our Talent Network</h1>
        <p className="text-xl">Explore exciting career opportunities.</p>
      </header>
      <main className="container mx-auto py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="text-lg">
            We connect talented job seekers like you with top companies in India and worldwide. Let us help you
            find your dream job!
          </p>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          <p className="text-lg mb-4">Create your profile and explore job opportunities.</p>
          <button className="bg-purple-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-purple-700">
             
          </button>
        </section>
      </main>
      <footer className="bg-purple-600 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Recruitment Startup. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default JobSeekers;
