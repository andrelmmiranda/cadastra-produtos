const submitDisable = () => $('#nome').val() === '' || isNaN($('#vlUnit').val()) === '' || ($('#codProduto').val() === '') ?
    $('[type="submit"]').prop('disabled', true)
: 
    $('[type="submit"]').prop('disabled', false)