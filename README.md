# This example used a 2D JavaScript physics library called Matter.js

A webdeveloper might want to use this technology to show how objects react to real-world physics or uncommon physics in our world. It can resemble how objects might fall apart when something collides with it with force.

A web developer might be cautious when using this technology because certain settings can create an unrealistic example of real-world physics, such as changing the gravity, friction, impact, etc. A limitation with this library is that it doesn't implement certain features, like a boundary wall/screen. Objects can go outside of the given window and never reappear again in during the function, so it requires the user to create their own walls and ground to keep objects within the window. It does seem that this framework is currently used, but mainly for individual use and not commerical. The last commit on GitHub was a few months ago. A similar physics library is Physics.js

My example that I created is a humorous slingshot kind-of-game, it uses a Santa head to slingshot over walls an obstacles to hit the towers of boxes at the end. It shows how this technology can create objects and shoot them through certain constraints (strength/amount the circle (Santa head) was pulled) and obstacles that act as barriers. It also shows how stacks of boxes can fall down and crumble by an impact of a foreign object, but needs to pass certain velocity and angle constaints to do so. You can view it at http://students.washington.edu/johnyun/info343/santashooter/index.html

To run my slingshot game, you first drag and pull the santa head down like a slingshot/catapult, and then release to shoot it over the wall and hopefully hit the stack of presents (boxes).

To leann more about Matter.js, visit http://brm.io/matter-js/ **for the library**

http://brm.io/matter-js-demo/ **for more examples/demos**

https://github.com/liabru/matter-js/wiki/Getting-started **to learn how to start using Matter.js**