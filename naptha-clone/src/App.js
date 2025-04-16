import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoreConcepts from './components/CoreConcepts';
import Ecosystem from './components/Ecosystem';
import HowItWorks from './components/HowItWorks';
import Numbers from './components/Numbers';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CoreConcepts />
        <Ecosystem />
        <HowItWorks />
        <Numbers />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
