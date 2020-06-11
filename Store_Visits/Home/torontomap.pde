
// The code for this section was adapted and further built on from 
// the examples in https://www.gicentre.net/geomap/using, 
// https://www.gicentre.net/utils/chart/ annd  Prof Jo Wood's Data Viz 
// lectures (Sessions 3-8)

void setuptorontomap(){
  
PFont font = createFont("sans-serif",14);
 
geoMap = new GeoMap(this);   // initialise the geoMap object 
geoMap.readFile("tts06_pd_83"); /// load the toronto shape file 


// loading all the tables 
table_map = loadTable("challenge_clientdata.csv", "header");
table_map2014 = loadTable("challenge_clientdata_2014.csv", "header");
table_map2013 = loadTable("challenge_clientdata_2013.csv", "header");
table_map2012 = loadTable("challenge_clientdata_2012.csv", "header");
table_mapreferrer = loadTable("challenge_referrerdata2.csv", "header");
 
 // count number of data rows in the table 
 println("rows: ---");
 println(table_map.getRowCount());
  println("columns: ---");
  println(table_map.getColumnCount()); 
  println("---");
  
  // initialising the map tooltip
  tooltip_map = new Tooltip(this, font, 27, 750);
  tooltip_map.setIsCurved(true);
  tooltip_map.setTextColour(color(0));
   tooltip_map.setBorderColour(+color(255));
   tooltip_map.setIsFixedWidth(false);
   tooltip_map.setBorderWidth(2);
  tooltip_map.setAnchor(Direction.WEST);   

  ellipseMode(CENTER);
  
  // Find the minimum and maximum values 
  for (int row=0; row<table_map.getRowCount(); row++)
  {
    dataMin = min(dataMin,table_map.getFloat(row,"product_count"));
    dataMax = max(dataMax,table_map.getFloat(row,"product_count"));
  }
  
  // Find the minimum and maximum values for the referrer map 
  for (int row=0; row<table_mapreferrer.getRowCount(); row++)
  {
  
   dataMin_referrer = min(dataMin_referrer,table_mapreferrer.getFloat(row,"visit_count"));
    dataMax_referrer = min(dataMin_referrer,table_mapreferrer.getFloat(row,"visit_count"));
  }
  
  
}
  
void drawtorontomap() {  
  
 // Draw title text
  //tooltip_map.setIsActive(false);
  fill(202,226,245); // ocean colour 
  rect(0,0,width,height);
   stroke(0,100);               // Boundary colour
  fill(197,173,146);          // Land colour
        // Draw the entire map.
        geoMap.draw();
 
  
  // Set up text appearance.
  textAlign(LEFT, BOTTOM);
  textSize(18); 
  
   // Set the appearance of the data circles.
  fill(210, 0, 0, 80);
  strokeWeight(0.5);

   if(sketch1map){  //if sketch1 is true (will be true on start up)
    drawmaptotal();  //call drawSketchOne method 
  } else if (sketch2map){  //if sketch2 is true - will be true if user presses '7'
    drawmap2012();  //call drawSketchTwo method
  } else if(sketch3map){  //if sketch3 is true - will be true if user presses '8'
    drawmap2013();  //call drawSketchThree method
  }else if(sketch4map){  //if sketch4 is true - will be true if user presses '9'
    drawmap2014();  
  }
    else if(sketch5map){ //if sketch5 is true - will be true if user presses '6'
     drawmapreferrer();
  }           
  
         tooltip_graph = new Tooltip(this, font, 35, 300);
       tooltip_graph.setIsActive(true);
        tooltip_graph.setIsCurved(true);
            tooltip_graph.setTextColour(color(0));
           tooltip_graph.setBorderColour(+color(255));
            tooltip_graph.setIsFixedWidth(false);
           tooltip_graph.setBorderWidth(2);
           tooltip_graph.setAnchor(Direction.WEST);
  
   
  if (mousePressed == true) 
   {cursor(HAND); } // Draw cursor as hand
  else if (circleOver == true)
  {cursor(HAND); }   
  else if (rectOver == true)
    {cursor(HAND); }   
  else{cursor(CROSS);} 
  
}

  // method for drawing aggregated map over all 3 years 
