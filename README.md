# Windy forecasting

It is a simple weather forecasting app contain 2 divs. 
The first one initialized  with 3 random capitals weather cards.
The second one is a card for a city requested by the user.

Each card has details like the city name, its country , today's day and date ,
temperature in Celsius , weather status and simple image for this status and 
finally the high-low temperature for the whole day

you can try now [Windy Forecasting](https://mabdelhamed.github.io/windy-forcasting/)

Api [openweathermap](https://openweathermap.org/) 

![Windy forecasting screenshot](https://github.com/MAbdelhamed/windy-forcasting/blob/main/public/Images/Screenshot-windy-forecasting.png?raw=true)

# Structure

Let's run through the folders:

```
public
src
└── init
└── API
└── utils
└── views
└── data.js
└── constants.js
index.html
style.css
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all of our JavaScript code
- `init` this contains our initialization code. Generally this code should only run once and starts the application
- `API` this contains our code that Fetch API return a promise that resolves into a Response object. To get the actual data
- `utils` this contains code that are pure functions and can be used throughout the application. These functions take data and give back a result. They should not interact with anything outside of their scope!
- `views` this contains code to define what the DOM will look like. They will create the DOM element and read/write from/to the dom
- `data.js` file contains the variables we use within the whole projects such api data and cityNames. 
- `constants.js` file contains the constants dom elements  
- `index.html` it is the starting web page 
- `style.css` it contains the styling and the decoration of html tags


