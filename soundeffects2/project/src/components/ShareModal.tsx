import React from 'react';
import { Facebook, Twitter, Link2, Mail, Linkedin } from 'lucide-react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { Sound } from '../types/sound';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  sound: Sound;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  sound,
}) => {
  const shareUrl = window.location.href;
  const shareText = `Check out this amazing sound effect: ${sound.name}`;

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-50 hover:text-blue-600',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-50 hover:text-blue-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-50 hover:text-[#0A66C2]',
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(`Check out this sound effect: ${sound.name}`)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
      color: 'hover:bg-blue-50 hover:text-blue-600',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Share Sound Effect"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-3">
          {shareLinks.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${platform.color}`}
            >
              <platform.icon className="w-5 h-5" />
              <span>{platform.name}</span>
            </a>
          ))}
        </div>
        
        <div className="pt-4 border-t">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 hover:bg-gray-50"
            onClick={copyToClipboard}
          >
            <Link2 className="w-4 h-4" />
            Copy Link
          </Button>
        </div>
      </div>
    </Modal>
  );
};