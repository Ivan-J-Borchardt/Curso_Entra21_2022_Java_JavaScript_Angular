//é necessário importar a dependencia axios com o nmp: 
//nmp i axios --save

buscarEnd('89107000')

async function buscarEnd(cep) {

    var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: `https://viacep.com.br/ws/${cep}/json/`

    }

    var endereco  = await axios.request(options)
    console.log(endereco.data);

}