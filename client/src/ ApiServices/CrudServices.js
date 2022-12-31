import axios from "axios";

// -----------------Create -----------------------
export function Create(ProductName, ProductCode, Img,UnitPrice, Qty, TotulPrice){
    let URL = "/api/v1/CreateProduct";
    let postBody = {
        ProductName :ProductName,
        ProductCode:ProductCode,
        Img :Img,
        UnitPrice :UnitPrice,
        Qty:Qty,
        TotulPrice:TotulPrice
    }
  return axios.post(URL,postBody)
      .then((res)=>{
            if(res.status===200){
                return true
            }else {
                return false
            }})
      .catch((err)=>{
            console.log(err)
            return false
        })}

// -------------------------Read Product -----------------------------
export  function Read() {
    let URL = "/api/v1/ReadProduct"

    return axios.get(URL)
        .then((res)=>{
            if(res.status===200){
                return res.data["data"]
            }else{
                return false
            }})
        .catch((err)=>{
            console.log(err)
            return false
        })
}

 // -----------------------------Delete ------------------------
export function Delete(id) {
    let URL = "/api/v1/deleteProduct"+id;

   return axios.get(URL)
        .then((res)=>{
            if(res.status===200){
                return true
            }else {
                return false
            }})
        .catch((err)=>{
            console.log(err)
            return false
        })}


/// ------------------------Update

export function Update(id) {
    let URL = "/api/v1/updateProduct"+id;
    let postBody = {
        ProductName :ProductName,
        ProductCode:ProductCode,
        Img :Img,
        UnitPrice :UnitPrice,
        Qty:Qty,
        TotulPrice:TotulPrice
    }

    return axios.post(URL, postBody)
        .then((res)=>{
            if(res.status===200){
                return true
            }else {
                return false
            }})
        .catch((err)=>{
            console.log(err)
            return false
        })
}

