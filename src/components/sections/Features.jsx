import React from 'react';
import Card from '../common/Card';
import Image from '../common/Image';

const Features = () => (
  <section className="py-20 container mx-auto px-4 lg:px-10">
    <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark text-center mb-12 font-heading">
      Our Audio Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card 
        title="Podcast Mixing"
        content="Professional mixing for crystal-clear episodes – balance vocals, music, and effects with our expert touch. Perfect for indie creators."
        image={
          <Image src="/assets/images/mixing-icon.svg" alt="Podcast mixing icon" className="w-16 h-16 mx-auto mb-4" />
        }
      />
      <Card 
        title="Track Mastering"
        content="Final polish for your tracks – loudness, EQ, and dynamics optimized for streaming platforms. Elevate your sound to pro level."
        image={
          <Image src="/assets/images/mastering-icon.svg" alt="Track mastering icon" className="w-16 h-16 mx-auto mb-4" />
        }
      />
      <Card 
        title="Custom Production"
        content="Tailored production from scratch – beats, arrangements, and collaboration to bring your vision to life. Your story, our sound."
        image={
          <Image src="/assets/images/production-icon.svg" alt="Custom production icon" className="w-16 h-16 mx-auto mb-4" />
        }
      />
    </div>
  </section>
);

export default Features;