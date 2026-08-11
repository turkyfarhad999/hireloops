'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Manrope } from 'next/font/google';
import { useSession } from '@/lib/auth-client';
import { 
  LayoutHeader, 
  House, 
  Briefcase, 
   
  Gear 
} from '@gravity-ui/icons';

// Manrope Font Setup
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutHeader },
  { name: 'My Company', href: '/dashboard/company', icon: House },
  { name: 'Manage Jobs', href: '/dashboard/jobs', icon: Briefcase },
  { name: 'Applications', href: '/dashboard/applications', icon: Briefcase },
  { name: 'Settings', href: '/dashboard/settings', icon: Gear },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { data: session, isPending } = useSession();

  // Session data fallback
  const username = session?.user?.name || 'Alex Sterling';
  const role = session?.user?.role || 'Recruiter';

  return (
    <aside 
      className={`${manrope.className} w-64 h-screen bg-[#111113] border-r border-[#1e1e24] px-5 py-7 flex flex-col justify-between select-none font-sans`}
    >
      <div>
        {/* Brand Logo */}
        <div className="mb-8 px-2">
          <Link href="/" className="text-[26px] font-extrabold tracking-tight text-white block">
            HireLoop
          </Link>
        </div>

        {/* User Info (Session Data - No Image) */}
        <div className="mb-8 px-2">
          {isPending ? (
            <div className="space-y-2 animate-pulse">
              <div className="h-4 bg-[#23232a] rounded w-28" />
              <div className="h-3 bg-[#1a1a20] rounded w-16" />
            </div>
          ) : (
            <>
              <h4 className="text-[15px] font-bold text-white leading-tight">
                {username}
              </h4>
              <p className="text-[12px] text-[#8e8e98] mt-0.5 capitalize font-medium">
                {role}
              </p>
            </>
          )}

          {/* Premium Account Badge */}
          <div className="mt-2.5 inline-block bg-[#1f2026] border border-[#2b2c36] rounded-md px-2.5 py-1">
            <span className="text-[9px] font-bold tracking-wider text-[#d0d0d8] uppercase block">
              PREMIUM ACCOUNT
            </span>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (pathname === '/' && item.href === '/dashboard');

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-md text-[13px] font-semibold transition-all ${
                  isActive
                    ? 'bg-[#28282e] text-white shadow-sm'
                    : 'text-[#8e8e98] hover:text-gray-200 hover:bg-[#1a1a20]'
                }`}
              >
                <Icon className={`w-[18px] h-[18px] ${isActive ? 'text-white' : 'text-[#8e8e98]'}`} />
                <span className="tracking-wide">{item.name}</span>

                {/* Right Edge Active Indicator Bar */}
                {isActive && (
                  <span className="absolute right-0 top-0 bottom-0 w-[3px] bg-white rounded-l-sm" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;