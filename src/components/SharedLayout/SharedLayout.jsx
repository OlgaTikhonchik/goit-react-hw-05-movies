import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  ContainerLayout,
  Header,
  Nav,
  NavLinkStyled,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <ContainerLayout>
      <Header>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </ContainerLayout>
  );
};

export default SharedLayout;
