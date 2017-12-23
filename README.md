# emoji-analysis

Emoji Analysis measures real-time emotional sentiment on Twitter using our algorithm specifically designed to target emojis. Once a user has entered a hashtag or user mention in our search bar, we quantify <strong>emotional sentiment</strong> using a custom, emoji-based theorem alongside Twitter's API.

![banner](https://github.com/aleanalesnik/emoji-analysis/blob/master/public/images/screenshots/landingpage.png)


# Getting Started

In order to run on your local machine, download the project and install NPM dependencies. Then, create a database called *emoji_analysis*. We used PostgreSQL as our database management system.

## Research

To measure emotion using emojis, we categorized basic human emotions into three classifications: *Positive*, *Negative* and *Neutral*. Next, we made a data set of emojis that fit into each category based on academic findings. Once a user enters an inquiry in the search, our process gets to work! 

The final result will be a data visualization showing the percentage of positive, negative and nuetral sentiment of the user’s inquiry.

![banner](https://github.com/aleanalesnik/emoji-analysis/blob/master/public/images/screenshots/resultspage.png)
> Visualization of the Results page


## Built With
* **Node.js** - run-time environment
* **Bootstrap** - front-end framework
* **JavaScript** - main programming language used
* **PostgreSQL** - OR database management system
* **Model–view–controller (MVC)** - organizational architecture


## Other Languages and Libraries
* **Bcrypt** - password hashing function
* **Express** - Node.js web framework
* **Express Session** - session middleware
* **Sequelize** - promise-based ORM for Node.js
* **Pug** - template engine
* **Body-Parser** - parsing middleware

# Background

Emoji Analysis was a group effort created during the New York Code and Design Academy's JavaScript intensive web development program, which is a 12-week intensive course. This project utilizes concepts learned throughout the program and reflects our interest in creating useful and usable web applications with the skills and knowledge we've acquired.

## Authors
* **Alea Nalesnik** - [Github](https://github.com/aleanalesnik)
* **Nova Eeken** - [Github](https://github.com/novaeeken)
