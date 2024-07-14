import { useNavigate } from 'react-router-dom';
import { getCookie } from "./cookie"
const [acces, setAccess] = ('')

const AccessCheck = () =>{
    const id = getCookie('id')
   {
        axios({method:'POST',url:OnRun+'/access',data:{id:id}
        }).then(response=>{
            if(response.data.replay){
                setAccess(response.data)
            }else{
                setCookie('id','',0)
                Navigate('/',)
            }
        })
    }{Navigate('/')}
}


useEffect(AccessCheck,[])


const Desk = () => {
    const id = getCookie('id')
    const Navigate = useNavigate()

    const back = () => {

        Navigate('/login')

    }

    return (
        <div className="bg-blue-500 h-screen">

            <button className="border-solid border-4 w-20 font-bold text-white h-14 mt-5 ml-5 rounded-lg" onClick={back}>

                خروج
            </button>



        </div>
    )
}


export default Desk

