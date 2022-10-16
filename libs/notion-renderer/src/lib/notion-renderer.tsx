import { NotionText } from './components/text';

import type { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints';

export interface NotionRendererProps {
  blocks: ListBlockChildrenResponse;
}

export const NotionRenderer = (props: NotionRendererProps) => {
  const { results, has_more, next_cursor } = props.blocks;

  if (!results) return null;
  if (!results.length) return null;

  return (
    <>
      {results.map((entity: any) => {
        switch (entity.type) {
          case 'paragraph':
            return <NotionText key={entity.id} content={entity} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default NotionRenderer;
