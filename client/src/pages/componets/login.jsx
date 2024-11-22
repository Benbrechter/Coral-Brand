import React, {useState , useEffect} from "react"

function Login() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [login , setLogin] = useState([])
    const [signup, setSignup] = useState([])

    const fetchUser = async () => {
        try{
            const response = await fetch('/api/login');
        }catch(error){
            console.error('User could not Login', error)
        }
    }
    const createUser = async () =>{
        try{
            const response = await fetch('/api/signup')
        }catch(error){
            console.error('failed to signup', error)
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    return (
      <>
        <h1>login page</h1>
      </>
    );
  }

  export default Login