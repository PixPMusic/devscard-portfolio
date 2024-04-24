import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  ansible,
  cPanel,
  ceph,
  containers,
  docker,
  fedora,
  linux,
  apache,
  kubernetes,
  mysql,
  openTofu,
  osTree,
  php,
  goLang,
  graphql,
  astro,
  teraform,
  tailwindCss,
  nodeJs,
  podman,
  openstack,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        cPanel({
          level: 4,
          description:
            'Intimate knowledge of cPanel and WHM, including debugging and troubleshooting.',
        }),
        linux({
          level: 3,
          description:
            'Experience with deployment and management of multiple Linux distributions.',
        }),
        podman({
          level: 3,
          description:
            'Experience with containerization and deployment of containers, including debugging and troubleshooting issues.',
        }),
        containers({
          level: 3,
          description:
            'Experience with Skopeo, Buildah, and Podman for container management and deployment.',
        }),
        apache({
          level: 3,
          description:
            'Strong background in debugging and maintaining the Apache web server.',
        }),
        goLang({
          level: 2,
          description:
            'Prior experience with GoLang. Can write basic Go applications, including concurrency and error handling. Basic understanding of the GoLang build process.',
        }),
        docker({
          level: 2,
          description:
            'Experience with Docker and Docker-Compose. More experienced with the Open Container Initiative stack than the Docker stack.',
        }),
        openstack({
          level: 2,
          description:
            'No direct management experience, but have worked heavily with the OpenStack API and CLI. Can deploy and manage OpenStack instances and troubleshoot issues.',
        }),
        php({
          level: 1,
          description:
            'Not an active PHP developer, but can read and understand PHP code and configurations. Basic understanding of PHP, including debugging and troubleshooting.',
        }),
        mysql({
          level: 1,
          description:
            'Basic understading of MySQL, including configurtion, debugging and troubleshooting. Can write basic SQL queries and use databases in applications.',
        }),
        nodeJs({
          level: 1,
          description:
            'Basic understanding of Node.js, including package management, deployment, debugging and troubleshooting. Can write basic JavaScript/TypeScript applications.',
        }),
        astro({
          level: 1,
          description:
            'Still learning, but this site was built with Astro and deployed with Bun.',
        }),
        tailwindCss({
          level: 1,
          description:
            'Still learning, but this site was styled with Tailwind CSS.',
        }),
        fedora({
          level: 2,
        }),
        osTree({
          level: 2,
        }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [
        typescript(),
        graphql(),
        kubernetes(),
        ceph(),
        openTofu(),
        teraform(),
        ansible(),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
