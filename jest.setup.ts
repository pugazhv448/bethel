import '@testing-library/jest-dom';

// Mock IntersectionObserver for jsdom environment
class IntersectionObserver {
  constructor(_callback: any, _options?: any) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = IntersectionObserver as any;
