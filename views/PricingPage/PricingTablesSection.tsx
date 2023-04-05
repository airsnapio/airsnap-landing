import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';
import React from 'react';
import styled from 'styled-components';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexible pricing for agile teams</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="free"
          description="Give us a try for free"
          benefits={['1 seat', '1,000 sessions per month', '15 day data retention']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Startup"
          description="Best for small teams"
          benefits={['3 seats', '10,000 sessions per month', '30 day data retention']}
          isOutlined
        >
          $29<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Professional"
          description="Get your team together"
          benefits={['Unlimited seats', '25,000 sessions per month', '30 day data retention']}
        >
          $99<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
