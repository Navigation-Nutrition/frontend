// // let params = new URLSearchParams({ 
// //     app_id: 'bb81efd9', 
// //     app_key: '125dad230ddbe1f538226583e7619cb4', 
// //     ingr: '1 cup of sugar' 


// //   });


// function MyForm() {
//     return (
//       <form>
//         <label>Enter your name:
//           <input type="text" />
//         </label>
//       </form>
//     )
//   }

// const app_id = 'bb81efd9'
// const app_key = '125dad230ddbe1f538226583e7619cb4'


// // function fetchRecipes(){
// // let title = titleInput.value
// // let ingr = recipeInput.value
// //  return fetch(`https://api.edamam.com/api/nutrition-details?app_id=${app_id}&app_key=${app_key}`,{
// //     method : 'GET',
// //     cache : 'no-cache',
// //     headers: {
// //         'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({title,ingr})
// // }).then(Response => Response.json())
// // }
// // fetchRecipes()
// function fetchRecipes(){
// //import { useEffect } from "react"
// useEffect(()=>{
//     async function GetAllPost() {
//       let data = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${app_id}&app_key=${app_key}`)
//         .then(response => {
//           if (response.ok){
//             return response.json()
//           }
//           throw response
//         })
        
//         setfeeds(data)
//       }
//       GetAllPost()
//     },[])
// }
// fetchRecipes()

// export default MyForm
