import moment from "moment";
import { Item } from "../types/Item";

export function formatDate(list: Item[], Date: Date) {
  return moment(Date).format("DD/MM/YYYY");
}

export const getCurrentMonth = () => {
  let now = new Date();
  return moment(now).format("MM-YYYY");
  //return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  //let [year, month] = date.split("-");
  // let dateSplit = date.split("-");
  let year = moment(date).format("YYYY");
  let month = moment(date).format("MM");

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }
  return newList;
};

/*

export const filterDate = () => {
	

}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split("-");
  // let dateSplit = date.split("-");
  //let year = dateSplit[0];
  //let month = dateSplit[1];

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }
  return newList;
};


export function formatDate(Date: Date) {
  return moment(Date).format("DD/MM/YYYY");
  }
*/
