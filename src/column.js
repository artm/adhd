import EditorJs from 'react-editor-js'
import Header from '@editorjs/header'
const ejsTools = {
  header: {
    class: Header,
    config: {
      levels: [1, 2, 3],
      defaultLevel: 1
    }
  }
}
export default function Column({ data, onChange }) {
  return (
    <EditorJs
      data={data}
      placeholder="Edit me"
      preserveBlank={true}
      tools={ejsTools}
      onChange={onChange}
    />
  )
}
