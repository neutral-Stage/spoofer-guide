
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SidebarMenu from './SidebarMenu';

// Type definitions for menu items
export interface MenuItem {
  title: string;
  path: string;
}

export interface ParentMenuItem extends MenuItem {
  children: MenuItem[];
}

// Move menu items outside the component to prevent re-creation on each render
export const MENU_ITEMS: ParentMenuItem[] = [
  {
    title: ' 1# Windows Steps',
    path: '/1-windows-steps',
    children: [
      { title: ' [+] Windows Reinstall', path: '/1-windows-steps/windows-reinstall' },
      { title: ' [1] Windows Setup', path: '/1-windows-steps/windows-setup' },
    ]
  },
  {
    title: '2# Setup',
    path: '/2-setup',
    children: [
      { title: '[1] Disable Windows Defender', path: '/2-setup/disable-windows-defender' },
      { title: '[2] Disable Windows Updates', path: '/2-setup/disable-windows-updates' },
      { title: '[3] Bios Setup', path: '/2-setup/bios-setup' },
      { title: '[4] Download Loader', path: '/2-setup/download-loader' }
    ]
  },
  {
    title: '3# Spoof',
    path: '/3-spoof',
    children: [
      { title: '[1] Spoof HWID', path: '/3-spoof/spoof-hwid' },
      { title: '[2] Device Setup 2', path: '/3-spoof/device-setup-required' },
      { title: '[3] After Spoofing', path: '/3-spoof/after-spoofing' },
    ]
  },
  {
    title: 'Fixes',
    path: '/fixes',
    children: [
      { title: '[-] MAC Not Changing', path: '/fixes/mac-not-changing' },
      { title: '[-] Getting Kicked From Fortnite', path: '/fixes/getting-kicked-from-fortnite' },
      { title: '[-] Secure Boot Violation (EFI)', path: '/fixes/secure-boot-violation-efi' },
      { title: '[-] RAID0', path: '/fixes/raid0' }
    ]
  }
];

const Sidebar: React.FC = ( ) => {

  return (
    <div className="side-nav">
      {MENU_ITEMS.map((parent) => (
        <SidebarMenu key={parent.path} parent={parent}  />
      ))}
      <div className="contacts">
         <div className="contacts-title">Contact Us:</div>
         <div className="contacts-buttons">
           <button>
             <Link href="https://discord.com" target="_blank">
               <Image src="/discord.png" alt="Discord" width={40} height={40} />
             </Link>
           </button>
           <button>
             <Link href="https://telegram.org" target="_blank">
               <Image src="/telegram.png" alt="Discord" width={40} height={40} />
             </Link>
           </button>
         </div>
       </div>
    </div>
  );
};

export default Sidebar;
