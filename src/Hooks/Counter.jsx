import React, { Fragment,useDocumentTitle, useState } from 'react';

function Counter(props) {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');

    useDocumentTitle('${name} has clicked ${count}');
    return (
        <Fragment>
            <input type="text" onChange={e =>setName(e.target.value)}/>
        <div>
            {name} has clicked {count} times
        </div>
        <button onClick={()=>setCount(count+1)}>increse</button>
        <button onClick={()=>setCount(count-1)}>decres</button>
        </Fragment>
    );
}

export default Counter;