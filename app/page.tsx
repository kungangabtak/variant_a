"use client";

import React from "react";
import Link from "next/link";

// Reusable components
const SectionHeading = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight ${className}`}>
    {children}
  </h3>
);

const SectionText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-base sm:text-lg leading-relaxed text-gray-700 ${className}`}>
    {children}
  </p>
);

const Button = ({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) => (
  <Link 
    href={href} 
    className={`inline-block px-6 sm:px-8 py-3 font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 ${
      variant === "primary" 
        ? "border-2 border-accent text-accent hover:bg-accent hover:text-white" 
        : "border-2 border-white text-white hover:bg-white hover:text-gray-900"
    }`}
  >
    {children}
  </Link>
);

const LocationCard = ({ href, image, title }: { href: string; image: string; title: string }) => (
  <Link href={href} className="group">
    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
      <img 
        src={image} 
        alt={`${title} Location`} 
        className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-black/60 flex items-end justify-center pb-8">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
          {title}
        </h3>
      </div>
    </div>
  </Link>
);

const ContactCard = ({ location, address, phone, email, hours }: {
  location: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}) => (
  <div className="bg-gray-50 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover-gentle">
    <div className="text-center mb-6">
      <h4 className="text-xl sm:text-2xl font-light text-gray-900 mb-2">{location}</h4>
    </div>
    
    <div className="space-y-4">
      <div className="flex items-start space-x-3 group">
        <div className="text-accent mt-1 group-hover:scale-110 transition-transform duration-200">📍</div>
        <div>
          <p className="text-gray-900 font-medium text-sm sm:text-base">Address</p>
          <p className="text-gray-600 font-light text-sm sm:text-base">{address}</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-3 group">
        <div className="text-accent mt-1 group-hover:scale-110 transition-transform duration-200">📞</div>
        <div>
          <p className="text-gray-900 font-medium text-sm sm:text-base">Phone</p>
          <p className="text-gray-600 font-light text-sm sm:text-base">{phone}</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-3 group">
        <div className="text-accent mt-1 group-hover:scale-110 transition-transform duration-200">✉️</div>
        <div>
          <p className="text-gray-900 font-medium text-sm sm:text-base">Email</p>
          <p className="text-gray-600 font-light text-sm sm:text-base hover:text-accent transition-colors">{email}</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-3 group">
        <div className="text-accent mt-1 group-hover:scale-110 transition-transform duration-200">🕒</div>
        <div>
          <p className="text-gray-900 font-medium text-sm sm:text-base">Hours</p>
          <p className="text-gray-600 font-light text-sm sm:text-base">{hours}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">

      {/* Hero Section */}
      <section className="min-h-[70vh] sm:min-h-[82vh] flex items-center justify-center relative">
        <div className="absolute inset-0 z-0 flex justify-center">
          <div className="w-full max-w-[95%] sm:max-w-[84%] mx-2 my-2 relative">
            <img 
              src="/patio-hero.png" 
              alt="Outdoor Café Patio Ambiance" 
              className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 animate-gentle">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-8 text-white leading-tight text-shadow-soft">
            Cozy Up in the Café
          </h2>
          <p className="text-base sm:text-lg text-white font-light max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 text-shadow-soft px-4">
            With fresh pastries and delicious coffee, our café is the perfect place to get lost in a good book or enjoy a passionate conversation. Cozy and comfortable, there's room for everyone at Outdoor Café.
          </p>
          <Button href="/locations">Visit The Café</Button>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 sm:py-24 md:py-48 bg-warm-solid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading className="mb-8 sm:mb-12 text-center">Our Locations</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
            <LocationCard href="/locations/chicago" image="/chicago.jpg" title="Chicago" />
            <LocationCard href="/locations/evanston" image="/evanston.jpg" title="Evanston" />
          </div>
        </div>
      </section>

      {/* Goodies to Go Section */}
      <section className="py-16 sm:py-24 md:py-64 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="relative overflow-hidden rounded-lg shadow-xl hover-lift">
              <img 
                src="/matcha-latte.png" 
                alt="Matcha Latte" 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <SectionHeading>
                <span className="text-accent-solid">GOODIES</span> TO GO.
              </SectionHeading>
              <SectionText>
                Got a gathering coming up? Let us provide the goods for your next meeting or event! 
                <span className="font-medium text-accent"> Think coffee, pastries, donuts, and deliciousness.</span>
              </SectionText>
              <Button href="/catering">CATERING</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 sm:py-24 md:py-64 bg-warm-solid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <SectionHeading>
                <span className="text-green-600">SUSTAINABILITY</span>
              </SectionHeading>
              <div className="space-y-4">
                <SectionText>
                  Sustainability that's the way we roll... For the environment, for our community, for our employees, for the entire supply chain, nearly everything we serve is compostable.
                </SectionText>
                <div className="flex items-center space-x-4 text-sm text-green-600">
                  <span className="text-lg">♻️</span>
                  <span className="text-lg">🌱</span>
                  <span className="text-lg">🌍</span>
                  <span className="font-medium">Compostable packaging</span>
                </div>
                <SectionText>
                  We proud to offer our employees a living wage, and good benefits too. That's the essence of Specialty coffee... from seed to cup, the entire supply chain, and why we believe is thrival for all.
                </SectionText>
              </div>
            </div>
            
            <div className="w-full h-48 sm:h-64 lg:h-72 overflow-hidden rounded-lg shadow-lg hover-lift">
              <img 
                src="/sustainable.png" 
                alt="Sustainable Coffee" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Moments Section */}
      <section className="py-16 sm:py-24 md:py-64 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-warm-solid rounded-2xl p-8 sm:p-16 md:p-32 shadow-warm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
              <div className="flex justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl hover-lift">
                  <img 
                    src="/shared.png" 
                    alt="Shared Moments" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              
              <div className="space-y-6 sm:space-y-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                  MOMENTS SHOULD BE SHARED, <span className="text-accent-solid">NOT DONUTS.</span>
                </h3>
                <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p className="font-medium text-accent">Coffee, community and creativity is our jam.</p>
                  <p>Order ahead from JoeCoffeeApp, download the app and gain access to mobile ordering in LGNSQ. Visit our Printers Row order page to skip the line.</p>
                  <p>We support our community with our pay it forward coffee program, "caffe sospeso"</p>
                  <p>LGNSQ: outdoor dining. Park benches with seating on Monticello and a Parklet on Wrightwood for your convenience. Printers Row is open for indoor dining. Patio coming this Summer!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 sm:py-24 md:py-48 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <SectionHeading className="mb-4 sm:mb-8">Contact Us</SectionHeading>
            <SectionText className="max-w-3xl mx-auto">
              Visit us at either of our beautiful locations. We'd love to see you!
            </SectionText>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
            <ContactCard 
              location="Chicago"
              address="123 Michigan Avenue<br />Chicago, IL 60601"
              phone="(312) 555-0123"
              email="chicago@outdoorcafe.com"
              hours="Monday - Sunday<br />7:00 AM - 8:00 PM"
            />
            <ContactCard 
              location="Evanston"
              address="456 Sherman Avenue<br />Evanston, IL 60201"
              phone="(847) 555-0456"
              email="evanston@outdoorcafe.com"
              hours="Monday - Sunday<br />6:30 AM - 9:00 PM"
            />
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-600 font-light mb-4 text-sm sm:text-base">Have questions? We're here to help!</p>
            <p className="text-gray-600 font-light text-sm sm:text-base">
              For catering inquiries: <span className="text-gray-900 hover:text-accent transition-colors">catering@outdoorcafe.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide">Get in Touch</h4>
              <div className="space-y-2 text-gray-300 font-light">
                <p>123 Main Street</p>
                <p>City, State</p>
                <p className="hover:text-accent transition-colors">hello@outdoorcafe.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide mb-3 sm:mb-4">Hours</h4>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-1 text-gray-300 font-light text-sm sm:text-base">Every Day</td>
                    <td className="py-1 text-gray-300 font-light text-right text-sm sm:text-base">8am–6pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide mb-3 sm:mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 font-light hover:text-white transition-colors text-sm sm:text-base">Home</Link>
                <Link href="/locations" className="block text-gray-300 font-light hover:text-white transition-colors text-sm sm:text-base">Locations</Link>
                <Link href="/menu" className="block text-gray-300 font-light hover:text-white transition-colors text-sm sm:text-base">Menu</Link>
              </div>
            </div>
          </div>
          
          <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">© 2024 Outdoor Café</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 