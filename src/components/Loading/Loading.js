import React from 'react'
import { Spinner } from 'react-bootstrap';

export default function Loading({size=100}) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >
            <Spinner animation="border" role="status" variant="info" style={{height:size,width:size}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
