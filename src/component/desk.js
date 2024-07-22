import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from "./cookie";
import { onrun } from './confing';


const Desk = () => {
    const Navigate = useNavigate()
    const handleToDashboard = (symbol) => {
        console.log(symbol);
        setCookie ('symbol', symbol, 10)
        Navigate ('/dashboard')

    }
    const id = getCookie('id')
    const [access, setAccess] = useState(null);
    console.log(access);
    useEffect(() => {
        const id = getCookie('id');

        axios({
            method: 'POST', url: onrun + '/access', data: { id: id }
        }).then(response => {
            if (response.data.replay) {
                setAccess(response.data)
            } else {
                setCookie('id', '', 0)
                Navigate('/');
            }
        }).catch(error => {
            console.error('Error checking access:', error);
            Navigate('/');
        });
    }, [Navigate]);

    const back = () => {

        Navigate('/login');

    };

    return (
        <div className=" bg-blue-600">

            <button className="border-solid border-4 w-20 font-bold text-white h-16 mt-4 ml-5 rounded-lg" onClick={back}>

                خروج
            </button>
            <div className='flex flex-wrap ontainer  text-left w-fit h-fit ml-32'>
                {access ?
                    access['enabled'].map(i => (
                        <div className='w-1/5 p-2 mx-auto text-lg text-gray-200 flex flex-row-reverse border-2 ml-5 mt-5 bg-blue-300 text-blue-800' onClick={()=> handleToDashboard(i.name)} key={i.symbol}>
                            <div className='bg-white p-4 rounded shadow size-28'>
                            <img src={process.env.PUBLIC_URL + '/visa.png' } className="mx-auto" />
                            </div>
                            <div>
                                <h6 className="text-lg font-semibold">{i.symbol}</h6>
                                <p className="text-gray-600">{i.fullName}</p>
                            </div>
                        </div>
                    ))
                    : null
                }



            </div>
        </div>
    );
};

export default Desk