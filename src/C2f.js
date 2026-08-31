import {useState} from "react";
function C2f() {
    const[count, setCount] = useState(0);
    const add =() =>{
        setCount(count + 1);
    }
    const [section,setSection]=useState('A');
    const change=()=>{
        if(section === 'A')
            setSection('B')
        else 
            setSection('A')
    }

    return(
        <div>
        <h1>
        count: {count}
    </h1>
    <button onClick={add}>Add</button>
        <h1>
        section: {section}
    </h1>
    <h2>Set Section: <button onClick={change}>Set</button></h2>
    </div>
    );
}
export default C2f;