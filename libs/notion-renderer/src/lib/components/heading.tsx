import type { IHeadingContent } from '../@types/heading';
import { StyledHeading, StyledSpan } from './styled';

export interface IHeadingProps {
  content: IHeadingContent;
}

export const NotionHeading = (props: IHeadingProps) => {
  if (!props.content) return null;
  if (props.content.archived) return null;

  const { id, type: heading_type } = props.content;
  const heading = props.content[heading_type];
  const type = heading_type === 'heading_1' ? 'h1' : heading_type === 'heading_2' ? 'h2' : 'h3';

  return (
    <StyledHeading color={heading?.color} type={type} as={type}>
      {heading?.rich_text?.map((entity, idx) => (
        <StyledSpan key={`${id}_${idx}`} annotations={entity.annotations}>
          {entity.text.content}
        </StyledSpan>
      ))}
    </StyledHeading>
  );
};
