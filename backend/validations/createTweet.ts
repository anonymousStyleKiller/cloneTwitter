import * as validator from "express-validator";

export const createTweetValidations = [
    // text
    validator.body("text", "Введите текст твита").isString().isLength({max: 280})
        .withMessage("Максимальное длина твита 280 символов")
]
