import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { PersistGate } from 'redux-persist/integration/react';

import ThemeContextProvider from 'components/MainLayout/ThemeToggler/ThemeContextProvider';
import { store, persistor } from 'store/store';

import './utils/internationalization/i18next';

import App from './components/App.jsx';
import './index.css';

console.log(persistor);
console.log('store: ', store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/mern-goose-track">
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
