'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Instagram, Send, Phone, ArrowUpRight, Star, Coffee, Utensils, Leaf, MessageCircle, CalendarDays, Facebook, X } from 'lucide-react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- TABS COMPONENT ---
const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-12 items-center justify-center rounded-none border-4 border-black bg-[#F4F0EA] p-1 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 text-sm font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#8A9A5B] data-[state=active]:text-white data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] data-[state=active]:border-2 data-[state=active]:border-black',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// --- DATA ---
const MENU_DATA = {
  food: [
    { name: 'Onigiri Tuna Mayo', price: '10K', bestSeller: true, desc: 'Nasi kepal Jepang isi tuna mayo', image: 'https://picsum.photos/seed/onigiri/400/300' },
    { name: 'Chicken Katsu Curry', price: '25K', bestSeller: true, desc: 'Nasi kari Jepang dengan ayam katsu', image: 'https://picsum.photos/seed/katsu/400/300' },
    { name: 'Takoyaki Original', price: '15K', bestSeller: false, desc: 'Bola gurita khas Osaka (6 pcs)', image: 'https://picsum.photos/seed/takoyaki/400/300' },
    { name: 'Gyoza Ayam', price: '15K', bestSeller: false, desc: 'Pangsit Jepang isi ayam cincang', image: 'https://picsum.photos/seed/gyoza/400/300' },
    { name: 'Ramen Shoyu', price: '20K', bestSeller: true, desc: 'Mie kuah kaldu ayam & kecap asin', image: 'https://picsum.photos/seed/ramen/400/300' },
  ],
  drink: [
    { name: 'Sakura Lemonade', price: '12K', bestSeller: false, desc: 'Soda lemon segar dengan sirup sakura', image: 'https://picsum.photos/seed/lemonade/400/300' },
    { name: 'Kopi Susu Gula Aren', price: '15K', bestSeller: true, desc: 'Kopi susu lokal favorit', image: 'https://picsum.photos/seed/kopisusu/400/300' },
    { name: 'Yuzu Tea', price: '12K', bestSeller: false, desc: 'Teh jeruk yuzu yang menyegarkan', image: 'https://picsum.photos/seed/yuzu/400/300' },
    { name: 'Milo Dinosaur', price: '15K', bestSeller: false, desc: 'Susu coklat dengan taburan milo', image: 'https://picsum.photos/seed/milo/400/300' },
  ],
  matcha: [
    { name: 'Matcha Latte', price: '15K', bestSeller: true, desc: 'Susu dengan bubuk matcha premium', image: 'https://picsum.photos/seed/matchalatte/400/300' },
    { name: 'Hojicha Latte', price: '15K', bestSeller: true, desc: 'Susu dengan teh hijau panggang', image: 'https://picsum.photos/seed/hojicha/400/300' },
    { name: 'Matcha Espresso', price: '18K', bestSeller: false, desc: 'Perpaduan matcha dan kopi espresso', image: 'https://picsum.photos/seed/matchaespresso/400/300' },
    { name: 'Dirty Matcha', price: '18K', bestSeller: false, desc: 'Matcha latte dengan tambahan espresso shot', image: 'https://picsum.photos/seed/dirtymatcha/400/300' },
  ],
};

// --- MAIN PAGE ---
export default function Home() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background Japanese Typography Accent */}
      <div className="fixed top-20 -right-20 text-[15rem] font-noto-jp font-black text-black/5 select-none pointer-events-none z-0 rotate-12">
        タベモノ
      </div>
      <div className="fixed bottom-20 -left-20 text-[15rem] font-noto-jp font-black text-black/5 select-none pointer-events-none z-0 -rotate-12">
        スペース
      </div>

      <div className="relative z-10 flex flex-col gap-8">
        
        {/* 1. TOP SECTION: LOGO, SEO DESC, SOCIALS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center bg-[#F4F0EA] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-black/10 font-noto-jp font-bold text-6xl -rotate-12 select-none pointer-events-none">一番</div>
          <div className="absolute bottom-4 right-4 text-black/10 font-noto-jp font-bold text-6xl rotate-12 select-none pointer-events-none">最高</div>

          {/* Logo (Dummy) */}
          <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 relative bg-white">
            <Image 
              src="https://picsum.photos/seed/tabemonologo/200/200" 
              alt="TabemonoSpace Logo" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* SEO Title & Description */}
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Tabemono<span className="text-[#D73A31]">Space</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold bg-black text-white px-4 py-1 mb-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(138,154,91,1)] inline-block">
            Cafe Ala Jepang di Rangkasbitung
          </h2>
          <p className="text-base md:text-lg font-medium text-gray-800 max-w-2xl mb-8 leading-relaxed">
            Selamat datang di <strong>TabemonoSpace</strong>, destinasi kuliner dan tempat nongkrong hits dengan <em>vibes</em> Jepang pertama di Rangkasbitung, Lebak, Banten. Nikmati aneka menu otentik seperti Matcha premium, Onigiri, Takoyaki, dan Ramen mulai dari harga 10 ribuan. Suasana nyaman, <em>aesthetic</em>, dan cocok untuk bersantai bersama teman.
          </p>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <a href="https://instagram.com/tabemonospace" target="_blank" rel="noopener noreferrer" className="bg-[#D73A31] text-white p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 transition-all">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 transition-all">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] text-white p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 transition-all">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </motion.section>

        {/* 2. CONTACT & RESERVATION (2 ADMINS) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <a 
            href="https://wa.me/6289531560435" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] text-black border-4 border-black p-4 flex items-center justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 transition-all group"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <h3 className="font-black uppercase text-lg leading-none">Admin 1</h3>
                <span className="text-sm font-bold opacity-80">Tanya Menu/Order</span>
              </div>
            </div>
            <ArrowUpRight className="w-6 h-6" />
          </a>

          <a 
            href="https://wa.me/6289516408075" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] text-black border-4 border-black p-4 flex items-center justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 transition-all group"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <h3 className="font-black uppercase text-lg leading-none">Admin 2</h3>
                <span className="text-sm font-bold opacity-80">Tanya Menu/Order</span>
              </div>
            </div>
            <ArrowUpRight className="w-6 h-6" />
          </a>

          <a 
            href="https://wa.me/6289531560435?text=Halo%20TabemonoSpace,%20saya%20ingin%20reservasi%20tempat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#D73A31] text-white border-4 border-black p-4 flex items-center justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 transition-all group"
          >
            <div className="flex items-center gap-3">
              <CalendarDays className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <h3 className="font-black uppercase text-lg leading-none">Reservasi</h3>
                <span className="text-sm font-bold opacity-90">Booking Tempat</span>
              </div>
            </div>
            <ArrowUpRight className="w-6 h-6" />
          </a>
        </motion.section>

        {/* 3. HERO IMAGE ALL MENU */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full h-64 md:h-96 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group"
        >
          <Image 
            src="https://picsum.photos/seed/japanesefood/1200/600" 
            alt="Semua Menu TabemonoSpace" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider drop-shadow-lg">
              Eksplorasi Rasa <br/><span className="text-[#8A9A5B]">Jepang</span>
            </h2>
          </div>
        </motion.section>

        {/* 4. INTERACTIVE MENU (THE BENTO CORE) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="flex items-center justify-between mb-8 border-b-4 border-black pb-4">
            <h2 className="text-4xl font-black uppercase tracking-tight flex items-center gap-3">
              <span className="bg-[#D73A31] text-white p-2 border-2 border-black">
                <Utensils className="w-8 h-8" />
              </span>
              Menu Kami
            </h2>
            <div className="hidden md:block text-2xl font-noto-jp font-bold text-gray-300">
              メニュー
            </div>
          </div>

          <Tabs defaultValue="food" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-0 border-none shadow-none gap-2 md:gap-4 bg-transparent">
              <TabsTrigger value="food" className="h-14 text-sm md:text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=active]:bg-[#D73A31] data-[state=active]:border-4 bg-white">
                <Utensils className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" /> Food
              </TabsTrigger>
              <TabsTrigger value="drink" className="h-14 text-sm md:text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=active]:bg-[#8A9A5B] data-[state=active]:border-4 bg-white">
                <Coffee className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" /> Drink
              </TabsTrigger>
              <TabsTrigger value="matcha" className="h-14 text-sm md:text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=active]:bg-black data-[state=active]:border-4 bg-white">
                <Leaf className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" /> Matcha
              </TabsTrigger>
            </TabsList>
            
            {Object.entries(MENU_DATA).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0 outline-none">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {items.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group flex flex-col border-4 border-black bg-[#F4F0EA] hover:bg-white transition-colors duration-200 relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                    >
                      {/* Menu Image */}
                      <div 
                        className="w-full h-48 border-b-4 border-black relative overflow-hidden bg-gray-200 cursor-pointer"
                        onClick={() => setSelectedImage(item.image)}
                      >
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10 flex items-center justify-center">
                          <span className="bg-black text-white px-3 py-1 font-bold uppercase border-2 border-black opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-[2px_2px_0px_0px_rgba(215,58,49,1)]">
                            Lihat Foto
                          </span>
                        </div>
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          fill 
                          loading="lazy"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {item.bestSeller && (
                          <div className="absolute top-2 right-2 border-2 border-[#D73A31] text-[#D73A31] text-xs font-black uppercase px-2 py-1 rotate-12 flex items-center gap-1 bg-white shadow-[2px_2px_0px_0px_rgba(215,58,49,1)]">
                            <Star className="w-3 h-3 fill-current" /> Best
                          </div>
                        )}
                      </div>
                      
                      {/* Menu Details */}
                      <div className="p-4 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-2 gap-2">
                          <h3 className="text-lg font-black uppercase leading-tight">{item.name}</h3>
                          <span className="text-lg font-black bg-black text-white px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(138,154,91,1)] whitespace-nowrap transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D73A31] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-3 origin-right">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-gray-600 mt-auto pt-4">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.section>

        {/* 5. LOCATION / MAPS (ENLARGED) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#8A9A5B] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
                  Lokasi Kami
                </h2>
                <p className="text-lg font-bold border-l-4 border-white pl-4">
                  Jln Pajajaran Pasir Ona, Rangkasbitung Timur, Lebak, Banten.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white text-black border-4 border-black px-4 py-2 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Clock className="w-5 h-5 text-[#D73A31]" />
                <span>10.00 - 21.00 WIB</span>
              </div>
            </div>
            
            {/* Enlarged Map */}
            <div className="w-full h-[400px] md:h-[500px] border-4 border-black bg-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative group">
              <iframe 
                src="https://maps.google.com/maps?q=TabemonoSpace+Rangkasbitung&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-2 border-black grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/tabemonospace" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black border-4 border-black px-6 py-4 text-xl font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 transition-all w-full md:w-auto self-center mt-2"
            >
              <MapPin className="w-6 h-6 text-[#D73A31]" /> Buka di Google Maps
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <div className="text-center mt-4 mb-8">
          <p className="font-bold text-sm uppercase tracking-widest">
            © {new Date().getFullYear()} TabemonoSpace. All rights reserved.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotate: 2 }}
              className="relative max-w-3xl w-full aspect-video md:aspect-[4/3] border-8 border-black shadow-[12px_12px_0px_0px_rgba(215,58,49,1)] bg-[#F4F0EA] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 bg-[#D73A31] text-white p-2 border-4 border-black hover:scale-110 hover:-rotate-6 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <X className="w-6 h-6" />
              </button>
              <Image
                src={selectedImage}
                alt="Enlarged Menu"
                fill
                loading="lazy"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

