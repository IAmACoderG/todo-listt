import React from 'react'
import { useState, useEffect } from 'react'
import Table from './Table'

const Form = () => {

    let initialData = localStorage.getItem("preData") ? JSON.parse(localStorage.getItem("preData")) : [];
    const [data, setData] = useState(initialData)
    const [title, setTitle] = useState("")
    const [discription, setDiscription] = useState("")
    console.log(data)

    const submitTodo = (e) => {
        e.preventDefault()
        setData([...data, { title, discription }])
        setTitle("")
        setDiscription("")
    };

    const delTodo = (index) => {
        const delData = data.filter((e, i) => {
            return i !== index;
        })
        console.log("clicked")
        setData(delData)
    };
    useEffect(() => {
        localStorage.setItem("preData", JSON.stringify(data))
    }, [data])


    return (
        <div>
            <div className="p-6 rounded-lg shadow-lg max-w-xl ml-[25rem]">
                <form onSubmit={submitTodo}>
                    <div className="form-group mb-6 text-center">
                        <label htmlFor="title" className="form-label inline-block mb-2 text-gray-700">Title</label>
                        <input type="text" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="title"
                            aria-describedby="emailHelp" placeholder="Enter Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className="form-group mb-6 text-center">
                        <label htmlFor="desc" className="form-label inline-block mb-2 text-gray-700">Discription</label>
                        <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="desc"
                            placeholder="Discription" value={discription} onChange={(e) => { setDiscription(e.target.value) }} />
                    </div>
                    <div className="flex justify-between items-center mb-6">

                    </div>
                    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">ADD</button>

                </form>
            </div>
            <div className='body min-h-fit'>
                {
                    data.map((event, index) => (
                        <Table key={index} title={event.title} discription={event.discription} index={index} data={data} delTodo={delTodo} />
                    ))
                }

            </div>
        </div>
    )
}

export default Form
