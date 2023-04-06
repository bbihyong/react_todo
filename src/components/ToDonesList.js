import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import ToDone from './ToDone';

const DoContainer = styled.div`
  min-width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ListTitle = styled.h1`
  margin-left: 15px;
  margin-bottom: 15px;
  font-size: 32px;
  font-weight: bold;
`;

const List = styled.ul`
  width: 100%;
  padding: 5px 10px 10px 10px;
  background: #13876C;
  border-radius : 13px;
`;

const Modal = styled.div`
  position: absolute;
  top: 1px;
  display: flex;
  flex-direction: column;
  width: 100%;
  & span {
    border-radius: 15px 15px 0 0;
    height: 65px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
`;

const ToDonesList = ({ toDos, toDones, changeCategory, delRow }) => {
  return (
    toDones.length > 0 && (
      <DoContainer>
        <ListTitle>Done List</ListTitle>
        {!!toDos && toDos.length === 0 && (
          <Modal>
            <span>Today Complete to do!</span>
          </Modal>
        )}
        <Droppable droppableId='toDonesId'>
          {(provided) => (
            <List ref={provided.innerRef} {...provided.droppableProps}>
              {toDones.map((toDone, index) => (
                <ToDone
                  key={toDone.id}
                  {...toDone}
                  changeCategory={changeCategory}
                  delRow={delRow}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DoContainer>
    )
  );
};

export default ToDonesList;
