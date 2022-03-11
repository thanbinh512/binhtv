// function myFunction(param) {

//     if (typeof param === 'function') {

//         param(123)
//     }

// }


// function myCallback(value) {
//     console.log('value:', value)
// }
// myFunction(123);
//find
// Array.prototype.find2 = function(callback) {
//     const arrayLength = this.length;


//     for (let i = 0; i < arrayLength; i++) {
//         obj = callback(this[i], i, this)

//         if (obj === true) {
//             obj = this[i];
//             break;
//         } else {
//             obj = undefined;
//         }
//     }

//     return obj;
// }

// var courses = [
//     'toan',
//     'ly',
//     'hoa',
//     'lich su',
//     'tin hoc'
// ];
// const result = courses.find2(function(search) {
//     return search === 'ly';
// });
// console.log(result)

// filter

// Array.prototype.filter2 = function(callback) {
//     var arrayLength = this.length;
//     var array = [];
//     for (let i = 0; i < arrayLength; i++) {
//         obj = callback(this[i], i, this)
//         if (obj) {
//             array.push(this[i])
//         }
//     }
//     return array;
// }
// const fullName = [{
//         name: 'than binh',
//         id: 1
//     },
//     {
//         name: 'thien long',
//         id: 2,
//     },
//     {
//         name: ' lan',
//         id: 3
//     }
// ];


// const result = fullName.filter2(function(element) {
//     return element.id === 3;
// });
// console.log(result)

// redude()

// Array.prototype.reduce2 = function(callback, sum) {
//     var arrayLength = this.length;
//     let i = 0
//     for (; i < arrayLength; i++) {
//         sum = callback(sum, this[i], i, this)

//         if (arguments < 2) {
//             i = 1;
//             return this[0]

