import styles from '../styles/Memo.module.css'

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

    const selectedText = range.extractContents()
    const memo = document.createElement('memo')
    const classAttr = document.createAttribute('class')
    classAttr.value = styles.context
    memo.setAttributeNode(classAttr)
    memo.appendChild(selectedText)

    const memoContent = document.createElement('memo')
    const memoContentClass = document.createAttribute('class')
    memoContentClass.value = styles.memo
    memoContent.setAttributeNode(memoContentClass)
    memoContent.textContent = "here be memo content"

    memo.appendChild(memoContent)

    range.insertNode(memo)
  }


  checkState(selection) {
    const text = selection.anchorNode
    if (!text) { return }
    const anchorElement = text instanceof Element ? text : text.parentElement
    this.state = !!anchorElement.closest('memo')
  }
}
