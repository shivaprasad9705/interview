import {useEffect} from 'react';

function useDocumentTitle(props) {
    useEffect(()=>{
        document.title= title ;
         return ()=>{
             console.log("clean up code")
         }

        },
  );
}

export default useDocumentTitle;