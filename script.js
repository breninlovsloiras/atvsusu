const modal = document.getElementById('modal');
const btl = document.getElementById('btl');
const f = document.getElementById('f');

btl.addEventListener('click', () => {
    modal.style.display = 'block';
});

f.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nm').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('tel').value;
    const email = document.getElementById('mail').value;
    const senha = document.getElementById('senha').value;

    const user = {
        nome,
        cpf,
        telefone,
        email,
        senha
    };
    localStorage.setItem('user', JSON.stringify(user));

    alert('cadastro concluido'); 
    modal.style.display = 'none';
    window.location.href = 'p2.html';
});

function p2Load(){
    
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        document.getElementById('no').innerText = user.nome;
        document.getElementById('cp').innerText = user.cpf;
        document.getElementById('tl').innerText = user.telefone;
        document.getElementById('em').innerText = user.email;  
    } else {
        alert('você nao possui cadastro, faça um agora');
        window.location.href = 'index.html';
    }
}