void drawmaptotal(){  

  fill(0);  //make text white
  textFont(font_labels,30);  //set font
  text("Press Key 0 : Total of all 3 years ", 950,600);  //keypress instructions
  text("Press Key 9 : Year 2014",950,650);  //keypress instructions
  text("Press Key 8 : Year 2013", 950,700); //keypress instructions
  text("Press Key 7 : Year 2012", 950,750);  //keypress instructions
  text("Press Key 6 : Other referrers", 950,800);  //keypress instructions
  textFont(font,45); 
  text("Customer locations\n" + "for purchases\n" + "over 3 years ", -100, 300);  //chart title 


   textFont(font_bar,25);
   maptotal();
  }
  
  
    // method for drawing 2012 map
  void drawmap2012()
  { 

   fill(0);  //make text white
   textFont(font_labels,30);  //set font
  text("Press Key 0 : Total of all 3 years ", 950,600);  //keypress instructions
  text("Press Key 9 : Year 2014",950,650);  //keypress instructions
  text("Press Key 8 : Year 2013", 950,700); //keypress instructions
  text("Press Key 7 : Year 2012", 950,750);  //keypress instructions
  text("Press Key 6 : Other referrers", 950,800);  //keypress instructions
  textFont(font,45); 
  text("Customer locations\n" + "for purchases\n" + "in 2012", -100, 300);  //chart title 
 //set text
  //chart draw method based on giCentre chart example code http://www.gicentre.net/utils/chart/
   textFont(font_bar,25);
   map2012();
  }
  
  
      // method for drawing 2013 map
 void drawmap2013(){  
   { 
   fill(0);  //make text white
   textFont(font_labels,30);  //set font
  text("Press Key 0 : Total of all 3 years ", 950,600);  //keypress instructions
  text("Press Key 9 : Year 2014",950,650);  //keypress instructions
  text("Press Key 8 : Year 2013", 950,700); //keypress instructions
  text("Press Key 7 : Year 2012", 950,750);  //keypress instructions
  text("Press Key 6 : Other referrers", 950,800);  //keypress instructions
  textFont(font,45); 
  text("Customer locations\n" + "for purchases\n" + "in 2013", -100, 300);  //chart title 
 //set text
  //chart draw method based on giCentre chart example code http://www.gicentre.net/utils/chart/
   textFont(font_bar,25);
   map2013();
 
  }
 }
  
    // method for drawing 2014 map
 void drawmap2014(){ 
  { 

   fill(0);  //make text white
   textFont(font_labels,30);  //set font
  text("Press Key 0 : Total of all 3 years ", 950,600);  //keypress instructions
  text("Press Key 9 : Year 2014",950,650);  //keypress instructions
  text("Press Key 8 : Year 2013", 950,700); //keypress instructions
  text("Press Key 7 : Year 2012", 950,750);  //keypress instructions
   text("Press Key 6 : Other referrers", 950,800);  //keypress instructions
  textFont(font,45); 
  text("Customer locations\n" + "for purchases\n" + "in 2014", -100, 300);  //chart title 
 //set text
  //chart draw method based on giCentre chart example code http://www.gicentre.net/utils/chart/
   textFont(font_bar,25);
   map2014();
  }
  }

      // method for drawing map of referrer client locations
 void drawmapreferrer(){ 
  { 

   fill(0);  //make text white
   textFont(font_labels,30);  //set font
  text("Press Key 0 : Total of all 3 years ", 950,600);  //keypress instructions
  text("Press Key 9 : Year 2014",950,650);  //keypress instructions
  text("Press Key 8 : Year 2013", 950,700); //keypress instructions
  text("Press Key 7 : Year 2012", 950,750);  //keypress instructions
  text("Press Key 6 : Other referrers", 950,800);  //keypress instructions
  textFont(font,45); 
  text("Clients referred\n" + "through\n" + "anonymised\n" + "souces", -100, 300);  //chart title 
 //set text
  //chart draw method based on giCentre chart example code http://www.gicentre.net/utils/chart/
   textFont(font_bar,25);
  map_referrer();
  }
  
 
  }
  
  void maptotal(){
    fill(210, 0, 0, 80);
  strokeWeight(0.5);
  for(int row =0; row<table_map.getRowCount(); row++)
{
  city = table_map.getString(row, "city");    
  float productmap     = table_map.getFloat(row,"product_count");
  float circleSize = map(productmap,dataMin,dataMax,1,30);
  lat = table_map.getFloat(row, "latitude");
  lon= table_map.getFloat(row, "longitude");
  x = map(lon,-80.7,-78.4,0,width);
  y = map(lat,43,44.5,height,0);
   ellipse(x,y,circleSize,circleSize);  
   
  tooltip_map.setIsActive(true);
if (dist(2.5*mouseX -210, 2.5*mouseY - 260, x, y) < 10)
    {
      tooltip_map.setText("City:"+ city);
     
     tooltip_map.draw(x + 10,y - 50);
    }
       
}
 
  }
 
