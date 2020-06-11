// The code for this section was adapted and further built on
// from Prof Jo Wood's Lecture on Acquriing and Parsing (session 4) 
// and Interactions (Session 5)of the Data Vis Module 

void setupgraph() 
{
// Create the line charts

 year2014 = new XYChart(this);
 year2013 = new XYChart(this);
 year2012 = new XYChart(this);
  
// styling method taken from http://www.gicentre.net/utils/chart/ 

// style year 2014 chart 
    
  year2014.showXAxis(true);
  year2014.showYAxis(true);
  year2014.setMinX(1);
  year2014.setMaxX(12);
  year2014.setXAxisLabel("\n Months of the year 2014");
  year2014.setYAxisLabel("No. of products bought\n");
  year2014.setMinY(0);
  year2014.setMaxY(250);
  year2014.setPointColour(color(216, 44, 145));
  year2014.setLineColour(color(216, 44, 145));
  year2014.setLineWidth(7);
  
  // style year 2013 chart 
  
  year2013.showXAxis(true);
  year2013.showYAxis(true);
  year2013.setMinX(1);
  year2013.setMaxX(12);
  year2013.setXAxisLabel("\n Months of the year 2013");
  year2013.setYAxisLabel("No. of products bought\n");
  year2013.setMinY(0);
  year2013.setMaxY(250);
  year2013.setPointColour(color(216, 44, 145));
  year2013.setLineColour(color(216, 44, 145));
  year2013.setLineWidth(7);
  
  // style year 2012 chart 
  
  year2012.showXAxis(true);
  year2012.showYAxis(true);
  //year2012.setMinX(1);
  // year2012.setMaxX(12);
  year2012.setXAxisLabel("\n Months of the year 2012");
  year2012.setYAxisLabel("No. of products bought\n");
  year2012.setMinY(0);
  year2012.setMaxY(250);   
 // year2012.setPointColour(color(216, 44, 145));
  year2012.setLineColour(color(216, 44, 145));
  year2012.setLineWidth(7);
  
  table_graph = loadTable("graph.csv", "header");
  
 
}  
  
  
void drawgraph(){
   
  // Draw title text
  fill(250);
  textAlign(LEFT, TOP);

   if(sketch1){  //if sketch1 is true (will be true on start up)
    drawSketchOne();  //call drawSketchOne method 
  } else if (sketch2){  //if sketch2 is true - will be true if user presses '2'
    drawSketchTwo();  //call drawSketchTwo method
  } else if(sketch3){  //if sketch3 is true - will be true if user presses '3'
    drawSketchThree();  //call drawSketchThree method
  }
 
    // 
 if (mousePressed == true) 
    { cursor(HAND); } // Draw cursor as hand if mouse pressed
  else if (circleOver == true)
  {cursor(HAND); } // Draw cursor as hand if mouse over cricle Mao button 
  else if (rectOver == true)
  {cursor(HAND); }  // Draw cursor as hand if mouse over Canada flag button 
  else {cursor(CROSS);} // othersie let cursor be cross 
  
} 

 // method for setting the text instructions, font and calling line graph 2012 
void drawSketchOne(){  //use this as draw function on key press '1' or on start up
  fill(0);  //make text black
  textFont(font_labels,30);  //set font
  text("Press 1: Year 2014", width-820, height- 770);  //keypress instructions
  text("Press 2: Year 2013", width-820, height- 720);  //keypress instructions
  text("Press 3: Year 2012", width -820, height-670);  //keypress instructions
  textFont(font,45); 
  text("Plot of products purchased in 2012", width-1100, height-840);  //chart title 
 //set text
  //chart draw method based on giCentre chart example code http://www.gicentre.net/utils/chart/
     fill(0);  //make text black
   textFont(font_bar,35);

   y2012();

  }
  
   // method for setting the text instructions, font and calling line graph 2013
  void drawSketchTwo(){  //use this as draw function on key press '1' or on start up
  PFont font = createFont("sans-serif",14);
  fill(0);  //make text white
  textFont(font_labels,30);  //set font
  text("Press 1: Year 2014", width-820, height- 770);  //keypress instructions
  text("Press 2: Year 2013", width-820, height- 720);  //keypress instructions
  text("Press 3: Year 2012", width -820, height-670);  //keypress instructions
    textFont(font,45);  //set text
  text("Plot of products purchased in 2013", width-1100, height-840);  //chart title 

  //chart draw method based on giCentre chart example code http://www.gicentre.net/utils/chart/
  textFont(font_bar,35);
   y2013();

  }
  
  // method for setting the text instructions, font and calling line graph 2014  
 void drawSketchThree(){  //use this as draw function on key press '1' or on start up
  fill(0);  //make text white
  textFont(font_labels,30);  //set font
  text("Press 1: Year 2014", width-820, height- 770);  //keypress instructions
  text("Press 2: Year 2013", width-820, height- 720);  //keypress instructions
  text("Press 3: Year 2012", width -820, height-670);  //keypress instructions
    textFont(font,45);  //set text
  text("Plot of products purchased in 2014", width-1100, height-840);  //chart title 
  //chart draw method based on giCentre chart example code http://www.gicentre.net/utils/chart/
  textFont(font_bar,35);
  y2014();
 
  }
  
 //chart draw methods y2012, y2013, y2014 based on giCentre line chart example code http://www.gicentre.net/utils/chart/

