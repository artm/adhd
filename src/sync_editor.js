import React from "react"
import Column from "./column"

export default function SyncEditor({ data }) {
  const colRefs = data.map(() => React.useRef(null))
  function changed() {
    const blocks = [
      colRefs[0].current.querySelectorAll(".ce-block"),
      colRefs[1].current.querySelectorAll(".ce-block"),
    ]
    const blockCount = Math.min(blocks[0].length, blocks[1].length)
    for (let i = 0; i < blockCount; i++) {
      const height = Math.max(
        blocks[0][i].firstElementChild.clientHeight,
        blocks[1][i].firstElementChild.clientHeight
      )
      height = "" + height + "px"
      if (blocks[0][i]) { blocks[0][i].style.minHeight = height }
      if (blocks[1][i]) { blocks[1][i].style.minHeight = height }
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
