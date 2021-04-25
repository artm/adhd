import Draggable from 'react-draggable'
import React from 'react'

export default function Memo({ memoedDom }) {
  const contentRef = React.useRef(null)
  const [inited, setInited] = React.useState(false)

  function onContentEdited(event) {
    memoedDom.dataset.memoText = this.innerText
  }

  React.useEffect(() => {
    const content = contentRef.current
    if (!inited && content) {
      const selection = window.getSelection()
      selection.empty()
      selection.collapse(content, 0)
      setInited(true)
      content.addEventListener("input", onContentEdited)
    }
  })

  return (
    <Draggable
      defaultPosition={{
        x: memoedDom.offsetLeft + 20,
        y: memoedDom.offsetTop - 30
      }}
    >
      <div className="memo">
        <div
          ref={contentRef}
          contentEditable={true}
          className="memo-text"
        />
        <div className="memo-button">×</div>
      </div>
    </Draggable>
  )
}
