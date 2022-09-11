    function validateNotEmpty(e) {
        let field = e.target;
        let fieldValue = field.value;

        if (fieldValue == ''){
            displayError('Campo não pode ser vazio', field);
        } else {
            clearError(field);
        }

        field.classList.remove('not-validated');
    checkEnableSubmit();
        }

        
    

//// API Preencher 
function preencherMarca(marca){
  document.querySelector('#marca').innerText = marca
  }

  function preencherModelo(modelo){
  document.querySelector('#modelo').innerText = modelo
  }

  function preencherKm(km){
  document.querySelector('#km').innerText = km
  }

  function preencherAno(ano){
  document.querySelector('#ano').innerText = ano
  }

  function preencherCor(cor){
  document.querySelector('#cor').innerText = cor
  }

  function preencherCambio(cambio){
  document.querySelector('#cambio').innerText = cambio
  }

  function preencherValor(valor){
  document.querySelector('#valor').innerText = valor
  }

  function insert(veiculito) {
    return global.conn.collection("veiculito").insertOne(veiculito);
}
 


  
  fetch("http://localhost:3000")
  .then(function(response){
    //executa quando resolve
    return response.json();
  })
  .then(function(response){
    preencherMarca(response.marca);
    preencherModelo(response.modelo);
    preencherKm(response.km);
    preencherAno(response.ano);
    preencherCor(response.cor);
    preencherCambio(response.cambio);
    preencherValor(response.valor);
   
    //...
  })
  .catch(function(error){
    //executa quando rejeita
    console.error(error)
  });