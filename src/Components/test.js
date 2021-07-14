import Recat, {useState, useContext} from 'react';

const AuthContext = ( { children }) => {

    const [auth, setAuth] = useState(false);

    const handleAuth = () => {
        setAuth(!auth);
    }

    const data = [auth, handleAuth];
    return <AuthContext.Provider value={data}>{children}  </AuthContext.Provider>;

}

const test = () =>{

    fetch('url',{
        method:'post',
        mode:'cors',
        'header':{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            prop1:'1',
            prop2: '2'
        }).then((response)=>{
            return response
        }).catch((x)=>{
            console.log(x)
        })
    })

    return (
        <p>xyz</p>
    )
}