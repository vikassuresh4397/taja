// Write Code here
// do a default export
import React from "react"
function PlayPause(){
const [state,setState]=React.useState("The state is paused")
const [text,setText]=React.useState("paused")
function handleBtn(){
    setText("playing")
    setState("The state is playing")
}

return <div>
    <h1>{state}</h1>
    <button onClick={handleBtn}>{text}</button>
</div>
}
export default PlayPause;
