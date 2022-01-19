import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../../components/container";

const Main = styled(IonPage)``;

const MainAnalysisButton = styled.div``;

const MainPage: React.FC = () => {
  return (
    <Main>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LOGO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="contents">
          <MainAnalysisButton>
            <Link to="/skin/analysis">내 피부 분석</Link>
            <Link to="/skin/change">내 피부 변화</Link>
          </MainAnalysisButton>
        </div>
        <Footer />
      </IonContent>
    </Main>
  );
};

export default MainPage;
