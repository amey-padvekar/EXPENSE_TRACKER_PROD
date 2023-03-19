const mongoose = require("mongoose");

const db = async()=>{
    try {
        mongoose.set("strictQuery",false)
        await mongoose.connect(process.env.MONGO_URL,function(){
            app.listen(PORT, () => {
                console.log("listening for requests");
            })
        })
        console.log("DB Connected")
    } catch (error) {
        console.log(error);
    }
}

module.exports = db;