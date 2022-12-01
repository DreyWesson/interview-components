import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ErrorBoundary from "./ErrorBoundary";

const queryClient = new QueryClient();
ReactDOM.render(
    <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </ErrorBoundary>,
    document.getElementById("root")
);
