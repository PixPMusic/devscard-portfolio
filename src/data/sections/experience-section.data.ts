import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';
import {
  apache,
  nginx,
  mysql,
  php,
  goLang,
  java,
  jira,
  tomcat,
  podman,
  nodeJs,
  perl,
  postgreSql,
  python,
  wordpress,
  redhat,
  redis,
  ubuntu,
  openstack,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Technical Support Engineer II',
      company: 'cPanel • Houston, TX',
      image: import('@/assets/logos/cpanel.jpeg'),
      dates: [new Date('2020-01-06'), new Date('2024-04-12')],
      description: `
        - Write and maintain support documentation for customer-driven solutions.
        - Provide fast, accurate support to end users.
        - Identify and debug product issues on customer systems.
        - Create accurate reproduction steps in testing environments.
        - Contribute to internal guides and documentation to promote knowledge sharing among team members.
        - Deliver detailed casework to Development, including researched solutions where possible.
        - Assist development of internal tools (Python, Go, Perl, Bash).
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          redhat(),
          ubuntu(),
          apache(),
          nginx(),
          mysql(),
          php(),
          postgreSql(),
          redis(),
          podman(),
          nodeJs(),
          python(),
          java(),
          tomcat(),
          goLang(),
          perl(),
          wordpress(),
          openstack(),
          jira(),
        ],
      },
      links: [
        website({ url: 'https://cpanel.net' }),
        linkedin({ url: 'https://www.linkedin.com/company/cpanel/' }),
      ],
    },
    {
      role: 'Barista',
      company: 'Starbucks • Ann Arbor, MI',
      image: import('@/assets/logos/starbucks.jpg'),
      dates: [new Date('2018-11'), new Date('2019-12-25')],
      description: `
        - Package and install Java into a variety of containers.
        - Provide fast, accurate service to customers.
        - Identify and debug product issues and customer complaints.
        - Assist team members by proactively identifying needs and providing support.
      `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [
        website({ url: 'https://starbucks.com' }),
        linkedin({ url: 'https://www.linkedin.com/company/starbucks/' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
