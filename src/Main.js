import { useEffect,useState } from "react";

const Main=()=>{
    const [count,setCount]=useState(0);
    const [age,setAge]=useState(18);
    const [resdata,setResdata]=useState([]);
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //fetch("https://jsonplaceholder.typicode.com/todos/1") 
    useEffect(() => {
         fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json()) 
        .then(data => { console.log(data); setResdata(data); }) 
        .catch(err => console.log(err));
        }, []);
    return(
        <div>
            <h1>Example of useEffect</h1>           
            <h3>Count value is {count}</h3>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <h3>Age value is {age}</h3>
            <button onClick={() => setAge(age + 1)}>Add</button>

            <h1>promise and ex example</h1>
            <table border="1">
                <tr>
                    <th>S. No.</th>
                    <th>user id</th>
                    <th>title</th>
                    <th>body</th>
                    <th>completed</th>
                </tr>
                {resdata?.map((rs,index)=>(
                    <tr>
                    <td>{index+1}</td>
                    <td>{rs.userId}</td>
                    <td>{rs.title}</td>
                    <td>{rs.body}</td>
                    <td>{rs.completed ? 'true':'false'}</td>
                    </tr>
                ))}
                
            </table>
             {/* <table border="1">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{resdata.userId}</td>
                        <td>{resdata.title}</td>
                        <td>{resdata.completed ? 'true' : 'false'}</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    );
}
export default Main;