const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const { getEnvelopes,
    getEnvelopeById,
    addEnvelope,
    updateEnvelope,
    deleteEnvelope,
    transfer } = require('../controllers/envelopes');

router.get('/',getEnvelopes);
router.get('/:id', getEnvelopeById);
router.post('/',addEnvelope);
router.put('/:id', updateEnvelope);
router.delete('/:id', deleteEnvelope);
router.put('/:fromId/transfer/:toId', transfer);

module.exports = router;