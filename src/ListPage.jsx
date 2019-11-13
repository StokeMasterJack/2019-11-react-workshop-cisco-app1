import React from "react";

function numToLi(record) {
    const {id,val} = record;
    return <li key={id}><a href={`rec.jsp?id=${id}`}>{val}</a></li>;
}

/**
 * @param nums an array of numbers. in ts:  Array<number>
 */
export function ListPage({nums}) {
    return <div>
        <h2>List Page</h2>
        <ul>{nums.map(numToLi)}</ul>
    </div>;
}