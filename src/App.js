import logo from './logo.svg';
import './App.css';
import Items from './components/Items'; 
import ItemDate from './components/ItemDate';
import  Amit from './components/Amit';


function App() {                        
  const response = [
    {
      itemName:"Sirf excel",
      itemDate:"17",
      itemMonth:"June",
      itemyeaxr:"1998"
  },

  {
    itemName:"Rin2",
    itemDate:"17",
    itemMonth:"June",
    itemyear:"1998"
},

{
  itemName:"Tide3",
  itemDate:"17",
  itemMonth:"June",
  itemyear:"1998"
},

{
  itemName:"Opal",
  itemDate:"17",
  itemMonth:"June",
  itemyear:"1998"
},

  ];
  return (

    <div>
     <card>
      <Items name={response[0].itemName}>
       ABCDEFGHIJKLMN
      </Items>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>

      <Items name={response[1].itemName} ></Items>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>

      <Items name={response[2].itemName} ></Items>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>

      <Items name={response[3].itemName} ></Items>
      <ItemDate day={response[3].itemDate} month={response[3].itemMonth} year={response[3].itemyear}></ItemDate>

      <div className="App"> Hello Jee</div>
      </card>

    </div>
  );
}

export default App;
