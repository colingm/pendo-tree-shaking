import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { initialize } from '@pendo/agent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

initialize( window.VIP_PENDO_MU_PLUGINS_INIT_DATA );
