/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
      >
      <Content>
        <ButtonWrapper>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" strokeWidth={1} />
          </UnstyledButton>
        </ButtonWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  background: var(--color-backdrop);
`;

const Content = styled(DialogContent)`
  background: white;
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  padding-bottom: 16px;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const FooterLink = styled.a`
  font-size: 0.825rem;
  text-decoration: none;
  color: var(--color-gray-500);
  font-weight: var(--weight-normal);
  padding-bottom: 8px;
`;

export default MobileMenu;
