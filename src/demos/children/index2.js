import React, { memo, useMemo, useCallback, useState, useEffect } from 'react'

import '../../assets/css/ui.css';
import './App.scss'

import MyHeader from '../cpnt/Header'
import AddInput from '../cpnt/AddInput'
import NoDataTip from '../cpnt/NoDataTip'
import TodoItem from '../cpnt/TodoItem'
import CheckModal from '../cpnt/Model/CheckModal'
import EditModal from '../cpnt/Model/EditModal';

function ChildrenDemo ({ data, addClick }) {
  // console.log('child render')
  return <button onClick={addClick}>{data.number}</button>
}
ChildrenDemo = memo(ChildrenDemo)
let lastAddClick
let lastData

function It () {
  let [number, setNumber] = useState(0)
  let [name, setName] = useState('lili')
  let addClick = useCallback(() => setNumber(number + 1), [number])
  // console.log('addclick === lasstAddClick', addClick === lastAddClick)
  lastAddClick = addClick
  let data = useMemo(() => ({ number }), [number])
  // console.log('data === lastData', data === lastData)
  lastData = data
  return (
    <>
      <input value={name} onChange={event => setName(event.target.value)} />
      <ChildrenDemo data={data} addClick={addClick} />
    </>
  )
}
function Bpp () {
  const [ isShowInput, setIsShowInput ] = useState(false),
  [ isShowCheckModal, setIsShowCheckModal ] = useState(false),
  [ isShowEditModal, setIsShowEditModal ] = useState(false),
  [ todoList, setTodoList ] = useState([]),
  [ currentData, setCurrentData ] = useState({});

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todoData") || '[]');
    setTodoList(todoData);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoList));
  }, [todoList]);
  
  const addItem = useCallback(
    (value) => {
      const dataItem = {
        id: new Date().getTime(),
        content: value,
        completed: false,
      };
      setTodoList((todoList) => [...todoList, dataItem]);
      setIsShowInput(false);
    },
    []
  );

  const removeItem = useCallback((id) => {
    setTodoList((todoList) => todoList.filter((item) => item.id !== id));
  }, []);

  const completeItem = useCallback((id) => {
    setTodoList((todoList) => todoList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    }));
  }, [])

  const openCheckModal = useCallback(
    (id) => {
      setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
      setIsShowCheckModal(true);
    },
    [todoList]
  );

  const openEditModal = useCallback(
    (id) => {
      setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
      setIsShowEditModal(true);
    },
    [todoList]
  );

  const submitEdit = useCallback(
    (newData, id) => {
      setTodoList((todoList) =>
        todoList.map((item) => {
          if (item.id === id) {
            item = newData;
          }
          return item;
        })
      );
      setIsShowEditModal(false);
    },
    []
  );

  return (
    <div className='Bpp'>
      <CheckModal
        isShowCheckModal={isShowCheckModal}
        data={currentData}
        closeModal={() => setIsShowCheckModal(false)}
      />
      <EditModal
        isShowEditModal={isShowEditModal}
        data={currentData}
        submitEdit={submitEdit}
      />
      <MyHeader openInput={() => setIsShowInput(!isShowInput)} />
      <AddInput isShow={isShowInput} addItem={(value) => addItem(value)} />
      {!todoList || todoList.length === 0 ? (
        <NoDataTip />
      ) : (
        <ul className="todo-list">
          {todoList.map((item, index) => {
            return (
              <TodoItem
                dataItem={item}
                key={index}
                removeItem={removeItem}
                openCheckModal={openCheckModal}
                completeItem={completeItem}
                openEditModal={openEditModal}
              />
            );
          })}
        </ul>
      )}
    </div>
  )
}

export default () => (
  <>
    <It></It>
    <Bpp></Bpp>
    {/* <ChildrenDemo>
      <span>1</span>
      <span>2</span>
    </ChildrenDemo> */}
  </>
)
