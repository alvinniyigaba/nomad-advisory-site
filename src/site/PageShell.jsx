import { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { scrollToSection } from './layout';

/** Header, page content and footer. Also honours a #section in the address on load. */
export default function PageShell({ current, onGetApp, note, children }) {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) requestAnimationFrame(() => scrollToSection(id, false));
  }, []);

  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: 'var(--bone)', color: 'var(--text-body)', minHeight: '100vh' }}>
      <Header current={current} onGetApp={onGetApp} />
      <main>{children}</main>
      <Footer current={current} note={note} />
    </div>
  );
}
