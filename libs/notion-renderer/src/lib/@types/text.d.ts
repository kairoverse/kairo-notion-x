import { IRichText } from "./common";

export interface IParagraphContent {
  id: string;
  archived: boolean;
  paragraph: {
    color: string;
    rich_text?: IRichText[]
  };
}
