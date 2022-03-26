import { Story, Meta } from '@storybook/react';
import Alert, { AlertProps } from './alert'

export default {
  title: 'Alert',
  component: Alert,
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#000' },
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '10px 30px', width: '500px', }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} ></Alert>;

export const Primary = Template.bind({});
Primary.storyName = '默认alert'
Primary.args = {
  title: '默认的提示'
};
Primary.parameters = {
  docs: { 
    source: {code: '<Alert title="默认提示"></Alert>'},
  },
};

export const Secondary = () => (
<>
  <Alert title="默认提示" type="default"></Alert>
  <Alert title="成功提示" type="success"></Alert>
  <Alert title="危险提示" type="danger"></Alert>
  <Alert title="警告提示" type="warning"></Alert>
</>
);
Secondary.storyName = '不同类型的alert';
Secondary.parameters = {
  docs: { 
    source: {code: 
`<Alert title="默认提示" type="default"></Alert>
<Alert title="成功提示" type="success"></Alert>
<Alert title="危险提示" type="danger"></Alert>
<Alert title="警告提示" type="warning"></Alert>`
    },
    description: {
      // story: `Alert 组件提供了四个不同类型的主题：light和dark。`,
    },
  },
  
};

export const third = () => (
<>
  <Alert title="描述标题" type="success" description="描述细节"></Alert>
</>
);
third.storyName = '添加描述的alert'
third.parameters = {
  docs: { 
    source: {
      code: '<Alert title="描述标题" type="success" description="描述细节"></Alert>'
    },
  },
};

export const fourth = () => (
<>
  <Alert title="不可关闭的提示" description="这个提示不可关闭哦" closable={false}></Alert>
</>
);
fourth.storyName = '不可关闭的alert'
fourth.parameters = {
  docs: { 
    source: {code: '<Alert title="不可关闭的提示" description="这个提示不可关闭哦" closable={true}></Alert>'}    
  },
};
