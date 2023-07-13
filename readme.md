### Node JS introduction

* First things first what is node, Node JS is a javascript runtime environment usually it is gonna paired up with Browser.
* But when we took out connection between the node and browser, node became more powerful.
* It is a server-side scripting framework based on JavaScript. Node JS is an open-source, cross-platform, back-end JavaScript runtime environment.

### Features if NodeJS

* This technology can use for creating real-time web applications. The event-driven and non-blocking I/O model concept helps to make Node JS lightweight and efficient.

* Node JS is a **single-thread application**. 
* Performance increased via caching modules into memory after the first use.

### NPM ( Node Package Manager)

* NPM is the largest repository maintaining modules for NodeJS.
* Generally when we start a nodejs file with the use of npm
----------------------------------------------------------------------------------------------------------------------------
* The **Package.json** file is the centre of any NodeJS project. it contains the meta data about our project. its like head tag in html it provides meta data about our project.

* open a terminal and type below command to create a **package.json** file. when we type this command it will ask some basic information about the author and the what the project name and stuff.


    ```
    npm init

    ```
* package.json file is a **json file** it consists of key, value pairs. there are two main fields `name` and `version`. these are enough but we have to make sure of additional information.

1. `Author`        : we can add author field to specify about author.
2. `description`   : if we want to add description about our project we can add it here.
3. `keywords`      : The keywords field is where you can describe your project using related keywords.
4. `license`       : The license field is where you inform users of what they are allowed to do with your project.(Most probably the licenses are MIT or BSD).
5. `version`       : this is the version of your current project.
6. `dependencies`  : this is the most important section as we can add different packages to our projects by using this object dependencies.

#### Semantic versioning
* Versions of the npm packages in the dependencies section of your package.json file follow what’s called Semantic Versioning (SemVer), an industry standard for software versioning aiming to make it easier to manage dependencies. Libraries, frameworks or other tools published on npm should use SemVer in order to clearly communicate what kind of changes projects can expect if they update.

* Knowing SemVer can be useful when you develop software that uses external dependencies (which you almost always do). One day, your understanding of these numbers will save you from accidentally introducing breaking changes to your project without understanding why things that worked yesterday suddenly don’t work today. This is how Semantic Versioning works according to the official website:

```
    "package": "MAJOR.MINOR.PATCH"

```
* The **MAJOR** version should increment when you make **incompatible API changes**. The **MINOR** version should increment when you add **functionality in a backwards-compatible manner**. The **PATCH** version should increment when you make **backwards-compatible bug fixes**. This means that **PATCHes** are **bug fixes** and **MINORs** add **new features** but neither of them break what worked before. Finally, MAJORs add changes that won’t work with earlier versions.

#### The use of "~" to allow use of latest patch version

* To allow an npm dependency to update to the latest PATCH version, you can prefix the dependency’s version with the tilde (~) character. Here's an example of how to allow updates to any 1.3.x version.

```
    "package": "~1.3.8"

```

#### The use of "^" to allow use of latest minor version

* This would allow updates to any 1.x.x version of the package.

```
"package": "^1.3.8"

```

### Now coming to Main part

#### Global Variables

* These are basically variables which store some data and can be accessed from anywhere in your code – doesn't matter how deeply nested the code is.

* **__dirname** : This variable stores the path to the current working directory.

* **__filename**: This variable stores the path to the current working file.
* **process**   : info about the environment where the process is executed
* **require**   : this is function to import modules

#### Modules
* In Node.js, a module is essentially a reusable block of code that can be used to perform a specific set of tasks or provide a specific functionality

* The primary purpose of using modules in Node.js is to help organize code into smaller, more manageable pieces

* lets say we have two files **add.js** and **main.js** here add.js is a module so it contains a single function which take two arguments.
* where as main.js is the file where we import functions of add.js . Now we have to know about exports object.
* **exports** is object where we store our functions or variables which we want to import.
* in add.js file we have a fuction already now we add a line
    ```
    module.exports = <function name>

    ```
