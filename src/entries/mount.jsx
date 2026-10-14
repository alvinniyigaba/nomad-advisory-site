import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/global.css';

export default function mount(Page) {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Page />
    </StrictMode>,
  );
}
