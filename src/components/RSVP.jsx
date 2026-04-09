// import { useState } from "react";
// import { db, addDoc, collection } from "../firebase";

// export default function RSVP() {
//   const [name, setName] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();

//     await addDoc(collection(db, "guests"), {
//       name,
//       time: new Date()
//     });

//     alert("Saved ❤️");
//   };

//   return (
//     <section style={{padding:"100px 20px", textAlign:"center"}}>
//       <h2>RSVP</h2>

//       <form onSubmit={submit}>
//         <input 
//           placeholder="Your Name"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br/><br/>
//         <button>Submit</button>
//       </form>
//       <br /><br />

//       <a 
//         href="https://wa.me/8884252764?text=I%20will%20attend%20your%20wedding"
//         target="_blank"
//       >
//         <button>RSVP via WhatsApp</button>
//       </a>
//     </section>
//   );
// }