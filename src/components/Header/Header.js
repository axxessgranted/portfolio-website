import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
  Container,
  LogoStyled,
  NavContainerStyled,
  SocialsContainerStyled,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <LogoStyled>
      <Link href={'/'}>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size='3rem' /> <span>axxessgranted</span>
        </a>
      </Link>
    </LogoStyled>
    <NavContainerStyled>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </NavContainerStyled>
    <SocialsContainerStyled>
      {/* TODO: Open social links in a new tab */}
      <SocialIcons href='https://github.com/axxessgranted'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/grant-kantor-692951198/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
    </SocialsContainerStyled>
  </Container>
);

export default Header;
