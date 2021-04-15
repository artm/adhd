import Draggable from 'react-draggable'
import ReactDOM from 'react-dom'

import styles from '../styles/Memo.module.css'

function Memo() {
  return (
    <Draggable><span className={styles.memo} contentEditable={false}>мемка</span></Draggable>
  )
}

export default class MemoTool {
  static get isInline() { return true }

  constructor() {
    this.button = null
    this.state = false
  }

  render() {
    this.button = document.createElement('button')
    this.button.type = 'button'
    this.button.textContent = 'M'
    return this.button
  }

  surround(range) {
    if (this.state) { return }

    const memo = document.createElement('span')
    const classAttr = document.createAttribute('class')
    classAttr.value = styles.context
    memo.setAttributeNode(classAttr)

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
