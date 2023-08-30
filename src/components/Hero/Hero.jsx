import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/images/bg2.jpg';
import Container from '../Container';
const HeroSection = () => {
  return (
    <Container>
      <section className="lg:grid lg:grid-cols-2 gap-4 p-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Your Hero Text</h1>
          <p className="text-lg text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            purus feugiat, commodo felis vitae, aliquet justo.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image src={heroImage} alt="Hero Image" className="max-h-96" />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
