import { useEffect, useState } from 'react';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Added.css'

const Added = (props) => {
    
    const diffToast = () => {
        toast('Well Done')
    }

    let timess = 0;
    for(const time of props.times){
        timess = timess + time.time;
    }

    const [data, setData]= useState(0)

    const addRestTime = (id) => {
        localStorage.setItem('shopping-cart', JSON.stringify(id));
        setData(id)
    }

    useEffect(()=>{
        const idData = JSON.parse(localStorage.getItem('shopping-cart'));
        if(idData){
            setData(idData)
        }
    },[data])

    return (
        <div className='main-page'>
            <div className='main-list'>
                <div className='profile'>
                    <img src="https://scontent.fdac2-1.fna.fbcdn.net/v/t31.18172-8/13925708_1675449472778068_7000627798008195890_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGWpU5YrG9oGpKOQhPiXIwkesZar36xuAZ6xlqvfrG4BlK1cCc9-Q4Sd3PXO60cbCnXDbDki3nbMVsFMnh8eruc&_nc_ohc=tiscri_b02wAX8-iehD&_nc_ht=scontent.fdac2-1.fna&oh=00_AT_2xENhSNo7f12648otWYCwVvqNIxaduClmKuoo8MRG2w&oe=635B25BD" alt="" />
                    <div>
                    <h4>Robiul Islam</h4>
                    <p>Dhaka</p>
                    </div>
                </div>
                <div className='profile'>
                    <h4>54 kg weight</h4>
                    <h4>5.6 feet Height</h4>
                    <h4>years 25</h4>
                </div>
            </div>
            <div className='button'>
                <h1>Add a Brack</h1>
                <div>
                    <button onClick={()=>addRestTime(5)}>05 minit</button>
                    <button onClick={()=>addRestTime(10)}>10 minit</button>
                    <button onClick={()=>addRestTime(20)}>20 minit</button>
                    <button onClick={()=>addRestTime(30)}>30 minit</button>
                </div>
                <div>
                    <h1>Exercise Details</h1>
                    <div>
                        <p>Exercise time: {timess} minit</p>
                        <p>Break time: {data} min</p>
                    </div>
                    <button onClick={diffToast}>Activity Completed</button>
                    <ToastContainer/>
                </div>
            </div>
        </div>
        
    );
};

export default  Added;