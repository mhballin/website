export interface ContactMenuOptions {
  email: string;
}

// Track manager instances to prevent duplicates and enable cleanup
const instanceMap = new WeakMap<HTMLElement, ContactMenuManager>();

export class ContactMenuManager {
  private wrapper: HTMLElement;
  private button: HTMLButtonElement;
  private dropdown: HTMLElement;
  private emailBtn: HTMLButtonElement;
  private emailDisplay: HTMLElement;
  private linkedInLink: HTMLAnchorElement | null = null;
  private email: string;
  private isOpen = false;
  private clickOutsideHandler: ((event: MouseEvent) => void) | null = null;
  private keyboardHandler: ((event: KeyboardEvent) => void) | null = null;

  // Store bound method references for cleanup
  private boundHandleToggle: (event: MouseEvent) => void;
  private boundHandleEmailClick: (event: MouseEvent) => Promise<void>;
  private boundHandleLinkedInClick: () => void;

  constructor(wrapper: HTMLElement, options: ContactMenuOptions) {
    this.wrapper = wrapper;
    this.email = options.email;

    const button = wrapper.querySelector<HTMLButtonElement>('.sidebar-contact-btn');
    const dropdown = wrapper.querySelector<HTMLElement>('.sidebar-contact-dropdown');
    const emailBtn = wrapper.querySelector<HTMLButtonElement>('.sidebar-contact-email-btn');
    const emailDisplay = wrapper.querySelector<HTMLElement>('[data-email-display]');

    if (!button || !dropdown || !emailBtn || !emailDisplay) {
      throw new Error('Required contact menu elements not found');
    }

    this.button = button;
    this.dropdown = dropdown;
    this.emailBtn = emailBtn;
    this.emailDisplay = emailDisplay;
    this.linkedInLink = wrapper.querySelector<HTMLAnchorElement>('.sidebar-contact-linkedin-btn');

    // Create bound references for cleanup
    this.boundHandleToggle = this.handleToggle.bind(this);
    this.boundHandleEmailClick = this.handleEmailClick.bind(this);
    this.boundHandleLinkedInClick = this.close.bind(this);

    this.init();
  }

  static getInstance(wrapper: HTMLElement, options: ContactMenuOptions): ContactMenuManager {
    // Check if instance exists and destroy it first
    const existingInstance = instanceMap.get(wrapper);
    if (existingInstance) {
      existingInstance.destroy();
    }

    // Create new instance and track it
    const instance = new ContactMenuManager(wrapper, options);
    instanceMap.set(wrapper, instance);
    return instance;
  }

  private init(): void {
    // Set email display
    this.emailDisplay.textContent = this.email;

    // Set ARIA attributes
    this.button.setAttribute('aria-expanded', 'false');
    this.button.setAttribute('aria-haspopup', 'true');
    this.dropdown.setAttribute('role', 'menu');
    this.dropdown.setAttribute('aria-label', 'Contact options');

    // Attach event listeners using bound references
    this.button.addEventListener('click', this.boundHandleToggle);
    this.emailBtn.addEventListener('click', this.boundHandleEmailClick);

    // Handle LinkedIn link
    if (this.linkedInLink) {
      this.linkedInLink.addEventListener('click', this.boundHandleLinkedInClick);
    }
  }

  private handleToggle(event: MouseEvent): void {
    event.stopPropagation();
    this.isOpen ? this.close() : this.open();
  }

  private open(): void {
    this.isOpen = true;
    this.dropdown.classList.remove('hidden');
    this.button.setAttribute('aria-expanded', 'true');

    // Add click outside handler
    this.clickOutsideHandler = (event: MouseEvent) => {
      if (!this.wrapper.contains(event.target as Node)) {
        this.close();
      }
    };
    // Use setTimeout to avoid immediate close from the same click
    setTimeout(() => {
      document.addEventListener('click', this.clickOutsideHandler!);
    }, 0);

    // Add keyboard handler
    this.keyboardHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.close();
        this.button.focus();
      }
    };
    document.addEventListener('keydown', this.keyboardHandler);
  }

  private close(): void {
    this.isOpen = false;
    this.dropdown.classList.add('hidden');
    this.button.setAttribute('aria-expanded', 'false');

    // Remove event listeners
    if (this.clickOutsideHandler) {
      document.removeEventListener('click', this.clickOutsideHandler);
      this.clickOutsideHandler = null;
    }
    if (this.keyboardHandler) {
      document.removeEventListener('keydown', this.keyboardHandler);
      this.keyboardHandler = null;
    }
  }

  private async handleEmailClick(event: MouseEvent): Promise<void> {
    event.preventDefault();

    // Check if clipboard API is available
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(this.email);
        this.showCopySuccess();
      } catch (err) {
        console.error('Failed to copy email:', err);
        // Fallback to mailto
        this.openMailto();
      }
    } else {
      // Fallback for non-secure contexts
      this.openMailto();
    }

    this.close();
  }

  private showCopySuccess(): void {
    const originalHTML = this.emailBtn.innerHTML;
    this.emailBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: currentColor;">
        <path d="M10 15.586L6.707 12.293c-.391-.391-1.023-.391-1.414 0-.391.391-.391 1.023 0 1.414l4 4c.391.391 1.023.391 1.414 0l10-10c.391-.391.391-1.023 0-1.414-.391-.391-1.023-.391-1.414 0L10 15.586z"/>
      </svg>
      <div class="flex flex-col">
        <span class="text-sm font-medium">Copied!</span>
        <span class="text-xs text-gray-500">${this.email}</span>
      </div>
    `;

    setTimeout(() => {
      this.emailBtn.innerHTML = originalHTML;
    }, 2000);
  }

  private openMailto(): void {
    window.location.href = `mailto:${this.email}`;
  }

  public destroy(): void {
    this.close();
    
    // Remove all event listeners using bound references
    this.button.removeEventListener('click', this.boundHandleToggle);
    this.emailBtn.removeEventListener('click', this.boundHandleEmailClick);
    
    if (this.linkedInLink) {
      this.linkedInLink.removeEventListener('click', this.boundHandleLinkedInClick);
    }
    
    // Remove from instance map
    instanceMap.delete(this.wrapper);
  }
}
