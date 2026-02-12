"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdCallMade } from "react-icons/md";
import Link from "next/link";

export default function Home() {

  return (
    <div className="relative min-h-screen bg-black text-white font-montserrat selection:bg-black selection:text-white">

      {/* BUTTON FIXED DI POJOK KANAN */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClick={() => window.open("https://forms.gle/bqyT8aNKsYH4E7C56", "_blank")}
        className="fixed bottom-10 right-10 flex items-center gap-2 font-semibold bg-white text-black px-6 py-4 rounded-full text-xl hover:opacity-100 hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg z-50"
      >
        Daftar Internshipn
        <MdCallMade className="text-xl" />
      </motion.button>


      {/* NAVBAR */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 z-40 flex justify-between items-center w-full px-6 md:px-20 py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]"
        //PAKAI 'absolute' Jika nav ingin tertinggal kalau di-scroll pada 'fixed'
      >
        <div className="flex items-center gap-2">
          <Link href="/" rel="noopener noreferrer">
            <Image 
              src="/logoenggal1.png" 
              alt="enggallogo" 
              width={80}  
              height={80} 
              className="cursor-pointer"
            />
          </Link>    
        </div>

{/* NAV MENU  */}
        <nav className="hidden md:flex font-medium gap-8 lg:gap-18 text-sm md:text-lg">
          {[
            { label: "Portfolio", href: "/portfolio" },
            { label: "Specialists", href: "/specialist" },
            { label: "Internship", href: "/internship" },
            { label: "Enggals", href: "/enggals" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link 
              key={item.label}
              href={item.href} 
              className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Link 
            href="/" 
            className="font-medium text-lg relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Main
          </Link> 
        </div>
      </motion.header>


      {/* --- SECTION 1: HERO (FULL WIDTH IMAGE & OVERLAY) --- */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        
        {/* Gambar Background */}
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
          alt="Enggal Internship Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Container Judul */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 md:p-20 pt-32">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mx-auto max-w-7xl"
            >
                <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl lg:text-8xl drop-shadow-lg mb-6">
                  Enggal Internship For Vocational High School / University.
                </h1>
                <p className="max-w-2xl text-xl text-gray-300 font-medium">
                  Kembangkan potensimu di industri media dan game bersama tim profesional Enggal Studio.
                </p>
            </motion.div>
        </div>
      </section>


      {/* --- SECTION 2: CONTENT GRID (SIDEBAR + MAIN) --- */}
      {/* BACKGROUND PUTIH, TEKS HITAM */}
      <main className="w-full bg-white text-black py-24 px-6 md:px-20 border-t border-gray-200">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 max-w-[1600px] mx-auto">
          
          {/* ====================================================
              KOLOM KIRI (SIDEBAR - PROFILE ENGGAL)
          ==================================================== */}
          <div className="flex flex-col gap-10 lg:col-span-4 lg:col-start-1 lg:sticky lg:top-32 h-fit">
            
            {/* Profil Utama */}
            <div className="group border-b border-gray-200 pb-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">Program</h3>
              <div className="flex items-center gap-5">
                 {/* Logo Background Abu Terang */}
                 <div className="relative h-20 w-20 overflow-hidden rounded-full bg-gray-100 border border-gray-200 p-2">
                    <Link href="/" rel="noopener noreferrer">
                      <Image 
                        src="/1.png"  // <-- Ganti jadi ini
                        alt="enggallogo" 
                        width={80}  
                        height={80} 
                        className="cursor-pointer"
                      />
                    </Link>
                 </div>
                 <div>
                   <span className="block text-2xl font-bold leading-tight text-black">
                     Enggal Internship
                   </span>
                   <span className="text-sm text-gray-500">Malang, Indonesia</span>
                 </div>
              </div>
            </div>

            {/* Tags / Bidang Magang (Style Light Mode) */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">Open Positions</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "2D Artist", 
                  "Motion Graphic", 
                  "3D Animator", 
                  "Game Developer"
                ].map((tag) => (
                  <span key={tag} className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 hover:border-black/20 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

             {/* Detail Lokasi */}
             <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">Office Location</h3>
               <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  Jl. Simpang Tlk. Grajakan Blok V, No.3<br />
                  Pandanwangi, Kota Malang
               </p>
            </div>
            
          </div>


          {/* ====================================================
              KOLOM KANAN (CONTENT DESCRIPTION)
          ==================================================== */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-20">
            
            {/* 1. TENTANG INTERNSHIP */}
            <div>
                <span className="mb-6 block text-lg font-medium text-gray-500">Tentang Program</span>
                <h2 className="mb-8 text-3xl font-medium leading-tight text-black md:text-5xl">
                Terlibat langsung dalam produksi konten visual berkualitas tinggi.
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                    Enggal Studio membuka kesempatan internship bagi talenta kreatif yang ingin berkembang di industri media dan game. Dengan bimbingan tim profesional dan lingkungan kerja yang modern, kamu tidak hanya belajar teori, tapi juga praktek nyata.
                </p>
                </div>
            </div>

            {/* 2. PERSYARATAN (Teks Hitam) */}
            <div className="border-t border-gray-200 pt-10">
                <h3 className="text-2xl font-semibold text-black mb-6">Persyaratan Internship</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-600">
                    <li className="flex gap-3 items-start"><span className="text-black font-bold mt-1">•</span> Surat Pengantar Resmi & Permohonan Magang.</li>
                    <li className="flex gap-3 items-start"><span className="text-black font-bold mt-1">•</span> CV & Portofolio (Wajib sesuai bidang).</li>
                    <li className="flex gap-3 items-start"><span className="text-black font-bold mt-1">•</span> Minat tinggi di bidang Kreatif / New Media.</li>
                    <li className="flex gap-3 items-start"><span className="text-black font-bold mt-1">•</span> Komitmen waktu minimal 6 bulan.</li>
                    <li className="flex gap-3 items-start"><span className="text-black font-bold mt-1">•</span> Bersedia mengikuti seleksi & Interview.</li>
                    <li className="flex gap-3 items-start"><span className="text-black font-bold mt-1">•</span> Tidak keberatan membawa device sendiri.</li>
                </ul>
            </div>

             {/* 3. BENEFIT (Kartu Light Mode) */}
             <div className="border-t border-gray-200 pt-10">
                <h3 className="text-2xl font-semibold text-black mb-6">Benefit</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                        <h4 className="text-xl font-bold text-black mb-2">Training Skill</h4>
                        <p className="text-sm text-gray-600">Mendapatkan pelatihan langsung sesuai posisi yang dilamar.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                        <h4 className="text-xl font-bold text-black mb-2">Real Project</h4>
                        <p className="text-sm text-gray-600">Terlibat dalam project nyata studio untuk klien.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                        <h4 className="text-xl font-bold text-black mb-2">Certificate</h4>
                        <p className="text-sm text-gray-600">Mendapatkan sertifikat resmi magang industri.</p>
                    </div>
                </div>
            </div>

            {/* 4. GALLERY (Fix Gambar Broken) */}
                        <div className="pt-10">
                          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                              
                              {/* Gambar Kiri (Vertical) */}
                              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-200">
                                <Image
                                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                                  alt="Suasana Kerja 1"
                                  fill
                                  className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                              </div>

                              {/* Kolom Kanan (2 Gambar Tumpuk) */}
                              <div className="flex flex-col gap-6">
                                
                                {/* Gambar Kanan Atas */}
                                <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-lg bg-gray-200">
                                  <Image
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
                                    alt="Suasana Kerja 2"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                  />
                                </div>
                                
                                {/* Gambar Kanan Bawah (YANG TADI ERROR SAYA GANTI LINKNYA) */}
                                <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-lg bg-gray-200">
                                  <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                                    alt="Suasana Kerja 3"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                  />
                                </div>

                              </div>
                          </div>
                        </div>


          </div>

        </div>
      </main>


      {/* FOOTER */}
      <footer className="w-full bg-black text-white py-20 px-6 md:px-20 font-montserrat border-t border-white/10">
        <div className="w-full px-6 md:px-20 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            
            {/* BRAND */}
            <div>
              <Link href="/">
                <Image
                  src="/assetenggal/logoenggalmain3.png"
                  alt="Brand"
                  width={160}
                  height={160}
                  className="opacity-90 cursor-pointer"
                />
              </Link>
            </div>

            {/* SPACER */}
            <div></div>

            {/* STUDIO MENU */}
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">Studio</h3>
              <ul className="text-xl md:text-2xl space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/specialist" className="hover:text-white transition-colors">Specialist</Link></li>
                <li><Link href="/enggals" className="hover:text-white transition-colors">Enggal Teams</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* COMPANY MENU */}
            <div>
              <h3 className="text-3xl md:text-4xl  font-semibold mb-4">Company</h3>
              <ul className="text-xl md:text-2xl space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/internship" className="hover:text-white transition-colors">Internship</Link></li>
              </ul>
            </div>

            {/* FOLLOW US */}
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">Follow Us</h3>
              <ul className="text-xl md:text-2xl space-y-2 text-gray-400">
                <li><a href="https://www.instagram.com/enggal.studio/" target="_blank" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.youtube.com/@enggalstudio" target="_blank" className="hover:text-white transition-colors">Youtube</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Behance</a></li>
              </ul>
            </div>

          </div>

          <hr className="border-white/20 mb-16" />

          {/* ADDRESS ROW */}
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
            <div>
              <p className="text-2xl text-gray-300 leading-relaxed ">
                Jl. Simpang Tlk. Grajakan Blok V, No.3<br />
                Pandanwangi, Kec. Blimbing,<br />
                Kota Malang, Indonesia<br />
                65124   
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                className=" text-xl inline-flex items-center gap-2 mt-4 text-white/70 hover:text-white mb-5 transition-colors"
              >
                View on maps →
              </a>
            </div>

            <div className="text-left md:text-right">
              <p className="text-3xl md:text-3xl font-medium">Trusted Creative Media Studio</p>
              <p className="text-2xl md:text-3xl text-gray-400 mt-3">New Media Expert</p>
            </div>
          </div>

          <hr className="border-white/20 mb-10" />

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© 2025 Enggal Studio. All rights reserved.</p>
            <ul className="text-1xl flex gap-6 mt-4 md:mt-0">
              <li><Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>
      </footer>

    </div>
  );
}