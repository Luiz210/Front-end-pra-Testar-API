const apiUrl = 'https://localhost:7242';

document.getElementById('carregarCarros').addEventListener('click', async () => {
    const response = await fetch(`${apiUrl}/api/Carros`); 
    const data = await response.json();

    const carrosList = document.getElementById('carrosList');
    carrosList.innerHTML = '';

    data.forEach(carro => {
        const carroItem = document.createElement('li');
        carroItem.innerText = `ID: ${carro.id}, Nome: ${carro.nome}, Ano: ${carro.ano}, Combustível: ${carro.combustivel}
        ,Cor: ${carro.cor}, Motor: ${carro.motor}, Potencia ${carro.potencia}`;
        carrosList.appendChild(carroItem);
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
    
        const novoCarro = {
            Id: parseInt(Id),
            nome: nome,
            ano: ano,
            combustivel: combustivel,
            cor: cor,
            motor: motor,
            potencia: potencia
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

document.addEventListener('DOMContentLoaded', () => {
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
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('atualizarCarro').addEventListener('click', async () => {
        const carroId = document.getElementById('carroIdAtualizar').value;
        const novoNome = document.getElementById('novoNomeCarro').value;
        const novoAno = document.getElementById('novoAnoCarro').value;
        const novoCombustivel = document.getElementById('novoCombustivelCarro').value;
        const novaCor = document.getElementById('novaCorCarro').value;
        const novoMotor = document.getElementById('novoMotorCarro').value;
        const novaPotencia = document.getElementById('novaPotenciaCarro').value;

        const carroAtualizado = {
            id: parseInt(carroId),
            nome: novoNome,
            ano: parseInt(novoAno),
            combustivel: novoCombustivel,
            cor: novaCor,
            motor: novoMotor,
            potencia: parseInt(novaPotencia)
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

document.addEventListener('DOMContentLoaded', () => {
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
});

document.addEventListener('DOMContentLoaded', () => {
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
});