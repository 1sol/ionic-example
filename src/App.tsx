import { Switch, Route } from "react-router-dom";
import {
  IonTabs,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  setupIonicReact,
  IonPage,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { triangle } from "ionicons/icons";
import { bottomTabConfigs } from "@navigations";
import shortid from "shortid";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import routeConfigs from "@routes/routeConfigs";

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
          {bottomTabConfigs.map(({ tab, path }): any => (
            <IonTabButton key={shortid.generate()} tab={tab} href={path}>
              <IonIcon icon={triangle} />
              <IonLabel>{tab}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonPage>
);

export default App;
