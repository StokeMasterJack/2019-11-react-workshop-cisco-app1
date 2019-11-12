import React from 'react';

function Red({suffix, bg}) {
    const bg1 = bg ? bg : 'yellow';
    const suffix1 = suffix ? suffix : ' MD';

    const bg2 = bg || 'pink';
    return <div style={{color: 'red', backgroundColor: bg2}}>
        Red {suffix1}
    </div>;
}

function Blue() {
    return <div style={{color: 'blue', backgroundColor: '#EEEEEE'}}>
        Blue
    </div>;
}

function ChosePage({pageName}) {
    if (pageName === 'redPage') {
        return <div>
            <h1>Red Page</h1>
            <Red bg='lightGreen' suffix='DDS'/>
            <Red bg={'cyan'} suffix='Dude Man'/>
            <Red/>
        </div>;
    } else if (pageName === 'bluePage') {
        return <div>
            <h1>Blue Page</h1>
            <Blue/>
            <Blue/>
            <Blue/>
        </div>;
    } else {
        return <div>Bad pageName {pageName}</div>;
    }

}

function CButton({children}) {
    return <button style={{margin: '.5rem', color: 'darkRed'}}>{children}</button>;
}

function ButtonBar() {

    const style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        margin: 0,
        backgroundColor: '#CCCCCC'
    };

    return <div style={style}>
        <CButton>Red</CButton>
        <CButton>Blue</CButton>
    </div>;
}

function App() {
    return <div>
        App1
        <div>
            <ChosePage pageName={'bluePage'}/>
            <ButtonBar/>
        </div>
    </div>;
}


export default App;
