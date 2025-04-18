// Header.jsx
import React from "react";
import styled from "styled-components";
import { uiStore } from "../store/uiStore";
import { observer } from "mobx-react-lite";
import { Menu } from "lucide-react";
import LogoImage from "../assets/logo.png";
import mapStore from "../store/MapStore";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 24px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: margin-left 0.3s ease-in-out;
  margin-left: ${(props) => (props.panelOpen ? "250px" : "0")};

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 12px 24px;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 24px;
`;

const Logo = styled.img`
  height: 60px;
  margin-left: 16px;

   @media (max-width: 768px) {
      height: 40px;

  }
`;

const InfoContainer = styled.div`
  margin-left: auto;        /* push to right */
  display: flex;
  gap: 1.5rem;
  align-items: center;
  color: #003366;           /* navy from your mock */

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    justify-content: flex-start;
    margin-top: 10px;
  }
`;

const InfoItem = styled.div`
  font-family: "Arial", sans-serif;
  font-size: 22px;
  white-space: nowrap;
   @media (max-width: 768px) {
      font-size: 16px;

  }
`;

const Header = observer(() => (
  <HeaderContainer panelOpen={uiStore.isPanelOpen}>
    <TopRow>
      <MenuButton onClick={uiStore.togglePanel}>
        <Menu size={28} />
      </MenuButton>
      <Logo src={LogoImage} alt="Wings for Life World Run" />
      <div style={{ width: "28px" }} />  {/* keep your placeholder here */}
    </TopRow>

    {mapStore.selectedName && mapStore.selectedLength != null && (
      <InfoContainer>
        <InfoItem><strong>{mapStore.selectedName}</strong></InfoItem>
        <InfoItem>{Math.round(mapStore.selectedLength)} m</InfoItem>
      </InfoContainer>
    )}
  </HeaderContainer>
));

export default Header;
