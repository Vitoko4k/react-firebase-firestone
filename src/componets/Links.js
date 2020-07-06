import React, {useEffect, useState} from 'react';
import LinksForm from './LinksForm';
import {toast} from 'react-toastify';

import {db} from '../firebase'

export const Links = () => {

    const [links, setLinks] = useState([]);

    const addOrEditLinks = async (linkObject) => {
        await db.collection('links').doc().set(linkObject);
        toast('Nuevo link agregado',{
            type:'success'
        })
    };

    const onDeleteLink = async id => {
        if (window.confirm('¿Estas seguro de eliminar este link?')) {
            await db.collection('links').doc(id).delete();
            toast('Link eliminado corectamente',{
                type:'error',
                autoClose: 2000
            })
        }
    }

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
                <div className='card mb-1' key={link.id}>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between'>
                            <h4>{link.name}</h4>
                            <i 
                            className='material-icons text-danger' 
                            onClick={() => onDeleteLink(link.id)}
                            >close</i>
                        </div>
                        <p>{link.description}</p>
                        <a href={link.url} target='blank' rel='noopener noreferrer'>
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