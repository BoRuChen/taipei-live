import './App.css';
import taipeilogo from './img/taipeilogo.png'
import {useDispatch, useSelector} from "react-redux";
import {getData} from "./store/actions";
import {useEffect, useState} from "react";
import {BarChart} from "./components/barChart";

const App = () => {
    const [selectTown,setSelectTown] = useState('中正區');
    const towns = ['中正區','大同區','中山區','松山區','大安區','萬華區','信義區','士林區','北投區','內湖區','南港區','文山區'];
    const dispatch = useDispatch();
    const data = useSelector(state => state.dataReducer)
    useEffect(() => {
        dispatch(getData(selectTown))
    }, [selectTown]);


  return(
      <div className={"App"}>
          <div className={'app-logo'}>
              <div style={{textAlign:'center'}}>
                  <img src={taipeilogo} style={{width:'200px'}} alt={'taipei logo'}/>
              </div>
              <div style={{textAlign:"center"}}>109年人口戶數及性別</div>
          </div>
          <div style={{height:'100vh',flex:'1 0 320px',background:'#FCFCFC',minWidth:'320px'}}>
              <div style={{display:'flex',alignItems:'flex-end',height:'10%',width:'100%',marginLeft:'30px'}}>
                  地區&nbsp;&nbsp;
                  <select style={{width:'100px'}} value={selectTown} onChange={(e) => {
                      setSelectTown(e.target.value)
                  }}>
                      {towns.map((town) => {
                          return <option key={town}>{town}</option>
                      })}
                  </select>
              </div>
              <div style={{height:'60%',width:'100%'}}>
                  {data[selectTown] && <BarChart data={data[selectTown]}/>}
              </div>
          </div>
      </div>
  )
}

export default App;
