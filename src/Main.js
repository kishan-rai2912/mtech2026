import { useEffect,useState } from "react";

const Main=()=>{
    const [resdata,setResdata]=useState([]);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data=>console.log(data))
      .then(data => setResdata(data))
      .catch(err=>console.log(err));
    })
    return(
        <div>
            <h1>promise and ex example</h1>
            <table border="1">
                <tr>
                    <th>S. No.</th>
                    <th>user id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                {resdata?.map((rs,index)=>(
                    <tr>
                    <td>{index+1}</td>
                    <td>{rs.userId}</td>
                    <td>{rs.title}</td>
                    <td>{rs.body}</td>
                    </tr>
                ))}
                
            </table>
        </div>
    );
}
export default Main;