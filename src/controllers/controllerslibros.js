import Libros from "../models/Librosmodels.js";

export const register = async (req, res) => {
    const {NombreLibro, Autor, AñoPublicacion, Existencias, Categoria} = req.body;
//Va a traer el contenido, se llama body y se encuentra dentro del req
//De body se va usar lo que halla declarado en el objeto
    try {
        const newLibro = new Libros({
        NombreLibro,
        Autor,
        AñoPublicacion, 
        Existencias, 
        Categoria,
    });
    await newLibro.save();
    res.json(newLibro);
    console.log("Registro guardado <<<models/Libros/register>>");
} catch (error) {
    res.json({ message :error});
}
};