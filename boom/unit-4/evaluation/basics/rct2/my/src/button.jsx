

export default function Button(props){

    const {text,name,clickfunc} = props;
    return (<button onClick={clickfunc}>{name}</button>)
}