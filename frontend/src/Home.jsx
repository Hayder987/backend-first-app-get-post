import { useEffect, useState } from "react";


const Home = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
      fetch("http://localhost:5000")
      .then(res=> res.json())
      .then(data=> setData(data))
    },[])

    const formHandler = (e)=>{
       e.preventDefault();

       const form = e.target;
       const name =  form.name.value;
       const email = form.email.value;

       const users = {
        name,
        email
       }
       console.log(users)

       fetch('http://localhost:5000/users',{
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body:JSON.stringify(users)
       })
       .then(res=> res.json())
       .then(newData=> {
        const newUser = [...data, newData]
        setData(newUser)
        form.reset()
       })
       

    }

    return (
        <div className="p-12">
            <div className="">
                <form onSubmit={formHandler} className="flex flex-col gap-4 max-w-[450px] p-12">
                    <input className="border-2 p-3 " type="text" name="name" id="" placeholder="name"/>
                    <input className="border-2 p-3 " type="email" name="email" id="" placeholder="email"/>
                    <button className="border-2 p-3 bg-blue-200">submit</button>
                </form>
            </div>
           {
            data.map((item)=>(
                <div key={item.id} className="px-12">
                  <p className="">{item.id} : {item.name} : {item.email}</p>
                </div>
            ))
           }
        </div>
    );
};

export default Home;