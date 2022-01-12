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
const Company = styled.p``;
const CompanyNum = styled.p``;
const Address = styled.p``;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <Logo>AI2U</Logo>
        <Company>(주) 에이아이투유</Company>
        <CompanyNum>사업자 등록 번호 : 125-86-33065</CompanyNum>
        <Address>서울특별시 성북구 고려대로 73 고려대학교 의과대학</Address>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
