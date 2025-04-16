import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1>AI App Builder</h1>
      </header>
      <main>{children}</main>
      <footer style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} AI App Builder</p>
      </footer>
    </div>
  );
}