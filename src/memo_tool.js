export default class MemoTool {
  static get isInline() { return true }

  constructor({ api, config }) {
    this.api = api
    this.config = config
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
    let existing = this.api.selection.findParentTag("span")

    if (existing) {
      console.log('FIXME unwrap')
    } else {
      const memo = document.createElement('span')
      memo.setAttribute('class', "memoed")

      memo.appendChild(range.extractContents())
      range.insertNode(memo)

      //this.config.onCreated(memo)
    }
  }

  checkState(selection) {
    const text = selection.anchorNode
    if (!text) { return }
    const anchorElement = text instanceof Element ? text : text.parentElement
    this.state = !!anchorElement.closest('memo')
  }

  static get sanitize() {
    return {
      span: {
        class: "memoed",
        "data-memo-text": true
      }
    }
  }
}
