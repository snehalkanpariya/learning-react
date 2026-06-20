import React from 'react'
import { useState } from 'react';

const FormInput = () => {
      const [input, setInput] = useState("");
    return (
        <div className="formInput">
            <h1>Form Input</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    
        </div>
    );
}

export default FormInput
