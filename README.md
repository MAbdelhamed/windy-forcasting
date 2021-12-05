# Windy forecasting

# Structure

Let's run through the folders:

```
public
src
└── handlers
└── init
└── listeners
└── utils
└── views
└── data.js
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all of our JavaScript code
- `handlers` this contains our functions that handle user interactions. You can also see it as the code that processes and updates the data or DOM
- `init` this contains our initialisation code. Generally this code should only run once and starts the application
- `listeners` this contains our code that links up our handler code to the DOM. This is separate because it is possible to have the same handler code be given to different listeners
- `utils` this contains code that are pure functions and can be used throughout the application. These functions take data and give back a result. They should not interact with anything outside of their scope!
- `views` this contains code to define what the DOM will look like. They will create the DOM element and give it back. They should never read from/write to the dom, that is what the handlers do.



