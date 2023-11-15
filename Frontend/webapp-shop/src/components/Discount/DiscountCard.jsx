import React, { useState, useEffect } from 'react';


const DiscountCard = () => {
  const [discounts, setDiscounts] = useState([]);
  const [color, setColor] = useState([]);
  
 


 

  useEffect(() => {
      fetch('https://localhost:7042/api/Discount')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((discounts) => {
        const discountList = discounts.filter(discounts => discounts.id);
        setDiscounts(discountList);
      })
  }, []);

  useEffect(() =>{
    
      const discountValue = document.getElementById("text-discount").childNodes;
      
      
      if (discountValue === 50) {
        setColor('blue');
      }
      else if (discountValue === 30) {
        setColor('green');
      }  else {
        setColor('red');
      }
  
  },[]);
    


  return (
    <>
    {discounts.map((discounts) => (
         <div className="cupon" key={discounts.id}>
    <div className="img-box">
      <img src="" alt="" />
    </div>
    <div className="text-box">  
      <p className='text-title'>{discounts.discountName}</p>
      <p id='text-discount' style={{color: color}}>{discounts.discount}</p>
      <p className='text-validity'>{discounts.expiringDate}</p></div>
      <div className="icon-box "><i class="copyicon bi bi-copy"></i></div>
      

    </div>
    ))}
    </>
  );
};

export default DiscountCard;
