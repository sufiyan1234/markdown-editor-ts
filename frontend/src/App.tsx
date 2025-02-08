import React from "react";
import MarkdownEditor from "./components/MarkdownEditor";
import ErrorBoundary from "./components/ErrorBoundary";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Real-time Markdown Editor</h1>
      <ErrorBoundary>
        <MarkdownEditor />
      </ErrorBoundary>
    </div>
  );
};

export default App;
