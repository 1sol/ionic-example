import { Redirect, Route } from "react-router-dom";
import {
  IonTabs,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import { BottomTabConfigs } from "@navigations";
import shortid from "shortid";

setupIonicReact();

const BottomTab = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {BottomTabConfigs.map(({ exact, path }): any => (
            <Route key={shortid.generate()} exact={exact} path={path} />
          ))}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default BottomTab;
