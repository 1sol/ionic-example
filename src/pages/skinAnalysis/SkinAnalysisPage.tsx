import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import styled from "styled-components";
import UploadPage from "./upload/UploadPage";

const SkinAnalysisContainer = styled.div`
  position: relative;
  height: 100%;
`;

const SkinAnalysisPage: React.FC = () => {
  return (
    <SkinAnalysisContainer>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">skin analysis</IonTitle>
          </IonToolbar>
        </IonHeader>

        <UploadPage />
      </IonContent>
    </SkinAnalysisContainer>
  );
};

export default SkinAnalysisPage;
