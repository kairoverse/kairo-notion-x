import styled from 'styled-components';
import type { IAnnotations } from '../@types/common';
import { THeading } from '../@types/heading';

export const StyledSpan = styled.span<{ annotations: IAnnotations }>`
  font-weight: ${({ annotations: { bold } }) => (bold ? 'bold' : 'inherit')};
  font-style: ${({ annotations: { italic } }) => (italic ? 'italic' : 'inherit')};
  text-decoration: ${({ annotations: { underline, strikethrough } }) =>
    `${underline ? 'underline' : ''} ${strikethrough ? 'line-through' : ''}`.trim()};
  ${({ annotations: { code } }) =>
    code ? 'font-family: monospace; background: var(--monospace_background); padding: 2px;' : 'font-family: inherit;'}
  ${({ annotations: { color } }) =>
    color !== 'default'
      ? `${/_background/.test(color) ? `background-color: var(--${color})` : `color: var(--${color})`}`
      : ''}
`;

export const StyledParagraph = styled.p<{ color?: string }>`
  ${({ color }) =>
    color && color !== 'default'
      ? `${/_background/.test(color) ? `background-color: var(--${color})` : `color: var(--${color})`}`
      : ''}
`;

const heading_font_sizes = {
  h1: '1.875em',
  h2: '1.5em',
  h3: '1.25em',
};
export const StyledHeading = styled(StyledParagraph)<{ type: THeading; as: THeading }>`
  font-weight: 600;
  line-height: 1.3;
  font-size: ${({ type }) => heading_font_sizes[type]};
`;
