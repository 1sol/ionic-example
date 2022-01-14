import { IonText } from "@ionic/react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
`;

const FooterInner = styled.div`
  padding: 0 20px;

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const Logo = styled.div``;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <Logo>AI2U</Logo>
        <IonText color="primay">
          <p>(주) 에이아이투유</p>
        </IonText>
        <IonText color="primay">
          <p>사업자 등록 번호 : 125-86-33065</p>
        </IonText>
        <IonText color="primay">
          <p>서울특별시 성북구 고려대로 73 고려대학교 의과대학</p>
        </IonText>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
