import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseMemoExample from './UseMemoExample';
import UseRefExample from './UseRefExample';
import UseContextExample from './UseContextExample';
import UseReducerExample from './UseReducerExample';
import UseCallbackExample from './UseCallbackExample';
import CustomHookExample from './CustomHookExample';
import UseLayoutEffectExample from './UseLayoutEffectExample';
import UseTransitionExample from './UseTransitionExample';
import UseDeferredValueExample from './UseDeferredValueExample';
import UseImperativeHandleExample from './UseImperativeHandleExample';
import UseDebugValueExample from './UseDebugValueExample';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/use-state-example', element: <UseStateExample /> },
    { path: '/use-effect-example', element: <UseEffectExample /> },
    { path: '/use-memo-example', element: <UseMemoExample /> },
    { path: '/use-ref-example', element: <UseRefExample /> },
    { path: '/use-context-example', element: <UseContextExample /> },
    { path: '/use-reducer-example', element: <UseReducerExample /> },
    { path: '/use-callback-example', element: <UseCallbackExample />},
    { path: '/custom-hook-example', element: <CustomHookExample />},
    { path: '/use-layout-effect-example', element: <UseLayoutEffectExample />},
    { path: '/use-transition-example', element: <UseTransitionExample />},
    { path: '/use-deferred-value-example', element: <UseDeferredValueExample />},
    { path: '/use-imperative-handle-example', element: <UseImperativeHandleExample />},
    { path: '/use-debug-value-example', element: <UseDebugValueExample />},
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
