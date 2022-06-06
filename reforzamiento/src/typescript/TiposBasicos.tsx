import React from 'react'

const TiposBasicos = () => {
    const nombre: string = "Gonzalo"
    const edad: number = 35
    const estaActivo: boolean = true
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua']

    return (
        <>
            <h3>Tipos Básicos</h3>
            { nombre } - { edad } - { estaActivo ? 'Es activo' : 'No es activo'}
            <br />
            { poderes.join(', ') }
        </>
    )
}

export default TiposBasicos