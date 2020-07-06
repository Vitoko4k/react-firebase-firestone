import React from 'react';
import LinksForm from './LinksForm';

import {db} from '../firebase'

export const Links = () => {

    const addOrEditLinks = async (linkObject) => {
        await db.collection('links').doc().set(linkObject)
        console.log('nueva tarea agregada')
    }

    return <div>
        <LinksForm addOrEditLink={addOrEditLinks} />
        <h1>Links</h1>
    </div>
};

export default Links;