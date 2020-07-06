import React from 'react'

export const LinksForm = () => {
    return (
        <form className='card card-body'>
            <div className='form-group input-group'>
                <div className='input-group-text bg-light'>
                    <i className='material-icons'>insert_link</i>
                </div>
                <input 
                type='text' 
                className='form-control'
                placeholder='https://algunurl.com'
                name='url'/>
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
                />
            </div>
            <div className='form-group'>
                <textarea name='descripcion' rpws='3' className='form-control'
                placeholder='Escribe una descripcion'></textarea>
            </div>
        </form>
    )
};

export default LinksForm;