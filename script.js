const apiUrl = 'https://localhost:7242';
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('carregarCarros').addEventListener('click', async () => {
        const response = await fetch(`${apiUrl}/api/Carros`); 
        const data = await response.json();
    
        const carrosList = document.getElementById('carrosList');
        carrosList.innerHTML = '';
    
        data.forEach(async carro => {
            const carroItem = document.createElement('li');
            carroItem.innerHTML = `
                <p>ID: ${carro.id}</p>
                <p>Nome: ${carro.nome}</p>
                <p>Ano: ${carro.ano}</p>
                <p>Combustível: ${carro.combustivel}</p>
                <p>Cor: ${carro.cor}</p>
                <p>Motor: ${carro.motor}</p>
                <p>Potência: ${carro.potencia}</p>
                <p>Preço: ${carro.preco}</p>
                <img src="" alt="Imagem do Carro">
            `;
    
            const imagemResponse = await fetch(`${apiUrl}/api/Carros/${carro.id}/Imagem`); 
            if (imagemResponse.ok) {
                const imagemBlob = await imagemResponse.blob();
                const imagemUrl = URL.createObjectURL(imagemBlob);
                const imagemElement = carroItem.querySelector('img');
                imagemElement.src = imagemUrl;
            } else {
                console.error('Erro ao carregar a imagem do carro.');
            }
    
            carrosList.appendChild(carroItem);
            
            if (response.ok) {
                console.log('Carro carregado com sucesso.');
            } else {
                console.error('Erro ao carregar o carro.');
            }
        });
    });

    document.getElementById('cadastrarCarro').addEventListener('submit', async (e) => {
        e.preventDefault();
    
        const Id = document.getElementById('ID').value;
        const nome = document.getElementById('nome').value;
        const ano = document.getElementById('ano').value;
        const combustivel = document.getElementById('combustivel').value;
        const cor = document.getElementById('cor').value;
        const motor = document.getElementById('motor').value;
        const potencia = document.getElementById('potencia').value;
        const preco = document.getElementById('preco').value;
    
        const novoCarro = {
            Id: parseInt(Id),
            nome: nome,
            ano: ano,
            combustivel: combustivel,
            cor: cor,
            motor: motor,
            potencia: potencia,
            preco: preco
        };
    
        const response = await fetch(`${apiUrl}/api/Carros`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoCarro)
        });
    
        if (response.ok) {
            console.log('Carro cadastrado com sucesso.');
        } else {
            console.error('Erro ao cadastrar o carro.');
        }
    });
    
});

    document.getElementById('deletarCarro').addEventListener('click', async () => {
        const carroId = document.getElementById('carroId').value;

        if (!carroId) {
            console.error('ID do carro é obrigatório.');
            return;
        }

        const response = await fetch(`${apiUrl}/api/Carros/${carroId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Carro deletado com sucesso.');
        } else {
            console.error('Erro ao deletar o carro.');
        }
    });



    document.getElementById('atualizarCarro').addEventListener('click', async () => {
        const carroId = document.getElementById('carroIdAtualizar').value;
        const novoNome = document.getElementById('novoNomeCarro').value;
        const novoAno = document.getElementById('novoAnoCarro').value;
        const novoCombustivel = document.getElementById('novoCombustivelCarro').value;
        const novaCor = document.getElementById('novaCorCarro').value;
        const novoMotor = document.getElementById('novoMotorCarro').value;
        const novaPotencia = document.getElementById('novaPotenciaCarro').value;
        const novoPreco = document.getElementById('novoPreco').value;

        const carroAtualizado = {
            id: parseInt(carroId),
            nome: novoNome,
            ano: parseInt(novoAno),
            combustivel: novoCombustivel,
            cor: novaCor,
            motor: novoMotor,
            potencia: parseInt(novaPotencia),
            preco: (novoPreco)
        };

        const response = await fetch(`${apiUrl}/api/Carros/${carroAtualizado.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carroAtualizado)
        });

        if (response.ok) {
            console.log('Carro atualizado com sucesso.');
        } else {
            console.error('Erro ao atualizar o carro.');
        }
    });

document.getElementById('carregarUsuarios').addEventListener('click', async () => {
        const response = await fetch(`${apiUrl}/api/Usuarios`);
        const data = await response.json();

        const usuariosList = document.getElementById('usuariosList');
        usuariosList.innerHTML = '';

        data.forEach(usuario => {
            const usuarioItem = document.createElement('li');
            usuarioItem.innerText = `ID: ${usuario.id}, Nome de Usuário: ${usuario.nomeUsuario}, Email: ${usuario.email}`;
            usuariosList.appendChild(usuarioItem);
        });
        if (response.ok) {
            console.log('Usuario cadastrado com sucesso.');
        } else {
            console.error('Erro ao cadastrar o Usuario.');
        }
});

document.getElementById('cadastrarUsuario').addEventListener('submit', async (e) => {
    e.preventDefault();

    const UID = document.getElementById('UID').value;
    const Unome = document.getElementById('Unome').value;
    const email = document.getElementById('Email').value;
    const senha = document.getElementById('Senha').value;

    const novoUsuario = {
        Id: parseInt(UID), 
        NomeUsuario: Unome,
        Email: email,
        Senha: senha
    };

    const response = await fetch(`${apiUrl}/api/Usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario)
    });

    if (response.ok) {
        console.log('Usuário cadastrado com sucesso.');
    } else {
        console.error('Erro ao cadastrar o usuário.');
    }
});


    document.getElementById('deletarUsuario').addEventListener('click', async () => {
        const usuarioId = document.getElementById('usuarioId').value;

        if (!usuarioId) {
            console.error('ID do usuário é obrigatório.');
            return;
        }

        const response = await fetch(`${apiUrl}/api/Usuarios/${usuarioId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Usuário deletado com sucesso.');
        } else {
            console.error('Erro ao deletar o usuário.');
        }
    });


    document.getElementById('atualizarUsuario').addEventListener('click', async () => {
        const usuarioId = document.getElementById('usuarioIdAtualizar').value;
        const novoNomeUsuario = document.getElementById('novoNomeUsuario').value;
        const novaSenha = document.getElementById('novaSenha').value;
        const novoEmail = document.getElementById('novoEmail').value;

        const usuarioAtualizado = {
            Id: parseInt(usuarioId),
            NomeUsuario: novoNomeUsuario,
            Senha: novaSenha,
            Email: novoEmail
        };

        const response = await fetch(`${apiUrl}/api/Usuarios/${usuarioAtualizado.Id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioAtualizado)
        });

        if (response.ok) {
            console.log('Usuário atualizado com sucesso.');
        } else {
            console.error('Erro ao atualizar o usuário.');
        }
    });

document.getElementById('adicionarImagemForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const carroIdImagem = document.getElementById('carroIdImagem').value;
    const imagemCarro = document.getElementById('imagemCarro').files[0];

    if (!carroIdImagem || !imagemCarro) {
        console.error('Preencha todos os campos.');
        return;
    }

    const formData = new FormData();
    formData.append('file', imagemCarro);

    const response = await fetch(`${apiUrl}/api/Carros/${carroIdImagem}/UploadImagem`, {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        console.log('Imagem enviada com sucesso.');
    } else {
        console.error('Erro ao enviar a imagem.');
    }
});

