import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./component/AppRoutes";
import ErrorBoundary from "./component/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppRoutes />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
