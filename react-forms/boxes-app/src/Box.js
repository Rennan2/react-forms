import React from "react";

const Box = ({ id, width = 5, height = 5, backgroundColor = "purple", handleRemove }) => {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div
                style={{
                    height: `${height}em`,
                    width: `${width}em`,
                    backgroundColor
                }}
            />
            <button onClick={remove}>Remove the box!</button>
        </div>
    );
}

export default Box;