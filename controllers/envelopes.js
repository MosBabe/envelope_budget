const { createId, findById, deleteById } = require("../db/data-helper");
const envelopes = require("../db/data");



exports.getEnvelopes = (req, res, next) => {
    try {
        res.status(200).send(envelopes);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getEnvelopeById = (req, res, next) => {
    try {
        const { id } = req.params;
        const envelope = findById(envelopes, id);

        if (!envelope) {
            return res.status(404).send({
                messsage: "Envelope Not Found",
            });
        }

        return res.status(200).send(envelope);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.addEnvelope = (req, res, next) => {
    try {
        const newId = createId(envelopes);
        const { title, budget } = req.body;
        const newEnvelope = {
            id: newId,
            title,
            budget,
        };
        envelopes.push(newEnvelope);
        res.status(201).send(newEnvelope);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateEnvelope = (req, res, next) => {
    try {
        const { title, budget } = req.body;
        const { id } = req.params;
        const envelope = findById(envelopes, id);

        if (!envelope) {
            return res.send(404).send({
                messsage: "Envelope Not Found";
            });
        }

        envelope.title = title;
        envelope.budget = budget;
        res.status(201).send(envelopes);

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteEnvelope = (req, res, next) => {
    try {
        const { id } = req.params;
        const envelope = findById(envelopes, id);

        if (!envelope) {
            return res.send(404).send({
                messsage: "Envelope Not Found";
            });
        }

        const updatedEnvelopes = deleteById(envelopes, id);
        return res.status(204).send(updatedEnvelopes);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.transfer = (req, res) => {
    try {
        const { fromId, toId } = req.params;
        const { amount } = req.body

        const originEnv = findById(envelopes, fromId);
        const destinationEnv = findById(envelopes, toId);

        if (!originEnv || !destinationEnv) {
            return res.status(404).send({
                message: "Envelope Not Found",
            });
        }

        if (originEnv.budget < amount) {
            return res.status(400).send({
                message: "Amount to transfer exceeds envelope budget funds"
            })
        }

        originEnv.budget -= amount;
        destinationEnv.budget += amount;

        return res.status(201).send(originEnv);
    } catch (err) {
        res.status(500).send(err);
    }
};