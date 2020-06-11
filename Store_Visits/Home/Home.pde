
//// ------ Data Visualisation Coursework 2017 Code ------- //////
////// ------ Author: Ryan Nazareth   Date: 30 April 2017 -------- /////////

/// -----Title: Customer purchase behaviour analysis of Toronto Medical Supply Stores --------------////

// Most pacakges taken from gi centre utilities
// https://www.gicentre.net/utils/

import org.gicentre.utils.spatial.*;
import org.gicentre.utils.geom.*;
import org.gicentre.utils.move.*;
import org.gicentre.utils.stat.*;
import org.gicentre.utils.colour.*;
import org.gicentre.utils.text.*;
import org.gicentre.geomap.*;
import org.gicentre.utils.colour.*;
import org.gicentre.utils.gui.Tooltip;
import org.gicentre.utils.move.*;  
import org.gicentre.utils.stat.*;     // For giCentre chart classes.
import org.gicentre.utils.gui.*;      // For Tooltip
import org.gicentre.utils.spatial.*;  // For directions.
import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

ZoomPan zoomer;  // to allow zooming and panning 
GeoMap geoMap;
Tooltip tooltip_map;
XYChart year2014,year2013,year2012;
Tooltip tooltip_graph;
Tooltip tooltip_bar;
Tooltip tooltip_pie; 
BarChart barChart;

String countryNameFromMousePosition="", city, myText;  
String[] referrer_name;

Table table_map, table_map2014, table_map2013, table_map2012, table_ref, table_graph, table_barchart,table_mapreferrer;

PImage img;

int savedTime, totalTime = 1500, pageNo = 0, pageNum, border = width/3, time,
    circleX, circleY, circleSize = 33, textSize, rectX, rectY, rectSize = 25;  
  
int[] referrer_visit;

boolean sketch1 = true,  sketch2 = false, sketch3 = false, sketch1map = true, 
       sketch2map = false, sketch3map = false, sketch4map = false, sketch5map = false,
       circleOver = false, rectOver = false;

float[] date, product_graph, data,colours, diameter, referrer_percent,
        dates, visits_bar,
        piecolor_x = {178, 253, 201, 255, 222, 44},
        piecolor_y = {223, 174, 148, 237, 45, 127},
        piecolor_z = {138, 107, 199, 160, 38, 184};

float barWidth, barBottom, selectedBar1, x, y, productmap, productmap2012, productmap2013, productmap2014, lat, lon, 
       dataMin = MAX_FLOAT, dataMax = MIN_FLOAT,  dataMin_referrer = MAX_FLOAT, dataMax_referrer = MIN_FLOAT, margin;

color circleHighlight, rectHighlight, currentColor, circleColor, baseColor, rectColor;

PFont font_labels, font_bar, font ;
 
void setup()
{
  
size(1400, 900);

//surface.setResizable(true); // resizes the sketch on any monitor screen size 

 font_bar = createFont("sans-serif",20);
 font_labels = createFont("sans-serif",30);
 font = createFont("sans-serif",40);
  textSize = 24;  
  margin   = width*0.2;   
  myText = "Map Button";

// setting up all the colours and cicles/ rectangle button (under canada map)
 rectColor = color(255);
// rectHighlight = color(255, 255, 191);
 rectX = width/2 -80;
 rectY = height/2;
 circleColor = color(255);
 circleHighlight = color(255, 255, 191);
 baseColor = color(102);
 currentColor = baseColor;
 circleX = width/2+ 480;
 circleY = height/2 + 365;
 
 // setting up different graphs 
 setuptorontomap();
 setupgraph();
 setuppiechart();
 setupbarchart();
 
 
 // initialising the zoomer and adjusting zoom pan so it does not pan out of view
 zoomer = new ZoomPan(this);
 zoomer.setMouseMask(SHIFT);  
 zoomer.setMaxZoomScale(5);
 zoomer.setMinZoomScale(1);
 
 img = loadImage("mapleleaf.png");
      
}
 
void draw(){
background(202,226,245);
  
float zs = (float)zoomer.getZoomScale();
 float zsw = (zs-1)*(width/2);
 float zsh = (zs-1)*(height/2);
 float constrainedXPan = max(-zsw,min(zsw,zoomer.getPanOffset().x));
 float constrainedYPan = max(-zsh,min(zsh,zoomer.getPanOffset().y));
 zoomer.setPanOffset(constrainedXPan,constrainedYPan);  
 zoomer.transform();  
  
   
   
 // Code adapted from o Wood Data Vis Lecture Session 8
 // and Processing tutotial on Transformations https://processing.org/tutorials/transform2d/
 
 
 //// Each of the four sketches is scaled and translated to occupy a quarter of the window 
 /// use pushMatrix() and popMtarix() to keep coordinate system in memory and revert to old coordinate 
 //  system after transformation
   
 pushMatrix();
  
 translate(750,80);
   scale(0.4,0.4);
  drawbarchart();
  popMatrix();
  
  pushMatrix();
  scale(0.4,0.4);
  translate(200,250);
  drawtorontomap();
  popMatrix();

   pushMatrix();
  scale(0.4,0.4);
  translate(100,height + 400 );
  drawgraph(); 
    popMatrix();
    
  pushMatrix();
  scale(0.4,0.4);
  translate(width + 400,height + 400);
   drawpiechart();
   popMatrix();

   fill(50);
  textFont(font,35);
  text("Customer Purchase Behaviour for Toronto Medical Supply Stores", 220, 5);
    println(mouseX,mouseY);
    
 update(mouseX, mouseY);  // updates circle highlighting if mouse over the circle button 
 
  stroke(255);
  rect(rectX, rectY, rectSize, rectSize); 
 
 if (circleOver) {
    fill(circleHighlight);     

  } else {
    fill(circleColor);
  }
 stroke(0);
 ellipse(circleX, circleY, circleSize, circleSize);
 
 // Taken from Jo Wood Data Vis Lecture Session 6"
 
  fill(35); // Fill sets the colour of the text.  
  textSize(textSize);   
  text(myText,width-200,height-100);
  
  pushMatrix();

   translate(width/2 - 80, height/2);
   scale(0.07,0.07);  
   image(img, 0, 0);
    popMatrix();
   
}

