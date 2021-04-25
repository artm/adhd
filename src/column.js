import React from "react"

import EditorJs from "react-editor-js"
import Header from "@editorjs/header"
import Paragraph from "@editorjs/paragraph"

import ShadowDom from "../src/shadow_dom"
import MemoTool from "../src/memo_tool"
import EditMeStyles from "../styles/EditMe.module.css"

const ejsTools = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: ["memo", "italic"]
  },
  header: {
    class: Header,
    config: {
      levels: [1, 2, 3],
      defaultLevel: 1
    },
    inlineToolbar: ["memo", "italic"]
  },
  memo: {
    class: MemoTool
  }
}

export default function Column({ data, onChange, colRef }) {
  const editorjsRef = React.useRef(null)
  const [memoeds, setMemoeds] = React.useState([])

  function onTextChange(api) {
    onChange()
    setMemoeds(
      colRef.current.querySelectorAll(".memoed")
    )
    editorjsRef.current.save().then((output) => {
      console.log("current text:", output)
    })
  }

  return (
    <>
      <div
        ref={colRef}
        className={EditMeStyles.column}
        onDragStart={preventDraggingText}>
        <ShadowDom columnDom={colRef.current} memoeds={memoeds} />
        <EditorJs
          instanceRef={(editorjs) => { editorjsRef.current = editorjs }}
          data={data}
          preserveBlank={true}
          tools={ejsTools}
          onChange={onTextChange}
          onReady={onTextChange}
        />
      </div>
    </>
  )
}

function preventDraggingText(event) {
  event.preventDefault()
  return false
}
