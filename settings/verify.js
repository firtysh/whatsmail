
const initial = require("../config.js")

const verifyMsg= (msg)=>{
    if(msg[0]===initial){
        console.log(msg);
        msg= msg.split(initial)[1].split(/(?<=^\S+)\s/);
        return {cmd:msg[0].toLowerCase(),msg:msg[1]}
    }
    return false;
}

module.exports = verifyMsg;