void map2012() {
fill(210, 0, 0, 80);
  strokeWeight(0.5);
  
for(int row =0; row<table_map2012.getRowCount(); row++)
{
  city = table_map2012.getString(row, "city");    
  float productmap2012     = table_map2012.getFloat(row,"product_count");
  float circleSize = map(productmap2012,dataMin,dataMax,1,30);
  lat = table_map2012.getFloat(row, "latitude");
  lon= table_map2012.getFloat(row, "longitude");
  x = map(lon,-80.7,-78.4,0,width);
  y = map(lat,43,44.5,height,0);
   ellipse(x,y,circleSize,circleSize);  
   
    
  tooltip_map.setIsActive(true);
if (dist(2.5*mouseX -210, 2.5*mouseY - 260, x, y) < 10)
    {
      tooltip_map.setText("City:"+ city);
     
     tooltip_map.draw(x + 10,y - 50);
    }
}
        
}


void map2013() {
  
  fill(210, 0, 0, 80);
  strokeWeight(0.5);
  
  for(int row =0; row<table_map2013.getRowCount(); row++)
{
  city = table_map2013.getString(row, "city");    
  float productmap2013     = table_map2013.getFloat(row,"product_count");
  float circleSize = map(productmap2013,dataMin,dataMax,1,30);
  lat = table_map2013.getFloat(row, "latitude");
  lon= table_map2013.getFloat(row, "longitude");
  x = map(lon,-80.7,-78.4,0,width);
  y = map(lat,43,44.5,height,0);
   ellipse(x,y,circleSize,circleSize);  
   
    
  tooltip_map.setIsActive(true);
if (dist(2.5*mouseX -210, 2.5*mouseY - 260, x, y) < 10)
    {
      tooltip_map.setText("City:"+ city);
     
     tooltip_map.draw(x + 10,y - 50);
    }
}
  
}

  
void map2014() {
  
  
  fill(210, 0, 0, 80);
  strokeWeight(0.5);

  for(int row =0; row<table_map2014.getRowCount(); row++)
{
  city = table_map2014.getString(row, "city");    
  float productmap2014     = table_map2014.getFloat(row,"product_count");
  float circleSize = map(productmap2014,dataMin,dataMax,1,30);
  lat = table_map2014.getFloat(row, "latitude");
  lon= table_map2014.getFloat(row, "longitude");
  x = map(lon,-80.7,-78.4,0,width);
  y = map(lat,43,44.5,height,0);
   ellipse(x,y,circleSize,circleSize);  
   
    
  tooltip_map.setIsActive(true);
if (dist(2.5*mouseX -210, 2.5*mouseY - 260, x, y) < 10)
    {
      tooltip_map.setText("City:"+ city);
     
     tooltip_map.draw(x + 10,y - 50);
    }
}
}

void map_referrer()
{

  fill(210, 0, 0, 80);
  strokeWeight(0.5);

  for(int row =0; row<table_mapreferrer.getRowCount(); row++)
{
  city = table_mapreferrer.getString(row, "city");    
  float referrer     = table_mapreferrer.getFloat(row,"visit_count");
  float circleSize =3*sqrt( map(referrer,dataMin,dataMax,1,30));
  
  lat = table_mapreferrer.getFloat(row, "latitude");
  lon= table_mapreferrer.getFloat(row, "longitude");
  x = map(lon,-80.7,-78.4,0,width);
  y = map(lat,43,44.5, height,0);
   ellipse(x,y,circleSize,circleSize);  
   println(x,y);  
   
    
  tooltip_map.setIsActive(true);
if (dist(2.5*mouseX -210, 2.5*mouseY - 260, x, y) < 10)
    {
      tooltip_map.setText("City:"+ city);
     
     tooltip_map.draw(x + 10,y - 50);
    }
}


}




 