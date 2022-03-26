import React from 'react'
import { storiesOf } from '@storybook/react'
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import Select from './index'

export default {
  title: 'Select',
  component: Select,
  //👇 Creates specific parameters for the story
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

const defaultSelect = () => (
  <Select
    placeholder="请选择"
    onChange={action('changed')}
    onVisibleChange={action('visible')}
  >
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
    <Select.Option value="disabled" disabled/>
    <Select.Option value="nihao5" />
  </Select>
)
const multipleSelect = () => (
  <Select
    placeholder="支持多选欧！"
    onChange={action('changed')}
    onVisibleChange={action('visible')}
    multiple
  >
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
    <Select.Option value="simpleui" />
    <Select.Option value="simpleui" />
  </Select>
)

const disabledSelect = () => (
  <Select
    placeholder="禁用啦！"
    disabled
  >
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
  </Select>
)

storiesOf('Select', module)
  .add('Select', defaultSelect)
  .add('支持多选的 Select', multipleSelect)
  .add('被禁用的 Select', disabledSelect)