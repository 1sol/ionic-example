import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import styled from "styled-components";

const ResultPageContainer = styled(IonPage)``;

const ResultPage = () => {
  return (
    <ResultPageContainer>
      <IonHeader>
        <IonToolbar>
          <IonTitle>분석 결과</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="contents">
          <h4>홍길동님의 분석 결과입니다.</h4>
          <p>1.</p>
        </div>
      </IonContent>
    </ResultPageContainer>
  );
};

export default ResultPage;
