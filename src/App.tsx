/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Globe, 
  Star, 
  Smartphone, 
  ArrowRight, 
  ChevronDown, 
  X, 
  Menu,
  MessageSquare,
  Shield,
  Check,
  Quote,
  TrendingDown,
  AlertCircle,
  Clock,
  Instagram,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Star4 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <Star4 className="text-obsidian w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-black tracking-tighter text-white">WIN STAR</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-semibold text-white/70 hover:text-cyan transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-semibold text-white/70 hover:text-cyan transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-semibold text-white/70 hover:text-cyan transition-colors">FAQ</a>
            <button className="bg-cyan text-obsidian px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan/20">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#features" className="block text-lg font-bold py-2 text-white">Features</a>
              <a href="#pricing" className="block text-lg font-bold py-2 text-white">Pricing</a>
              <a href="#faq" className="block text-lg font-bold py-2 text-white">FAQ</a>
              <button className="w-full bg-cyan text-obsidian py-4 rounded-xl font-black flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-bold uppercase tracking-wider mb-6 border border-cyan/20">
              <Star4 className="w-3 h-3" />
              AI-Powered Local Growth
            </div>
            <h1 className="text-5xl lg:text-7xl mb-6 leading-[1.1] text-white">
              More Calls. <br />
              More Reviews. <br />
              <span className="text-gradient-cyan">Zero Tech Headaches.</span>
            </h1>
            <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
              We build high-speed HTML sites that turn visitors into callers and AI tools that automate your reputation. Stop losing customers to slow sites and empty review pages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cyan text-obsidian px-8 py-5 rounded-xl font-black text-lg glow-cyan-strong hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Claim My 14-Day Growth Guarantee
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] p-2 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/nfc-tap/800/1000" 
                alt="Hand holding iPhone tapping Win Star NFC Card" 
                className="rounded-[32px] w-full h-auto object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
              
              {/* 5-Star Pop-up Overlay */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%] glass-card p-6 rounded-3xl border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-emerald rounded-full flex items-center justify-center shadow-lg shadow-emerald/20">
                    <CheckCircle2 className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">New 5-Star Review!</p>
                    <p className="text-white/50 text-xs uppercase tracking-widest font-black">Just Now via NFC Tap</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-cyan text-cyan" />)}
                </div>
                <p className="text-white/80 text-sm italic">"Best service in town. Tapped the card and left a review in 3 seconds!"</p>
              </motion.div>
            </div>
            
            {/* Background Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald/10 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PsychologySection = () => {
  return (
    <section className="py-24 bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 bg-cyan/10 border border-cyan/20 rounded-full text-cyan text-[10px] font-black uppercase tracking-widest">
              The Secret of the 1-Star Review
            </div>
            <h2 className="text-4xl lg:text-5xl text-white leading-tight">
              Why a Bad Review Can Actually <span className="text-gradient-cyan">Win You More Customers.</span>
            </h2>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-cyan/20" />
              <p className="text-xl text-white/80 italic leading-relaxed">
                "A couple almost skipped a hotel due to one bad review. They stayed anyway because the owner’s professional AI-powered reply proved they cared more than the competition."
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[40px] border border-white/10"
          >
            <div className="w-16 h-16 bg-cyan/20 rounded-2xl flex items-center justify-center mb-8">
              <ShieldCheck className="w-8 h-8 text-cyan" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">The Takeaway</h3>
            <p className="text-lg text-white/50 leading-relaxed">
              We don't just reply to reviews; we use AI to prove to every future customer that you are the most reliable choice in town—even when things aren't perfect.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-obsidian bg-white/10 flex items-center justify-center overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/40/40`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Trusted by 200+ Local Pros</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LogicSection = () => {
  const leaks = [
    { label: "1 Missed Lead per week", value: "-$500/mo", icon: <TrendingDown className="text-red-400" /> },
    { label: "Ignoring Google Reviews", value: "-15% Search Rank", icon: <AlertCircle className="text-red-400" /> },
    { label: "Slow Website Loading", value: "-20% Drop-off", icon: <Clock className="text-red-400" /> },
  ];

  return (
    <section className="py-24 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-[10px] font-black uppercase tracking-widest mb-6">
            Logic & Math
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">The Real Cost of "Staying the Same."</h2>
          <p className="text-xl text-white/40">Most businesses lose thousands every month to "Digital Leaks."</p>
        </div>

        <div className="grid gap-4 mb-12">
          {leaks.map((leak, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                  {leak.icon}
                </div>
                <span className="text-white/80 font-bold">{leak.label}</span>
              </div>
              <span className="text-red-400 font-mono font-bold">{leak.value}</span>
            </motion.div>
          ))}
        </div>

        <div className="p-8 bg-cyan/5 border border-cyan/20 rounded-[32px] text-center">
          <p className="text-lg text-white leading-relaxed">
            Our $199/mo Authority Plan plugs these leaks instantly. It’s not an expense; <span className="text-cyan font-bold">it’s an investment that pays for itself with your first rescued lead.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const DominanceBlueprint = () => {
  const items = [
    { label: "Custom HTML Website (Built for Speed)", value: "$2,500" },
    { label: "AI Review Management (Hands-free Growth)", value: "$1,200/yr" },
    { label: "Social Proof Sync (Live Review Widget)", value: "$600/yr" },
    { label: "Review-to-Social (Automated Graphics)", value: "$900/yr" },
    { label: "FREE NFC 'Tap-to-Review' Card", value: "$149" },
    { label: "Google Data Sync & SEO Audit", value: "$500" },
  ];

  return (
    <section id="dominance-blueprint" className="py-24 bg-obsidian relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-[48px] p-8 md:p-16 border border-cyan/30 relative overflow-hidden glow-cyan"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Star4 className="w-64 h-64 text-cyan" />
          </div>

          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-cyan text-obsidian text-[10px] font-black rounded-full uppercase tracking-widest mb-6">
              The Authority Package
            </div>
            <h2 className="text-4xl md:text-6xl mb-4 text-white font-black tracking-tight">The Complete Local Dominance Blueprint</h2>
            <p className="text-white/50 text-lg">Everything you need to dominate. No hidden fees. No fluff.</p>
          </div>

          <div className="space-y-4 mb-16">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/[0.07] transition-all group">
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <div className="w-8 h-8 bg-cyan/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-cyan" />
                  </div>
                  <span className="text-white font-bold text-lg">{item.label}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-white/20 line-through font-mono">{item.value}</span>
                  <span className="text-emerald font-black uppercase tracking-widest text-sm">Included</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center pt-12 border-t border-white/10">
            <div>
              <p className="text-white/40 font-bold uppercase tracking-widest text-xs mb-2">Total Real-World Value</p>
              <p className="text-5xl font-black text-white/40 line-through mb-6">$5,849</p>
              <div className="flex items-center gap-3 text-emerald bg-emerald/10 px-4 py-2 rounded-full w-fit">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">Risk-Free Guarantee</span>
              </div>
            </div>
            <div className="bg-white/5 p-10 rounded-[32px] border border-white/10 text-center md:text-right relative">
              <p className="text-white/40 font-bold uppercase tracking-widest text-xs mb-3">Your Investment Today</p>
              <div className="mb-4">
                <p className="text-5xl font-black text-white mb-1">$999 <span className="text-sm text-white/40 font-bold uppercase tracking-widest">Setup</span></p>
                <p className="text-3xl font-black text-cyan">$199 <span className="text-sm text-cyan/60 font-bold uppercase tracking-widest">/mo</span></p>
              </div>
              <button className="w-full py-5 rounded-2xl bg-cyan text-obsidian font-black text-lg hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-cyan/20">
                Start My Risk-Free Growth Package
              </button>
            </div>
          </div>

          <div className="mt-12 p-6 bg-emerald/5 border border-emerald/10 rounded-2xl text-center">
            <p className="text-white/80 text-sm leading-relaxed">
              If you don't get 10 new 5-star reviews in your first 30 days, <span className="text-emerald font-bold">we'll refund your setup fee.</span> No questions asked.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

const SocialProof = () => {
  const posts = [
    { name: "Local Plumber", review: "The tap-to-review card is a game changer. 12 reviews in 2 days!", img: "https://picsum.photos/seed/post1/400/400" },
    { name: "Coffee Shop", review: "AI replies save me 5 hours a week. Professional and fast.", img: "https://picsum.photos/seed/post2/400/400" },
    { name: "Dental Clinic", review: "Our search ranking jumped 4 spots in a month. Incredible.", img: "https://picsum.photos/seed/post3/400/400" },
    { name: "Auto Repair", review: "Best investment we've made this year. The ROI is clear.", img: "https://picsum.photos/seed/post4/400/400" },
  ];

  return (
    <section className="py-24 bg-obsidian overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">From Review to Revenue.</h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">
            We turn your 5-star feedback into professional social media assets automatically.
          </p>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="min-w-[300px] md:min-w-[350px] snap-center glass-card rounded-[32px] overflow-hidden border border-white/10"
            >
              <div className="aspect-square relative">
                <img src={post.img} alt="Post" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(j => <Star key={j} className="w-3 h-3 fill-cyan text-cyan" />)}
                  </div>
                  <p className="text-white font-bold mb-1">{post.name}</p>
                  <p className="text-white/60 text-sm italic">"{post.review}"</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-8">The Digital Foundation for Local Pros</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {["Google Business Partner", "High-Speed HTML5", "AI-Automated Rep", "SSL Secure"].map((text, i) => (
            <div key={i} className="flex items-center gap-2 font-bold text-sm text-white">
              <Star4 className="w-4 h-4 text-cyan" /> {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PainPoint = () => {
  return (
    <section className="py-24 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-white">Why Most Local Websites Fail.</h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">
            Most sites are slow, clunky, and ignore the customer. If you aren't replying to reviews or loading in under 2 seconds, you're invisible to Google and your customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative">
            <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/10 text-red-400 text-[10px] font-black rounded-full uppercase tracking-widest border border-red-500/20">The "Template" Trap</div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full" />
              <div>
                <p className="font-bold text-white">Generic Business</p>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-white/10 text-white/10" />)}
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl mb-4 border border-white/5">
              <p className="text-sm italic text-white/40">"Great service, will come back!"</p>
            </div>
            <div className="bg-red-500/5 p-4 rounded-xl border border-red-500/10">
              <p className="text-xs font-bold text-red-400/60 mb-1 uppercase tracking-widest">Bad Reply</p>
              <p className="text-sm text-white/20 italic">No reply sent. (Customer feels ignored)</p>
            </div>
          </div>

          <div className="bg-cyan/5 p-8 rounded-3xl border border-cyan/20 relative glow-cyan">
            <div className="absolute top-4 right-4 px-3 py-1 bg-cyan/20 text-cyan text-[10px] font-black rounded-full uppercase tracking-widest border border-cyan/30">The Win Star Way</div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cyan/20 rounded-full flex items-center justify-center">
                <Star4 className="text-cyan w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-white">Win Star Partner</p>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-cyan text-cyan" />)}
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl mb-4 border border-white/10">
              <p className="text-sm italic text-white/80">"Great service, will come back!"</p>
            </div>
            <div className="bg-cyan/10 p-4 rounded-xl border border-cyan/20">
              <p className="text-xs font-bold text-cyan mb-1 uppercase tracking-widest">AI-Driven Reply</p>
              <p className="text-sm text-white leading-relaxed">
                "Thanks so much for the 5-star review! We're glad you enjoyed our service. As a local business in town, we appreciate your support. See you next time!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CopyPasteComparison = () => {
  return (
    <section id="copy-paste-trap" className="py-24 bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-red-500/10 text-red-400 text-[10px] font-black rounded-full uppercase tracking-widest mb-6 border border-red-500/20">
            The "Copy-Paste" Trap
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 text-white font-black tracking-tight">Stop Treating Your Best Customers Like a Spreadsheet.</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left mt-16">
            <div className="space-y-4">
              <p className="text-red-400 font-black uppercase tracking-widest text-xs">The Problem</p>
              <p className="text-white/60 leading-relaxed">
                Most business owners are busy. When a 5-star review comes in, they do the "Copy-Paste" dance: <span className="text-white italic">"Thanks for the great review! We appreciate your business."</span>
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-red-400 font-black uppercase tracking-widest text-xs">The Reality</p>
              <p className="text-white/60 leading-relaxed">
                To a potential customer reading that, it feels cold. It’s a "bot-like" response that kills the human connection. Even worse? Google notices. Generic replies do nothing for your search ranking.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-cyan font-black uppercase tracking-widest text-xs">The Win Star Solution</p>
              <p className="text-white/60 leading-relaxed">
                Our AI doesn't just "reply." It listens. If a customer mentions your "fast service" or your "friendly staff," our AI crafts a unique, warm response that mentions those specific details.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Old Way */}
          <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 relative opacity-50 grayscale">
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 text-white/40 text-[10px] font-black rounded-full uppercase tracking-widest border border-white/20">The "Old Way"</div>
            <p className="text-xs font-black text-white/20 uppercase tracking-widest mb-6">Emotionless Reply</p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mb-6">
              <p className="text-white/40 italic">"Thanks for the feedback! Hope to see you again soon."</p>
            </div>
            <div className="flex items-center gap-3 text-red-400/40">
              <div className="w-2 h-2 bg-red-400/40 rounded-full" />
              <p className="text-xs font-bold uppercase tracking-widest">Result: Customer feels ignored. Zero SEO value.</p>
            </div>
          </div>

          {/* Win Star Way */}
          <div className="bg-cyan/5 p-8 rounded-[32px] border border-cyan/30 relative glow-cyan">
            <div className="absolute top-4 right-4 px-3 py-1 bg-cyan/20 text-cyan text-[10px] font-black rounded-full uppercase tracking-widest border border-cyan/40">The Win Star Way</div>
            <p className="text-xs font-black text-cyan uppercase tracking-widest mb-6">AI-Personalized Reply</p>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 mb-6 shadow-2xl shadow-cyan/10">
              <p className="text-white leading-relaxed">
                "We’re so glad you enjoyed the quick turnaround on your repair, Sarah! Our team loves hearing that the new HVAC system is keeping you cool. See you next time!"
              </p>
            </div>
            <div className="flex items-center gap-3 text-emerald">
              <div className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
              <p className="text-xs font-black uppercase tracking-widest">Result: Customer feels valued. 12% more reviews. Higher Google ranking.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/30 text-sm italic font-medium">
            "If your replies sound like a robot, don't be surprised when your customers start looking for a human competitor."
          </p>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: "Stop Losing Leads", desc: "Lightning-fast HTML hosting. No more 404s or slow loading times.", icon: <Star4 className="w-8 h-8 text-cyan" /> },
    { title: "Dominate the Map Pack", desc: "We sync your business data across the entire web so Google trusts you.", icon: <Globe className="w-8 h-8 text-cyan" /> },
    { title: "Tap-to-Review", desc: "A physical NFC card that gets 5-star reviews in 3 seconds. Just tap and grow.", icon: <Smartphone className="w-8 h-8 text-cyan" /> },
    { title: "AI Review Management", desc: "We draft unique, professional replies to every review while you work.", icon: <MessageSquare className="w-8 h-8 text-cyan" /> }
  ];

  return (
    <section id="features" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-cyan/30 transition-all duration-300">
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl mb-4 text-white">{f.title}</h3>
              <p className="text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "The Digital Foundation",
      setup: "$499",
      monthly: "$99",
      features: [
        "The 'Speed' Site: 5-Page HTML build (Home, Services, About, Contact, Gallery).",
        "VIP Local Hosting: Secure, fast, and 99.9% uptime.",
        "The 'Google Sync': Perfect Name/Address/Phone alignment for Google trust.",
        "Live Maps & Click-to-Call: Built-in to every page."
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "The Local Authority",
      setup: "$999",
      monthly: "$199",
      features: [
        "Includes Everything in Tier 1.",
        "The AI Reputation Engine: Automated, custom replies to every Google review.",
        "The Win Star NFC Card: One physical card to get 5-star reviews on the spot.",
        "Social Proof Sync: Your best Google reviews automatically appear on your website in a beautiful, live widget.",
        "Review-to-Social: We turn your best reviews into images you can post on Facebook/Instagram to show off your wins."
      ],
      cta: "Dominate My Market",
      popular: true
    }
  ];

  return (
    <section id="pricing-tiers" className="py-24 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">Choose Your Growth Speed.</h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">
            Whether you're just starting or ready to dominate, we have a plan that fits your local business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 rounded-[40px] border flex flex-col ${tier.popular ? 'border-cyan shadow-2xl shadow-cyan/10 relative overflow-hidden' : 'border-white/10'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 px-6 py-2 bg-cyan text-obsidian text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <div className="mb-8">
                <p className="text-4xl font-black text-white mb-1">{tier.setup} <span className="text-sm text-white/40 font-bold uppercase tracking-widest">Setup</span></p>
                <p className="text-2xl font-black text-cyan">{tier.monthly} <span className="text-sm text-cyan/60 font-bold uppercase tracking-widest">/mo</span></p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/70">
                    <Check className="w-5 h-5 text-cyan shrink-0 mt-1" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all duration-300 ${tier.popular ? 'bg-cyan text-obsidian shadow-lg shadow-cyan/20 hover:scale-[1.02]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Does the AI sound like a robot?", a: "Not at all. We train our AI on your specific business voice and industry terminology." },
    { q: "What is an NFC card?", a: "NFC is the same tech used for Apple Pay. Your customers just tap their phone to your physical Win Star card." },
    { q: "Can I keep my current phone number?", a: "Yes! We don't change your business operations. We just build the digital foundation." },
    { q: "What if I don't get reviews?", a: "If you don't get a new 5-star review within the first 14 days, your first month is completely free." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-obsidian">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl text-center mb-16 text-white">Risk Removal FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/5 rounded-2xl overflow-hidden glass-card">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="p-6 pt-0 text-white/50 leading-relaxed">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutWinStar = () => {
  const beliefs = [
    {
      title: "Speed is King",
      desc: "We don’t use bloated website builders. We hand-code in lightning-fast HTML because in a local market, the business that loads first gets the call.",
      icon: <Zap className="w-6 h-6 text-cyan" />
    },
    {
      title: "Reputation is the New Currency",
      desc: "As we say at Win Star, “A 1-star review is only a failure if you don’t reply.” We use AI to ensure every customer feels heard, turning your review section into a 24/7 sales team.",
      icon: <ShieldCheck className="w-6 h-6 text-cyan" />
    },
    {
      title: "Complexity is the Enemy",
      desc: "You shouldn't need a degree in computer science to run your business. We handle the tech, the hosting, and the automation so you can focus on what you do best.",
      icon: <Smartphone className="w-6 h-6 text-cyan" />
    }
  ];

  return (
    <section id="about-win-star" className="py-24 bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 bg-cyan/10 border border-cyan/20 rounded-full text-cyan text-[10px] font-black uppercase tracking-widest">
              About Win Star
            </div>
            <h2 className="text-4xl lg:text-6xl text-white leading-tight font-black">
              We’re Not Just Coders. <br />
              <span className="text-gradient-cyan">We’re Your Digital Front Desk.</span>
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-white/40 text-xs font-black uppercase tracking-[0.2em] mb-3">The Truth</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  You didn't start your business to spend your weekends worrying about HTML tags or wondering why your competitors are outranking you on Google Maps. You started it to be an expert in your trade.
                </p>
                <p className="text-lg text-white/70 leading-relaxed mt-4">
                  But in 2026, your "digital front door"—your website and your Google reviews—is the first thing every customer sees. If that door is slow to open or your reviews are being ignored, you are losing money before the phone even rings.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-white/40 text-xs font-black uppercase tracking-[0.2em] mb-3">The Win Star Mission</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  At Win Star, we realized that local businesses were being left behind by clunky, slow website builders and the "busywork" of managing a reputation. We built this agency to give the local experts—the backbone of our community—the same high-tech advantages as the global giants.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-white/40 text-xs font-black uppercase tracking-[0.2em] mb-6">Our Three Core Beliefs</h3>
            <div className="grid gap-6">
              {beliefs.map((belief, i) => (
                <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-cyan/30 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-cyan/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {belief.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{belief.title}</h4>
                      <p className="text-white/50 leading-relaxed">{belief.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-white/5 rounded-[32px] border border-white/10">
              <h4 className="text-white font-bold mb-4">Why Choose Win Star?</h4>
              <p className="text-white/60 leading-relaxed mb-6">
                We aren't a faceless corporation. We are a results-driven partner. We don't care about "fancy" for the sake of fancy—we care about More Calls, More Reviews, and Zero Tech Headaches.
              </p>
              <p className="text-cyan font-bold italic">
                When you partner with us, you’re getting more than a website. You’re getting a digital foundation built to win.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-obsidian text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl mb-6 leading-tight text-white">Is Your Business <br /><span className="text-gradient-cyan">Leaking Revenue?</span></h2>
            <p className="text-xl text-white/40 mb-8">Get a Free 5-Minute Local Growth Audit. We'll check your site speed and your "Map Pack" ranking for free.</p>
          </div>
          <div className="glass-card p-8 rounded-[40px] text-white shadow-2xl border border-white/10">
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Business Name</label>
                <input type="text" placeholder="e.g. Mike's Plumbing" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan outline-none transition-all font-bold text-white" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Email Address</label>
                <input type="email" placeholder="mike@plumbing.com" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan outline-none transition-all font-bold text-white" />
              </div>
              <button className="w-full py-5 rounded-xl bg-cyan text-obsidian font-black text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-cyan/20 flex items-center justify-center gap-2">
                Send My Free Audit <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-cyan selection:text-obsidian">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainPoint />
        <CopyPasteComparison />
        <Features />
        <PsychologySection />
        <LogicSection />
        <DominanceBlueprint />
        <Pricing />
        <FAQ />
        <SocialProof />
        <AboutWinStar />
        <FinalCTA />
      </main>
      <footer className="py-12 bg-obsidian border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Star4 className="text-obsidian w-4 h-4" />
            </div>
            <span className="text-xl font-display font-black tracking-tighter text-white">WIN STAR</span>
          </div>
          <p className="text-xs font-bold text-white/20 uppercase tracking-[0.4em]">© 2026 Win Star AI Agency</p>
        </div>
      </footer>
    </div>
  );
}