//         }
//     }
//     return sum;
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers.reduce2(function(total, element) {

//     return total + element;

// }, 10);

// console.log(result)

// forEach() 

// Array.prototype.forEach2 = function(callback) {

//     for (let i in this) {
//         if (this.hasOwnProperty(i)) {

//             callback(this[i], i, this)
//         }

//     }
// }


// const fullName = [{
//         name: 'than binh',
//         age: 20
//     },
//     {
//         name: 'houng lan ',
//         age: 20
//     },
//     {
//         name: 'thien long ',
//         age: 30
//     }
// ];

// fullName.push('JavaScript')


// const result = fullName.forEach2(function(element) {
//     console.log(element)
// })

// filter

// Array.prototype.filterfake = function(callback) {
//     const output = [];

//     for (let i in this) {
//         if (this.hasOwnProperty(i)) {
//             const result = callback(this[i], i, this)
//             if (result) {
//                 output.push(this[i])
//             }
//         }

//     }
//     return output;
// }

// const fullName = [{
//         name: 'than binh',
//         age: 20
//     },
//     {
//         name: 'houng lan ',
//         age: 20
//     },
//     {
//         name: 'thien long ',
//         age: 30
//     }
// ];

// const filterName = fullName.filterfake(function(element) {

//     return element.age === 20
// });
// console.log(filterName)


// some 

// Array.prototype.some2 = function(callback) {

//     var output = false;
//     for (let i in this) {
//         result = this.hasOwnProperty(i);
//         if (result) {
//             const input = callback(this[i], i)
//             if (input) {
//                 output = true;
//                 break;
//             };

//         }

//     }
//     return output;
// }



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const someNumbers = numbers.some2(function(element) {
//     if (element % 3 !== 0) {
//         return element;
//     }
// });
// console.log(someNumbers)

// Array.prototype.every2 = function(callback) {
//     let output = true;
//     for (let i in this) {
//         result = this.hasOwnProperty(i);
//         if (result) {
//             const input = callback(this[i], i, this)
//             if (input === false) {
//                 output = false;
//                 break;
//             }
//         }
//     }
//     return output;
// }

// Array.prototype.reduce2 = function(callback, result) {
//     const arrayLength = this.length;
//     let i = 0;

//     if (arguments.length < 2) {
//         i = 1;
//         result = this[0];
//     }
//     for (; i < arrayLength; i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result;
// }


// const fullName = [{
//         name: 'than binh',
//         age: 20
//     },
//     {
//         name: 'houng lan ',
//         age: 20
//     },
//     {
//         name: 'thien long ',
//         age: 30
//     }
// ];

// // const everyName = fullName.every2(function(element) {
// //     return element.age >= 20;
// // });
// // console.log(everyName)

// const result = fullName.reduce2(function(total, element) {
//     return total + element.name;
// }, 0);
// console.log(result)

// var element = document.querySelector('.box')

// console.log(element)

// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms)
//     });
// };
// sleep(1000)

// .then(function() {
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(function() {

//         reject()
//     })

// .then(function() {
//         console.log(2)
//         return sleep(2000)
//     })
//     .catch(function(err) {
//         console.log('3')
//     })





// fetch API 
// var commentList = "https://jsonplaceholder.typicode.com/comments";

// var cmtList = fetch(commentList)
//     .then(function(comments) {
//         return comments.json();
//     })
//     .then(function(comment) {
//         const htmls = comment.map(function(commen) {


//             return `<li> 
//                 <h2>${commen.id}</h2>
//                 <p>${commen.body}</P>
//                 <span>${commen.email}</span>
//             </li>`

//         })


//         var html = htmls.join('');
//         document.querySelector('#chainnal-block').innerHTML = html;
//     })
//     .catch(function(err) {
//         prompt('error')
//     })



// var courseApi = 'http://localhost:3000/coureses'


// function start() {
//     getCourse(renderCourse);
//     handleCreateForm();
//     handleDeleteCourses();



// }

// start();

// function getCourse(callback) {
//     fetch(courseApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback);

// }

// function renderCourse(coureses) {
//     var courseList = document.querySelector('.list-course')
//     var htmls = coureses.map(function(coure) {
//         return `<li> 
//             <h4> ${coure.name} </h4> 
//             <p> ${coure.description} </p>
//             <button class="deleteCourse(${coure.id})"> Xoa </button>
//         </li>`
//     })
//     courseList.innerHTML = htmls.join('')
// }

// function postDta(data) {
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }

//     fetch(courseApi, options)
//         .then(function(response) {
//             response.json();
//         })
//         .then(callback)

// }

// function handleCreateForm() {
//     var createBtn = document.querySelector('.submit')

//     createBtn.onclick = function() {
//         var name = document.querySelector('input[name = "name"]').value;
//         var description = document.querySelector('input[name = "description"]').value;

//         var formData = {
//             name: name,
//             description: description
//         }


//         postDta(formData, function() {
//             getCourse(renderCourse);
//         })
//     }
// }



// var handleDeleteCourses = function(id) {
//     var options = {
//         method: 'delete',
//         headers: {
//             'Content-Type': 'application/json'
//         },

//     }
//     fetch(courseApi + '/' + id, options)
//         .then(function(response) {
//             response.json();
//         })
//         .then(function() {
//             getCourse(function() {
//                 renderCourse()
//             });
//         });

// 
// var name = 'javascript';
// var price = 1000;

// var course = {
//     name,
//     price,
//     getName() => name;
// }
// console.log(course.getName);


// import logger from './logger.js'
// var courses = ['javascript', 'php']

// function course(param) {
//     console.log(param);
// }

// var fullName = 'than binhf '

// function name(param) {
//     console.log(param);
// }

// var language = [
//     'javascript',
//     'php',
//     'ruby'
// ]

// console.log(language.slice(1, 2))

// var clicks = document.querySelector('.create');
// var btnModal = document.querySelector('.modal');
// var closeBtn = document.querySelector('.close')
// var headingBtn = document.querySelector('.heading')
// var headerList = document.querySelector('.header_list')
// console.log(headerList)

// function openModal() {
//     btnModal.classList.add('open')
// }
// clicks.onclick = function() {
//     openModal();
//     setTimeout(function() {
//         headingBtn.style.display = 'none'
//     }, 3000)
// }

// function closeModal() {
//     btnModal.classList.remove('open')
// }
// closeBtn.onclick = function() {
//     closeModal()
//     clicks.style.backgroundColor = "white"
//     clicks.style.color = " #000"
// }
// clicks.onfocus = function() {
//     clicks.style.backgroundColor = "red"
//     clicks.style.color = "white"
//     headerList.style.color = "#fff"
// }

const $ = document.querySelector.bind(document)

const container = $('.container')
const showModal = $('.modal')
const clickBtn = $('.create')
const closeBtn = $('.close')
const showHeading = $('.heading')
const successBtn = $('.success')
const errorBtn = $('.error')
const headingList = $('.heading-list')
const clearBtn = $('.onclear')


clickBtn.onclick = () => {
    container.style.display = 'none'
    setTimeout(() => {
        showModal.classList.add('open')
        setInterval(() => {
            showHeading.join('HTML')
        }, 1000)


    }, )
}

errorBtn.onmouseover = () => {
    errorBtn.innerText = 'Yes'
}

closeBtn.onclick = () => {
    headingList.classList.add('support')
}
closeBtn.onmouseout = () => {
    headingList.classList.remove('support')
}

if (clickBtn == successBtn || clickBtn == errorBtn) {
    closeBtn.onclick = () => {
        showModal.classList.remove('open')
    }
}

setTimeout(() => {
    clearBtn.classList.add('support')
}, 9000)
clearBtn.onclick = () => {
    showModal.classList.remove('open')
    container.style.display = 'flex'
}