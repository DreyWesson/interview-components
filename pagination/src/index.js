import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./StateProvider";
import { initialState, reducer } from "./reducer";

const queryClient = new QueryClient();
ReactDOM.render(
    <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <StateProvider initialState={initialState} reducer={reducer}>
                    <App />
                </StateProvider>
            </BrowserRouter>
            <ReactQueryDevtools />
        </QueryClientProvider>
    </ErrorBoundary>,
    document.getElementById("root")
);
