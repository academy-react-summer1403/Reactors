
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fontiran.css";
import { Provider } from "react-redux";
import { store } from "./Redux/rootStore";
import { RouterProvider } from "react-router-dom";
import { router } from "./configs/router";
import { QueryClient, QueryClientProvider } from "react-query";


const client = new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={client}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </QueryClientProvider>
  </StrictMode>
);
