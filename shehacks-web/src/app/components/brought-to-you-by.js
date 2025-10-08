import React from 'react';
import Image from 'next/image';

const WitsHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Main Content Container */}
      {/* CHANGE #1: remove max-w-7xl so the grid can span full width */}
      <div className="mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Side - Logo */}
       <div className="flex justify-start">
        <Image
            src="/images/wits-logo-chrome.png"
            alt="WITS+ Logo"
            width={4800}
            height={3600}
            sizes="(min-width:2024px) 96vw, 160vw"
            className="object-contain w-[140vw] sm:w-[120vw] lg:w-[96vw] xl:w-[100vw] 2xl:w-[104vw] max-w-none h-auto -ml-35 lg:-ml-65"
            priority
        />
        </div>
                {/* Right Side - Content */}
        <div className="text-white space-y-6">
          <h3 
            className="font-bold text-3xl leading-tight"
            style={{ 
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 700,
              fontSize: '28px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Building a future for women+ in tech
          </h3>
          
          <p 
            className="text-lg leading-relaxed"
            style={{ fontFamily: 'Work Sans, sans-serif' }}
          >
            WITS+ is a club at Western University that provides its community 
            with initiatives and resources to inspire. We aim to empower women, 
            women-identifying, and non-binary individuals in tech and equip 
            them with the necessary skills to succeed in the industry.
          </p>

          <div className="pt-4">
            <button className="relative group transition-transform hover:scale-105 duration-300">
              <Image
                src="/images/learn-more.png"
                alt="Learn More"
                width={220}
                height={70}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" 
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px)',
          }}
        />
      </div>
    </section>
  );
};

export default WitsHeroSection;
