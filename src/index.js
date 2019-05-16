const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenidos al curso English for children");
});

app.get("/usuario", (req, res) => {
  let users = [
    { id:objedid, nombre1:"mara", nombre2:"paola", apellido1:"berrocal", apellido2:"ballestero", fecha_nacimiento:06/03/1999,
correo_acudiente:"maria@gmail.com",observaciones:"string"}
  ];
  res.send(usuario);
});

app.get("/curso", (req, res) => {
  let users = [
    { id:objedid, nombre:"ingles", descripcion:"Desarrollar en los participantes la capacidad de utilizar la lengua extranjera como una herramienta real de comunicación en diversos"}
  ];
  res.send(curso);
});

app.get("/tema", (req, res) => {
  let users = [
    { id:objedid, nombre:"numeros", descripcion:"Los números cardinales (one, two, three, etc.) son adjetivos numerales que se refieren a la cantidad y los ordinales (first, second, third, etc.) se refieren a la distribución",
    id_curso:{ref:Curso, id:objedid}
}
  ];
  res.send(tema);
});

app.get("/actividad", (req, res) => {
  let users = [
    { id:objedid,Nombre:"numeros", enunciado:"escribir los numeros de 1 al 20 en ingles",
    id_tema:{ref:tema, id:objedid}
}
  ];
  res.send(actividad);
});

app.get("/evaluacion", (req, res) => {
  let users = [
    { id:objedid,Nombre:"numeros", enunciado:"pronunciar los numeros en ingles",
    id_actividad:{ref:actividad, id:objedid}
}
  ];
  res.send(evaluacion);
});

app.get("/nota", (req, res) => {
  let users = [
    { id:objedid,n_final:5, nota_final:4,id_Usuario:{ref:Usuario,id:objedid},
    id_evaluacion:{ref:Evalucion,id:objedid}

}
  ];
  res.send(nota);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
