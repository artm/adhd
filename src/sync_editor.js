import React from "react"
import Column from "./column"

function min(array) {
  return array.reduce((a, b) => Math.min(a, b))
}

function max(array) {
  return array.reduce((a, b) => Math.max(a, b))
}

export default function SyncEditor({ data }) {
  const colRefs = data.map(() => React.useRef(null))

  function changed() {
    const cols = colRefs.map(
      ref => ref.current.querySelectorAll(".ce-block")
    )
    const blockCount = min(cols.map(col => col.length))
    for (let i = 0; i < blockCount; i++) {
      const blocks = cols.map(col => col[i])
      const height = max(
        blocks.map(block => block.firstElementChild.clientHeight)
      )
      height = `${height}px`
      blocks.forEach(block => {
        block.style.minHeight = height
      })
    }
  }

  const columns = data.map(
    (data, i) => <Column
      colref={colRefs[i]}
      data={data}
      onChange={changed}
    />
  )
  return (
    <>
      {columns}
    </>
  )
}
