// Matter module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    Events = Matter.Events;

// create a Matter.js engine
var engine = Engine.create(document.body, {
  render: {
    options: {
      showAngleIndicator: false,
      wireframes: false,
      background: "img/background.jpg"
    }
  }
});

// add a mouse controlled constraint for slingshot
var mouse = MouseConstraint.create(engine, {
    constraint: {stiffness: 1}
});


// add a stack of blocks for Santa to hit
var stack = Composites.stack(450, 200, 7, 15, 30, 0, function(x, y) {
  return Bodies.rectangle(x, y, 20, 20, { 
    friction: 0.1, 
    restitution: 1,
    render: {
      sprite: {
        texture: 'img/present.png'
      }
    } 
  });
})

// creates the ground the stack will sit on
var ground = Bodies.rectangle(490, 610, 600, 60, { isStatic: true });

// create the Santa ball
var ballOptions = { 
      render: { 
        sprite: { 
          texture: 'img/santa.png' 
        } 
      } 
    };
var ball = Bodies.circle(90, 435, 20, ballOptions);
var start = Constraint.create({ 
        pointA: { x: 90, y: 435 }, 
        bodyB: ball, 
        stiffness: 0.1
    });


// add all of the bodies to the world
World.add(engine.world, [stack, ball, ground, start, mouse]);

//creates the walls within the game
var margin = 5;
World.add(engine.world, [
//window boundary walls
  Bodies.rectangle(400, -margin, 800 + 2 * margin, 50, { isStatic: true }),
  Bodies.rectangle(800 + margin, 300, 50, 600 + 2 * margin, { isStatic: true }),
  Bodies.rectangle(-margin, 300, 50, 600 + 2 * margin, { isStatic: true }),
//obstacle walls
  Bodies.rectangle(200, 340, 20, 480, { isStatic: true }),
  Bodies.rectangle(400, 367, 20, 425, { isStatic: true }),
  Bodies.rectangle(130, 0, 110, 300, { isStatic: true, angle: 20 }),
  Bodies.rectangle(260, 100, 20, 140, { isStatic: true, angle: 30 }),
  Bodies.rectangle(400, 150, 20, 150, { isStatic: true, angle: 20 })
]); 

//after shooting a shot, a new Santa head will appear
Events.on(engine, 'tick', function(event) {
    if (engine.input.mouse.button === -1 && (ball.position.x > 110 || ball.position.y < 400)) {
        ball = Bodies.circle(90, 435, 20, ballOptions);
        World.add(engine.world, ball);
        start.bodyB = ball;
    }
});

// run the engine
Engine.run(engine);