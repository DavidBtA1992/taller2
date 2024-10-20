/**
 * FUNCION PARA RECOLECTAR DATA CON FETCH
 * @param {String} url 
 * @returns {Promise}
 */

export const cargaData = async (url) => {
    try {
        const result = await fetch(url);
        const resultjson = await result.json()
        return resultjson
    } catch (error) {
        console.log("Ha ocurrido un error: " + error)
    }
}