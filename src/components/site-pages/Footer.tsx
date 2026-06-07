import Link from "next/link";
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-2xl tracking-wider">SINAN</span>
              <span className="text-white/60 text-xs tracking-widest">ADVANCED INDUSTRIES</span>
            </div>
            <p className="text-white/60 text-sm">
              Transforming industries through innovation for a safer and more efficient future
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link href="/sectors" className="text-white/60 hover:text-white text-sm transition-colors">
                Sectors
              </Link>
              <Link href="/projects" className="text-white/60 hover:text-white text-sm transition-colors">
                Projects
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Services</h3>
            <div className="flex flex-col gap-2">
              <p className="text-white/60 text-sm">Defense Systems</p>
              <p className="text-white/60 text-sm">Training & Services</p>
              <p className="text-white/60 text-sm">Communication Systems</p>
              <p className="text-white/60 text-sm">Advanced Electronics</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Mail size={16} />
                <span>info@sinan.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Phone size={16} />
                <span>+966 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={16} />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© 2024 Sinan Advanced Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
