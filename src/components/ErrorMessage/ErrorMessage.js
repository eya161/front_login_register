import React from 'react';
import { Alert } from 'react-bootstrap';
import {useState} from 'react';
import { Button } from 'bootstrap';

export default function ErrorMessage() {
        const [show, setShow] = useState(true);
        if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(true)} >
                <Alert.Heading>Oooops.</Alert.Heading>
                <p>
                    Compte n'existe pas
                </p>
            </Alert>
        );}
        return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

