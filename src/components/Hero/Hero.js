import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Access Granted to
        <br />
        Grant Kantor's Portfolio
      </SectionTitle>
      <SectionText>
        Software developer specialising in web and mobile applications.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://www.linkedin.com/in/grant-kantor-692951198/')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
