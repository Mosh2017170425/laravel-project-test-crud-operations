import './bootstrap';
import '../sass/app.scss'
import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));
    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
