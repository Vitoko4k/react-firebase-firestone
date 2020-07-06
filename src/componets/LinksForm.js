import React, {useState} from 'react'

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

    const handleSubmit = e => {
        e.preventDefault();
        props.addOrEditLink(values);
        setValues({...initialStateVal})
    };

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
            <button className='btn btn-primary btn-block'>Guardar</button>
        </form>
    )
};

export default LinksForm;