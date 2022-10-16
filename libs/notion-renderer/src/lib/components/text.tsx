import styled from 'styled-components';
import { hasAnnotations } from '../helpers/common';

import type { IAnnotations, IParagraphContent } from '../@types/text';

export interface ITextProps {
  content: IParagraphContent;
}

const StyledSpan = styled.span<{ annotations: IAnnotations }>`
  font-weight: ${({ annotations }) => (annotations.bold ? 'bold' : 'normal')};
  font-style: ${({ annotations }) =>
    annotations.italic ? 'italic' : 'normal'};
  text-decoration: ${({ annotations }) =>
    ` ${annotations.underline ? 'underline' : ''}
      ${annotations.strikethrough ? 'line-through' : ''}
    `};
  ${({ annotations }) =>
    annotations.code
      ? 'font-family: monospace; background: var(--monospace_background); padding: 2px;'
      : 'font-family: inherit;'}
  ${({ annotations }) =>
    annotations.color && annotations.color !== 'default'
      ? `${
          /_background/.test(annotations.color)
            ? `background-color: var(--${annotations.color})`
            : `color: var(--${annotations.color})`
        }`
      : ''}
`;

const StyledParagraph = styled.p<{ color?: string }>`
  ${({ color }) =>
    color && color !== 'default'
      ? `${
          /_background/.test(color)
            ? `background-color: var(--${color})`
            : `color: var(--${color})`
        }`
      : ''}
`;

export const NotionText = (props: ITextProps) => {
  if (!props.content) return null;
  if (props.content.archived) return null;

  const { id, paragraph } = props.content;

  return (
    <StyledParagraph color={paragraph.color}>
      {paragraph.rich_text?.map((entity, idx) => {
        if (hasAnnotations(entity.annotations)) {
          return (
            <StyledSpan key={`${id}_${idx}`} annotations={entity.annotations}>
              {entity.text.content}
            </StyledSpan>
          );
        }

        return entity.text.content;
      })}
    </StyledParagraph>
  );
};
