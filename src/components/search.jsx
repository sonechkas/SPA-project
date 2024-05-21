import { useState } from "react";

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState("");

    const handleKey = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className="mt-4">
            <div className="input-group mb-3">
                <input
                    type="search"
                    id="search-field"
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    className=" form-control"
                />
                <button
                    className="btn btn-dark input-group-append"
                    
                    onClick={handleSubmit}
                >Search
                </button>
            </div>
        </div>

        
    )
}

export { Search }