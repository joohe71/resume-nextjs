import { PropsWithChildren } from 'react';
import ProjectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { IProject } from '../project/IProject';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IProject.Payload;

export const Study = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="STUDY ACTIVITIES">
      <ProjectRow payload={payload} />
    </CommonSection>
  );
}
