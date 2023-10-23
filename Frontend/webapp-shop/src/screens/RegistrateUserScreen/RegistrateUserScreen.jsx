import React, { useState } from 'react'
import AccountCreated from '../../components/AccountCreated/AccountCreated'
import RegistrateUser from '../../components/RegistrateUser/RegistrateUser'
function RegistrateUserScreen() {

  const [success, setSuccess] = useState(false);
  
  return (<>{!success ? <RegistrateUser setSuccess={setSuccess}/> : <AccountCreated />}
    
    
    </>
  )
}

export default RegistrateUserScreen