import { useState, useEffect } from "react";
import api from "./hooks/api";
import { Item } from "./types/Item";
import {
  getCurrentMonth,
  filterListByMonth,
  formatDate,
} from "./helpers/dateFilter";
import "./App.css";

function App() {
  const [list, setList] = useState<Item[]>([]);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    getList();
  }, []);

  async function getList() {
    const response = await api.get("/bills");
    setList(response.data);
    console.log(list);
  }

  useEffect(() => {
    // setList(items);
    console.log(list);

    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  /*

## Use fetch
  	
 
   useEffect(() => {
			fetch("http://localhost:3333/bills")
				.then(response => response.json())
				.then(data => {
					setList(data);
					console.log(list);
					
					})
				}, [])
				
## Use axios 

		 useEffect(() => {
			api.get("http://localhost:3333/bills")
				.then(response => {
					setList(response.data);
					console.log(response.data);
					
					})
				}, [])

## Async Await

  useEffect(() => {
		getList();
		}, []);
   
   async function getList() {
  		const response = await api.get("/bills");	
				setList(response.data);
				console.log(list);
	 }
					
*/

  return (
    <div className="App">
      <h1>Helo World!</h1>
      {list.map((item) => (
        <p key={item.id}>{formatDate(item.date)}</p>
      ))}
    </div>
  );
}

export default App;
