import Memo from "../src/memo"

export default function ShadowDom({ columnDom }) {
  if (!columnDom) { return <></> }
  const origParas = columnDom.querySelectorAll(".ce-paragraph")
  const shadowParas = Array.prototype.map.call(origParas, (op, i) => {
    const memoeds = op.querySelectorAll(".memoed")
    const memos = Array.prototype.map.call(memoeds, (m, j) => {
      return <Memo key={j} memoedDom={m} />
    })
    return (
      <div className="shadow-paragraph" key={i}>
        {memos}
      </div>
    )
  })
  return <div className="shadow-dom">{shadowParas}</div>
}
