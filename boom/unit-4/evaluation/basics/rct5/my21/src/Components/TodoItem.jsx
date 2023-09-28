export default function TodoItem(props){
    const {name,status,id,handletoggle,handledelete}=props
        return(<>
             <li key={id}>{name}+{status?"Complete":"Not Complete"}<button onClick={()=>handletoggle(id)}>Toggle</button>
             <button onClick={()=>handledelete(id)}>Delete</button>
             
             </li>
             
             </>
             )
    }