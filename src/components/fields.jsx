// These will be available from the sidebar
export const fields = [
    {
      type: "input",
      title: "Short text Input"
    },
    {
      type: "textarea",
      title: "Long Text Input"
    },
    {
      type: "select",
      title: "Select"
    },
    {
      type: "text",
      title: "Text"
    },
  
    {
      type: "button",
      title: "Button"
    },
    
  ];
  
  // These define how we render the field
  export const renderers = {
    input: () => <input type="text" placeholder="This is a text input" />,
    textarea: () => <textarea rows="5" />,
    select: () => (
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    ),
    text: () => (
      <p>
        Texto.
      </p>
    ),
    button: () => <button>Button</button>
  };
  