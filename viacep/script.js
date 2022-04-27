const form = document.getElementById('form');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const Cidade = document.getElementById('Cidade');
const ddd = document.getElementById('ddd');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  let cep = document.forms['form']['cep']
  if(cep.value.length === 8){
    value = cep.value
    
    fetch(`https://viacep.com.br/ws/${value}/json/`)
      .then(res => res.json())
      .then(data => (
        rua.value = data.logradouro,
        bairro.value = data.bairro,
        Cidade.value = data.localidade,
        ddd.value = data.ddd
        ))

  }else{
    cep.value = ''
  }

});
