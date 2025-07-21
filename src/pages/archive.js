import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledMainContainer = styled.main`
  & > header {
    text-align: center;
    margin-bottom: 100px;

    h1 {
      margin: 0 0 10px 0;
    }
  }
`;

const StyledArchiveContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 200px 0;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  p {
    color: var(--light-slate);
    font-size: var(--fz-lg);
  }
`;

const ArchivePage = ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet title="Archive" />

      <StyledMainContainer className="fillHeight">
        <header>
          <h1 className="big-heading">Archive</h1>
          <p className="subtitle">A list of things I've worked on</p>
        </header>

        <StyledArchiveContainer>
          <h2>Coming Soon</h2>
          <p>Project archive will be available here once I add some projects.</p>
        </StyledArchiveContainer>
      </StyledMainContainer>
    </Layout>
  );
};

export default ArchivePage;
