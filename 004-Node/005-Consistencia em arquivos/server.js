const fs = require("fs/promises")


const config = {
    param1: "345",
    param2: 25,
    param3: "Direita"
}

salvar(JSON.stringify(config))

lerArquivo()


async function salvar(dado) {
    await fs.writeFile('config.txt', dado)
}


async function lerArquivo() {

    const dado = await fs.readFile('config.txt', 'utf8')
    console.log(dado)
    console.log(JSON.parse(dado.para1));
}
























