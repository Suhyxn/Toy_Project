
function App() {
  return (
    <div>
      <>
      <select>
        <option>1</option>
        <option>2</option>
      </select>
      <select>
        <option>3</option>
        <option>4</option>
      </select>
      </>
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
