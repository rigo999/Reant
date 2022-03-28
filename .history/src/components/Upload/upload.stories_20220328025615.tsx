import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Icon from "../Icon/icon";
import Button from "../Button/button";
import Upload from "./upload";

const simpleUpload = () => (
    <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={action('changed')}
        onSuccess={action('success')}
        onProgress={action('progress')}
        onRemove={action('removed')}
    >
        <Button size="lg" btnType="primary"><Icon icon="upload" /> 点击上传 </Button>
    </Upload>
)
const simpleUploadText = `
通过点击或者拖拽上传文件
### 引用方法
~~~js
import { Upload } from 'reant'
~~~
### 示例代码
~~~js
<div>
    <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={action('changed')}
        onSuccess={action('success')}
        onProgress={action('progress')}
        onRemove={action('removed')}
    >
        <Button size="lg" btnType="primary"><Icon icon="upload" /> 点击上传 </Button>
    </Upload>
</div>
~~~
`

const checkUpload = () => {
    const checkFileSize = (file: File) => {
        if (Math.round(file.size / 1024) > 50) {
            alert('file too big')
            return false;
        }
        return true;
    }
    return (
        <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={action('changed')}
            beforeUpload={checkFileSize}
        >
            <Button size="lg" btnType="primary">
                <Icon icon="upload" />
                不能传大于50Kb的文件!
            </Button>
        </Upload>
    )
}
const checkUploadText = `
### 示例代码
~~~javascript
const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
        alert('file too big')
        return false;
    }
    return true;
}
return (
    <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={action('changed')}
        beforeUpload={checkFileSize}
    >
        <Button size="lg" btnType="primary">
            <Icon icon="upload" />
            不能传大于50Kb的文件!
        </Button>
    </Upload>
)
~~~
`
const dragUpload = () => (
    <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={action('changed')}
        onRemove={action('removed')}
        name="fileName"
        multiple
        drag
    >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br/>
        <p>点击或者拖动到此区域进行上传</p>
    </Upload>
)
const dragUploadText = `
### 示例代码
~~~js
<div>
    <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={action('changed')}
        onRemove={action('removed')}
        name="fileName"
        multiple
        drag
    >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br/>
        <p>点击或者拖动到此区域进行上传</p>
    </Upload>
</div>
~~~
`

storiesOf('上传 Upload', module)
    .add('基础 Upload', simpleUpload, {info: {source: false, text: simpleUploadText}})
    .add('上传前检查文件大小', checkUpload, {info: {source: false, text: checkUploadText}})
    .add('拖动上传', dragUpload, {info: {source: false, text: dragUploadText}})