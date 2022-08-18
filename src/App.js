import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <>
        <div>content
          <div>title</div>
          <div>content</div>
        </div>
      </>
      <>
        <span to="/login">Login</span> |
        <span to="/post">Post</span> |
        <span to="/register">Register</span>
      </>
      <Footer />
    </div>
  );
}

export default App;
