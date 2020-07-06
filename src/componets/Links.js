import React, {useEffect, useState} from 'react';
import LinksForm from './LinksForm';

import {db} from '../firebase'

export const Links = () => {

    const [links, setLinks] = useState([]);

    const addOrEditLinks = async (linkObject) => {
        await db.collection('links').doc().set(linkObject);
        console.log('nueva tarea agregada');
    };

    const getLinks = async () => {
        db.collection('links').onSnapshot((querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(),id:doc.id});
                });
            setLinks(docs);
        });
    };

    useEffect(() => {
        getLinks();
    }, []);

    return (
        <div>
            <div className='col-md-4 p-2'>
                <LinksForm addOrEditLink={addOrEditLinks} />
            </div>
            <div className='col-md-8 p-2'>
                {links.map((link) => (
                <div className='card mb-1'>
                    <div className='card-body'>
                        <h4>{link.name}</h4>
                        <p>{link.description}</p>
                        <a href={link.url} target='blank'>
                            Ir al Webtsite
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
};

export default Links;