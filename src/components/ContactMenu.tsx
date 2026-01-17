import { useState, useEffect, useRef } from 'react';

interface ContactMenuProps {
  email: string;
  variant: 'header' | 'sidebar';
}

export default function ContactMenu({ email, variant }: ContactMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLElement>(null);

  const isMobile = () => window.innerWidth < 768;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeDropdown = () => setIsOpen(false);

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMobile()) {
      try {
        await navigator.clipboard.writeText(email);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy email:', err);
        window.location.href = `mailto:${email}`;
      }
    } else {
      window.location.href = `mailto:${email}`;
    }
    closeDropdown();
  };

  const handleLinkedInClick = () => {
    closeDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const buttonClasses = variant === 'header'
    ? "header-contact-btn relative group btn btn-ghost btn-square"
    : "sidebar-contact-btn px-4 py-3 text-base w-full text-left hover:bg-base-300 transition-colors";

  const dropdownClasses = variant === 'header'
    ? "header-contact-dropdown hidden absolute top-full right-0 mt-2 bg-base-200 rounded-lg shadow-lg overflow-hidden min-w-max z-50"
    : "sidebar-contact-dropdown hidden absolute top-full mt-2 left-0 bg-base-200 rounded-lg shadow-lg overflow-hidden min-w-max z-[60]";

  return (
    <div className={`contact-menu relative ${variant === 'header' ? 'header-contact-menu' : 'sidebar-contact-menu'}`} ref={wrapperRef}>
      {variant === 'header' ? (
        <button
          ref={buttonRef as any}
          className={buttonClasses}
          onClick={toggleDropdown}
          title="Contact"
          aria-label="Contact menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <>
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Get in touch
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: 'currentColor' }}
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
            </svg>
          </>
        </button>
      ) : (
        <a
          ref={buttonRef as any}
          href="#"
          id="contact"
          data-menu-trigger="contact"
          className={`${buttonClasses} block cursor-pointer`}
          onClick={(e) => { e.preventDefault(); toggleDropdown(); }}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
              e.preventDefault();
              toggleDropdown();
            }
          }}
          title="Contact"
          aria-label="Contact menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
          role="menuitem"
        >
          Contact
        </a>
      )} 

      {/* Dropdown menu */}
      <div className={`${dropdownClasses} ${isOpen ? 'block' : 'hidden'}`} role="menu" aria-label="Contact options">
        {/* Email option */}
        <div className="border-b border-base-300 last:border-b-0">
          <button
            className="contact-email-btn w-full px-4 py-3 hover:bg-base-300 transition-colors text-left flex items-center gap-3"
            onClick={handleEmailClick}
            title="Email"
          >
            {showCopied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                style={{ fill: 'currentColor' }}
              >
                <path d="M10 15.586L6.707 12.293c-.391-.391-1.023-.391-1.414 0-.391.391-.391 1.023 0 1.414l4 4c.391.391 1.023.391 1.414 0l10-10c.391-.391.391-1.023 0-1.414-.391-.391-1.023-.391-1.414 0L10 15.586z"/>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                style={{ fill: 'currentColor' }}
              >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
              </svg>
            )}
            <div className="flex flex-col">
              <span className="text-sm font-medium email-text">{showCopied ? 'Copied!' : 'Email'}</span>
              <span className="text-xs text-gray-500">{email}</span>
            </div>
          </button>
        </div>

        {/* LinkedIn option */}
        <a
          href="https://www.linkedin.com/in/mike-ballin/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-linkedin-btn w-full px-4 py-3 hover:bg-base-300 transition-colors text-left flex items-center gap-3 block"
          onClick={handleLinkedInClick}
          title="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            style={{ fill: 'currentColor' }}
          >
            <circle cx="4.983" cy="5.009" r="2.188"></circle>
            <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
          </svg>
          <div className="flex flex-col">
            <span className="text-sm font-medium">LinkedIn</span>
            <span className="text-xs text-gray-500">View Profile</span>
          </div>
        </a>
      </div>
    </div>
  );
}