* this is for single function.
* now to import this in our **main.js file** we have to write the below code at the start
```
const add = require('./add.js);*

```
* we write like that because we have a function in add.js which accepts two values so we have to store the exported moduled in a variable. let us say if the function in add.js has no return value so now we write as

```
require('./add.js')
```

#### Types of modules

* modules are of two types
  1. Built in Modules
  2. External Modules

* **Built in Modules**:  these are modules which are included in node by default. we can use them by calling them

|Module | function of module|
|------|----------------------|
|OS| gives info about operating system|
|fs| gives access to file system manipulation|
|path| provides utility functions to working with file paths|
|http| this is most important and this is used to creat servers|

### OS module

* The OS Module (as its name implies) provides you methods/functions with which you can get information about your Operating System.
* first to import the module. we have to write this code
```
const os = require('os');
```
* some important functions of **OS module**. check the below code carefullu
```
const os = require('os')

// os.uptime()
const systemUptime = os.uptime();

// os.userInfo()
const userInfo = os.userInfo();

// We will store some other information about my WindowsOS in this object:
const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

// Let's Check The Results:
console.log(systemUptime);
console.log(userInfo);
console.log(otherInfo);

```

* The output of code will be like this
```
2323232
{
	uid: -1,
	gid: -1,
	username: 'kalrthik',
	homedir: 'D://node',
	shell: null
}
{
	name: 'Windows_NT',
	release: '10.0.22621',
	totalMem: 8215212032,
	freeMem: 1082208256
}

```
* **os.uptime()**: this is gives the uptime of our system in seconds
* **os.userInfo()**: this is the information about the current user and it gives the whole information
* **os.type()**: this tells us the name of operating system
* **os.release()**: tells the release version of operating system
* **os.totalMem()**: tells the total memory of the system
* **ps.freeMem()**: tells the free memory of the system

------------------------------------------------------------------------------------------------------------------
#### the Path Module

* The PATH module comes in handy while working with file and directory paths. 
* once see the below code
```
const path = require('path')

// Assigning a path to the myPath variable
const myPath = '/d/nodejs'

const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath),
}

// Let's See The Results:
console.log(pathInfo);
```

* `path.basename(<arg>)`: this function accepts the path and return the last part of the path.
* `path.dirname(<arg>)` : this function takes the path as argument and it returns the the folder of the last part of path
* `path.sep`            : sep is a variable which contains the system specific path separator. For Windows machine: console.log(path.sep) prints \ in the console while in case of macOS or Linux, path.sep returns a forward slash ( / ).
4
* `path.join(<paths>)`  : The path.join() function accepts path(s) as strings. It then joins those paths using the system specific path separator and returns the joined path.
* `path.resolve(<paths>)` : This function works in a similar way as compared to path.join(). The path.resolve() function just joins the different paths provided to it using the system specific path separator and then appends the final output to the absolute path of the present working directory.

#### File system module

* This module helps you with file handling operations such as:
1. reading a file( sync and async way)
2. writing a file( sync and async way)
3. deleting a file
4. renaming a file

* one basic command is `fs.mkdir()`. it is used to create a file in our required directory, it takes two arguments 
1.  a path
2. a optional callback when we create the file

* remaining things about the file system module is 
1. **Synchronousy**
2. **Asychronousy**

* **Synchronousy**: synchronousy means the code will be executed from start to bottom. and here there are no callbacks here. it blocks event loop.
* **Asynchronousy**: lets say there are two tasks that are to be done sequentially. first task takes 1 second and second task takes half a second.
 * according to synchronousy it executes tasks sequentially, now coming to asynchronousy it will first execute small task first not because it is small, but because first thing will take time so optimize it. it will execute the second task.
* To clear this once execute the both synchronous and asynchrnous tasks simultaneously to check the what magic is happening.

**Some other methods in file system module**:
1. **fs.rename(old path, newpath, optional callback)**: this is used to rename a file
2. **fs.readdir(path, optional callback)**: this returns the contents of a directory
