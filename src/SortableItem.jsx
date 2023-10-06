import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { useCallback } from 'react';

export default  function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    
  } = useSortable({id: props.id}); 
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  function handlePointerDown () {
    console.error("xd");
    
  }

  
  return (
    <div onPointerDown={() => console.log("asd")} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <input type="text" placeholder={props.id}  />
    </div>

);
}