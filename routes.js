const express = require('express');
const controller = require('./controller');
const router = express.Router();


router.post('/input-validation', async (req, res, next) => {
    try {
        await controller.input_validation(req, res)
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred',
            error,
        });
    }
});
router.post('/remove-item', async (req, res, next) => {
    try {
        await controller.remove_item(req, res)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error occurred',
            error,
        });
    }
});
router.post('/check-aladdin-path', async (req, res, next) => {
    try {
        await controller.checkAladdinPath(req, res)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error occurred',
            error,
        });
    }
});
    

module.exports  = router;

