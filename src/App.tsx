import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/Layout";
import { Main } from "./pages/Main";

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Layout>
        <Main />
      </Layout>
    </ErrorBoundary>
  );
};

export default App;
