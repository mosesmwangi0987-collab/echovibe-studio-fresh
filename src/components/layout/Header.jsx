import React from 'react';
import Navigation from './Navigation';

const Header = () => (
  <header className="bg-neutral-light shadow-sm border-b border-neutral-light/50">
    <div className="container mx-auto px-10 py-6 flex items-center justify-between">
      <div className="text-2xl font-bold text-primary font-heading">EchoVibe</div>
      <Navigation />
    </div>
  </header>
);

export default Header;