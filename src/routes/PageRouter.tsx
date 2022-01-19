import { Switch, Route } from "react-router-dom";
import {
  IonTabs,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  setupIonicReact,
  IonPage,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { navigationConfigs } from "@configs";
import shortid from "shortid";
import routeConfigs from "./routeConfigs";

setupIonicReact();

const App: React.FC = () => (
  <IonPage>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            {routeConfigs.map(({ component: Component, path, title }: any) => (
              <Route
                key={shortid.generate()}
                path={path}
                exact
                render={(routeProps): any => {
                  document.title = title ? `${title} | AI2U` : "AI2U";
                  return <Component {...routeProps} />;
                }}
              />
            ))}
          </Switch>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {navigationConfigs.map(({ tab, path }): any => (
            <IonTabButton key={shortid.generate()} tab={tab} href={path}>
              {/* <IonIcon /> */}
              <IonLabel>{tab}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonPage>
);

export default App;
