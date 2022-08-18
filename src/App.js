import Header from './components/Header'

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
    </div>
  );
}

export default App;
