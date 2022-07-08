import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
function App() {
  // JSX code
  return (
    <div className="App">
      <h1>Parent Component Title</h1>
      {/* <Header title="props test code"/> */}
      <Header title="button title"></Header>
      <Tasks />
    </div>
  );
}

export default App;
