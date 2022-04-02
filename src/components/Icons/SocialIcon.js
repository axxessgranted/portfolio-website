import styled from 'styled-components';

const SocialIconStyled = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const SocialIcon = ({ url, children }) => (
  <SocialIconStyled href={url} target='_blank' rel='noopener noreferrer'>
    {children}
  </SocialIconStyled>
);
