import { Provider } from 'react-redux'
import store from './modules'
import Header from './containers/HeaderContainer'
import Footer from './components/Footer/Footer'
import ContentSquare from './components/ContentSquare/ContentSquare';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ContentSquare />
      <Footer />
    </Provider>
  );
}

export default App;
