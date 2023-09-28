import { useState } from "react"

const TodoInput = ({onboom}) => {
    const [text,setText] = useState("");

return(<>
<input onChange={(e)=>setText(e.target.value)} data-testid = "todo-input" oncl></input>
<button onClick={onboom({title:text,status:false})} data-testid = "add-button">Add Todo</button>
</>)

}

export default TodoInput;