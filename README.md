# AngularJS Client

#### This are the steps required to set up your environment

1. Install Node Package Manager (just ubuntu)

```
   sudo apt-get update
   sudo apt-get install npm
```
2. Install project dependencies in ubuntu
```
   sudo npm install (In the project root)
   sudo npm install gulp -g (If gulp is not installed, install gulp globally)
```
2. Install project dependencies in window
```
   npm install (In the project root)
   npm install gulp -g (If gulp is not installed, install gulp globally)
```
3. Run Gulp (windows or ubuntu)
```
   gulp (In the project root)
```
Install [gulp][gulp_page]

4. Browser
```
   Test in localhost: http://localhost:8080
```

### Endpoint location

- The endpoint host are defined in constants.js file
- For testing in external endpoint we use [JSONPlaceholder][json_placeholder]

### Client structure

app|

-------- assets|

---------------- js| (compressed js files. Don't touch. Created when run gulp commad)

---------------- css| (compressed css files. Don't touch. Created when run gulp commad)

---------------- images| (place the images here)

-------- views| (compressed html files. Don't touch. Created when run gulp commad)

-------- app.js

-------- index.html

source|

---- js| (js source files)

-------- controllers|

-------- services|

-------- constants.js

---- css| (css source files)

-------- main.scss

-------- lists.scss

---- views| (html source files)

.gitignore

README.MD

gulpfile.js

package.json



[gulp_page]: <https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md>
[json_placeholder]: <https://jsonplaceholder.typicode.com/>
