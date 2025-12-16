
//! How to add Text

//todo  we can write text in js without writing in HTML
// let div = document.getElementById("div")
// let heading = document.getElementById("heading")
// heading.textContent = "welcome"
// heading.innerText = "Welcomee"

//! innerHtml -- we can write html code directly

// div.innerHTML = `
//         <ol type = "1">
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>JS</li>
//         </ol>
//     `
//! difference between innerText,TextContent, InnerHTML -- shows content inside html 

// let div = document.getElementById("div")
// console.log(div.innerHTML); //! looks like pre tag
// console.log(div.textContent) //! shows content inside list (HTML
                                                            //CSS
                                                            //JS)
                            //! It wonn't give space between tags                              
                            //! displays eventhough we hide with the help of -- display : none                            
//  console.log(div.innerText) //! shows content inside the list (HTML
                                                               //CSS
                                                               //JS)  
                            //! It give space between tags
                            //! It won't display if we hide

//! append() ==> we can add both node(html element) and string(text)
let d = document.getElementById("div")
let h = document.getElementById("heading")

h.textContent = "welcome"
h.append(h)
h.append("hello")

//! appendChild() ==> we can add only node(html ele) we cannot add string(text)

// h.textContent = "welcome"
// h.appendChild(h)
// d.appendChild("hellohii")

// let h1 = document.getElementById("heading")
// h1.textContent = "hello"
// h1.appendChild(h1)

//! remove()
// h1.removeChild()