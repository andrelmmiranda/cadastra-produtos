/**
 * Esta é uma função retorna uma url de acesso ao banco mongodb
 * 
 * @example 
 *   access('...', <nome do banco>); // 8
 * 
 * @param   { String } obrigatorio Parâmetro obrigatório
 * @param   { String } obrigatorio Parâmetro obrigatório
 * @returns { String }
 */

const access = (data, database)=> data.replace('<key>', database);

module.exports = {
    access,
};