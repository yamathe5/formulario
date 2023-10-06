import { useDraggable } from '@dnd-kit/core';
import PropTypes from 'prop-types';

function SidebarEditItem({ text }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: text,
  });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className="draggable-item">
      {text}
    </div>
  );
}

SidebarEditItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SidebarEditItem;
