/**
 * @file category_routes.js
 * @brief Rutas de la API para la gestión de las categorías de documentos listadas en Bibliotech.
 * @project Bibliotech
 * @author Tecnologías Informáticas B - Facultad de Ingeniería - UNMdP
 * @license http://www.gnu.org/licenses/gpl.txt GNU GPL 3.0
 * @date Octubre 2026
 */

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category_controller');
const { verifyToken } = require('../middleware/auth_middleware');
 
/**
 * @brief Todas las rutas de categorías requieren una sesión activa.
 */
router.use(verifyToken);
 
/**
 * @route GET /api/categories
 * @brief Obtener todas las categorías de documentos listadas en Bibliotech.
 */
router.get('/', categoryController.getAllCategories);

module.exports = router;