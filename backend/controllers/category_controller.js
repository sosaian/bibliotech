/**
 * @file category_controller.js
 * @brief Controlador para las categorías de documentos listadas en Bibliotech.
 * @project Bibliotech
 * @author Tecnologías Informáticas B - Facultad de Ingeniería - UNMdP
 * @license http://www.gnu.org/licenses/gpl.txt GNU GPL 3.0
 * @date Octubre 2026
 */

const categoryRepository = require('../repositories/category_repository');
// TO-DO: Incorporar el uso del i18n

/**
 * @class CategoryController
 * @brief Administra las categorías de documentos listadas en Bibliotech.
 */
class CategoryController 
{
    /**
     * @brief Obtiene todas las categorías de documentos listados en Bibliotech.
     * @param {Object} req - Objeto de petición HTTP.
     * @param {Object} res - Respuesta HTTP.
     * @param {Function} next - Función para delegar errores al Global Error Handler.
     * 
     * @returns {Promise<void>} Resuelve al enviar la respuesta HTTP con las categorías.
     */
    async getAllCategories(req, res, next)
    {
        try
        {
            const categories = await categoryRepository.findAll();
            res.status(200).json(categories);
        }
        catch (error)
        {
            next(error);
        }
    }
}

module.exports = new CategoryController();