import react, { useState } from 'react'

const DRAGGABLE = 'DRAGGABLE'
const BAR = 'BAR'

function draggable (item, id) {
  return {
    type: DRAGGABLE,
    id,
    data: item
  }
}
function insertBars (list) {
  let i = 0
  const newBar = () => {
    return {
      type: BAR,
      id: i++
    }
  }

  return [newBar()].concat(
    ...list.map(item => {
      return [draggable(item, i++), newBar()]
    })
  )

}
function clacChanging (list, drag, drop) {
  list = list.slice()

  const dragItem = list[drag]

  const dir = drag > drop ? -2 : 2

  const end = dir > 0 ? drop - 1 : drop + 1
  for (let i = drag; i != end; i += dir) {
    list[i] = list[i + dir]
  }
  list[end] = dragItem
}

export default function useDraggable (list) {
  const [dragList, setDragList] = useState(() => {
    return insertBars(list)
  })
  const [dragOver, setDragOver] = useState(null)
  const [dragging, setDragging] = useState(null)
  return {
    dragList,
    createDropperProps: id => {
      return {
        dragging,
        dragOver,
        eventHandlers: {
          onDragOver: (e) => {
            e.preventDefault()
            setDragOver(id)
          },
          onDragLeave: (e) => {
            e.preventDefault()
            setDragOver(null)
          },
          onDrop: e => {
            e.preventDefault()
            setDragOver(null)
            setDragList(list => {
              return clacChanging(list, dragging, id)
            })
          }
        }
      }
    },
    createDraggerProps: (id, key) => {
      return {
        id,
        key: id,
        dragging,
        eventHandlers: {
          onDragStart: (e) => {
            e.preventDefault()
            setDragging(id)
          },
          onDragEnd: (e) => {
            e.preventDefault()
            setDragging(null)
          },
        }
      }
    }
  }
}

