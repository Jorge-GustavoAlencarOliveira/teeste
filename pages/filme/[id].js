import React from 'react'
import Detalhes from '../../Components/Detalhes';
import { useRouter } from 'next/router';


const id = () => {
  const router = useRouter();
  const {id} = router.query;  
    if (id){
      return (
        <>
          <Detalhes id={id} />
        </>
      )
    }
}  

export default id;
