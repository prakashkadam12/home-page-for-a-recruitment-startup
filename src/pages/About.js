import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-600 text-lg mb-8">
          Welcome to our recruitment platform, where we connect companies with talented professionals from around the world.
          We are dedicated to helping businesses find the right candidates to build strong, successful teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
          <div className="bg-blue-500 text-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p>
              Our mission is to bridge the gap between exceptional talent and top companies, fostering meaningful connections
              that drive innovation and growth.
            </p>
          </div>

        
          <div className="bg-blue-500 text-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p>
              We envision a world where every company can easily access the best talent, and every individual can find their
              dream job opportunity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

