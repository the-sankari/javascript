# Grid Game

## Task A

## Part 1 
Create a web page consisting of file task_a.html (starting page) and possibly other (HTML, JavaScript and
CSS) files as you see fit. When task_a.html is opened with a browser, a grid of 20 × 20 squares (having
some default color) is shown.
Let us consider a creature (C) moving in the grid, starting its movement at the upper left corner square of the
grid. The location of C must be marked using a distinctive color or figure for the square in which C is
located. (You can think that C always occupies one whole square.) The location of C is updated once each
0.3 seconds, and each update moves C one square rightwards. The movement should be updated and shown
in the grid clearly. A square that becomes empty when C moves away should be presented with a default
color again (and also otherwise as it was in the initial state). When C would finally move outside the grid
(from the rightmost square on the upmost row), the movement should be stopped and a textual failure
message shown. Note that C remains visible within the grid; the visible movement is stopped before the
actual step outside.
## Part 2
Let the user control the direction in which C keeps moving; the current moving direction is always either
upwards, downwards, leftwards, or rightwards, but the user can control the movement by changing this
direction using the keyboard arrow keys. (The key mapping should be as could be expected: the up arrow
key should change the current direction of movement to upwards, etc.)
Let the lower right corner square of the grid be a target square into which the player should guide C. Mark
this square visually with a distinctive color or by some other means.
It still applies that when C would move outside the grid (from any edge), it should be stopped before the
visible movement taking place. The same is true, if C would move to the target square – i.e., C should be
stopped in a square adjacent to the target square. In this case, the user is also congratulated textually. If C
would move outside the grid, a failure message is shown, instead, as before.
After C has stopped because of its intention to step outside of the grid or into the target square, the user
should be able to make C continue moving by pressing an arrow key indicating a non-problematic movement
direction which then becomes the new direction of movement for C. Failure or success messages should not
be shown when C is moving normally.
## Part 3 
Let some squares within the grid be considered as obstacles C is not allowed to hit. A case in which C tries to
move into an obstacle square is handled similarly to the case in which C tries to move outside the grid
(including showing textual failure message, but the actual message text shown may be different). (Once
again, the user can make the movement continue with a suitable arrow key.) Obstacle squares should be
visually distinguishable from normal (empty) squares, C square, and the target square.
Create a JSON file obstacles.json and use it as the "database" for json-server. Serve the resulting API using
Port 3010 on localhost. Before starting moving C, your page should call this API to read the obstacle
locations and initialize the grid accordingly. The obstacle locations should be exactly those presented in
Figure 1 (using dark gray). So, your JSON file should contain the information on these particular obstacle
locations in some (logical) way.
Figure 1: the desired obstacle locations within the grid.
## __________________________________________________________________________
# BMI calculator
## Task B 
Create a web page consisting of file task_b.html (starting page) and possibly other (HTML, JavaScript and
CSS) files as you see fit. Implement a body mass index (BMI) calculator to be shown and usable when
task_b.html is opened with a browser. The calculator should compute a BMI value based on the input height
(cm) and input mass (kg). The resulting BMI value should be expressed always with the precision of two
decimals. See Figure 2 – but make your implementation more beautiful!
(Example: https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi-m.htm demonstrates the basic
idea, but you can style your implementation as you like. BMI is defined as m / h2, in which m is the mass in
kilograms and h is the height in metres.)
## __________________________________________________________________________
# Hip Hop Loop
## Task C (max 2 XP)
Create a web page consisting of file task_c.html (starting page) and possibly other (HTML, JavaScript and
CSS) files as you see fit. When task_c.html is opened with a browser, the user should be able to input two
integer numbers. At least the integers in the interval [0, 1000] should be supported. There should also be a
button (featuring, e.g., the text “Values set”). Clicking the button should make your implementation loop
through the interval starting from the lower input value, ending to the larger one (both included), and having
the step size of one (i.e., go through every integer within the interval using the increasing order). The user is
not required to give the lower and higher limits in any particular order – you have to programmatically
check, which of the values is the lower one and which the higher one. (The lower and upper limit values can
also be the same.) For each value considered within the loop, your implementation should produce a line of
text to be presented on your HTML page. The text should be as follows: “hip” for the values divisible by 3,
“hop” for the values divisible by 7, “hiphop” for values divisible both by 3 and 7, and otherwise the numeric
value itself. Every time the button is clicked, the old lines should be removed before presenting the lines
resulting from the new evaluation possibly using different number interval. See Figure 3 – but make your
implementation more beautiful!

## _______________________________________________The End________________________________________________
