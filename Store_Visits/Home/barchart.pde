// The code for this section was adapted and further built on
// from Prof Jo Wood's Lecture on Transformation (session 8) of the Data Vis Module

// code adapted from https://www.gicentre.net/utils/chart/

void setupbarchart(){
  table_barchart = loadTable("challenge_citydata.csv", "header"); // loading in the table
   
   visits_bar     = new float[13];
   
   // parsing the data for number of purchases 
     for(int row =0; row<table_barchart.getRowCount(); row++)
  {
   
    visits_bar[row]     = table_barchart.getFloat(row,"visit_percent");
  }

    visits_bar = sort(visits_bar);
   colours = new float[visits_bar.length];  
   ColourTable cTable = new ColourTable();  
   cTable.addDiscreteColourRule(0, 100,160,160);  // Normal colour = 0  
   cTable.addDiscreteColourRule(1,  45,105,105);  // Highlight colour = 1

 // initialising a new barchart object and setting parameters
  barChart = new BarChart(this);
  barChart.setData(visits_bar);
  barChart.setMinValue(0); //Scalingthe bar chart using min and maximum values 
  barChart.setMaxValue(80);
  barChart.showValueAxis(true);
  barChart.setBarColour(colours,cTable);
  barChart.setBarLabels(new String[]  {"Bradford",
                                        "Caldon",
                                        "Springbrk",
                                         "York",
                                         "Hamiltn",
                                        "Bolton",
                                         "Thorn",
                                         "Shelbrne",
                                         "Wood",
                                        "Etobcke",
                                         "N.York",
                                         "Missauga",
                                          "Bramptn"
                                              });
 barChart.showCategoryAxis(true);
}
  
  
void drawbarchart() {

  noStroke();
  fill(202,226,245);
  rect(0,0,width,height);
  fill(50);
  
  // drawing text and title
  textFont(font,45);
  textAlign(LEFT, TOP);
  float barWidth = (width-10)/visits_bar.length;
  
   text("% products bought in each city", width-1100, height-800);
   
   // drawing bar chart 
   textFont(font_bar,25);
   barChart.draw(45,30, width - 10,height -20);  
   
   // initialising tooltip and setting values 
   tooltip_bar = new Tooltip(this, font, 30, 250);
   tooltip_bar.setIsActive(true);
   tooltip_bar.setIsCurved(true);
   tooltip_bar.setTextColour(color(0));
   tooltip_bar.setBorderColour(+color(255));
   tooltip_bar.setIsFixedWidth(false);
   tooltip_bar.setBorderWidth(2);
   tooltip_bar.setAnchor(Direction.WEST);
   
   // drawing tooltip if cursor is within a given bar 
    
    if (dist(mouseX, mouseY, width/2 + 590, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 271) < 170)
  {      
        tooltip_bar.setText("City:Brampton\n"+"Products:"+ visits_bar[12] + "%");
           tooltip_bar.draw(mouseX, 1.2*mouseY + 200);
  }
  
  else if (dist(mouseX, mouseY, width/2 + 550, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 419) < 18)
    {      
        tooltip_bar.setText("City:Missisauga\n"+"Products:"+ visits_bar[11] + "%");
           tooltip_bar.draw(mouseX, mouseY + 300);
  }
  
   
  else if (dist(mouseX, mouseY, width/2 + 510, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 433) < 15)
    {      
        tooltip_bar.setText("City:North York\n"+"Products:"+ visits_bar[10] + "%");
           tooltip_bar.draw(mouseX, mouseY + 350);
  }
  
   
  else if (dist(mouseX, mouseY, width/2 + 470, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 434) < 13)
    {      
        tooltip_bar.setText("City:Etobicoke\n"+"Products:"+ visits_bar[9] + "%");
           tooltip_bar.draw(mouseX -70, mouseY + 400);
  }
  
   
  else if (dist(mouseX, mouseY, width/2 + 430, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 434) < 13)
    {      
        tooltip_bar.setText("City:Woodbridge\n"+"Products:"+ visits_bar[8] + "%");
           tooltip_bar.draw(mouseX -100, mouseY + 400);
  }
  
   
  else if (dist(mouseX, mouseY, width/2 + 390, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 434) <13)
    {      
        tooltip_bar.setText("City:Shelbourne\n"+"Products:"+ visits_bar[7] + "%");
           tooltip_bar.draw(mouseX - 170, mouseY + 400);
  }
  
   
  else if (dist(mouseX, mouseY, width/2 + 350, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 434) <14)
    {      
        tooltip_bar.setText("City:Thornhill\n"+"Products:"+ visits_bar[6] + "%");
           tooltip_bar.draw(mouseX -230, mouseY + 400);
  }
  
   
  else if (dist(mouseX, mouseY, width/2 + 310, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 437) < 14)
    {      
        tooltip_bar.setText("City:Bolton\n"+"Products:"+ visits_bar[5] + "%");
           tooltip_bar.draw(mouseX - 300, mouseY + 400);
  }
  
   
  else if (dist(mouseX, mouseY, width/2 + 270, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 436) < 15)
    {      
        tooltip_bar.setText("City:Hamilton\n"+"Products:"+ visits_bar[4] + "%");
           tooltip_bar.draw(mouseX - 380, mouseY + 400);
  }
  
  else if (dist(mouseX, mouseY, width/2 + 230, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 437) < 15)
    {      
        tooltip_bar.setText("City:York\n"+"Products:"+ visits_bar[3] + "%");
           tooltip_bar.draw(mouseX - 470, mouseY + 400);
  }
  
   
  else if (dist(mouseX, mouseY, width/2 + 190, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 437) < 15)
    {      
        tooltip_bar.setText("City:Springbrook\n"+"Products:"+ visits_bar[2] + "%");
           tooltip_bar.draw(mouseX - 520, mouseY + 400);
  }
  
   
  else if (dist(mouseX, mouseY, width/2 + 150, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 437) < 15)
    {      
        tooltip_bar.setText("City:Caledon\n"+"Products:"+ visits_bar[12] + "%");
           tooltip_bar.draw(mouseX - 570, mouseY + 400);
  }
  
  
    else if (dist(mouseX, mouseY, width/2 + 110, mouseY) < 25 && dist(mouseX, mouseY, mouseX, 437) < 15)
    {      
        tooltip_bar.setText("City:Bradford\n"+"Products:"+ visits_bar[0] + "%");
           tooltip_bar.draw(mouseX - 620, mouseY + 400);
  }
  
  }
       

   