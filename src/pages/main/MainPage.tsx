import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import Footer from "@container";
import styled from "styled-components";

const Main = styled(IonPage)`
  .contents {
    padding: 0 20px;
  }
`;

const MainAnalysisResult = styled.div``;

const Title = styled.h6``;

const MainAnalysisAlarm = styled.div``;
const AlarmText = styled.div`
  p {
    font-size: 14px;
  }
`;

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
          <MainAnalysisResult>
            <Title>분석 결과</Title>
            <MainAnalysisAlarm>
              <AlarmText>
                <p>내 피부 분석을 하면 분석 결과를 볼 수 있습니다.</p>
              </AlarmText>
            </MainAnalysisAlarm>
          </MainAnalysisResult>
          ;
          <MainAnalysisButton>
            <button>내 피부 분석</button>
            <button>내 피부 변화</button>
          </MainAnalysisButton>
        </div>
        <Footer />
      </IonContent>
    </Main>
  );
};

export default MainPage;
