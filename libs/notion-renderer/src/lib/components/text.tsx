import type { IParagraphContent } from '../@types/text';
import { StyledParagraph, StyledSpan } from './styled';

export interface ITextProps {
  content: IParagraphContent;
}

export const NotionText = (props: ITextProps) => {
  if (!props.content) return null;
  if (props.content.archived) return null;

  const { id, paragraph } = props.content;

  return (
    <StyledParagraph color={paragraph.color}>
      {paragraph.rich_text?.map((entity, idx) => (
        <StyledSpan key={`${id}_${idx}`} annotations={entity.annotations}>
          {entity.text.content}
        </StyledSpan>
      ))}
    </StyledParagraph>
  );
};
