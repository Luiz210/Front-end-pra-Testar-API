const apiUrl = 'https://localhost:7259';

document.getElementById('carregarCarros').addEventListener('click', async () => {
    const response = await fetch(`${apiUrl}/api/Carros`); 
    const data = await response.json();

    const carrosList = document.getElementById('carrosList');
    carrosList.innerHTML = '';

    data.forEach(carro => {
        const carroItem = document.createElement('li');
        carroItem.innerText = `ID: ${carro.id}, Nome: ${carro.nome}, Ano: ${carro.ano}, Combustível: ${carro.combustivel}`;
        carrosList.appendChild(carroItem);
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
