import React from 'react';
import styled from 'styled-components';

import { Date, Headline, Logo } from './atoms';
import { Nav, NavItem, NavImage } from './nav';

export const StyledHeader = styled.div`
  margin-bottom: 4rem;
  margin-top: 2rem;
`;

export const HeroContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  min-height: 164px;
`;

const links = [
  {
    to: '/',
    label: 'Home',
    imageSrc: '/images/nav/home.gif',
  },
  {
    to: '/about',
    label: 'About',
    imageSrc: '/images/nav/about.jpg',
  },
  {
    to: '/writing',
    label: 'Writing',
    imageSrc: '/images/nav/writing.gif',
  },
];

function Header(props) {
  const { title, date, headline = 'Design & Engineering' } = props;

  return (
    <StyledHeader>
      <Logo to={`/`}>{title}</Logo>

      <HeroContainer>
        {date && <Date>{date}</Date>}
        <Headline>{headline}</Headline>

        <Nav>
          {links.map(({ to, label, imageSrc }) => (
            <NavItem
              key={to}
              to={to}
              activeClassName="is-active"
              partiallyActive={to.includes('writing')}
            >
              {label}
              {imageSrc && <NavImage src={imageSrc} />}
            </NavItem>
          ))}
        </Nav>
      </HeroContainer>
    </StyledHeader>
  );
}

export default Header;
