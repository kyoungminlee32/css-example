// import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = '엘리';
  const list = ['우유','딸기','바나나','복숭아','요거트'];
  return (
    <>
      <hi className="orange">{`Hello!! ${name}`}</hi>
      <h2>Hello ! </h2>
      <ul>
        {
          list.map((item) => <li>{item}</li>)  
        }
      </ul>
      <img style={{width:'200px',height:'auto'}} src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
    </>
  );
}

export default AppJSX;
