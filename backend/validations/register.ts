import * as validator from "express-validator";

export const registerValidations = [
    // email
    validator.body("email", "Введите почту").isString().isEmail()
        .withMessage("Неверная почта").isLength({
        min: 8,
        max: 50
    }).withMessage("Неверная длина почты. Допустимое кол-во" +
        "символов в почте от 8 до 50"),

    // fullname
    validator.body("fullname", "Введите имя").isString()
        .isLength({min: 2, max: 35}).withMessage("Допустимое кол-во символов в имени от 2 до 35"),

    // username
    validator.body("username", "Введите логин").isString()
        .isLength({min: 2, max: 35}).withMessage("Допустимое кол-во символов в логине от 2 до 35"),

    // password
    validator.body("password", "Введите пароль").isLength({min: 6})
        .withMessage("Допустимое кол-во символов в пароле от 6").custom((value, {req}) => {
        if (value !== req.body.password2) {
            throw new Error("Пароли не совпадают");
        } else {
            return value;
        }
    })
]
