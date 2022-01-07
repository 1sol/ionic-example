import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class PageRouter extends Component<any> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route />
          </Suspense>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default PageRouter;
