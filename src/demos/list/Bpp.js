import React from 'react'
import './styles.css'
import useDraggable from './useDraggable';
const list = [
  { title: '111', src: 'https://wx4.sinaimg.cn/mw690/d5dd27a2gy1gl9fr3pu5kj20j60j6js1.jpg' },
  { title: '222', src: 'https://wx2.sinaimg.cn/mw690/d5dd27a2gy1gl9fr3qjbkj20j60j6t98.jpg' },
  { title: '333', src: 'https://wx2.sinaimg.cn/mw690/d5dd27a2gy1gl9fr3rjzjj20j60j6dgd.jpg' }
]

function cls (def, ...conditions) {
  const list = [def]
  conditions.forEach(cond => {
    if (cond[0]) {
      list.push(cond[1])
    }
  })
  return list.join(' ')
}

export default function Bpp () {
  return (
    <div className='Bpp'>
      {/* <Card {...list[0]}></Card> */}
      <DraggableList list={list} />
    </div>
  )
}


function Bar ({ id, dragging, dragOver, eventHandlers }) {
  if (id === dragging + 1) {
    return null
  }
  return (
    <div {...eventHandlers}
      className={cls('draggable--bar', [dragOver === id, 'dragover'])}>
      <div className="inner"
        style={{ height: id === dragOver ? "80px" : "0px" }}></div>
    </div>)
}

function DraggableList ({ list }) {
  const { dragList, createDropperProps, createDraggerProps } = useDraggable(list)
  return dragList.map((item, i) => {
    if (item.type === 'BAR') {
      return <Bar id={i} {...createDropperProps(i, item.id)}
        key={item.id}>
      </Bar>
    } else {
      return (
        <Draggable {...createDraggerProps(i)} >
          <Card {...item.data}></Card>
        </Draggable>
      )
    }
  })

}

function Draggable ({ children, eventHandlers, dragging, id }) {
  return <div {...eventHandlers}
    draggable={true}
    className={cls('draggable', [dragging === id, 'dragging'])}>
    {children}
  </div>
}


function Card ({ src, title }) {
  return <div className='card'>
    <img src={src} />
    <span>{title}</span>
  </div>
}
