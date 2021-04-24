import Memo from "../src/memo"

let id = 0

function nodeIdentity(node) {
  return node.dataset.id ||= ++id
}

export default function ShadowDom({ columnDom }) {
  if (!columnDom) { return <></> }
  const origParas = columnDom.querySelectorAll(".ce-block")
  const shadowParas = Array.prototype.map.call(origParas, (op, i) => {
    const memoeds = op.querySelectorAll(".memoed")
    const memos = Array.prototype.map.call(memoeds, (m) => {
      return <Memo key={nodeIdentity(m)} memoedDom={m} />
    })
    return (
      <div
        className="shadow-paragraph"
        key={i}
        style={{
          width: op.clientWidth,
          height: op.clientHeight,
        }}
      >
        {memos}
      </div>
    )
  })
  return (
    <div
      className="shadow-dom"
      style={{
        width: columnDom.clientWidth,
        height: columnDom.clientHeight,
      }}
    >{shadowParas}</div>
  )
}
