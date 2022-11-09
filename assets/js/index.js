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

            $.ajax({
                headers: { "Accept": "application/json"},
                type: 'GET',
                url: url,
                crossDomain: true,
                success: (data, textStatus, request) =>{

                    logradouroEl.val(data.logradouro);
                    bairroEl.val(data.bairro);
                    data.complementoEl != "" ? complementoEl.val(data.complementoEl) : complementoEl.val("");
                    localidadeEl.val(data.localidade);
                    ufEl.val(data.uf);

                }
            });

        })

        resolve();
    }
}