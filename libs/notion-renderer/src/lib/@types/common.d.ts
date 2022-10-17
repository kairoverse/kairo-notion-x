export interface IAnnotations {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
}

export interface IRichText {
  href: string | null;
  type: 'text';
  plain_text: string;
  annotations: IAnnotations;
  text: {
    content: string;
    link: string | null;
  };
}
