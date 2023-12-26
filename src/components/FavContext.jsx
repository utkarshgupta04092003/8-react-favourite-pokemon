import React, { createContext, useState }  from 'react';

export const favlist = createContext(null);
export default function FavContext({children}) {

    const [list, setList] = useState([]);


    const addToList = (data)=>{
        console.log('from context',data);
        // setList(data);
        console.log('saved')

        let exist = [];
        for(let i=0;i<list.length;i++){
          if(list[i].imageId == data.imageId){
            exist.push(list[i]);
          }
        }

        console.log('exist',exist)
        if(exist.length != 0){
            alert('alread added to favourite.');
            // return;
        }
        else{

          let l = list;
          // l.push(data);
          setList([...list, data]);
          alert('Added to favourite')
        }
    }

    const removeFromList = (imageId)=>{
      let modified = [];
      for(let i=0;i<list.length;i++){
        if(list[i].imageId != imageId){
          modified.push(list[i]);
        }
      }

      setList(modified);
      alert('Removed from favourite');
      // console.log(object)
    }
  return (
    <div>

        <favlist.Provider value={{list, addToList, removeFromList}}>

            {children}
        </favlist.Provider>
        
      
    </div>
  )
}
