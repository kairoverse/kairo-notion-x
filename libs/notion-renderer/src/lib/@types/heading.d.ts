import { IRichText } from './common';

export interface IHeading {
  color: string;
  rich_text?: IRichText[];
}

export type THeading = 'h1' | 'h2' | 'h3'
export type TNotionHeading = 'heading_1' | 'heading_2' | 'heading_3';

export interface IHeadingContent {
  id: string;
  type: TNotionHeading
  archived: boolean;
  heading_1?: IHeading;
  heading_2?: IHeading;
  heading_3?: IHeading;
}
