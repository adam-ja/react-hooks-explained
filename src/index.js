import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseMemoExample from './UseMemoExample';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/use-state-example', element: <UseStateExample /> },
    { path: '/use-effect-example', element: <UseEffectExample /> },
    { path: '/use-memo-example', element: <UseMemoExample /> },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
