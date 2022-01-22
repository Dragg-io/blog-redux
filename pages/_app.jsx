import '../app/styles/vendors/_normalize.scss';
import { Provider } from 'react-redux';
import store from '../app/store/configureStore';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
