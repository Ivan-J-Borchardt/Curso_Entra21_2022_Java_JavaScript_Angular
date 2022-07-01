//é necessário importar a dependencia axios com o nmp: 
//nmp i axios --save

buscarClima("Pomerode,SC")

async function buscarClima(cidade) {

    var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: "https://api.hgbrasil.com/weather?format=json-cors&array_limit=7&fields=only_results,temp,forecast,max,min,condition_code,sunrise,sunset&key=9262857f&city_name=" + cidade 
      //  url: `https://viacep.com.br/ws/${cep}/json/`

    }

    var endereco  = await axios.request(options)
    console.log(endereco.data);
}

