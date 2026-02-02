import Image from "next/image";

export default function ProjectPage() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-sans">
      
      {/* --- SECTION 1: HERO (FULL WIDTH & OVERLAY) --- */}
      {/* Menggunakan h-[85vh] agar gambar tinggi hampir setinggi layar */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        
        {/* Gambar Background */}
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Hero Project Image"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Gelap (Supaya tulisan putih terbaca jelas) */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Container Judul (Posisi di bawah kiri menimpa gambar) */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 md:p-20">
            <div className="mx-auto max-w-6xl">
                <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl drop-shadow-lg">
                Modern Minimalist Villa: Blending Nature & Architecture qwdweszASAZ
                </h1>
            </div>
        </div>
      </section>


      {/* --- CONTAINER KONTEN BAWAH (Dibatasi lebar agar rapi) --- */}
      <main className="mx-auto max-w-6xl px-6 py-24 sm:px-12">
        
        {/* --- SECTION 2: PROJECT DESCRIPTION & STATS --- */}
        <section className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-12">
          
          {/* Kolom Kiri: Deskripsi */}
          <div className="md:col-span-7">
            <h2 className="mb-6 text-2xl font-semibold">Project Overview</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Kolom Kanan: Detail Data */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-8 border-l border-gray-200 pl-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Location</h3>
              <p className="mt-1 text-xl font-medium">Malang, Indonesia</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Total Area</h3>
              <p className="mt-1 text-xl font-medium">328 sqm</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Timeline</h3>
              <p className="mt-1 text-xl font-medium">Jan, 2026</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Role</h3>
              <p className="mt-1 text-xl font-medium">UI/UX & Web Dev</p>
            </div>
          </div>
        </section>


        {/* --- SECTION 3: IMAGE GALLERY --- */}
        <section className="mb-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Gambar 1 - Vertical */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                alt="Interior Detail"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Container untuk 2 gambar di kanan */}
            <div className="flex flex-col gap-6">
              <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
                  alt="Kitchen Detail"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop"
                  alt="Living Room"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </section>


        {/* --- SECTION 4: FEATURES --- */}
        <section className="mb-20 rounded-2xl bg-gray-50 p-8 sm:p-12">
          <h2 className="mb-12 text-3xl font-semibold">Special features of the building</h2>
          
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div>
              <span className="block mb-3 text-sm font-bold text-gray-300">01</span>
              <h3 className="mb-2 text-lg font-bold">Thermal Mass Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Based on your input, we create a customized design that reflects your style, needs, and budget.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <span className="block mb-3 text-sm font-bold text-gray-300">02</span>
              <h3 className="mb-2 text-lg font-bold">Cross-ventilation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <span className="block mb-3 text-sm font-bold text-gray-300">03</span>
              <h3 className="mb-2 text-lg font-bold">Greywater Recycling</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

             {/* Feature 4 */}
             <div>
              <span className="block mb-3 text-sm font-bold text-gray-300">04</span>
              <h3 className="mb-2 text-lg font-bold">Smart Lighting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

             {/* Feature 5 */}
             <div>
              <span className="block mb-3 text-sm font-bold text-gray-300">05</span>
              <h3 className="mb-2 text-lg font-bold">Sustainable Material</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}