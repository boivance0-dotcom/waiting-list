import React from 'react'
import Navbar from './components/Navbar';
import { SplashCursor } from './components/ui/splash-cursor';
import ImageSlider from './components/ImageSlider';
import { ContainerScroll } from './components/ui/container-scroll-animation';
import { GradientButton } from './components/ui/gradient-button';
import CloudWatchForm from './components/ui/cloud-watch-form';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
     <Navbar />
     <SplashCursor />
     <main className="relative z-10 p-8 pt-4">
       <div className="max-w-7xl mx-auto flex items-center justify-between min-h-[70vh]">
         {/* Left side - Text content */}
         <div className="flex-1 text-left pr-12">
           <h1 className="text-5xl font-bold text-white mb-6">
             Where Nature and AI Breathe Together
           </h1>
           <p className="text-xl text-gray-300 mb-8">
              Dive deep into the wonders of the wild —
             <br /> powered by an intelligent search engine inspired by life itself.
           </p>
           <GradientButton variant="variant">
             Join the waiting list
           </GradientButton>
         </div>

         {/* Right side - Image slider */}
         <div className="flex-1 flex justify-center">
           <ImageSlider />
         </div>
       </div>

       {/* AI Content Box */}
       <div className="max-w-6xl mx-auto mt-17">
         <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl shadow-purple-500/20 relative">
           {/* Glow effect */}
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-xl -z-10"></div>
           <div className="grid md:grid-cols-2 gap-8 items-center">
             {/* Left side - Content */}
             <div className="pt-4">
               <h2 className="text-3xl font-bold text-white mb-9">
                 Discover the Power of AI
               </h2>

               <h3 className='mb-34 text-white/80 text-2xl mt-2'>More than just a search engine</h3>
                
               <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                 Our AI-powered platform combines the beauty of nature with cutting-edge artificial intelligence.
                 Explore forests, understand ecosystems, and unlock the secrets of the natural world through
                 intelligent analysis and visualization.
               </p>
               <h4 className='text-white/80 text-1xl mb-8'>5+ Ai integrated in the search engine</h4>
               <div className="space-y-4">
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                   <span className="text-gray-300">Advanced image recognition</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <span className="text-gray-300">Real-time ecosystem analysis</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                   <span className="text-gray-300">Interactive nature exploration</span>
                 </div>
               </div>
             </div>

             {/* Right side - Feature highlights */}
             <div className="space-y-6">
               <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                 <h3 className="text-xl font-semibold text-white mb-2">Forest AI</h3>
                 <p className="text-gray-400">
                   Analyze forest ecosystems with AI-powered insights. Understand biodiversity,
                   climate impact, and conservation needs.
                 </p>
               </div>

               <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                 <h3 className="text-xl font-semibold text-white mb-2">Nature AI</h3>
                 <p className="text-gray-400">
                  Where algorithms meet ecosystems.
                  Using advanced machine learning, our AI maps natural intelligence — analyzing species behavior,
                  plant growth, and environmental rhythms to predict the world’s next transformations.
                 </p>
               </div>

               <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                 <h3 className="text-xl font-semibold text-white mb-2">Marine AI</h3>
                 <p className="text-gray-400">
                   Marine AI explores the depths of oceans through data — 
                   mapping ecosystems, decoding marine intelligence, and
                    revealing new possibilities hidden beneath the surface.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>

       {/* About Us Section with Scroll Animation */}
       <ContainerScroll
         titleComponent={
           <>
             <h1 className="text-4xl font-semibold text-white dark:text-white">
               About Biovance <br />
               <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                 Where Nature and Intelligence Evolve Together
               </span>
             </h1>
           </>
         }
       >
         <div className="h-full w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 flex flex-col justify-center">
           <div className="max-w-6xl mx-auto">
             {/* Subheadline */}
             <div className="text-center mb-3">
               <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                 Biovance is a research-driven AI ecosystem designed to explore the unseen intelligence of our planet.
                 We combine data, discovery, and design to help researchers, students, and explorers uncover nature's deepest connections.
               </p>
             </div>

             {/* Vision Statement */}
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
               <p className="text-lg text-gray-300 leading-relaxed max-w-5xl mx-auto">
                 Our vision is to make people curious again about the world we live in.
                 Most researchers today search endlessly across generic engines for specific, untouched knowledge.
                 Biovance changes that — each of our AIs is built for a dedicated domain like wildlife, marine life, and natural ecosystems, making discovery faster and smarter.
               </p>
               <p className="text-lg text-gray-300 leading-relaxed max-w-5xl mx-auto mt-4">
                 We aim to bridge technology and the environment, making research effortless and inspiring everyone to reconnect with Earth's intelligence.
               </p>
             </div>

             {/* What We Do - 4 Key Points */}
             <div className="mb-16">
               <h2 className="text-3xl font-bold text-white text-center mb-12">What We Do</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                   <div className="text-4xl mb-4">🌿</div>
                   <h3 className="text-xl font-semibold text-white mb-3">Nature Intelligence</h3>
                   <p className="text-gray-300">
                     AI trained to understand plant growth, forest patterns, and biodiversity.
                   </p>
                 </div>

                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                   <div className="text-4xl mb-4">🌊</div>
                   <h3 className="text-xl font-semibold text-white mb-3">Marine AI</h3>
                   <p className="text-gray-300">
                     Models analyzing ocean behavior, species data, and marine preservation.
                     learn about the ocean like never before.
                   </p>
                 </div>

                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                   <div className="text-4xl mb-4">🐾</div>
                   <h3 className="text-xl font-semibold text-white mb-3">Wildlife AI</h3>
                   <p className="text-gray-300">
                     Tools decoding animal behaviors and environmental impact patterns.
                     learn to understand wildlife have never been easier.
                   </p>
                 </div>

                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                   <div className="text-4xl mb-4">🎨</div>
                   <h3 className="text-xl font-semibold text-white mb-3">Forest AI</h3>
                   <p className="text-gray-300">
                     Discover forest ecosystems through AI-driven insights and visualizations.
                     the uncovered truth of forest species you never knew existed.
                   </p>
                 </div>
               </div>
             </div>

             
            
           </div>
         </div>
       </ContainerScroll>

       {/* Contact/Pre-book Section */}
       <div className="py-20 px-8">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
               Join our pre-book list to be the first to experience Biovance's revolutionary AI ecosystem.
               Get exclusive updates and early access to our groundbreaking features.
             </p>
           </div>

           <div className="flex justify-center">
             <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl shadow-purple-500/20 relative max-w-4xl w-full">
               {/* Glow effect */}
               <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-xl -z-10"></div>

               <div className="grid lg:grid-cols-2 gap-8 items-center">
                 {/* Left side - Form */}
                 <div>
                   <CloudWatchForm />
                 </div>

                 {/* Right side - Benefits */}
                 <div className="space-y-6">
                   <h3 className="text-2xl font-bold text-white mb-6">Why Join the Waitlist?</h3>

                   <div className="space-y-4">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                         <span className="text-white font-bold text-xs">1</span>
                       </div>
                       <div>
                         <h4 className="text-lg font-semibold text-white mb-1">Early Access</h4>
                         <p className="text-gray-300 text-sm">
                           Be among the first to explore Biovance's AI-powered platform.
                         </p>
                       </div>
                     </div>

                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                         <span className="text-white font-bold text-xs">2</span>
                       </div>
                       <div>
                         <h4 className="text-lg font-semibold text-white mb-1">Exclusive Updates</h4>
                         <p className="text-gray-300 text-sm">
                           Priority notifications about new features and developments.
                         </p>
                       </div>
                     </div>

                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                         <span className="text-white font-bold text-xs">3</span>
                       </div>
                       <div>
                         <h4 className="text-lg font-semibold text-white mb-1">Community Access</h4>
                         <p className="text-gray-300 text-sm">
                           Join researchers and innovators shaping AI-nature integration.
                         </p>
                       </div>
                     </div>

                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                         <span className="text-white font-bold text-xs">4</span>
                       </div>
                       <div>
                         <h4 className="text-lg font-semibold text-white mb-1">Beta Testing</h4>
                         <p className="text-gray-300 text-sm">
                           Help shape the platform during our exclusive beta phase.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

       {/* Contact Details Section */}
       <div className="py-16 px-8">
         <div className="max-w-6xl mx-auto">
           <div className="text-center mb-12">
             <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
               Have questions about Biovance? We're here to help you explore the intersection of nature and AI.
             </p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             {/* Email Contact */}
             <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl shadow-purple-500/20 relative text-center hover:scale-105 transition-all duration-300">
               <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-xl -z-10"></div>
               <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
               </div>
               <h3 className="text-xl font-semibold text-white mb-3">Email Us</h3>
               <p className="text-gray-300 mb-4">For general inquiries and support</p>
               <a href="mailto:hello@biovance.com" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                 hello@biovance.com
               </a>
             </div>

             {/* Research Contact */}
             <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl shadow-purple-500/20 relative text-center hover:scale-105 transition-all duration-300">
               <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-xl -z-10"></div>
               <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                 </svg>
               </div>
               <h3 className="text-xl font-semibold text-white mb-3">Research Partnership</h3>
               <p className="text-gray-300 mb-4">For collaboration and research opportunities</p>
               <a href="mailto:research@biovance.com" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                 research@biovance.com
               </a>
             </div>

             {/* Support Contact */}
             <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl shadow-purple-500/20 relative text-center hover:scale-105 transition-all duration-300">
               <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-xl -z-10"></div>
               <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <h3 className="text-xl font-semibold text-white mb-3">Technical Support</h3>
               <p className="text-gray-300 mb-4">For platform issues and technical assistance</p>
               <a href="mailto:support@biovance.com" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                 support@biovance.com
               </a>
             </div>
           </div>

           {/* Additional Info */}
           <div className="text-center mt-12">
             <p className="text-gray-400">
               We typically respond within 2 days. For personalized Questions, please call our hotline at
               <span className="text-purple-400 font-medium ml-1">+1 (555) BIO-VANCE</span>
             </p>
           </div>
         </div>
       </div>

       {/* Footer */}
       <footer className="bg-black/90 backdrop-blur-md border-t border-white/10">
         <div className="max-w-7xl mx-auto px-8 py-12">
           <div className="grid md:grid-cols-4 gap-8">
             {/* Company Info */}
             <div className="md:col-span-2">
               <h3 className="text-2xl font-bold text-white mb-4">Biovance</h3>
               <p className="text-gray-300 mb-6 max-w-md">
                 Revolutionizing the intersection of nature and artificial intelligence.
                 Making research smarter, faster, and more connected to our planet's intelligence.
               </p>
               <div className="flex space-x-4">
                 <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                   <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                   </svg>
                 </a>
                 <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                   <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                   </svg>
                 </a>
                 <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                   <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                   </svg>
                 </a>
               </div>
             </div>

             {/* Quick Links */}
             <div>
               <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
               <ul className="space-y-2">
                 <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</a></li>
                 <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Our AI Models</a></li>
                 <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Research</a></li>
                 <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Documentation</a></li>
               </ul>
             </div>

             {/* Support */}
             <div>
               <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
               <ul className="space-y-2">
                 <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Help Center</a></li>
                 <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Contact Us</a></li>
                 <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                 <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Terms of Service</a></li>
               </ul>
             </div>
           </div>

           <div className="border-t border-white/10 mt-8 pt-8 text-center">
             <p className="text-gray-400">
               © 2025-26 Biovance. All rights reserved. | Made with ❤️ for nature and AI.
             </p>
           </div>
         </div>
       </footer>
     </main>
   </div>
 )
}

export default App;

