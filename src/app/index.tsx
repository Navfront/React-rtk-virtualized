import { FC, ReactElement } from "react";

import "@shared/styles/globals.scss";
import { ErrorBoundary } from "@shared/ui/error-boundary";
import { Router } from "@src/pages";
import "./styles/index.scss";

const App: FC = (): ReactElement => {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
};

export { App };
