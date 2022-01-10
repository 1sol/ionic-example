import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import shortid from "shortid";
import routeConfigs from "./routeConfigs";

interface PageRouterProps {
  match: any;
  location: any;
  history: any;
  authenticated: boolean;
}

class PageRouter extends Component<PageRouterProps | any> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            {routeConfigs.map(
              ({ component: Component, path, exact, title }: any) => (
                <Route
                  key={shortid.generate()}
                  path={path}
                  exact={exact}
                  render={(routeProps): any => {
                    document.title = title ? `${title} | AI2U` : "AI2U";

                    return <Component {...routeProps} />;
                  }}
                />
              )
            )}
          </Suspense>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default PageRouter;
