window.onload = function(){

    let formEl = $("#form");
    let cepEl = $("#cep");
    let logradouroEl = $("#logradouro");
    let bairroEl = $("#bairro");
    let complementoEl = $("#complemento");
    let localidadeEl = $("#localidade");
    let ufEl = $("#uf");
    let btnSubmit = $("#btnSubmit");

    formEl.submit((e) =>{
        e.preventDefault();

        if(cepEl.val() == ""){

            alert("Preencha o campo Cep");
        }else{

            searchAddress(cepEl.val());
        }
    });


    function searchAddress(cep){

        return new Promise((resolve, reject) =>{

            let url = `https://viacep.com.br/ws/${cep}/json/`;

            $.post(url, (response) =>{

                console.log(response);
            });

        })

        resolve();
    }


}