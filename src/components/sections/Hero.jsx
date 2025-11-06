import React from 'react';
import Button from '../common/Button';
import Image from '../common/Image';

const Hero = () => (
  <section className="py-20 container mx-auto px-4 lg:px-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <Image 
          src="/assets/images/hero.webp" 
          alt="EchoVibe professional audio studio setup with mixing console and microphones" 
          className="w-full aspect-video rounded-lg object-cover" 
        />
      </div>
      <div className="order-1 lg:order-2 text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark mb-4 font-heading">
          Amplify Your Sound Story
        </h1>
        <p className="text-lg text-neutral-dark mb-8 font-body">
          At EchoVibe Studio, we empower indie musicians and podcasters to turn raw ideas into polished tracks. With cutting-edge tools and a passion for sound, we offer mixing, mastering, and production services that fit your creative flow. Join the creators who've elevated their voice – your story starts here.
        </p>
        <Button variant="primary">Get Started</Button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">7</div>
            <div className="text-sm text-neutral-dark">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">2</div>
            <div className="text-sm text-neutral-dark">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">10K+</div>
            <div className="text-sm text-neutral-dark">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">260+</div>
            <div className="text-sm text-neutral-dark">Happy Clients</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;