import React from "react";
import {Red} from './components';

export function RedPage() {
    return <div>
        <h2>Red Page</h2>
        <Red bg='lightGreen' suffix='DDS'/>
        <Red bg={'cyan'} suffix='Dude Man'/>
        <Red/>
    </div>;
}