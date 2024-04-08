// object literals

let user = { // Criação de um objeto
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.com.uk',
    location: 'berlin',
    blogs: [ // Criação de um objeto dentro de um array
        {title: 'why mac & cheese rules', likes: 30 }, 
        {title: '10 things to make with marmite', likes: 50 }
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        // console.log(this.blogs)
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes)
        })
    }
};
console.log(user);
console.log(user.name);
console.log(typeof user);

user.logBlogs();


// console.log(this); ----> a keyword "this" funciona de formas diferentes dependendo do scopo em que é aplicada, quando aplicada dentro de um objeto ela referencia suas propriedades, quando aplicada em um scopo global referencia o objeto global window



// Outras formas de alterar o valor de propriedade e formas de referenciar

// user.age = 35;
// console.log(user.age);

// const key = 'location';
// console.log(user['location']); 

// user['name'] = 'chun-li'; 
// console.log(user['name']); 

// console.log(user['location']);
// user['name'] = 'chun-li';
// console.log(user['name']);


