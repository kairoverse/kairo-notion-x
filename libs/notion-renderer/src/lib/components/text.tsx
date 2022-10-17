import styled from 'styled-components';
import type { IAnnotations, IParagraphContent } from '../@types/text';

export interface ITextProps {
  content: IParagraphContent;
}

const StyledSpan = styled.span<{ annotations: IAnnotations }>`
  font-weight: ${({ annotations: { bold } }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ annotations: { italic } }) => (italic ? 'italic' : 'normal')};
  text-decoration: ${({ annotations: { underline, strikethrough } }) =>
    `${underline ? 'underline' : ''} ${strikethrough ? 'line-through' : ''}`.trim()};
  ${({ annotations: { code } }) =>
    code ? 'font-family: monospace; background: var(--monospace_background); padding: 2px;' : 'font-family: inherit;'}
  ${({ annotations: { color } }) =>
    color !== 'default'
      ? `${/_background/.test(color) ? `background-color: var(--${color})` : `color: var(--${color})`}`
      : ''}
`;

const StyledParagraph = styled.p<{ color?: string }>`
  ${({ color }) =>
    color && color !== 'default'
      ? `${/_background/.test(color) ? `background-color: var(--${color})` : `color: var(--${color})`}`
      : ''}
`;

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