void y2012() {
  //sketch1
   
      float[] product2012;
     product2012     = new float[13];
     float[] yr2012 = {12,11,10,9,8 ,7, 6, 5, 4, 3, 2, 1,0};
   for(int row =0; row<table_graph.getRowCount(); row++)
{
  
    product2012[row]     = table_graph.getFloat(row,"product_count_2012");
}
    year2012.setData(yr2012,product2012);
    year2012.draw(43, 50, width-25, height-100);
    
// Annotate graph and show tooltip and ellipse based on mouse position

     tooltip_map.setIsActive(true);
    if (dist(mouseX, mouseY,598, 787) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX + 190, mouseY -125, 32, 32);
      
      tooltip_graph.setText("Dec 2012\n" + "Products:" + product2012[0]); 
      tooltip_graph.draw(2*mouseX +190, mouseY-165);
    }
    if (dist(mouseX, mouseY,556, 814) < 5)
    {
      fill(127,127,127);
       ellipse(2*mouseX + 190, mouseY -95, 32, 32);
      tooltip_graph.setText("Nov 2012\n" + "Products:" + product2012[1]);  
        tooltip_graph.draw(2*mouseX +190, mouseY-125);
    }
    if (dist(mouseX, mouseY,513, 825) < 5)
    {
      fill(127,127,127);
         ellipse(2*mouseX + 175, mouseY -75, 32, 32);
       tooltip_graph.setText("Oct 2012\n" + "Products:" + product2012[2]);   
    tooltip_graph.draw(2*mouseX +170, mouseY-105);
    }
    if (dist(mouseX, mouseY,471, 826) < 5)
    {
      fill(127,127,127);
      ellipse(2*mouseX + 145, mouseY -75, 32, 32);
       tooltip_graph.setText("Sep 2012\n" + "Products:" + product2012[3]);   
      tooltip_graph.draw(2*mouseX +150, mouseY-105);
    }
    if (dist(mouseX, mouseY,427, 827) < 5)
    {
      fill(127,127,127);
     ellipse(2*mouseX + 130, mouseY -70, 32, 32);
       tooltip_graph.setText("Aug 2012\n" + "Products:" + product2012[4]); 
       tooltip_graph.draw(2*mouseX +130, mouseY-110);
    }
    if (dist(mouseX, mouseY,386, 818) < 5)
    {
      fill(127,127,127);
     ellipse(2*mouseX + 85, mouseY -75, 32, 32);
       tooltip_graph.setText("July 2012\n" + "Products:" + product2012[5]);   
 tooltip_graph.draw(2*mouseX +110, mouseY-115);
    }
    if (dist(mouseX, mouseY,342, 817) < 5)
    {
      fill(127,127,127);
      ellipse(2*mouseX + 75, mouseY -75, 32, 32);
       tooltip_graph.setText("June 2012\n" + "Products:" + product2012[6]);  
      tooltip_graph.draw(2*mouseX + 90, mouseY - 115);
    }
    if (dist(mouseX, mouseY,300, 826) < 5)
    {
      fill(127,127,127);
      ellipse(2*mouseX + 55, mouseY -75, 32, 32);
      tooltip_graph.setText("May 2012\n" + "Products:" + product2012[7]);  
      tooltip_graph.draw(2*mouseX + 70, mouseY - 115);
    }
    if (dist(mouseX, mouseY,255, 796) < 5)
    {
      fill(127,127,127);
       ellipse(2*mouseX + 30, mouseY -100, 32, 32);
       tooltip_graph.setText("Apr 2012\n" + "Products:" + product2012[8]); 
      tooltip_graph.draw(2*mouseX + 50, mouseY - 125);
    }
     if (dist(mouseX, mouseY,213, 817) < 5)
    {
      fill(127,127,127);
     ellipse(2*mouseX + 15, mouseY -75, 32, 32);
     tooltip_graph.setText("Mar 2012\n" + "Products:" + product2012[9]); 
     tooltip_graph.draw(2*mouseX + 30, mouseY - 115);
    }
     if (dist(mouseX, mouseY,171, 835) < 5)
    {
      fill(127,127,127);
      ellipse(2*mouseX - 15, mouseY -65, 32, 32);
       tooltip_graph.setText("Feb 2012\n" + "Products:" + product2012[10]);   
     tooltip_graph.draw(2*mouseX + 10, mouseY - 95);
    }
     if (dist(mouseX, mouseY,128, 826) < 5)
    {
      fill(127,127,127);
      ellipse(2*mouseX -45, mouseY -65, 32, 32);
     tooltip_graph.setText("Jan 2012\n" + "Products:" + product2012[11]);   
      tooltip_graph.draw(2*mouseX -5, mouseY - 110);
    }
    
}

