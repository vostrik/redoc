import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from './footer'

export default {
  title: 'Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />

export const Base = Template.bind({})
Base.args = {
  nav: [
    [
      { text: 'Learn Project', link: '#', isHeader: true },
      { text: 'High Level Architecture', link: '#' },
      { text: 'UI Kit', link: '#' },
      { text: 'Server-driven UI', link: '#' },
      { text: 'Integration Platform', link: '#' }
    ],
    [
      { text: 'API Reference', link: '#', isHeader: true },
      { text: 'High Level Architecture', link: '#' },
      { text: 'UI Kit', link: '#' },
      { text: 'Server-driven UI', link: '#' },
      { text: 'Integration Platform', link: '#' }
    ],
    [
      { text: 'About Project', link: '#', isHeader: true },
      { text: 'Community', link: '#' },
      { text: 'Team', link: '#' },
      { text: 'Changelog', link: '#' }
    ],
    [
      { text: 'Contacts', link: '#', isHeader: true },
      { text: 'mail@project.com', link: 'mailto:mail@project.com' },
      { text: 'twitter: @project', link: 'https://twitter.com/project' },
      { text: 'github: @project', link: 'https://github.com/project' }
    ]
  ]
}


