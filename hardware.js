const hardware = document.getElementById("hardware");
// const machinery_img = document.getElementById("machinery_img");
// const machinery_name = document.getElementById("machinery_name");
// const machinery_about = document.getElementById("machinery_about");
// const machinery_price = document.getElementById("machinery_price");
// const machinery_footer = document.getElementById("footer_container");


let footer_str = "";

firebase.database().ref('hardware').on('value',(snap)=>{
    console.log(snap.val());
     let a = snap.child().key;
     console.log(a);   
     
    //  let p_about = "";
    // let p_name = "";
    // let p_price = "";
    let num = 0;
     let str = "";
     let t_str = "";
            snap.forEach((element, index) => {   //forEach is a loop where element carry the value and index carry the array index. 
                // let name = snap.val();
                let obj = element.val();
                let product_no = element.key; // "key" is a keyword, it return the current node. let name = obj.key, why this is wrong.
                console.log(product_no); 
               // let obj2 = element.child("image").val();
               // let img = obj2.img;
                 let p_about = obj.about;
                // console.log(age);
                 let p_name = obj.name;
                 let p_price = obj.price;
                 let p_img = obj.img;
                 // let room_type = obj.RoomType;
                 console.log(p_name);

                 str += `
                 <div class="col" >
                    <div class="card text-center mt-4" style="width: 18rem;">
                        <img class="card-img-top" src=${p_img} alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title">${p_name} </h5>
                          
                          <button type="button" id="${product_no}" class="btn btn-danger px-5">View</button>
                        </div>
                    </div>
                </div>`
                
            });
            
            // t_str = str + footer_str;    
            hardware.innerHTML = str;


            let info = document.getElementById("hardware");

            function indVal(event){   // This is the defination of "Bubling".
               console.log(event.target.tagName);
               let tName = event.target.tagName;
               if(tName == "BUTTON"){
                   pInfo = event.target.id;
                   loc = "categories/hardware";
                   localStorage.setItem("textvalue", pInfo);
                   localStorage.setItem("textvalue2", loc);
                   window.location.href = "info.html";
               }
               return false;
           }
               info.addEventListener("click", (event)=>indVal(event)); // we use "Bubbling" to pass value from one page to another.
        });
