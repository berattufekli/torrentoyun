import * as yup from "yup";

const validations = yup.object().shape({
    link: yup.string().required(),
    size: yup.number().required(),
    gameLink: yup.string().required(),
    youtube: yup.string().required(),
    publishDate: yup.string().required(),
    os: yup.string().required(),
    processor: yup.string().required(),
    ram: yup.string().required(),
    storage: yup.number().required(),
    displayCard: yup.string().required(),
    vram: yup.string().required(),
    gameDescription: yup.string().required(),

    gamePhoto1: yup.string(),
    gamePhoto2: yup.string(),
    gamePhoto3: yup.string(),
    gamePhoto4: yup.string(),
    gamePhoto5: yup.string(),
});

export default validations;