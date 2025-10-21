import { useState } from "react";

const ProductLanding = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Replace these with your actual product image URLs
  const productImages = [
    "/api/placeholder/600/600", // Main product view
    "/api/placeholder/600/600", // Side view
    "/api/placeholder/600/600", // Detail view
    "/api/placeholder/600/600", // In-use view
  ];

  const whatsappNumber = "573001234567"; // Replace with your WhatsApp number (country code + number)
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me interesa el Carrito Organizador de 3 Niveles. ¿Está disponible?"
  );

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50'>
      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16'>
        {/* Centered Title */}
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8 md:mb-12 leading-tight'>
          Carrito Organizador de 3 Niveles
        </h1>

        {/* Product Section - Responsive Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
          {/* Left Column: Image Gallery */}
          <div className='space-y-4'>
            {/* Main Image Display */}
            <div className='bg-white rounded-3xl shadow-lg overflow-hidden'>
              <div className='relative aspect-square'>
                <img
                  src={productImages[currentImageIndex]}
                  alt={`Vista del producto ${currentImageIndex + 1}`}
                  className='w-full h-full object-cover'
                />

                {/* 
                  3D MODEL EMBED OPTION:
                  Replace the <img> tag above with a 3D viewer embed:
                  
                  For Model Viewer:
                  <model-viewer 
                    src="path/to/model.glb" 
                    alt="3D model" 
                    auto-rotate 
                    camera-controls
                    className="w-full h-full"
                  ></model-viewer>
                  
                  For Spline:
                  <iframe 
                    src='https://my.spline.design/yourscene' 
                    className="w-full h-full border-0"
                  />
                  
                  For Sketchfab:
                  <iframe 
                    src="https://sketchfab.com/models/YOUR_MODEL_ID/embed"
                    className="w-full h-full border-0"
                  />
                */}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className='flex gap-3 overflow-x-auto pb-2 scrollbar-hide'>
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden transition-all ${
                    idx === currentImageIndex
                      ? "ring-4 ring-orange-500 shadow-lg scale-105"
                      : "ring-2 ring-gray-200 hover:ring-orange-300 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Ver imagen ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    className='w-full h-full object-cover'
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className='space-y-6 md:space-y-8'>
            {/* Product Description */}
            <div className='bg-white rounded-3xl shadow-lg p-6 md:p-8'>
              <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
                Dale vida a tus espacios con este adorable carrito móvil. Tres
                niveles espaciosos que se mueven contigo, perfecto para la
                cocina, baño, oficina o tu rincón creativo. Mantén todo ordenado
                y siempre a la mano. ¡Organizar nunca fue tan fácil y bonito!
              </p>
            </div>

            {/* Product Highlights */}
            <div className='bg-white rounded-3xl shadow-lg p-6 md:p-8'>
              <h2 className='text-xl font-semibold text-gray-800 mb-5'>
                Características
              </h2>

              <div className='space-y-4'>
                {/* Length */}
                <div className='flex items-center gap-4 p-4 bg-orange-50 rounded-2xl'>
                  <div className='w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M7 12h10M7 12l-4 4m4-4l-4-4m10 4l4 4m-4-4l4-4'
                      />
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm text-gray-600 font-medium'>
                      Dimensiones
                    </p>
                    <p className='text-lg font-semibold text-gray-800'>
                      35 × 28 × 72 cm
                    </p>
                  </div>
                </div>

                {/* Weight */}
                <div className='flex items-center gap-4 p-4 bg-orange-50 rounded-2xl'>
                  <div className='w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                      />
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm text-gray-600 font-medium'>Peso</p>
                    <p className='text-lg font-semibold text-gray-800'>
                      3.5 kg
                    </p>
                  </div>
                </div>

                {/* Warranty */}
                <div className='flex items-center gap-4 p-4 bg-orange-50 rounded-2xl'>
                  <div className='w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm text-gray-600 font-medium'>
                      Garantía
                    </p>
                    <p className='text-lg font-semibold text-gray-800'>1 año</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price & CTA */}
            <div className='bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl p-6 md:p-8 text-white'>
              <div className='text-center mb-6'>
                <p className='text-sm uppercase tracking-wide opacity-90 mb-2'>
                  Precio especial
                </p>
                <p className='text-5xl md:text-6xl font-bold'>$89.900</p>
                <p className='text-sm opacity-90 mt-2'>Envío gratis en Cali</p>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className='w-full bg-white text-orange-600 font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3'
                aria-label='Pedir por WhatsApp'
              >
                <svg
                  className='w-7 h-7'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
                </svg>
                Pedir por WhatsApp
              </button>

              <p className='text-center text-sm mt-4 opacity-90'>
                ⚡ Respuesta inmediata • 🎁 Colores disponibles
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className='fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-200 flex items-center justify-center z-50 group'
        aria-label='Contactar por WhatsApp'
      >
        <svg
          className='w-9 h-9 text-white'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
        </svg>

        {/* Pulse animation */}
        <span className='absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75 group-hover:opacity-0'></span>
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes ping {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductLanding;
