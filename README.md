# Golf Camp

Live: Demo: [Golf-Camp](https://golf-camp.herokuapp.com/)
[![1.png](https://i.postimg.cc/fRKVDGDc/1.png)](https://postimg.cc/K11G5sKj)

# General Info

## Overview

To golf or to golf? The answer is always yes.

Golf camp is a website that gathers all the famous golf courses and the user can host their own course and make reservation for a tee time [Future implementation].

Golf camp is a clone of another web application called [Hipcamp](https://www.hipcamp.com/en-US), but with my own twist. This website application is a **Golf spot reservation (future implemenetation) and hosting your own golf course** to help you make money and even find a tee time to play golf! 

## Overall Structure

### Back End
This app was built using **JavaScript** on the backend with a **postgreSQL** database. The back-end structure utilizes **RESTful** API routes and all the data request uses fetch and other promise functions to retrieve/update/delete data from the database.

### Front End
The frontend of this web application was built with [React](https://reactjs.org/), **JavaScript**, **CSS** and other libraries to help create this web page. The front end is mostly using react to manipulate the DOM, meaning the user doesn't have to reload or refresh the page in order to make a fetch call to the backend database and update the page to make it feel more interactive and fast. 

### Libraries
* [React](https://reactjs.org/)
* [React-date-picker](https://www.npmjs.com/package/react-datepicker)
* [React-dom](https://reactjs.org/docs/react-dom.html)
* [React-redux](https://react-redux.js.org/)
* [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
* [Redux-thunk](https://www.npmjs.com/package/redux-thunk)
* [BCrypt](https://www.npmjs.com/package/bcrypt)
* [cookie-parser](https://www.npmjs.com/package/cookie-parser)
* [csurf](https://www.npmjs.com/package/csurf)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [helmet](https://www.npmjs.com/package/helmet)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [express](https://www.npmjs.com/package/express)
* [express-session](https://www.npmjs.com/package/express-session)
* [express-validator](https://www.npmjs.com/package/express-validator)
* [sequelize](https://www.npmjs.com/package/sequelize)

# Primary Components

### User Authorization
User authentication is handled in JavaScript whilst using BCrypt for password hashing. For security, user passwords are hashed before getting saved to the database. When the user logs in, the password they provide are rehashed to see if the match the one with the data base to verify the users credentials.

[![2.png](https://i.postimg.cc/QC1MPPfW/2.png)](https://postimg.cc/fSWZSHnw)

[![3.png](https://i.postimg.cc/PfwNPpdr/3.png)](https://postimg.cc/NLQQn0yW)

[![4.png](https://i.postimg.cc/xTV8HfdG/4.png)](https://postimg.cc/rzgq2Lxz)

[![5.png](https://i.postimg.cc/SKxJsgxw/5.png)](https://postimg.cc/bZ4zVHbT)

[![6.png](https://i.postimg.cc/7LtbTSCb/6.png)](https://postimg.cc/GBYbW8x1)
