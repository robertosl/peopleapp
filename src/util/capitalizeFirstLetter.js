// deixa a primeira letra em maiusculo
// exemplo -> Exemplo

const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1);
}

export default capitalizeFirstLetter;
