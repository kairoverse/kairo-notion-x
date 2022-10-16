import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NotionRendererProps {}

const StyledNotionRenderer = styled.div`
  color: pink;
`;

export function NotionRenderer(props: NotionRendererProps) {
  return (
    <StyledNotionRenderer>
      <h1>Welcome to NotionRenderer!</h1>
    </StyledNotionRenderer>
  );
}

export default NotionRenderer;
