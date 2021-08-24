import React from 'react';
import _manifest from '../../../../_manifest';
import './BlogPostModule.css';

export default function BlogPostModule(props) {
    // console.log("POSTS: " ,props.data)
    return (
        <div className={"blog-item position-relative d-flex align-items-end " + props.type} >
            <a href={_manifest.blogBaseUrl+"post/"+props.data.slug } target="_blank">
                <div className="image flex-img radius-4 w-100 h-100">
                    <img src={props.data.featured_image ? props.data.featured_image : "/assets/images/placeholder.png"} alt={props.data.title}/>
                </div>
                <div className="info">
                    <p className="fz14 fw-500 white-color">{props.data.category.name}</p>
                    <h2 className="fw-500 white-color mt-16">
                    {props.data.title}
                    </h2>
                </div>
            </a>

        </div>
    )
}
