import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcon } from '../Icons/SocialIcon';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:111-111-1111'>111-111-1111</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:gkantor123@gmail.com'>
            gkantor123@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Let's build something awesome!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcon url='https://github.com/axxessgranted'>
            <AiFillGithub size='3rem' />
          </SocialIcon>
          <SocialIcon url='https://www.linkedin.com/in/grant-kantor-692951198/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcon>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
