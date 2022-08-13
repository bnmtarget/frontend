import react, { useEffect } from 'react'
import "./App.css";
import MaterialTable from 'material-table'
const data=[
    {name:'Ruthvika',address:'Choutuppal',timings:'04:00pm to 09:00pm',stores:'Trends',intrests:'western cloths'},
    {name:'Praveshika',address:'Dilsukhnagar',timings:'08:00pm to 10:00pm',stores:'reliance',intrests:'watches'},
    {name:'Prathima',address:'suryapet',timings:'07:00am to 09:00pm',stores:'kalayan jewelers',intrests:'Gold'},
    {name:'Sowmya',address:'santhosh nagar',timings:'09:00am to 12:00pm',stores:'mangalya',intrests:'traditional cloths'},
    {name:'Sabah',address:'lbnagar',timings:'04:00pm to 09:00pm',stores:'Trends',intrests:'western cloths'}

];
const columns=[
    {title:'Name',field:'name'},
    {title:'Address',field:'address'},
    {title:'Timings',field:'timings'},
    {title:'Stores',field:'stores'},
    {title:'Intrests',field:'intrests'}
];
export const Buddies=()=>{
    


    return(
        <div className='header'>
        <h2>Find Buddies</h2>
        <MaterialTable title={"Buddie Table"}
        data={data}
        columns={columns}
        />
        </div>
    );

}
export  default Buddies;