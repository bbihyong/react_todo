import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5px;
  margin-bottom: 5px;
  background-color: #13876C;
  border-bottom: 1px solid rgba(255,255,255,0.6);
  border: ${(props) => (props.isDragging ? '1px solid #bbb' : null)};
  border-radius: ${(props) => (props.isDragging ? '10px' : null)};
`;
const Text = styled.span`
  width: 80%;
  height: auto;
  font-size: 18px;
  word-break: break-all;
  line-height: 1.3;
  text-decoration: line-through #F46A39;
  text-decoration-thickness : 3px;
  color: #eee;
  font-weight: bold;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 40px;
  border-radius: 5px;
  background: #F2CD6B;
  color: #666;
  padding: 3px;
  &:first-child {
    width: 50px;
    margin-bottom: 3px;
  }
`;

const ToDone = ({ id, text, changeCategory, delRow, index }) => (
  <Draggable draggableId={String(id)} index={index}>
    {(provided, snapshot) => (
      <Item
        id={id}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        {...provided.draggableProps}
        isDragging={snapshot.isDragging}
      >
        <Text>{text}</Text>
        <ButtonContainer>
          <Button name='toDone' onClick={changeCategory}>
            Do
          </Button>
          <Button name='toDone' onClick={delRow}>
            Del
          </Button>
        </ButtonContainer>
      </Item>
    )}
  </Draggable>
);

export default ToDone;
