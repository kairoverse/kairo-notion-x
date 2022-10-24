import styled from 'styled-components';
import { opengraph } from '@kairoverse/opengraph'
import { NotionRenderer } from '@kairoverse/notion-x';

import type { GetServerSideProps } from 'next';
import { useEffect } from 'react';

export const getServerSideProps: GetServerSideProps = async () => {
  const page = await (
    await fetch(
      'http://localhost:4200/api/pages/ce62c60e-5630-4640-bc82-7beb55b3f78b'
    )
  ).json();

  const blocks = await (
    await fetch(
      'http://localhost:4200/api/blocks/ce62c60e-5630-4640-bc82-7beb55b3f78b'
    )
  ).json();

  return {
    props: {
      page,
      blocks,
    },
  };
};

const StyledPage = styled.div`
  .page {
  }
`;

export const Index = (props: any) => {
  return (
    <StyledPage>
      <h1>Notion</h1>
      <NotionRenderer blocks={props.blocks}/>
    </StyledPage>
  );
}

export default Index;
