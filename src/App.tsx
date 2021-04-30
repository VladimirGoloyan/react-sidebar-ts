import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "reducers/store";

import AppRouter from "routes/AppRouter";
import Sidebar from "components/Sidebar/Sidebar";
import Layout from "components/Layout/Layout";
import MainContent from "components/MainContent/MainContent";

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Sidebar />
        <MainContent>
          <AppRouter />
        </MainContent>
      </Layout>
    </BrowserRouter>
  </Provider>
  );
};

export default App;
