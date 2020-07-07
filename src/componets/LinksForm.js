import React, {useState, useEffect} from 'react';
import { db } from '../firebase';
import { toast } from 'react-toastify';

export const LinksForm = (props) => {

    const initialStateVal = {
        url:'',
        name:'',
        description:''
    };

    const [values, setValues] = useState(initialStateVal);

    const handleInputChange = e => {
        const {name,value} = e.target;
        setValues({...values, [name]:value})
    };

    const valiUrl = str => {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(str);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!valiUrl(values.url)){
            return toast('URL invalida',{
                type: 'warning',
                autoClose: 1000
            })
        }
        props.addOrEditLinks(values);
        setValues({...initialStateVal});
    };

    const getLinkById = async (id) => {
        const doc = await db.collection('links').doc(id).get();
        setValues({...doc.data()})
    };

    useEffect(() => {
        if (props.currentId === ''){
            setValues({...initialStateVal});
        } else {
            getLinkById(props.currentId);
        }
    }, [props.currentId]);

    return (
        <form className='card card-body' onSubmit={handleSubmit}> 
            <div className='form-group input-group'>
                <div className='input-group-text bg-light'>
                    <i className='material-icons'>insert_link</i>
                </div>
                <input 
                type='text' 
                className='form-control'
                placeholder='https://algunurl.com'
                name='url'
                onChange={handleInputChange}
                value={values.url}
                />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-text bg-light'>
                    <i className='material-icons'>create</i>
                </div>
                <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Nombre del sitio web'
                onChange={handleInputChange}
                value={values.name}
                />
            </div>
            <div className='form-group'>
                <textarea name='description' rpws='3' className='form-control'
                placeholder='Escribe una descripcion'
                onChange={handleInputChange}
                value={values.description}></textarea>
            </div>
            <button className='btn btn-primary btn-block'>
                {props.currentId === '' ? 'Guardado' : 'Actualizado'}
            </button>
        </form>
    )
};

export default LinksForm;