// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';
function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    // alert(event);
  }
  return (
    <>
    <button onClick={handleClick}>버튼</button>
    <form onSubmit={() => {}}>
      <input />
    </form>
      <Avatar 
         photo='https://images.unsplash.com/photo-1673905110319-20284ef6f87d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
         isNew={true}
      />
      <Profile
        img_profile='https://images.unsplash.com/photo-1673905110319-20284ef6f87d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='avatar'
        name='james'
        title='프론트앤드 개발자'
        isNew={true}
      />
      <Profile
        img_profile='https://images.unsplash.com/photo-1673905110319-20284ef6f87d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='avatar2'
        name='jane'
        title='프론트앤드 개발자2'
        isNew={false}
      />
      <Profile
        img_profile='https://images.unsplash.com/photo-1673905110319-20284ef6f87d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='avatar3'
        name='Tomas'
        title='프론트앤드 개발자3'
        isNew={true}
      />
    </>
  );
}

export default AppProfile;
