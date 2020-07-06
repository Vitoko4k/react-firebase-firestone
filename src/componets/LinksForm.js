import React, {useState} from 'react'

export const LinksForm = () => {

    const [values, setValues] = useState({
        url:'',
        name:'',
        description:''
    });

    const handleInputChange = e => {
        const {name,value} = e.target;
        setValues({...values, [name]:value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
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
                />
            </div>
            <div className='form-group'>
                <textarea name='description' rpws='3' className='form-control'
                placeholder='Escribe una descripcion'
                onChange={handleInputChange}></textarea>
            </div>
            <button className='btn btn-primary btn-block'>Guardar</button>
        </form>
    )
};

export default LinksForm;