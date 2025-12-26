import Header from "../common/components/Header";
import CodeEditor from "../common/CodeEditor";
import CodeDisplayer from "../common/CodeDisplayer";
import Library from "../common/Library";
import "./App.css";

function App() {
  return (
    <>
      <Library />
      <div className="global-editor-container">
        <Header />
        <div className="global-displayer">
          <CodeEditor />
          <CodeDisplayer />
        </div>
      </div>
    </>
  );
}

export default App;
