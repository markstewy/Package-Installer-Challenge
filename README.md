**My solution to a popular coding challenge:**

# The challenge: Package Installer Exercise

**Description**

You suddenly have a curious aspiration to create a package installer that can handle dependencies. You want to be able to give the installer a list of packages with dependencies, and have it install the packages in order such that an install won’t fail due to a missing dependency.

This exercise is to write the code that will determine the order of install.

**Requirements**

*Please use Test Driven Development (TDD) and include your tests.

*Please submit your code in a git repo (zipped and emailed, not on github) where you have committed throughout the process so that we can see your progress as you code the solution.

*The program should accept an array of strings defining packages and their dependencies. Each string contains the name of a package followed by a colon and space then any dependencies required by that package. For simplicity we’ll assume that a package can have at most one dependency.

*The program should reject as invalid a dependency specification that contains cycles.

*The program should output a comma separated string of package names in the order of install, such that a package’s dependency will always precede that package.

**Examples**

VALID INPUT EXAMPLE 1:

The input:

```
[ "KittenService: CamelCaser", "CamelCaser: " ]
```
represents two packages, KittenService and CamelCaser, where KittenService depends on CamelCaser. In this case the output should be:

```
"CamelCaser, KittenService"
```

The output indicates that CamelCaser needs to be installed before KittenService.

VALID INPUT EXAMPLE 2

Given the input:
```
[
"KittenService: ",
"Leetmeme: Cyberportal",
"Cyberportal: Ice",
"CamelCaser: KittenService",
"Fraudstream: Leetmeme",
"Ice: "
]
```
A valid output for the above input would be:

```
"KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream"
```

INVALID INPUT EXAMPLE

The following input should be rejected because it contains a cycle (Leetmeme -> Cyberportal -> Ice -> Leetmeme):

```
[
"KittenService: ",
"Leetmeme: Cyberportal",
"Cyberportal: Ice",
"CamelCaser: KittenService",
"Fraudstream: ",
"Ice: Leetmeme"
]
```

# My Solution / Getting Started

*** Tests with Jasmine:***
	1) "npm install"
	2) "npm test" will run the tests located in the '/spec' folder and return results in the console
	3) the 'runAll' function will also console.log the output from input on line 57 of installer.js, if you wish to only view test results comment out the function call on line 66 of installer.js


***Ordering Packages***
 	1) from the packageInstallerChallenge directory run 'node installer.js'
	2) you can change the packages input on line of 57 of intaller.js:

```
	var arr1 = [
				"KittenService: ",
				"Leetmeme: Cyberportal",
				"Cyberportal: Ice",
				"CamelCaser: KittenService",
				"Fraudstream: Leetmeme",
				"Ice: "
				]

	runAll(arr1);
```



TODOS:

* Installer could've been written as a class, which would've been a littler cleaner looking
* do..while loops aren't really idiomatic in JS and should probably usually be avoided, especially since there's now a do expression proposal
* lots of mutation and stuff, which is fine for some companies that are big on OO/imperative programming, but probably wouldn't fly at other companies (like Jane, for example)

Feedback:

* + Passes all our tests? (I had to make a couple tweaks)
* + Understands the algorithm well
* - Returns an array instead of a comma separated string (which apparently our test harness doesn't flag)
* - Does not have a single entry point
* - Poor naming of variables and inconsistent naming pattern
* +/- Inconsistent use of js syntax
* - Sounds like he may have never even done testing let alone TDD
