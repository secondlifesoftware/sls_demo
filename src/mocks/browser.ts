import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// This configures a Service Worker using MSW to intercept network requests
// and return mock responses for development.
export const worker = setupWorker(...handlers);

// Start the worker when the app starts
export const startMockServiceWorker = async () => {
  if (import.meta.env.DEV) {
    try {
      await worker.start({
        onUnhandledRequest: 'bypass', // Don't warn about unhandled requests
        serviceWorker: {
          url: '/mockServiceWorker.js',
        },
      });
      console.log('🔶 MSW worker started');
    } catch (error) {
      console.warn('MSW worker failed to start:', error);
    }
  }
}; 