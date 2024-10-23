import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/Layout";

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Layout>
        <h1>App</h1>
      </Layout>
    </ErrorBoundary>
  );
};

export default App;
