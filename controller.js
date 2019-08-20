const validateInput = require('./helpers/inputValidation');
const removeItem = require('./helpers/removeObjectItem');
const getLowestIndex = require('./helpers/checkPath');

module.exports = {
    input_validation: async (req, res) => {
        const { data, rules } = req.body;  

        if(!data) {
            res.status(400).json({
                message: 'Please provide data attribute in the request body.'
            })
        }
        if(!rules) {
            res.status(400).json({
                message: 'Please provide rules attribute in the request body.'
            })
        }
        const missingFields = await validateInput(data, rules);
        
        if (missingFields.length === 0) {
            return res.status(200).json({
                message: 'Data Object is valid',
                data: data
            });
        }
        return res.status(400).json({
            message: 'Data Object is not valid',
            missingFields
        });
    },
    remove_item: async (req, res) => {
        const { data, item } = req.body;
        if(!data) {
            res.status(400).json({
                message: 'Please provide data attribute in the request body.'
            })
        }
        if(!item) {
            res.status(400).json({
                message: 'Please provide rules attribute in the request body.'
            })
        }
        const obj = await removeItem(data, item);

        if (Object.keys(obj).length == 0){
            return res.status(400).json({
                message: `Attribute ${item} not found`,
                data
            });
        }
        return res.status(200).json({
            message: 'Attribute is removed',
            data: obj
        });
    },
    checkAladdinPath: async (req, res) => {
        const { magic, distances } = req.body;
        if(!magic) {
            return res.status(400).json({
                message: 'Please provide magic array attribute in the request body.'
            });
        }
        if(!distances) {
            return res.status(400).json({
                message: 'Please provide distances attribute in the request body.'
            });
        }
        if(magic.length != distances.length){
            return res.status(400).json({
                message: 'The Magic sources do not match the the distance length.'
            })
        }
        const lowestIndex = await getLowestIndex(magic, distances);
        return res.status(200).json({
            message: 'Aladdin Path fully evaluated',
            lowestIndex,
        })
        

    }
}