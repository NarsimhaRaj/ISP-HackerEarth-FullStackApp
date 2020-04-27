import { EventEmitter } from "events";
import Dispatcher from "../dispatcher";
import actionTypes from "../actionTypes";

const CHANGE_EVENT = "change";
let ispList = [];

class CourseStore extends EventEmitter {

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getISPList() {
    return ispList;
  }

}

const store = new CourseStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.GET_ISP_LIST:
      for(let i of action.data)
        ispList.push(i);
      store.emitChange();
      break;
    case actionTypes.ERROR:
      ispList=[];
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});

export default store;
