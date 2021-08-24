import React from 'react';
import './TextContent.css';

export default function TextContent(props) {
    return (
        <div className="textarea-content">
            {props.children}
        </div>
    )
}
