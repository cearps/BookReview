import "./assets/App.css";

function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <h1>Book List</h1>
      {children}
    </div>
  );
}

export default App;
