import React from 'react';


const MenuProduct = ({menu}) => {
  return (
    <div className='menu-container grid'>
        
            {menu.map((item)=>{
                const {id,img,desc,price,title}=item;
                return (
                    <div key={id} className='card'>
                        <figure>
                          <img src={img} alt="menu-pic" />
                        </figure>
                        <div className='flex' >
                            <h2>{title}</h2>
                            <p style={{paddingRight:'10px'}}>{price}</p>
                        </div>
                        <div>
                            {desc}
                        </div>
                       
                    </div>
                )
            })}
       
    </div>
  )
}

export default MenuProduct