import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeContext, ThemeProvider } from '../ThemeContext';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Test component to access theme context
const ThemeTestComponent = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div>
          <span data-testid="theme">{context?.theme}</span>
          <button onClick={context?.toggleTheme}>Toggle Theme</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorageMock.clear.mockClear();
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

  it('should provide default theme as light', () => {
    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('should toggle theme from light to dark', async () => {
    const user = userEvent.setup();
    
    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>
    );

    await user.click(screen.getByText('Toggle Theme'));
    
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  it('should toggle theme back from dark to light', async () => {
    const user = userEvent.setup();
    
    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>
    );

    await user.click(screen.getByText('Toggle Theme'));
    await user.click(screen.getByText('Toggle Theme'));
    
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('should save theme to localStorage when toggled', async () => {
    const user = userEvent.setup();
    
    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>
    );

    await user.click(screen.getByText('Toggle Theme'));
    
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
    });
  });

  it('should load saved theme from localStorage on mount', () => {
    localStorageMock.getItem.mockReturnValue('dark');
    
    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });
});
