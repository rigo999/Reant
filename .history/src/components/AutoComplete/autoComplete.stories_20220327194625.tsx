import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AutoComplete, DataSourceType } from "./autoComplete";

const styles: React.CSSProperties = {
    width: "400px",
}
const AutoCompleteDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

interface LakerPlayerProps {
    value: string;
    number: number;
}

interface GithubUserProps {
    login: string;
    url: string;
    avatar_url: string;
}

const simpleComplete = () => {
    const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
    const handleFetch = (query: string) => {
        return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
    }
    return (
        <AutoComplete
            fetchSuggestions={handleFetch}
            onSelect={action('selected')}
            placeholder="输入湖人队球员英文名试试"
        />
    )
}

const simpleCompleteText = `
输入框自动完成功能, 当输入值需要自动完成时使用, 支持同步和异步两种方式, 支持 Input 组件的所有属性 支持键盘事件选择
### 引用方法
~~~js
import { AutoComplete } from 'reant'
~~~
### 示例代码
~~~javascript
const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins','james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
}
return (
    <AutoComplete
        fetchSuggestions={handleFetch}
        onSelect={action('selected')}
        placeholder="输入湖人队球员英文名试试"
    />
)
~~~
`

const customComplete = () => {
        const lakersWithNumber = [
            {value: 'bradley', number: 11},
            {value: 'pope', number: 1},
            {value: 'caruso', number: 4},
            {value: 'cook', number: 2},
            {value: 'cousins', number: 15},
            {value: 'james', number: 23},
            {value: 'AD', number: 3},
            {value: 'green', number: 14},
            {value: 'howard', number: 39},
            {value: 'kuzma', number: 0},
        ]
    const handleFetch = (query: string) => {
        return lakersWithNumber.filter(player => player.value.includes(query))
    }
    const renderOption = (item: DataSourceType) => {
        const itemWithNumber = item as DataSourceType<LakerPlayerProps>
        return (
            <span>
                <b>名字: {itemWithNumber.value}</b>
                &ensp;
                <span>球衣号码: {itemWithNumber.number}</span>
            </span>
        )
    }
    return (
        <AutoComplete
            fetchSuggestions={handleFetch}
            onSelect={action('selected')}
            placeholder="输入湖人队球员英文,自定义下拉模版"
            renderOption={renderOption}
        />
    )
}

const customCompleteText = `
### 示例代码
~~~javascript
const lakersWithNumber = [
    {value: 'bradley', number: 11},
    {value: 'pope', number: 1},
    {value: 'caruso', number: 4},
    {value: 'cook', number: 2},
    {value: 'cousins', number: 15},
    {value: 'james', number: 23},
    {value: 'AD', number: 3},
    {value: 'green', number: 14},
    {value: 'howard', number: 39},
    {value: 'kuzma', number: 0},
]
const handleFetch = (query: string) => {
    return lakersWithNumber.filter(player => player.value.includes(query))
}
const renderOption = (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<LakerPlayerProps>
    return (
        <span>
            <b>名字: {itemWithNumber.value}</b>
            <span>球衣号码: {itemWithNumber.number}</span>
        </span>
    )
}
return (
    <AutoComplete
        fetchSuggestions={handleFetch}
        onSelect={action('selected')}
        placeholder="输入湖人队球员英文,自定义下拉模版"
        renderOption={renderOption}
    />
)
~~~
`

const ajaxComplete = () => {
    const handleFetch = (query: string) => {
        return fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res => res.json())
        .then(({ items }) => {
            return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
        })
    }

    const renderOption = (item: DataSourceType) => {
        const itemWithGithub = item as DataSourceType<GithubUserProps>
        return (
            <span>
                <b>Name: {itemWithGithub.value}</b>
                <span>url: {itemWithGithub.url}</span>
            </span>
        )
    }
    return (
        <AutoComplete
            fetchSuggestions={handleFetch}
            placeholder="输入 Github 用户名试试"
            onSelect={action('selected')}
            renderOption={renderOption}
        />
    )
}

const ajaxCompleteText = `
### 示例代码
~~~javascript
const handleFetch = (query: string) => {
    return fetch('https://api.github.com/search/users?q='+ query)
    .then(res => res.json())
    .then(({ items }) => {
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
    })
}

const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
        <span>
            <b>Name: {itemWithGithub.value}</b>
            <span>url: {itemWithGithub.url}</span>
        </span>
    )
}
return (
    <AutoComplete
        fetchSuggestions={handleFetch}
        placeholder="输入 Github 用户名试试"
        onSelect={action('selected')}
        renderOption={renderOption}
    />
)
~~~
`

storiesOf('自动补全 AutoComplete', module)
    .addDecorator(AutoCompleteDecorator)
    .add('基础 AutoComplete', simpleComplete, {info: {source: false, text: simpleCompleteText}})
    .add('自定义下拉选项', customComplete,  {info: {source: false, text: customCompleteText}})
    .add('异步请求Github用户名', ajaxComplete, {info: {source: false, text: ajaxCompleteText}})