const inputs = document.querySelectorAll('.input');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active'); /* clica no input ele sobe*/
  }


  const handleFocusOut = ( {target}) => {
if(target.value == '') { /* verifica se tem algo dentro do input, se tiver ele não voltara
ao normal*/
    const span = target.previousElementSibling;
    span.classList.remove('span-active');  /* quando clica em outro input, o outro input ja clicado 
    anteriormente volta ao normal*/
}
  }

  const handleChange = () =>{

    const [username, password] = inputs;
  }

inputs.forEach((input) => input.addEventListener('focus', handleFocus)); 
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut)); 
inputs.forEach((input) => input.addEventListener('input', handleChange)); 
