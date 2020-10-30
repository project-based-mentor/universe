import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import App from '../App';

const Template: Story<any> = (args) => <App {...args} />;

// Each story then reuses that template
export const CompleteApplication = Template.bind({});

export default {
    title: 'App',
    component: App,
  } as Meta;
