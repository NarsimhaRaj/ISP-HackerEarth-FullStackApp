import * as ispApi from "../api/ispApi";
import actionTypes from "../actionTypes";
import dispatcher from "../dispatcher";

export function getISPList() {
  return ispApi.getISPList().then(res => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatcher.dispatch({
      actionType: actionTypes.GET_ISP_LIST,
      data: res.data
    });
  }).catch(error=>{
    dispatcher.dispatch({
      actionType: actionTypes.API_ERROR,
      error: error.message
    });
  });
}
