import * as yup from "yup";

const validations = yup.object().shape({
    gameName: yup.string().required('Zorunlu alan'),
    category1: yup.string().required('Zorunlu alan.'),
    category2: yup.string().required('Zorunlu alan.'),
    gameDate: yup.string().required('Zorunlu alan.'),
    gameCover: yup.string().required('Zorunlu alan.'),
    gameView: yup.string().required('Zorunlu alan.'),
    publisher: yup.string().required('Zorunlu alan.'),
    link : yup.string().required('Zorunlu alan.'),
});

export default validations;