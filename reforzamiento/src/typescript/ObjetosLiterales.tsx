interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
    // direccion: {
    //     pais: string,
    //     casaNo: number
    // }
}

interface Direccion {
    pais: string,
    casaNo: number
}

const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: 'Gonzalo',
        edad: 25,
        direccion: {
            pais: 'Argentina',
            casaNo: 234
        }
    }

    return (
        <>
            <h3>ObjetosLiterales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}

export default ObjetosLiterales