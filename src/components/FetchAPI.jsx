import React, { useState as st, useEffect as ef } from 'react'

function FetchAPI() {
    const [post, setPost] = st([])
    const [id, setID] = st(1)
    const [isLoading, setIsLoading] = st(true)
    ef(() => {
        const controller = new AbortController();
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            signal: controller.signal
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setPost(data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err.message)
            })
        return () => controller.abort();
    },[id])

    const handleClickPut = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id+1}`,{
            method: 'PUT',
            body: JSON.stringify({
                title: 'test',
                body: 'test Put'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((resp) => resp.json())
        .then((json) => console.log(json)) 
    }
    const handleClickUpdating = () => {
        setID(prev => prev + 1)
    }
    const handleClickReset = () => {
        setID(1)
    }
  return (
    <section>
    {
        isLoading ? ("Loading. . .") : 
            (<>
                {/* <p>{JSON.stringify(post)}</p> */}
                <pre>{JSON.stringify(post, null, 2)}</pre>
                <button onClick={handleClickUpdating}>Updating</button>
                <br/>
                <button onClick={handleClickReset}>Reset</button>
                <br/>
                <button onClick={handleClickPut}>Put For Next ID</button>
            </>)
    }
    </section>
  )
}

export default FetchAPI