import React from 'react';
export const ProfileCard = ({user}) => {
    return (
        <>
            <div style={{backgroundColor:'grey', margin:'5px', display:'flex', flexDirection:'column', alignItems:'center', padding:'10px',borderRadius:'10px'}}>
                <h1 style={{margin:'3px'}}>{user.name}</h1>
                <img src={user.img} width={100} height={100} style={{borderRadius:'50%'}} />
                <p style={{margin:'3px'}} >{user.role}</p>
                <p style={{margin:'3px'}} >{user.status}</p>
                <p style={{margin:'3px'}} >{user.age}</p>
            </div>
        </>
    )
}