//é necessário importar a dependencia axios com o nmp: 
//nmp i axios --save


app.get("/xxxx", async function(req, resp){
 
   let clima = await buscarClima("Pomerode,SC")
   console.log(clima);
})


async function buscarClima(cidade) {

    var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: "https://api.hgbrasil.com/weather?format=json-cors&array_limit=7&fields=only_results,temp,forecast,max,min,condition_code,sunrise,sunset&key=9262857f&city_name=" + cidade
        //  url: `https://viacep.com.br/ws/${cep}/json/`

    }

    var clima = await axios.request(options)
    console.log(clima.data);
    return clima.data
}

