import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../app-routes/app-routes.tsx';
import '../../styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className='container'>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </div>
    </React.StrictMode>,
);
