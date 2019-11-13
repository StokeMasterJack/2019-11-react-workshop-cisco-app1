import React, {useState} from 'react';
import {RedPage} from "./RedPage";
import {BluePage} from "./BluePage";
import {ListPage} from "./ListPage";


function ChosePage({pageName}) {
    if (pageName === 'redPage') {
        return <RedPage/>;
    } else if (pageName === 'bluePage') {
        return <BluePage/>;
    } else if (pageName === 'listPage') {
        return <ListPage nums={[{id:1,val:3}, {id:2,val:5}, {id:3,val:5}]}/>;
    } else {
        return <div>Bad pageName {pageName}</div>;
    }

}

function CButton(props) {
    return <button  {...props} style={{margin: '.5rem', color: 'darkRed'}}>
        {props.children}
    </button>;
}

function ButtonBar1({setPageName}) {

    const style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        margin: 0,
        backgroundColor: '#DDDDDD'
    };

    return <div style={style}>
        <CButton onClick={() => setPageName('redPage')}>Red</CButton>
        <CButton onClick={() => setPageName('bluePage')}>Blue</CButton>
        <CButton onClick={() => setPageName('listPage')}>List</CButton>
    </div>;
}

function ButtonBar2({setPageName}) {

    const onClick = (event) => {
        const pageName = event.target.name;
        setPageName(pageName);
    };

    const style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        margin: 0,
        backgroundColor: '#EEEEEE'
    };

    return <div style={style}>
        <CButton name='redPage' onClick={onClick}>Red</CButton>
        <CButton name='bluePage' onClick={onClick}>Blue</CButton>
        <CButton name='listPage' onClick={onClick}>List</CButton>
    </div>;
}


function mkInitState() {
    return 'redPage';
}

export function App() {

    const [pageName, setPageName] = useState(mkInitState);

    return <div style={{paddingTop:'2.2rem'}}>
        <h1>App1</h1>
        <div>
            <ChosePage pageName={pageName}/>
            <ButtonBar1 setPageName={setPageName}/>
            <ButtonBar2 setPageName={setPageName}/>
        </div>
    </div>;
}
