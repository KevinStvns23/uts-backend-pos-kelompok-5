const categoryService = require('./category-service');

async function createCategory(req, res, next) {
  try {
    const { name, description } = req.body;
    const category = await categoryService.createCategory(name, description);
    
    return res.status(201).json({
      statusCode: 201,
      message: 'Category created successfully',
      data: category,
    });
  } catch (error) {
    return next(error);
  }
}

async function getCategories(req, res, next) {
  try {
    const categories = await categoryService.getCategories();
    return res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: categories,
    });
  } catch (error) {
    return next(error);
  }
}

async function getCategoryById(req, res, next) {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    return res.status(200).json({
      statusCode: 200,
      message: 'Success',
      data: category,
    });
  } catch (error) {
    return next(error);
  }
}

async function updateCategory(req, res, next) {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    
    const updatedCategory = await categoryService.updateCategory(id, name, description);
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.status(200).json({
      statusCode: 200,
      message: 'Category updated successfully',
      data: updatedCategory,
    });
  } catch (error) {
    return next(error);
  }
}

async function deleteCategory(req, res, next) {
  try {
    const { id } = req.params;
    const deletedCategory = await categoryService.deleteCategory(id);
    
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.status(200).json({
      statusCode: 200,
      message: 'Category deleted successfully',
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};