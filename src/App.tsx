import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "reducers/store";

import AppRouter from "routes/AppRouter";
import Sidebar from "components/Sidebar/Sidebar.js";
import Layout from "components/Layout/Layout";
import Content from "containers/Content/Content";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Sidebar />
          <Content>
            <AppRouter />
          </Content>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
