import React from "react";

export function Blue() {
    return <div style={{color: 'blue', backgroundColor: '#EEEEEE'}}>
        Blue
    </div>;
}

export function Red({suffix, bg}) {
    const suffix1 = suffix ? suffix : ' MD';
    const bg1 = bg || 'pink';
    return <div style={{color: 'red', backgroundColor: bg1}}>
        Red {suffix1}
    </div>;
}

