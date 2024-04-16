import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Computer Science - Java and C++',
      institution: 'Washtenaw Community College',
      image: import('@/assets/logos/wcc.jpeg'),
      dates: [new Date('2015.09'), new Date('2019.12')],
      description: ``,
      links: [website({ url: 'https://www.wccnet.edu/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
