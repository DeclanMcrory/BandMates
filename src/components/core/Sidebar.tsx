import React from 'react';
import { X, Home, Users, Music, Video, Settings } from 'lucide-react';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: Users, label: 'Characters' },
    { icon: Music, label: 'Music' },
    { icon: Video, label: 'Videos' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out z-50`}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors float-right"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="mt-8 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}