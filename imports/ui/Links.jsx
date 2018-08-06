import React from "react";
import { Link } from 'react-router-dom';


export default class Links extends React.Component {
    render() {
        return(
            <div>
                <p> Link component here </p>
                <Link to="/">logout</Link>
            </div>
        )
    }
}