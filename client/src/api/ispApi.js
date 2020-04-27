const baseUrl = "http://localhost:3001";

export function getISPList() {  
  calculateHit();
  return fetch(baseUrl+'/getISPList')
  .then(response => response.json())
  .then(jsondata => jsondata)
  .catch(err=>err);
}
function calculateHit(){
  var hit = localStorage.getItem("apiHits");
  if(hit!=null)
    localStorage.setItem("apiHits",parseInt(hit)+1);
  else
    localStorage.setItem("apiHits",1);
}