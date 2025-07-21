import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const StyledFeaturedSection = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1000px;

  .numbered-heading {
    margin: 0 0 40px;
  }

  .featured-placeholder {
    text-align: center;
    color: var(--light-slate);
    font-size: var(--fz-lg);
  }
`;

const Featured = () => {
  const revealTitle = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
  }, []);

  return (
    <StyledFeaturedSection id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Featured Projects
      </h2>
      <div className="featured-placeholder">
        Projects coming soon...
      </div>
    </StyledFeaturedSection>
  );
};

export default Featured;
