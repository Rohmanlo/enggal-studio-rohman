"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdCallMade } from "react-icons/md";
import Link from "next/link";
export default function Home() {



  return (
    <div className="relative min-h-screen bg-black text-white font-montserrat">

      {/* BUTTON FIXED DI POJOK KANAN */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClick={() => window.open("https://forms.gle/bqyT8aNKsYH4E7C56", "_blank")}
        className="fixed bottom-10 right-10 flex items-center gap-2 font-semibold bg-white text-black px-6 py-4 rounded-full text-xl hover:opacity-100 hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg z-50"
      >
        Daftar Internship
        <MdCallMade className="text-xl" />
      </motion.button>


      {/* NAVBAR */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-between items-center w-full -mb-10 px-6 md:px-20 py-10"
      >
        <div className="flex items-center gap-2 ml-4 ">
          <a href="/" rel="noopener noreferrer">
            <Image 
              src="/assetenggal/logoenggalmain3.png" 
              alt="enggallogo" 
              width={100}  
              height={100} 
            />
          </a>    
        </div>

        <nav className="hidden md:flex font-medium gap-4 sm:gap-5 md:gap-20 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl mx-4 sm:mx-6 md:mx-10 lg:mx-16">
          <a href="/portfolio" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Portfolio</a>
          <a href="/specialist" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Specialists</a>
          <a href="/internship" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Internship</a>
          <a href="/enggals" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Enggals</a>
          <a href="/contact" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</a>
        </nav>

        <div className="flex items-center gap-2 ml">
          <a href="/" className="font-medium gap-5 md:gap-20 text-2xl hover:underline">
            Main
          </a> 
        </div>
      </motion.header>


      {/* SECTIONS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-30 px-6 md:px-20"
        >
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-Regular leading-tight max-w-7xl mb-6 mt-15">
          Enggal Internship For Vocational High School / University.
        </h1>

          <p className="font-medium text-xl text-neutral-500 max-w-6xl mb-8">
          Enggal Studio membuka kesempatan internship bagi talenta kreatif yang ingin berkembang di industri media dan game. Dengan bimbingan tim profesional dan lingkungan kerja yang modern, kamu akan terlibat langsung dalam produksi konten visual berkualitas tinggi.


          </p>
        </motion.section>

              {/* SECTION 1 — WHITE SECTION */}
        <section className="w-full bg-white text-black py-24 ">
        <div className="w-full px-6 md:px-20 ">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

            {/* KIRI */}
            <div className="md:col-span-3 md:-ml-10 lg:-ml-0 ">
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6 ">
                Kami menerima peserta magang untuk 4 bidang berikut:
              </h2>
            </div>

            {/* KANAN – MOBILE FULL WIDTH */}
            <div className="col-span-1 md:col-span-9 max-w-7xl">
              <h1 className="text-xl md:text-4xl font-medium leading-tight">
                1. 2D Artist<br/>
                <i className="block text-base md:text-lg font-normal not-italic opacity-80">
                  Belajar membuat ilustrasi, storyboard, karya digital, serta memahami alur produksi animasi 2D secara profesional.
                </i>
                <br/>
                
                2. Motion Graphic<br/>
                <i className="block text-base md:text-lg font-normal not-italic opacity-80">
                  Terlibat dalam pembuatan motion graphic modern untuk kebutuhan promosi, edukasi, dan media interaktif.
                </i>
                <br/>

                3. 3D Animator<br/>
                <i className="block text-base md:text-lg font-normal not-italic opacity-80">
                Mengasah kemampuan dalam modeling, rigging, lighting, dan animasi 3D menggunakan pipeline produksi studio. 
                </i>
                <br/> 

                
                4. Game Developer<br/>
                <i className="block text-base md:text-lg font-normal not-italic opacity-80">
                Mempelajari pengembangan game dan interactive media berbasis Unity untuk kebutuhan wisata dan edukasi.
                </i>
                <br/>     
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          </div>
        </div>
        </section>

              {/* SECTION 1 — WHITE SECTION */}
        <section className="w-full bg-gray-100 text-black py-24 ">
        <div className="w-full px-6 md:px-20 ">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

            {/* KIRI */}
            <div className="md:col-span-3 md:-ml-10 lg:-ml-0 ">
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6 ">
                Tentang Internship
              </h2>
            </div>

            {/* KANAN – MOBILE FULL WIDTH */}
            <div className="col-span-1 md:col-span-9 max-w-7xl">
              <h1 className="text-xl md:text-4xl font-medium leading-tight">
                Persyaratan Internship <br/>
                <i className="block text-base md:text-lg font-normal not-italic opacity-80">

                1. Surat Pengantar Resmi. <br/>
                2. Surat permohonan magang/PKL dari sekolah atau institusi pendidikan. <br/>
                3. Curriculum Vitae (CV). <br/>
                <i>&nbsp; &nbsp;&nbsp;Berisi data diri, riwayat pendidikan, keterampilan, serta pengalaman relevan (jika ada).<br/></i>
                4. Portofolio<br/>
                 <i>&nbsp; &nbsp;&nbsp;Di bidang desain, animasi, multimedia, videografi, atau creative content. <br/></i>
                5. Komitmen waktu magang minimal 6 bulan - 1 tahun (menyesuaikan ketentuan sekolah/universitas). <br/>
                6. Disiplin waktu, menjaga sikap, berpakaian rapi, serta menghormati budaya kerja. <br/>
                7. Memiliki Minat di Bidang Kreatif / New Media. <br/>
                8. Bersedia Mengikuti Seleksi Awal. <br/>
                9. Interview singkat atau uji keterampilan dasar sesuai kebutuhan posisi. <br/>
                10. Tidak berkeberatan menggunakan device sendiri. <br/><br/>
                
                </i>
                Benefit Internship <br/>
                <i className="block text-base md:text-lg font-normal not-italic opacity-80">
                1. Mendapatkan training skill sesuai posisi yang dilamar. 
                <br/> 2. Mendapat kesempatan untuk terlibat dalam real project dari Enggal Studio.
                <br/> 3. Mendapatkan sertifikat magang.
                </i>
                <br/>
               








              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          </div>
        </div>
        </section>

    <footer className="w-full bg-black text-white py-20 px-6 md:px-20 font-montserrat">
      <div className="w-full px-6 md:px-20 mb-16">
        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          
          {/* BRAND */}
          <div>
            <Link href="/">
              <img
                src="/assetenggal/logoenggalmain3.png"
                alt="Brand"
                className="w-40 opacity-90 cursor-pointer"
              />
            </Link>
          </div>


          {/* MENU 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4"></h3>
            <ul className="space-y-2 text-gray-400">

            </ul>
          </div>


          {/* MENU 1 */}
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">Studio</h3>
            <ul className="text-2xl space-y-2 text-gray-400">
              <li><a href="/">Home</a></li>
              <li><a href="/specialist">Specialist</a></li>
              <li><a href="/enggals">Enggal Teams</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* MENU 2 */}
          <div>
            <h3 className="text-3xl md:text-4xl  font-semibold mb-4">Company</h3>
            <ul className="text-2xl space-y-2 text-gray-400">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/internship">Internship</a></li>
            </ul>
          </div>

          {/* MENU 3 */}
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">Follow Us</h3>
            <ul className="text-2xl space-y-2 text-gray-400">
              <li><a href="https://www.instagram.com/enggal.studio/">Instagram</a></li>
              <li><a href="https://www.youtube.com/@enggalstudio">Youtube</a></li>
              <li><a href="/">Behance</a></li>
            </ul>
          </div>

        </div>

        <hr className="border-white/20 mb-16" />

        {/* ADDRESS ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
          
          {/* LEFT */}
          <div>
            <p className="text-2xl text-gray-300 leading-relaxed ">
              Jl. Simpang Tlk. Grajakan Blok V, No.3<br />
              Pandanwangi, Kec. Blimbing,<br />
              Kota Malang, Indonesia<br />
              65124   
            </p>
            <a
              href="https://maps.app.goo.gl/Q8Y8Hx8gMzXypz5t6"
              className=" text-xl inline-flex items-center gap-2 mt-4 text-white/70 hover:text-white mb-5"
            >
              View on maps →
            </a>
          </div>

          {/* CLUTCH */}
          <div className="text-left md:text-right">
            <p className="text-3xl md:text-3xl font-medium">Trusted Creative Media Studio</p>
            <p className="text-2xl md:text-3xl text-gray-400 mt-3">New Media Expert</p>
          </div>

        </div>

        <hr className="border-white/20 mb-10" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 Enggal Studio. All rights reserved.</p>

          <ul className="text-1xl flex gap-6 mt-4 md:mt-0">
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>
    </footer>




    </div>
  );
}
