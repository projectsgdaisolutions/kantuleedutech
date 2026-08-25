import { Phone, MessageCircle } from "lucide-react";

function TopBar() {
  return (
    <div className="relative z-50 w-full overflow-hidden border-b border-white/5 bg-[#040814] text-white">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-20 top-0 h-full w-1/3 bg-gradient-to-r from-cyan-500/10 to-transparent blur-2xl"></div>
        <div className="absolute -right-20 top-0 h-full w-1/3 bg-gradient-to-l from-blue-500/10 to-transparent blur-2xl"></div>
      </div>

      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        
        {/* Left: Brand Status (Mobile-first approach) */}
        <div className="flex items-center gap-2.5">
          {/* Pulsing Live Dot */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
          </span>
          
          <span className="text-[11px] font-medium tracking-wide text-white/80 sm:text-[12.5px]">
            {/* Short text for mobile, full text for desktop */}
            <span className="sm:hidden">Trusted Medical Career Guidance</span>
            <span className="hidden sm:inline">Your Trusted Partner for Medical Education & Career Guidance</span>
          </span>
        </div>

        {/* Right: Contact Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Primary Phone (Visible on all screens as icon, text on larger) */}
          <a
            href="tel:+918830451660"
            className="group flex items-center gap-2 rounded-full py-1 pl-1 pr-2 sm:pr-3 transition-all hover:bg-white/5"
            aria-label="Call us at 8830451660"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 ring-1 ring-inset ring-cyan-500/20 transition-all group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
              <Phone size={13} strokeWidth={2.5} />
            </span>
            <span className="hidden text-[12.5px] font-medium text-white/90 transition-colors group-hover:text-cyan-300 md:inline">
              8830451660
            </span>
          </a>

          {/* Secondary Phone (Hidden on mobile) */}
          <a
            href="tel:+918237794917"
            className="group hidden items-center gap-2 rounded-full py-1 pl-1 pr-3 transition-all hover:bg-white/5 md:flex"
            aria-label="Call us at 8237794917"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 ring-1 ring-inset ring-cyan-500/20 transition-all group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
              <Phone size={13} strokeWidth={2.5} />
            </span>
            <span className="text-[12.5px] font-medium text-white/90 transition-colors group-hover:text-cyan-300">
              8237794917
            </span>
          </a>

          {/* Vertical Divider (Hidden on mobile) */}
          <span className="hidden h-6 w-px bg-white/10 md:block"></span>

          {/* WhatsApp Button (Icon on mobile, Pill on desktop) */}
          <a
            href="https://wa.me/918830451660"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 py-1 pl-1 pr-3 shadow-[0_0_15px_-3px_rgba(16,185,129,0.5)] transition-all hover:shadow-[0_0_20px_-2px_rgba(16,185,129,0.8)] hover:from-emerald-400 hover:to-green-500"
            aria-label="Chat with us on WhatsApp"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 backdrop-blur-sm">
              <MessageCircle size={14} strokeWidth={2.5} className="text-white" />
            </span>
            <span className="text-[12.5px] font-semibold text-white">
              WhatsApp Us
            </span>
          </a>

        </div>
      </div>

      {/* Premium gradient accent line */}
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </div>
  );
}

export default TopBar;