import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotificationContext from "./context/NotificationContext";
import { useState } from "react";

import Layout from "./Layout";
import Home from "./pages/Home";
import Bestillinger from "./pages/Bestillinger";
import TokenContext from "./context/TokenContext";
import ActionContext from "./context/ActionContext";
import Kunder from "./pages/Kunder";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [token, setToken] = useState(null);

  const [openSearch, setOpenSearch] = useState(false);
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [openRemoveProduct, setOpenRemoveProduct] = useState(false);
  const [openEditProduct, setOpenEditProduct] = useState(false);

  const quickActions = {
    search: {
      openSearch: openSearch,
      setOpenSearch: setOpenSearch,
    },
    addProduct: {
      openAddProduct: openAddProduct,
      setOpenAddProduct: setOpenAddProduct,
    },
    removeProduct: {
      openRemoveProduct: openRemoveProduct,
      setOpenRemoveProduct: setOpenRemoveProduct,
    },
    editProduct: {
      openEditProduct: openEditProduct,
      setOpenEditProduct: setOpenEditProduct,
    },
  };

  return (
    <ActionContext.Provider value={{ quickActions }}>
      <NotificationContext.Provider value={{ notifications, setNotifications }}>
        <TokenContext.Provider value={{ token, setToken }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/bestillinger" element={<Bestillinger />} />
                <Route path="/bestillinger/:id" element={<Bestillinger />} />
                <Route path="/kunder" element={<Kunder />} />
                <Route path="/kunder/:id" element={<Kunder />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TokenContext.Provider>
      </NotificationContext.Provider>
    </ActionContext.Provider>
  );
}

export default App;