void y2013() {
  // sketch2
    float[] product2013;
    product2013     = new float[13];
    float[] yr2013 = {12,11,10,9,8 ,7, 6, 5, 4, 3, 2, 1,0 };

   for(int row =0; row<table_graph.getRowCount(); row++)
{
    
    //yr2013[row] = table_graph.getFloat(row,"month_2013");
    product2013[row]     = table_graph.getFloat(row,"product_count_2013");
}
    year2013.setData(yr2013, product2013);
    year2013.draw(43, 50, width-25, height-100);  
    
// Annotate graph and show tooltip and ellipse based on mouse position

     tooltip_map.setIsActive(true);
    if (dist(mouseX, mouseY,599, 589) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX + 190, mouseY -430, 32, 32);
      
      tooltip_graph.setText("Dec 2013\n" + "Products:" + product2013[0]); 
      tooltip_graph.draw(2*mouseX +190, mouseY-490);
    }
    if (dist(mouseX, mouseY,558, 820) < 10)
    {
      fill(127,127,127);
       ellipse(2*mouseX + 185, mouseY -80, 32, 32);
      tooltip_graph.setText("Nov 2013\n" + "Products:" + product2013[1]);  
        tooltip_graph.draw(2*mouseX +195, mouseY-135);
    }
    if (dist(mouseX, mouseY,514, 821) < 10)
    {
      fill(127,127,127);
         ellipse(2*mouseX + 175, mouseY -85, 32, 32);
       tooltip_graph.setText("Oct 2013\n" + "Products:" + product2013[2]);   
    tooltip_graph.draw(2*mouseX +170, mouseY-135);
    }
    if (dist(mouseX, mouseY,468, 808) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX + 145, mouseY -85, 32, 32);
       tooltip_graph.setText("Sep 2013\n" + "Products:" + product2013[3]);   
      tooltip_graph.draw(2*mouseX +150, mouseY-125);
    }
    if (dist(mouseX, mouseY,423, 819) < 10)
    {
      fill(127,127,127);
     ellipse(2*mouseX + 130, mouseY -70, 32, 32);
       tooltip_graph.setText("Aug 2013\n" + "Products:" + product2013[4]); 
       tooltip_graph.draw(2*mouseX +130, mouseY-125);
    }
    if (dist(mouseX, mouseY,394, 821) < 10)
    {
      fill(127,127,127);
     ellipse(2*mouseX + 90, mouseY -75, 32, 32);
       tooltip_graph.setText("July 2013\n" + "Products:" + product2013[5]);   
 tooltip_graph.draw(2*mouseX +110, mouseY-115);
    }
    if (dist(mouseX, mouseY,340, 828) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX + 75, mouseY -75, 32, 32);
       tooltip_graph.setText("June 2013\n" + "Products:" + product2013[6]);  
      tooltip_graph.draw(2*mouseX + 90, mouseY - 115);
    }
    if (dist(mouseX, mouseY,298, 815) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX + 55, mouseY -75, 32, 32);
      tooltip_graph.setText("May 2013\n" + "Products:" + product2013[7]);  
      tooltip_graph.draw(2*mouseX + 70, mouseY - 115);
    }
    if (dist(mouseX, mouseY,255, 815) < 10)
    {
      fill(127,127,127);
       ellipse(2*mouseX + 30, mouseY -100, 32, 32);
       tooltip_graph.setText("Apr 2013\n" + "Products:" + product2013[8]); 
      tooltip_graph.draw(2*mouseX + 50, mouseY - 125);
    }
     if (dist(mouseX, mouseY,216, 814) < 10)
    {
      fill(127,127,127);
     ellipse(2*mouseX + 15, mouseY -75, 32, 32);
     tooltip_graph.setText("Mar 2013\n" + "Products:" + product2013[9]); 
     tooltip_graph.draw(2*mouseX + 30, mouseY - 115);
    }
     if (dist(mouseX, mouseY,171, 835) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX - 15, mouseY -65, 32, 32);
       tooltip_graph.setText("Feb 2013\n" + "Products:" + product2013[10]);   
     tooltip_graph.draw(2*mouseX + 10, mouseY - 95);
    }
     if (dist(mouseX, mouseY,122, 829) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX -45, mouseY -65, 32, 32);
     tooltip_graph.setText("Jan 2013\n" + "Products:" + product2013[11]);   
      tooltip_graph.draw(2*mouseX -5, mouseY - 110);
    }
         
}

  
void y2014() {
  //sketch3
    float[] product2014;
    product2014 = new float[13];
     float[] yr2014 = {12,11,10,9,8 ,7, 6, 5, 4, 3, 2, 1,0 };
   for(int row =0; row<table_graph.getRowCount(); row++)
{
   
    //yr2014[row] = table_graph.getFloat(row,"month_2014");
    product2014[row]     = table_graph.getFloat(row,"product_count_2014");
}
    year2014.setData(yr2014, product2014);
    year2014.draw(43, 50, width-25, height-100); 
    
  // Annotate graph and show tooltip and ellipse based on mouse position

     tooltip_map.setIsActive(true);
    if (dist(mouseX, mouseY,599, 840) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX + 190, mouseY -70, 32, 32);
      
      tooltip_graph.setText("Dec 2014\n" + "Products:" + product2014[0]); 
      tooltip_graph.draw(2*mouseX +190, mouseY-135);
    }
    if (dist(mouseX, mouseY,557, 785) < 10)
    {
      fill(127,127,127);
       ellipse(2*mouseX + 185, mouseY -115, 32, 32);
      tooltip_graph.setText("Nov 2014\n" + "Products:" + product2014[1]);  
        tooltip_graph.draw(2*mouseX +195, mouseY-165);
    }
    if (dist(mouseX, mouseY,509, 808) < 10)
    {
      fill(127,127,127);
         ellipse(2*mouseX + 165, mouseY -85, 32, 32);
       tooltip_graph.setText("Oct 2014\n" + "Products:" + product2014[2]);   
    tooltip_graph.draw(2*mouseX +170, mouseY-135);
    }
    if (dist(mouseX, mouseY,470, 834) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX + 145, mouseY -65, 32, 32);
       tooltip_graph.setText("Sep 2014\n" + "Products:" + product2014[3]);   
      tooltip_graph.draw(2*mouseX +150, mouseY-125);
    }
    if (dist(mouseX, mouseY,424, 826) < 10)
    {
      fill(127,127,127);
     ellipse(2*mouseX + 130, mouseY -70, 32, 32);
       tooltip_graph.setText("Aug 2014\n" + "Products:" + product2014[4]); 
       tooltip_graph.draw(2*mouseX +130, mouseY-125);
    }
    if (dist(mouseX, mouseY,383, 833) < 10)
    {
      fill(127,127,127);
     ellipse(2*mouseX + 90, mouseY -65, 32, 32);
       tooltip_graph.setText("July 2014\n" + "Products:" + product2014[5]);   
 tooltip_graph.draw(2*mouseX +110, mouseY-115);
    }
    if (dist(mouseX, mouseY,341, 821) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX + 75, mouseY -75, 32, 32);
       tooltip_graph.setText("June 2014\n" + "Products:" + product2014[6]);  
      tooltip_graph.draw(2*mouseX + 90, mouseY - 115);
    }
    if (dist(mouseX, mouseY,296, 832) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX + 55, mouseY -65, 32, 32);
      tooltip_graph.setText("May 2014\n" + "Products:" + product2014[7]);  
      tooltip_graph.draw(2*mouseX + 70, mouseY - 115);
    }
    if (dist(mouseX, mouseY,257, 834) < 10)
    {
      fill(127,127,127);
       ellipse(2*mouseX + 30, mouseY -55, 32, 32);
       tooltip_graph.setText("Apr 2014\n" + "Products:" + product2014[8]); 
      tooltip_graph.draw(2*mouseX + 50, mouseY - 125);
    }
     if (dist(mouseX, mouseY,212, 831) < 10)
    {
      fill(127,127,127);
     ellipse(2*mouseX + 15, mouseY -60, 32, 32);
     tooltip_graph.setText("Mar 2014\n" + "Products:" + product2014[9]); 
     tooltip_graph.draw(2*mouseX + 30, mouseY - 115);
    }
     if (dist(mouseX, mouseY,172, 838) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX - 15, mouseY -60, 32, 32);
       tooltip_graph.setText("Feb 2014\n" + "Products:" + product2014[10]);   
     tooltip_graph.draw(2*mouseX + 10, mouseY - 95);
    }
     if (dist(mouseX, mouseY,122, 829) < 10)
    {
      fill(127,127,127);
      ellipse(2*mouseX -45, mouseY -65, 32, 32);
     tooltip_graph.setText("Jan 2014\n" + "Products:" + product2014[11]);   
      tooltip_graph.draw(2*mouseX -5, mouseY - 110);
    }
    
}