import type { IAnnotations } from '../@types/text';

export const hasAnnotations = (annotations: IAnnotations) => {
  const { color, ...rest } = annotations;

  return color !== 'default' || Object.values(rest).some((val) => Boolean(val));
};
