import Draggable from 'react-draggable'
import React from 'react'

export default function Memo({ memoedDom }) {
  const contentRef = React.useRef(null)
  const [inited, setInited] = React.useState(false)

  React.useEffect(() => {
    const content = contentRef.current
    if (!inited && content) {
      const selection = window.getSelection()
      selection.empty()
      selection.collapse(content, 0)
      setInited(true)
    }
  })

  return (
    <Draggable
      defaultPosition={{
        x: memoedDom.offsetLeft,
        y: memoedDom.offsetTop - 20
      }}
    >
      <div
        ref={contentRef}
        className="memo"
      >
        <div contentEditable={true}
          style={{
            minHeight: "2ex",
            minWidth: "2em",
            marginRight: "3px"
          }}
        />
        <div className="memo-button">–</div>
        <div className="memo-button">×</div>
      </div>
    </Draggable>
  )
}

