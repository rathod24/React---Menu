import React, { useEffect } from 'react'
import Data from './Data';

const headerCategory=[
  ...new Set(Data.map((item)=>{
      return item.category
  })
  ),"All"
]


const Nav = ({SetMenu}) => {
 
  function searchByCategory(e,category){
    e.preventDefault()
    
    if(category==="All"){
      SetMenu(Data);
    }
    else{
      const updatedMenu=Data.filter((item)=>{
        if(item.category==category){
           return item
        }
      })
      SetMenu(updatedMenu);
    }
  }
  return (
    <>
    <header><h1>Menu</h1></header>
    <nav>
      {
       headerCategory.map((item,index)=>{
        return <button key={index} onClick={(e)=>searchByCategory(e,item)}>{item}</button>
       }) 
      }
    </nav>
    </>
    
  )
}

export default Nav