import {useState} from 'react'

function useForm(valoresIniciais){
    const [values, setValues] = useState(valoresIniciais);
  
    function setValue(key, e) {
      setValues({
        ...values,
        [key]: e,
      });
    }
  
    function handleChange(e) {
      setValue(e.target.getAttribute("name"), e.target.value);
    }
  
    function clearForm(){
      setValues(valoresIniciais)
    }
  
    return {
      values,
      handleChange,
      clearForm
    }
  }

  export default useForm