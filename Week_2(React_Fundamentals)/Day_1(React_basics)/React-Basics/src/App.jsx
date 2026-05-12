import { useState } from 'react'
import { ProfileCard } from './components/ProfileCard'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  const userProfiles = [
    {
      id: 1,
      name: "Sarah Jenkins",
      img: "https://i.pravatar.cc/150?u=sarah",
      role: "Frontend Developer",
      status: "Active",
      age: 28
    },
    {
      id: 2,
      name: "Marcus Chen",
      img: "https://i.pravatar.cc/150?u=marcus",
      role: "UI/UX Designer",
      status: "Away",
      age: 24
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      img: "https://i.pravatar.cc/150?u=elena",
      role: "Project Manager",
      status: "Busy",
      age: 32
    },
    {
      id: 4,
      name: "David Smith",
      img: "https://i.pravatar.cc/150?u=david",
      role: "Backend Engineer",
      status: "Active",
      age: 30
    },
    {
      id: 5,
      name: "Amara Okafor",
      img: "https://i.pravatar.cc/150?u=amara",
      role: "QA Tester",
      status: "Offline",
      age: 27
    }
  ];

  return (
    <>
      
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Navbar />
        <div style={{display:'flex',flexWrap:'wrap'}}> 
          {
            userProfiles.map((profile)=>{
              return <ProfileCard key={profile.id} user={profile} />
            })
          }
        </div>
          <Footer />
      </div>
  
    </>
  )
}

export default App
