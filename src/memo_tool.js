import Draggable from 'react-draggable'
import React from 'react'
import ReactDOM from 'react-dom'

import styles from '../styles/Memo.module.css'

function Memo() {
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
    <Draggable defaultPosition={{ x: -30, y: -20 }} >
      <div
        ref={contentRef}
        className={styles.memo}
        style={{ minHeight: "3ex", minWidth: "2em" }}
      />
    </Draggable>
  )
}

export default class MemoTool {
  static get isInline() { return true }

  constructor() {
    this.button = null
    this.state = false
  }

  render() {
    const icon = document.createElement('img')
    icon.setAttribute('src', 'icon.svg')
    this.button = document.createElement('button')
    this.button.type = 'button'
    this.button.setAttribute('class', 'ce-inline-tool')
    this.button.appendChild(icon)
    return this.button
  }

  surround(range) {
    if (this.state) { return }

    const memo = document.createElement('span')
    memo.setAttribute('class', styles.context)

    const text = range.toString()
    range.deleteContents()
    range.insertNode(memo)

    ReactDOM.render(<>{text}<Memo /></>, memo)
  }


  checkState(selection) {
    const text = selection.anchorNode
    if (!text) { return }
    const anchorElement = text instanceof Element ? text : text.parentElement
    this.state = !!anchorElement.closest('memo')
  }
}
