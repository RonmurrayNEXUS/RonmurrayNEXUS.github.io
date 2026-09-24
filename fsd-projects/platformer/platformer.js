$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 550, 300, 20);     
createPlatform(380, 450, 120, 20);    
createPlatform(550, 350, 160, 30, "yellow");    
createPlatform(800, 250, 100, 20,);  
createPlatform(980, 180, 80, 20, "yellow");     
createPlatform(1150, 320, 60, 20, "yellow");  
createPlatform(1250, 480, 100, 40, "lime");  
createPlatform(950, 620, 120, 20,);  



    // TODO 3 - Create Collectables
createCollectable("diamond", 380, 380);      
createCollectable("diamond", 980, 120);      
createCollectable("diamond", 1150, 260);     
createCollectable("diamond", 1290, 420);     
createCollectable("diamond", 600, 290);   


    
    // TODO 4 - Create Cannons
createCannon("top", 600, 1500); 
createCannon("left", 150, 2000);    
createCannon("right", 700, 1100);   
createCannon("bottom", 1170, 1200);
createCannon("right", 120, 1200);
createCannon("top", 380, 1200);     
createCannon("left", 280, 1500);     
createCannon("right", 260, 1800);    
createCannon("bottom", 800, 1000);   
createCannon("top", 980, 1400);      
createCannon("right", 580, 1600);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
