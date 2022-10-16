import { render } from '@testing-library/react';

import NotionRenderer from './notion-renderer';

describe('NotionRenderer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotionRenderer />);
    expect(baseElement).toBeTruthy();
  });
});
