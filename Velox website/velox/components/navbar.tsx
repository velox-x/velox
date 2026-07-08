import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, Star, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 md:px-36 lg:px-64 py-4">
        <Link href="/" className="text-white text-xl font-semibold flex items-center gap-2">
          <img src="/logo.png" alt="Velox Logo" width={32} height={32} />
          Velox
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-sm items-center space-x-6 text-neutral-500">
          <Link
            href="#features"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Features
          </Link>
          <Link
            href="#dex"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            DEX
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Docs
          </Link>
          <Link
            href="#soon"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Coming Soon
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href='#features'>
          <Button className="hidden md:flex text-white bg-white/5 border hover:bg-white/10">
            Get Features
          </Button>
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border">
          <div className="flex flex-col px-4 md:px-8 lg:px-32 py-4 space-y-4">
            <Link
              href="#"
              className="text-neutral-500 hover:text-gray-300 transition duration-300 ease-in-out py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="#features"
              className="text-neutral-500 hover:text-gray-300 transition duration-300 ease-in-out py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-neutral-500 hover:text-gray-300 transition duration-300 ease-in-out py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="#faq"
              className="text-neutral-500 hover:text-gray-300 transition duration-300 ease-in-out py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button
              className="text-white bg-white/5 border hover:bg-white/10 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Bookmark
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
