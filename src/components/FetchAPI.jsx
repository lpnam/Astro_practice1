import React, { useState as st, useEffect as ef } from 'react'

function FetchAPI() {
    const [post, setPost] = st([])
    ef(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/2')
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setPost(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    },[])

    const handleClickUpdating = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'test',
                body: 'test Put',
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((resp) => resp.json())
        .then((json) => console.log(json)) 
    }
  return (
    <>
        {/* <p>{JSON.stringify(post)}</p> */}
        <pre>{JSON.stringify(post, null, 2)}</pre>
        <button onClick={handleClickUpdating}>Updating</button>
    </>
  )
}

export default FetchAPI