import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const languages = [
  { code: 'pt', name: 'ptBR' },
  { code: 'en', name: 'EN' },
  { code: 'es', name: 'ES' },
];



export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = React.useState(false);

  const isCare = searchParams.get("modal")?.startsWith("care-") || searchParams.get("view") === "care";
  const brandBg = isCare ? "bg-[#00b4b0]/80" : "bg-lemon/80";
  const brandHover = isCare ? "hover:bg-[#00b4b0]/40" : "hover:bg-lemon/40";
  const dropdownBg = isCare ? "bg-[#00b4b0]/90" : "bg-lemon/80";
  const itemHover = isCare ? "hover:bg-[#00b4b0]/50" : "hover:bg-lemon/50";


  return (
    <div className="fixed top-4 right-4 z-[9999]">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-3 py-2 bg-gray-400/80 text-white rounded-lg ${brandHover} transition-colors`}
        >
          <Languages size={20} />
          <span className="text-sm">{languages.find(lang => lang.code === i18n.language)?.name || 'ptBR'}</span>
        </button>

        {isOpen && (
          <div className={`absolute top-full right-0 mt-2 ${dropdownBg} rounded-lg overflow-hidden shadow-lg backdrop-blur-md`}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`block w-full px-4 py-2 text-sm text-white ${itemHover} transition-colors text-left whitespace-nowrap`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}