import React from 'react';
import styled from 'styled-components';

import { Date, Headline, Logo } from './atoms';
import { Nav, NavItem, NavImage } from './nav';

export const StyledHeader = styled.div`
  margin-bottom: 4rem;
  margin-top: 4rem;
`;

export const HeroContainer = styled.div`
  display: flex;
  margin-top: 4rem;
`;

const links = [
  {
    to: '/',
    label: 'Index',
    imageSrc: null,
  },
  {
    to: '/about',
    label: 'About',
    imageSrc: '/images/puppo.jpg',
  },
  {
    to: '/writing',
    label: 'Writing',
    imageSrc: '/images/writing-kramer.gif',
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
