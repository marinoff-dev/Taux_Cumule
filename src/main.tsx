import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,
} from "react-router-dom";
import { router } from './routes';
import './index.css'
import { Provider } from '@radix-ui/react-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App />*/}
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
