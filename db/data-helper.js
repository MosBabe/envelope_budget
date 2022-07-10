module.exports = {
    createId(data){
        const latestRecord = data[data.length - 1];
        const newId = latestRecord.id + 1;
        if(newId === NaN || newId < 0 || newId === undefined){
            console.error("InvalidId");
        }
        return newId;
    },

    findById(data, recordId){
        const record = data.find((item)=> item.id === parseInt(recordId));

        if(!record){
            console.log("Record not found");
        }
        return record;
    },

    deleteById(data,recordId){
        let index = data.findIndex((item)=>item.id === parseInt(recordId));
        
        if(index === -1){
            console.log("Invalid Index");
        }
        data.splice(index,1);
        return data;
    },
};