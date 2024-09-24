import './App.css';
import Navbar from './components/navbar';
import 'boxicons';
import ProfileCard from './components/ProfileCard';
import ProfileCard2 from './components/ProfileCard2';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import image1 from './components/assets/awodeyipost.jpeg';
import image2 from './components/assets/dolapo.jpg';
import image3 from './components/assets/dolapo2.jpg';
import image4 from './components/assets/code.jpg';
import image5 from './components/assets/wife.jpg';
import image6 from './components/assets/dp.jpg';
import profileImage1 from './components/assets/samuel.jpg';
import profileImage2 from './components/assets/awodeyi.jpeg';
import profileImage3 from './components/assets/dolapo.jpg';
import profileImage4 from './components/assets/dunni.jpg';
import profileImage5 from './components/assets/awo.jpg';


const postData = [
  {
    name: "Samuel Owen",
    bio: "Software | Frontend Developer | Photographer | Content Writer",
    text: "Psalm 46:21",
    profileImage: profileImage1,
    image: image6,
    text : "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    date: "2024-09-10T14:48:00"
  },
  {
    name: "Tolulope Olusanya Awodeyi",
    bio: "Script, Build and Train Conversational AI Agents | Chatbot Dev. Consultancy | Software Talent Trainer | Instructional Designer | Ghostwriter | Poet",
    profileImage: profileImage2,
    image: image1,
    text : "Teach Responsible use of AI, with zero assumptions.",
    date: "2024-09-10T14:48:00"
  },
  {
    name: "Racheal Dolapo Akinola",
    bio: "UI/UX Designer | Script Writer | Content Creator",
    profileImage: profileImage3,
    image: image3,
    text : "Abba's daughter.",
    date: "2024-09-10T14:48:00"
  },
  {
    name: "Oladunni Racheal",
    bio: "Web2 | Web3",
    profileImage:profileImage4,
    image: image4,
    text:"Coding for fun ..",
    date: "2024-09-10T14:48:00"
  },
  {
    name: "Psalmueli",
    bio: "Software Engineer | Frontend Developer",
    profileImage:profileImage1,
    image: image6,
    text :"Strive not to be a success, but rather to be of value.- Albert Einstein" ,
    date: "2024-09-10T14:48:00"
  },
  
  {
    name: "Obafemi Awolowo",
    bio: "Former Minister of Finance and Coordinating Minister of the Economy of Nigeria.",
    profileImage:profileImage5,
    image: image5,
    text :"wife ..",
    date: "2024-09-10T14:48:00"
  },

]

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='content-container flex flex-row gap-x-8 mt-8 mx-auto max-w-6xl'>

        {/* The Left side of the body */}
        <div>
          <ProfileCard />
          <ProfileCard />
        </div>
        
        

        {/* The Center contents of the body */}
        <div className='w-[60%] max-w-[60%]'>
          <CreatePost />

          <div className='space-y-2 py-2'>
            {
              postData.map((eachPost) => (
                <Post 
                {...eachPost}
                 key={eachPost.name}  // unique key is required for each element
                 name={eachPost.name}
                 bio={eachPost.bio}
                 text={eachPost.text}
                 profileImage={eachPost.profileImage}
                 image={eachPost.image}
                 />
                
              ))
            }
          </div>
        </div>

        {/* The Right side of the body */}
        <div>
          <ProfileCard2  />
        </div>
      </div>
    </div>
  );
}

export default App;