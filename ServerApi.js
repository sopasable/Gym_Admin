const express=require("expres");
const mysql=require("mysql"); 

const app=express();

const db = mysql.createConnection({
    host: "localhost",
    user: "emiliano",
    password: "DBPASSWORD",
    database:"DB_Gym"
})

//Conectar a la BD
db.connect(err=>{
    if(err){
        console.log("Error al conectar la base de datos", err);
    }else{
        console.log("Conexión exitosa a la base de datos");
    }
});

//Endpoint para obtener datos de la base de datos
app.get("/obtenerDatos",(req,res)=>{ //***Cambiar /obtenerDatos por algo que se conecte al mysql desde el server linux
    const query="SELECT * FROM tabla"; //Select de ejemplo
    db.query(query,(err,result=>{
        if(err){
            console.error("Error al obtener datos: ",err);
            res.status(500).json({error:"Error al obtener datos"});
        }else{
            res.json(result);
        }
    }));
});

//Puerto en el que la API escuchara las solicitudes
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`API escuchando en el puerto ${PORT}`);
})