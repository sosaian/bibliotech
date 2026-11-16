/**
 * @file category_repository.js
 * @brief Repositorio para la capa de acceso a las categorías de documentos listadas en Bibliotech.
 * @project Bibliotech
 * @author Tecnologías Informáticas B - Facultad de Ingeniería - UNMdP
 * @license http://www.gnu.org/licenses/gpl.txt GNU GPL 3.0
 * @date Octubre 2026
 */

/**
 * @details El Patrón Repositorio actúa como un mediador entre la capa de dominio 
 * (controladores) y la capa de persistencia (MySQL). Centraliza el acceso a datos, 
 * evitando tener consultas SQL dispersas por toda la aplicación.
 */
const db = require('../config/db');

/**
 * @class CategoryRepository
 * @brief Invoca los procedimientos necesarios para exponer las categorías de documentos listados
 * en Bibliotech sin agregar lógica de presentación ni consultas SQL.
 */
class CategoryRepository 
{
    /**
     * @brief Invoca `sp_get_all_categories()` y recupera todas las categorías.
     * @returns {Promise<Array<Object>>} Array de objetos con los atributos `id` y `name`.
     */
    async findAll() 
    {
        const [result] = await db.execute('CALL sp_get_all_categories()');
        
        // El procedimiento devuelve un resultset con las filas del SELECT.
        // Se recupera únicamente ese primer conjunto de resultados.
        return result[0]; 
    }
}

module.exports = new CategoryRepository();