// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, index, newPresetArray) => {
    let returnArray = []

    if(index > 3 || index < 0){
        returnArray = [404];
        return returnArray;
    }
    else {
        switch(requestType){
            case 'GET':
                returnArray = [200, presets[index]];
                return returnArray;
            case 'PUT':
                presets[index] = newPresetArray;
                returnArray = [200, newPresetArray];
                return returnArray;
            default:
                returnArray = [400];
                return returnArray;

        };
    };
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