//// This section of code deals with the transformations from one skect to another 
//// through key presses /////////////

void keyPressed()
{
  
 if (key == '1') {  //switch view to sketch 1
    sketch1 = false;
    sketch2 = false;
    sketch3 =true;
 }   
  else if (key == '2') {    //switch view to sketch 2
    sketch1 = false;
    sketch2 = true;
    sketch3 =false;
 }
  else if (key == '3') {  //switch view to sketch 3
    sketch1 = true;
    sketch2 = false;
    sketch3 = false;
    } 
 
  else if (key == 'z')
  {
    // Reset zoom/pan position if the R key is pressed.
    zoomer.reset();
  } 
  
  else if (key == '6') {  //switch view to year 2012 map 
    sketch1map = false;
    sketch2map = false;
    sketch3map =false;
     sketch4map = false;
     sketch5map = true;
    } 
 
 else if (key == '7') {  //switch view to year 2012 map 
    sketch1map = false;
    sketch2map = true;
    sketch3map =false;
     sketch4map = false;
     sketch5map = false;
    } 
    
 else if (key == '8') {  //switch view to year 2013 map 
     sketch1map = false;
    sketch2map = false;
    sketch3map =true;
     sketch4map = false;
       sketch5map = false;
    } 
    
  else if (key == '9') {  //switch view to year 2014 map 
    sketch1map = false;
    sketch2map = false;
    sketch3map =false ;
    sketch4map = true;
    sketch5map = false;
    } 
    
  else if (key == '0') {  //switch to original map of all years 
   sketch1map = true;
   sketch2map = false;
   sketch3map =false;
   sketch4map = false;
   sketch5map = false;
    } 
    
    else if (key == TAB) {
    sketch1 = true;
    sketch2 = false;
    sketch3 = false;
    sketch1map = true;
    sketch2map = false;
    sketch3map =false;
    sketch4map = false;
    sketch5map = false;
          zoomer.reset();
    }

}

/// method for updating circleOver boolean when mouse is over circle 

void update(int x, int y)
{
  if ( overCircle(circleX, circleY, circleSize) ) 
  {
    circleOver = true;
    rectOver = false;
    cursor(HAND);
  } 
  else if  ( overRect(rectX, rectY, rectSize + 67, rectSize+ 22) ) 
  {
    rectOver = true;
    circleOver = false;
    cursor(HAND);
   }
   else {
    circleOver = rectOver = false;
   
   }
}

boolean overCircle(int x, int y, int diameter) {
  float disX = x - mouseX;
  float disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}

boolean overRect(int x, int y, int width, int height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}


/// When mouse pressed on circle 'Map Button' change the map to referrer map 
// When mouse pressed on Canada flag - reset the sketch to the default setting. This 
// is also equivalent to the TAB key option for resetting the sketch

void mousePressed() {
  if (circleOver) {
    sketch1map = false;
    sketch2map = false;
    sketch3map =false;
     sketch4map = false;
     sketch5map = true;
  }
  if (rectOver) {
    sketch1 = true;
    sketch2 = false;
    sketch3 = false;
    sketch1map = true;
    sketch2map = false;
    sketch3map =false;
    sketch4map = false;
    sketch5map = false;
    zoomer.reset();
  }

    
}

//// Code for highlighting the bars in the bar chart - inspired by an example from 
/// Prof Jo Wood's Lecture (Session 8) on transformation

// if mouse over one of the bars, then change the colour highlight 

  void mouseMoved()
 {   
     // Reset all colours to non-highlighted   
    for (int i=0; i< visits_bar.length; i++)  
      {     
      colours[i] = 0;  
     }
  // See if mouse is over a bar.  

  if (dist(mouseX, mouseY, width/2 + 590, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 271) < 170)   
     {  colours[12] = 1; }     
             
 else if (dist(mouseX, mouseY, width/2 + 550, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 419) < 18)
     {  colours[11] = 1;}   
     
  else if (dist(mouseX, mouseY, width/2 + 510, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 433) < 15)
    {  colours[10] = 1;  }
    
  else if (dist(mouseX, mouseY, width/2 + 470, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 434) < 13)
    { colours[9] = 1; }
  
   
  else if (dist(mouseX, mouseY, width/2 + 430, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 434) < 13)
    { colours[8] = 1;  }
  
   
  else if (dist(mouseX, mouseY, width/2 + 390, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 434) <13)
    { colours[7] = 1;  }
  
   
  else if (dist(mouseX, mouseY, width/2 + 350, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 434) <14)
    { colours[6] = 1; }
  
   
  else if (dist(mouseX, mouseY, width/2 + 310, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 437) < 14)
    { colours[5] = 1; }
  
   
  else if (dist(mouseX, mouseY, width/2 + 270, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 436) < 15)
    {  colours[4] = 1; }
     
  else if (dist(mouseX, mouseY, width/2 + 230, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 437) < 15)
    { colours[3] = 1;  }
  
   
  else if (dist(mouseX, mouseY, width/2 + 190, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 437) < 15)
    { colours[2] = 1; }
  
   
  else if (dist(mouseX, mouseY, width/2 + 150, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 437) < 15)
    {  colours[1] = 1; }

 else if (dist(mouseX, mouseY, width/2 + 110, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 437) < 15)
    { colours[0] = 1; }
            
 }

     
  