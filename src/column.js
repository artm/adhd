import EditorJs from 'react-editor-js'
import Paragraph from '@editorjs/paragraph'
import Header from '@editorjs/header'
import MemoTool from '../src/memo_tool'
import EditMeStyles from '../styles/EditMe.module.css'

const ejsTools = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: ['memo', 'italic']
  },
  header: {
    class: Header,
    config: {
      levels: [1, 2, 3],
      defaultLevel: 1
    },
    inlineToolbar: ['memo', 'italic']
  },
  memo: {
    class: MemoTool
  }
}
export default function Column({ data, onChange, colref }) {
  return (
    <div ref={colref} className={EditMeStyles.column}>
      <EditorJs
        data={data}
        preserveBlank={true}
        tools={ejsTools}
        onChange={onChange}
        onReady={onChange}
      />
    </div>
  )
}
