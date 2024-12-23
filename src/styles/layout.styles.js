import styled from 'styled-components';

export const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #fafafa;
`;

export const Sidebar = styled.div`
  display: none;
  width: 244px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  border-right: 1px solid #dbdbdb;
  background-color: white;
  padding: 8px 12px 20px;

  @media (min-width: 1264px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  
  @media (min-width: 1264px) {
    padding-left: 244px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 12px;
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #262626;
  text-decoration: none;
  padding: 12px;
  border-radius: 8px;
  transition: background-color 0.2s;
  font-size: 16px;

  span {
    display: none;
    
    @media (min-width: 1264px) {
      display: inline;
    }
  }

  &:hover {
    background-color: #fafafa;
  }
`;

export const MobileNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

// ... 다른 레이아웃 관련 스타일들 