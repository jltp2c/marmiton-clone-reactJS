import {useEffect, useState} from 'react';

function UseFetchData(url, page) {
    const [data,setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const[error,setError] = useState(true)
  
    useEffect(() => {
        let cancel = false;
        async function fetchData (){
          try{
            setIsLoading(true)
            const queryParam = new URLSearchParams();
            if (page){
                queryParam.append('limit', 9);
                queryParam.append('skip', (page-1)*6);
                queryParam.append('sort', "createdAt:-1")
            }
            const response = await fetch(url + `?${queryParam}`);
            if (response.ok && !cancel){
              const newData = await response.json();
              setData(r => Array.isArray(newData) ? [...r, ...newData ]: [...r, newData])
            }
          }catch(e){
            setError('error')
          }finally{
            if(!cancel){
              setIsLoading(false)
            }
          }
        }
        fetchData()
        return () => (cancel = true)
      },[url, page]);
      return [[data,setData], isLoading,error]
}

export default UseFetchData