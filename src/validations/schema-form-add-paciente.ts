import Joi from "joi";

export const schemaFormAddPaciente = Joi.object({
    mascota: Joi.string()
        .max(20)
        .required()
        .messages({
            "string.empty": 'El nombre de la Mascota es requerida',
            "string.max": 'El máximo es 20 caracteres'
        }),
    duenio: Joi.string()
        .max(20)
        .required()
        .messages({
            "string.empty": 'El nombre de la duenio es requerida',
            "string.max": 'El máximo es 20 caracteres'
        }),   
    email: Joi.string()
        .required()
        .email({tlds:false})
        .messages({
            "string.empty": 'El email es requerido',
            "string.email": 'el email debe ser correcto'
        }),
    raza: Joi.string()
        .max(20)
        .required()
        .messages({
            "string.empty": 'La raza es requerida',
            "string.max": 'El máximo es 20 caracteres'
        }),       
})