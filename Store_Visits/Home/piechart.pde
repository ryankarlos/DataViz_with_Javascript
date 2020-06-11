// The code for this section was adapted and further built on 
// from the examples in the Processing Tutorial  
//https://processing.org/examples/piechart.html

void setuppiechart() {

  table_ref = loadTable("challenge_referrerdata1.csv", "header"); // loading in the table
  referrer_visit = new int[table_ref.getRowCount()]; 
  referrer_name      = new String[table_ref.getRowCount()]; 
  referrer_percent = new float[table_ref.getRowCount()];  
 
 // parsing the referred clients visit percent, total visit data and the referrer code names
 
  for (int row=0; row<table_ref.getRowCount(); row++)
  {
    referrer_visit[row]   = table_ref.getInt(row, "visit_count");
    referrer_name[row]  = table_ref.getString(row, "referrer_code");
     referrer_percent[row]   = table_ref.getFloat(row, "visit_percent");
  }
   

    // initialising the tooltip object and setting parameters 
    tooltip_pie = new Tooltip(this, font, 35, 400);
    tooltip_pie.setIsActive(true);
    tooltip_pie.setIsCurved(true);
    tooltip_pie.setTextColour(color(255));
    tooltip_pie.setBorderColour(+color(255));
    tooltip_pie.setIsFixedWidth(false);
    tooltip_pie.setBorderWidth(2);
    tooltip_pie.setAnchor(Direction.WEST);

}
  
void drawpiechart() 
{

PFont font = createFont("sans-serif",14);
  fill(202,226,245);
  //rect(0,0,width,height);
  
    float diameter = 800; 
    float small_diameter = 80;
    float lastAngle = 0;
   
   // code for drawing pie chart - adapted from https://processing.org/examples/piechart.html
   
   
    for (int i = 0; i < referrer_visit.length; i++) {
    fill(piecolor_x[i],piecolor_y[i],piecolor_z[i]);
    arc(width/2 -100, height/2, diameter, diameter, lastAngle, lastAngle+radians(referrer_visit[i])); 
    arc(width/2 -100, height/2, small_diameter, small_diameter,lastAngle, lastAngle+radians(referrer_visit[i]));  
   
    lastAngle += radians(referrer_visit[i]);
     
 // draw tooltip on screen if it within different sections of the pie chart 
     
  if (dist(mouseX, mouseY, 904,773) < 60)
  
  {
      tooltip_pie.setIsActive(true);
      tooltip_pie.setText("Purchases:" + referrer_visit[0] );
      tooltip_pie.setBackgroundColour(0);
     tooltip_pie.draw(0.5*mouseX + 20, 0.5*mouseY -20); 
     
    }   
    
    else if (dist(mouseX, mouseY, 858,715) < 55)
      {
      tooltip_pie.setIsActive(true);
      tooltip_pie.setText("Purchases:" + referrer_visit[1] );
      tooltip_pie.setBackgroundColour(0);
     
       tooltip_pie.draw(0.5*mouseX + 20, 0.5*mouseY -20); 
    }   
    
    else if (dist(mouseX, mouseY, 882,666) < 52)
      {
      tooltip_pie.setIsActive(true);
      tooltip_pie.setText("Purchases:" + referrer_visit[2] );
      tooltip_pie.setBackgroundColour(0);
     
       tooltip_pie.draw(0.5*mouseX + 20, 0.5*mouseY -20); 
    }   
    
      else if (dist(mouseX, mouseY, 959,797) < 60)
      {
      tooltip_pie.setIsActive(true);
      tooltip_pie.setText("Purchases:" + referrer_visit[3] );
      tooltip_pie.setBackgroundColour(0);
     
       tooltip_pie.draw(0.5*mouseX + 20, 0.5*mouseY -20); 
    }   
    
      else if (dist(mouseX, mouseY, 909,621) < 45)
      {
      tooltip_pie.setIsActive(true);
      tooltip_pie.setText("Purchases:" + referrer_visit[4] );
      tooltip_pie.setBackgroundColour(0);
     
       tooltip_pie.draw(0.5*mouseX + 20, 0.5*mouseY -20); 
    }   
    
      else if (dist(mouseX -30, mouseY-30, 983,692) < 130)
      {
      tooltip_pie.setIsActive(true);
      tooltip_pie.setText("Purchases:" + referrer_visit[5] );
      tooltip_pie.setBackgroundColour(0);
     
       tooltip_pie.draw(mouseX - 350, mouseY -300);  
    }   
    
   // percentage visits from clients referred through different sources 
  Float walkin = 92.0/sum(referrer_visit);
  Float other_clients = 76.0/sum(referrer_visit);
  Float rehab_clinic = 35.0/sum(referrer_visit);
  Float loyal_clients = 31.0/sum(referrer_visit);
  Float media = 22.0/sum(referrer_visit);
  Float referrer = 174.0/sum(referrer_visit);
  
// add the percentage values as text within respective sections fo the pie chart 
  fill(0);
  textFont(font, 45);
  text(round(walkin*100)+"%", width-950, height - 300);
  text(round(other_clients*100)+"%", width -1080, height -500);
  text(round(rehab_clinic*100)+"%", width-1050, height - 650);
  text(round(loyal_clients*100)+"%", width -780, height - 250);
  text(round(media*100)+"%", width- 950,height -750);
  text(round(referrer*100)+"%", width-650, height/2 -100);


 // adding rectangular coloured shapes as legend for pie chart
  noStroke();
  fill(piecolor_x[0],piecolor_y[0],piecolor_z[0]);
  rect(width -325,height-480, 70, 40);
  fill(piecolor_x[1],piecolor_y[1],piecolor_z[1]);
   rect(width -150,height-480, 70, 40);
   fill(piecolor_x[2],piecolor_y[2],piecolor_z[2]);
  rect(width + 15,height-480, 70, 40);
  fill(piecolor_x[3],piecolor_y[3],piecolor_z[3]);
  rect(width -325,height-350, 70, 40);
  fill(piecolor_x[4],piecolor_y[4],piecolor_z[4]);
  rect(width -150,height-350, 70, 40);
   fill(piecolor_x[5],piecolor_y[5],piecolor_z[5]);
   rect(width +15,height-350, 70, 40);

  // adding labels to the legend
  fill(30);
  textFont(createFont("GillSans",35));
  text("walk-in", width - 175, height - 550);
  text("other clients", width - 5,height - 550);
  text("rehab", width - 325, height -420);
  text("loyal", width - 325, height - 550);
  text("media", width - 175, height - 420);
  text("other referrers", width - 5, height- 420);
  fill(110);
    // Draw title text
    fill(30);
   textFont(createFont("GillSans",45));
   text("Visits through\n" + "Referrer Sources", width-500, height-900); //chart title 
    }
}

// private method for computing sum of an array 
  private int sum(int[] array) {
  int sum = 0;
  for (float i : array){
       sum += i;
     }   
     return sum;
   
  }




 
 