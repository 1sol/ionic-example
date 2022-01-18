import React from "react";
import { IonLoading } from "@ionic/react";
import styled from "styled-components";
import "./ProgressBar.scss";

const ProgressBarContainer = styled.div``;

const ProgressBar: React.FC = () => {
  return (
    <ProgressBarContainer>
      <IonLoading
        isOpen={true}
        onDidDismiss={() => false}
        cssClass="analysis-loading"
      />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
