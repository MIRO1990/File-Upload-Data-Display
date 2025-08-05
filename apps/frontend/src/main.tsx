import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { DisplayAssets, UploadCompanyAssetsPage } from './pages';
import { CompaniesProvider } from './dataCache/CompaniesProvider';
import { AssetProvider } from './dataCache/AssetsProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CompaniesProvider>
      <AssetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/uploadAssets" element={<UploadCompanyAssetsPage />} />
            <Route path="/displayAssets" element={<DisplayAssets />} />
          </Routes>
        </BrowserRouter>
      </AssetProvider>
    </CompaniesProvider>
  </React.StrictMode>,
);
