import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,
} from "react-router-dom";
import { router } from './routes';
import './index.css'
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App />*/}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
