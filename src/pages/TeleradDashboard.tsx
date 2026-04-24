import { useEffect, useState } from 'react';
import CompanyPage from './CompanyPage';
import BrazilMap from "./BrazilMapTelerad";
import ArrowButton from '../components/ArrowButton';
import HomeButton from '../components/HomeButton';

export default function TeleradDashboard() {
  const BAR_WINDOW = 7;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg text-gray-700">Loading dashboard data...</p>
      </div>
      </div>
    );
  }

  return (
    <CompanyPage next="/telerad/comparative" prev="/telerad/">
      <div className="w-full min-h-screen bg-white flex flex-col">
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
          <ImageBrand src="/assets/telerad-logo.png" width={180} height={56} />
        </nav>

        {/* Hero Section */}
        <section className="px-8 py-24 bg-gray-50 text-center">
          <h2 className="font-clash text-5xl md:text-7xl font-black text-gray-900 leading-[1.1]">
            Dashboard TeleRad
          </h2>
        </section>

        <div className="flex-grow flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-7xl">
            <BrazilMap />
          </div>
        </div>
      </div>
    </CompanyPage>
  );
}