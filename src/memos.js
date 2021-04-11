import Draggable from 'react-draggable'
import styles from '../styles/Memo.module.css'

const NUM_MEMO_COLORS = 4

function Memo({ text, color }) {
  color = color % NUM_MEMO_COLORS
  const memoStyles = [styles.memo, styles[`color_${color}`]]
  return (
    <Draggable handle={`.${styles.memo}`}>
      <div className={memoStyles}>
        {text}
      </div>
    </Draggable>

  )
}

export default function Memos() {
  return (
    <>
      <Memo text="here do be memo" color={1} />
      <Memo text="here do be another" color={2} />
      <Memo text="and here another one" color={3} />
      <Memo text="the last memo" color={4} />
    </>
  )
}
