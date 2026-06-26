import '@testing-library/jest-dom';

// Mock IntersectionObserver for jsdom environment
class IntersectionObserver {
  constructor(callback, options) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = IntersectionObserver;
