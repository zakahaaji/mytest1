const envents=require("events");
const enventEmitter=new envents.EventEmitter();
enventEmitter.addListener("connection",(data)=>{
    console.log("conection 1 ",data);
});
enventEmitter.on("connection",(data)=>{
    console.log("conection 1 ",data);
}) 