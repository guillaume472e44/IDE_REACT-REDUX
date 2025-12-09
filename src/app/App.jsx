import Header from "../common/components/Header";
import CodeEditor from "../common/CodeEditor";
import "./App.css";

function App() {
  return (
    <div className="global-container">
      <Header />
      <div className="global-displayer">
        <CodeEditor />
      </div>
    </div>
  );
}

export default App;
