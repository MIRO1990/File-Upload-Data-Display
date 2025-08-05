import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { DisplayAssets, UploadCompanyAssetsPage } from './pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/uploadAssets" element={<UploadCompanyAssetsPage />} />
        <Route path="/displayAssets" element={<DisplayAssets />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
