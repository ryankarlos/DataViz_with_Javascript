$(document).ready(function() {

data =[
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2015,
    "Birth_Bothsexes": 59.6,
    "Birth_Male": 57.7,
    "Birth_Female": 61.6,
    "Age60_Bothsexes": 16.5,
    "Age60_Male": 15.8,
    "Age60_Female": 17.2
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2014,
    "Birth_Bothsexes": 59.1,
    "Birth_Male": 57.1,
    "Birth_Female": 61.1,
    "Age60_Bothsexes": 16.5,
    "Age60_Male": 15.7,
    "Age60_Female": 17.1
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2013,
    "Birth_Bothsexes": 58.6,
    "Birth_Male": 56.7,
    "Birth_Female": 60.5,
    "Age60_Bothsexes": 16.4,
    "Age60_Male": 15.7,
    "Age60_Female": 17.1
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2012,
    "Birth_Bothsexes": 58,
    "Birth_Male": 56.3,
    "Birth_Female": 59.8,
    "Age60_Bothsexes": 16.3,
    "Age60_Male": 15.7,
    "Age60_Female": 17
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2011,
    "Birth_Bothsexes": 57.4,
    "Birth_Male": 55.7,
    "Birth_Female": 59.2,
    "Age60_Bothsexes": 16.3,
    "Age60_Male": 15.6,
    "Age60_Female": 16.9
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2010,
    "Birth_Bothsexes": 56.8,
    "Birth_Male": 55.1,
    "Birth_Female": 58.5,
    "Age60_Bothsexes": 16.2,
    "Age60_Male": 15.5,
    "Age60_Female": 16.8
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2009,
    "Birth_Bothsexes": 56.2,
    "Birth_Male": 54.5,
    "Birth_Female": 57.9,
    "Age60_Bothsexes": 16.1,
    "Age60_Male": 15.4,
    "Age60_Female": 16.7
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2008,
    "Birth_Bothsexes": 55.3,
    "Birth_Male": 53.7,
    "Birth_Female": 57.1,
    "Age60_Bothsexes": 16,
    "Age60_Male": 15.3,
    "Age60_Female": 16.7
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2007,
    "Birth_Bothsexes": 54.8,
    "Birth_Male": 53.1,
    "Birth_Female": 56.4,
    "Age60_Bothsexes": 15.9,
    "Age60_Male": 15.2,
    "Age60_Female": 16.6
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2006,
    "Birth_Bothsexes": 54.1,
    "Birth_Male": 52.4,
    "Birth_Female": 55.8,
    "Age60_Bothsexes": 15.9,
    "Age60_Male": 15.2,
    "Age60_Female": 16.5
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2005,
    "Birth_Bothsexes": 53.4,
    "Birth_Male": 51.7,
    "Birth_Female": 55.1,
    "Age60_Bothsexes": 15.8,
    "Age60_Male": 15.1,
    "Age60_Female": 16.4
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2004,
    "Birth_Bothsexes": 52.6,
    "Birth_Male": 50.9,
    "Birth_Female": 54.4,
    "Age60_Bothsexes": 15.7,
    "Age60_Male": 15,
    "Age60_Female": 16.4
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2003,
    "Birth_Bothsexes": 51.9,
    "Birth_Male": 50,
    "Birth_Female": 53.8,
    "Age60_Bothsexes": 15.7,
    "Age60_Male": 15,
    "Age60_Female": 16.3
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2002,
    "Birth_Bothsexes": 51.5,
    "Birth_Male": 49.5,
    "Birth_Female": 53.5,
    "Age60_Bothsexes": 15.6,
    "Age60_Male": 14.9,
    "Age60_Female": 16.3
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2001,
    "Birth_Bothsexes": 51.3,
    "Birth_Male": 49.3,
    "Birth_Female": 53.3,
    "Age60_Bothsexes": 15.6,
    "Age60_Male": 14.9,
    "Age60_Female": 16.2
  },
  {
    "Country": "Burundi",
    "Code": "bi",
    "Year": 2000,
    "Birth_Bothsexes": 50.8,
    "Birth_Male": 48.6,
    "Birth_Female": 53,
    "Age60_Bothsexes": 15.6,
    "Age60_Male": 14.8,
    "Age60_Female": 16.2
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2015,
    "Birth_Bothsexes": 63.4,
    "Birth_Male": 61.1,
    "Birth_Female": 65.8,
    "Age60_Bothsexes": 16.9,
    "Age60_Male": 16.2,
    "Age60_Female": 17.6
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2014,
    "Birth_Bothsexes": 62.9,
    "Birth_Male": 60.6,
    "Birth_Female": 65.3,
    "Age60_Bothsexes": 16.9,
    "Age60_Male": 16.1,
    "Age60_Female": 17.5
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2013,
    "Birth_Bothsexes": 62.6,
    "Birth_Male": 60.3,
    "Birth_Female": 65,
    "Age60_Bothsexes": 16.8,
    "Age60_Male": 16.1,
    "Age60_Female": 17.5
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2012,
    "Birth_Bothsexes": 62.1,
    "Birth_Male": 60.2,
    "Birth_Female": 64.2,
    "Age60_Bothsexes": 16.7,
    "Age60_Male": 16,
    "Age60_Female": 17.4
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2011,
    "Birth_Bothsexes": 61.2,
    "Birth_Male": 59.7,
    "Birth_Female": 62.8,
    "Age60_Bothsexes": 16.7,
    "Age60_Male": 16,
    "Age60_Female": 17.3
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2010,
    "Birth_Bothsexes": 60.3,
    "Birth_Male": 58.9,
    "Birth_Female": 61.7,
    "Age60_Bothsexes": 16.6,
    "Age60_Male": 15.9,
    "Age60_Female": 17.2
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2009,
    "Birth_Bothsexes": 59.1,
    "Birth_Male": 57.9,
    "Birth_Female": 60.3,
    "Age60_Bothsexes": 16.5,
    "Age60_Male": 15.8,
    "Age60_Female": 17.1
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2008,
    "Birth_Bothsexes": 57.9,
    "Birth_Male": 56.8,
    "Birth_Female": 59,
    "Age60_Bothsexes": 16.4,
    "Age60_Male": 15.7,
    "Age60_Female": 17
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2007,
    "Birth_Bothsexes": 56.8,
    "Birth_Male": 55.8,
    "Birth_Female": 57.9,
    "Age60_Bothsexes": 16.4,
    "Age60_Male": 15.7,
    "Age60_Female": 17
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2006,
    "Birth_Bothsexes": 55.3,
    "Birth_Male": 54.4,
    "Birth_Female": 56.2,
    "Age60_Bothsexes": 16.3,
    "Age60_Male": 15.6,
    "Age60_Female": 17
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2005,
    "Birth_Bothsexes": 54.1,
    "Birth_Male": 53.2,
    "Birth_Female": 54.9,
    "Age60_Bothsexes": 16.2,
    "Age60_Male": 15.5,
    "Age60_Female": 16.9
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2004,
    "Birth_Bothsexes": 53,
    "Birth_Male": 52.2,
    "Birth_Female": 53.7,
    "Age60_Bothsexes": 16.1,
    "Age60_Male": 15.3,
    "Age60_Female": 16.9
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2003,
    "Birth_Bothsexes": 52.4,
    "Birth_Male": 51.6,
    "Birth_Female": 53.3,
    "Age60_Bothsexes": 16.1,
    "Age60_Male": 15.3,
    "Age60_Female": 16.8
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2002,
    "Birth_Bothsexes": 52.1,
    "Birth_Male": 51.2,
    "Birth_Female": 53,
    "Age60_Bothsexes": 16,
    "Age60_Male": 15.2,
    "Age60_Female": 16.8
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2001,
    "Birth_Bothsexes": 51.9,
    "Birth_Male": 50.9,
    "Birth_Female": 52.9,
    "Age60_Bothsexes": 16,
    "Age60_Male": 15.2,
    "Age60_Female": 16.8
  },
  {
    "Country": "Kenya",
    "Code": "ke",
    "Year": 2000,
    "Birth_Bothsexes": 51.9,
    "Birth_Male": 50.8,
    "Birth_Female": 53,
    "Age60_Bothsexes": 16,
    "Age60_Male": 15.2,
    "Age60_Female": 16.7
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2015,
    "Birth_Bothsexes": 66.1,
    "Birth_Male": 60.9,
    "Birth_Female": 71.1,
    "Age60_Bothsexes": 18,
    "Age60_Male": 16,
    "Age60_Female": 19.7
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2014,
    "Birth_Bothsexes": 65.7,
    "Birth_Male": 60.5,
    "Birth_Female": 70.8,
    "Age60_Bothsexes": 18,
    "Age60_Male": 16,
    "Age60_Female": 19.6
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2013,
    "Birth_Bothsexes": 65.2,
    "Birth_Male": 60,
    "Birth_Female": 70.3,
    "Age60_Bothsexes": 17.9,
    "Age60_Male": 15.9,
    "Age60_Female": 19.6
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2012,
    "Birth_Bothsexes": 64.6,
    "Birth_Male": 59.4,
    "Birth_Female": 69.8,
    "Age60_Bothsexes": 17.8,
    "Age60_Male": 15.8,
    "Age60_Female": 19.5
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2011,
    "Birth_Bothsexes": 63.8,
    "Birth_Male": 58.5,
    "Birth_Female": 69.1,
    "Age60_Bothsexes": 17.7,
    "Age60_Male": 15.7,
    "Age60_Female": 19.4
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2010,
    "Birth_Bothsexes": 62.8,
    "Birth_Male": 57.5,
    "Birth_Female": 68.1,
    "Age60_Bothsexes": 17.6,
    "Age60_Male": 15.6,
    "Age60_Female": 19.3
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2009,
    "Birth_Bothsexes": 61,
    "Birth_Male": 55.4,
    "Birth_Female": 66.7,
    "Age60_Bothsexes": 17.4,
    "Age60_Male": 15.3,
    "Age60_Female": 19.2
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2008,
    "Birth_Bothsexes": 60.8,
    "Birth_Male": 55.4,
    "Birth_Female": 66.2,
    "Age60_Bothsexes": 17.3,
    "Age60_Male": 15.3,
    "Age60_Female": 19.1
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2007,
    "Birth_Bothsexes": 59.6,
    "Birth_Male": 54.1,
    "Birth_Female": 65.1,
    "Age60_Bothsexes": 17.1,
    "Age60_Male": 15.1,
    "Age60_Female": 19
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2006,
    "Birth_Bothsexes": 57.6,
    "Birth_Male": 52.3,
    "Birth_Female": 63.1,
    "Age60_Bothsexes": 16.9,
    "Age60_Male": 14.9,
    "Age60_Female": 18.8
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2005,
    "Birth_Bothsexes": 55.3,
    "Birth_Male": 50.2,
    "Birth_Female": 60.6,
    "Age60_Bothsexes": 16.7,
    "Age60_Male": 14.6,
    "Age60_Female": 18.6
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2004,
    "Birth_Bothsexes": 53.4,
    "Birth_Male": 48.4,
    "Birth_Female": 58.6,
    "Age60_Bothsexes": 16.4,
    "Age60_Male": 14.4,
    "Age60_Female": 18.4
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2003,
    "Birth_Bothsexes": 52,
    "Birth_Male": 47,
    "Birth_Female": 57.3,
    "Age60_Bothsexes": 16.3,
    "Age60_Male": 14.2,
    "Age60_Female": 18.3
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2002,
    "Birth_Bothsexes": 50.7,
    "Birth_Male": 45.7,
    "Birth_Female": 56,
    "Age60_Bothsexes": 16.1,
    "Age60_Male": 14,
    "Age60_Female": 18.2
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2001,
    "Birth_Bothsexes": 48.6,
    "Birth_Male": 43.4,
    "Birth_Female": 54.4,
    "Age60_Bothsexes": 15.9,
    "Age60_Male": 13.8,
    "Age60_Female": 18.1
  },
  {
    "Country": "Rwanda",
    "Code": "rw",
    "Year": 2000,
    "Birth_Bothsexes": 48.3,
    "Birth_Male": 43.3,
    "Birth_Female": 53.8,
    "Age60_Bothsexes": 15.8,
    "Age60_Male": 13.7,
    "Age60_Female": 18
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2015,
    "Birth_Bothsexes": 57.3,
    "Birth_Male": 56.1,
    "Birth_Female": 58.6,
    "Age60_Bothsexes": 16.5,
    "Age60_Male": 16,
    "Age60_Female": 17
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2014,
    "Birth_Bothsexes": 56.6,
    "Birth_Male": 55.3,
    "Birth_Female": 58,
    "Age60_Bothsexes": 16.5,
    "Age60_Male": 15.9,
    "Age60_Female": 17
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2013,
    "Birth_Bothsexes": 56.4,
    "Birth_Male": 55.2,
    "Birth_Female": 57.5,
    "Age60_Bothsexes": 16.4,
    "Age60_Male": 15.9,
    "Age60_Female": 16.9
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2012,
    "Birth_Bothsexes": 56,
    "Birth_Male": 55,
    "Birth_Female": 57.1,
    "Age60_Bothsexes": 16.4,
    "Age60_Male": 15.8,
    "Age60_Female": 16.9
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2011,
    "Birth_Bothsexes": 55.4,
    "Birth_Male": 54.4,
    "Birth_Female": 56.5,
    "Age60_Bothsexes": 16.3,
    "Age60_Male": 15.7,
    "Age60_Female": 16.8
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2010,
    "Birth_Bothsexes": 55,
    "Birth_Male": 54.1,
    "Birth_Female": 56,
    "Age60_Bothsexes": 16.2,
    "Age60_Male": 15.6,
    "Age60_Female": 16.7
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2009,
    "Birth_Bothsexes": 54.3,
    "Birth_Male": 53.3,
    "Birth_Female": 55.3,
    "Age60_Bothsexes": 16.1,
    "Age60_Male": 15.5,
    "Age60_Female": 16.6
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2008,
    "Birth_Bothsexes": 53.6,
    "Birth_Male": 52.6,
    "Birth_Female": 54.7,
    "Age60_Bothsexes": 15.9,
    "Age60_Male": 15.4,
    "Age60_Female": 16.5
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2007,
    "Birth_Bothsexes": 53.1,
    "Birth_Male": 52,
    "Birth_Female": 54.1,
    "Age60_Bothsexes": 15.8,
    "Age60_Male": 15.3,
    "Age60_Female": 16.4
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2006,
    "Birth_Bothsexes": 52.5,
    "Birth_Male": 51.4,
    "Birth_Female": 53.6,
    "Age60_Bothsexes": 15.7,
    "Age60_Male": 15.2,
    "Age60_Female": 16.3
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2005,
    "Birth_Bothsexes": 51.9,
    "Birth_Male": 50.9,
    "Birth_Female": 53,
    "Age60_Bothsexes": 15.7,
    "Age60_Male": 15.1,
    "Age60_Female": 16.2
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2004,
    "Birth_Bothsexes": 51.4,
    "Birth_Male": 50.3,
    "Birth_Female": 52.5,
    "Age60_Bothsexes": 15.6,
    "Age60_Male": 15,
    "Age60_Female": 16.1
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2003,
    "Birth_Bothsexes": 50.8,
    "Birth_Male": 49.6,
    "Birth_Female": 52,
    "Age60_Bothsexes": 15.5,
    "Age60_Male": 14.9,
    "Age60_Female": 16
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2002,
    "Birth_Bothsexes": 50.2,
    "Birth_Male": 49,
    "Birth_Female": 51.4,
    "Age60_Bothsexes": 15.4,
    "Age60_Male": 14.8,
    "Age60_Female": 15.9
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2001,
    "Birth_Bothsexes": 49.6,
    "Birth_Male": 48.4,
    "Birth_Female": 50.8,
    "Age60_Bothsexes": 15.3,
    "Age60_Male": 14.8,
    "Age60_Female": 15.8
  },
  {
    "Country": "South Sudan",
    "Code": "ss",
    "Year": 2000,
    "Birth_Bothsexes": 48.9,
    "Birth_Male": 47.7,
    "Birth_Female": 50.2,
    "Age60_Bothsexes": 15.2,
    "Age60_Male": 14.7,
    "Age60_Female": 15.8
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2015,
    "Birth_Bothsexes": 62.3,
    "Birth_Male": 60.3,
    "Birth_Female": 64.3,
    "Age60_Bothsexes": 17.3,
    "Age60_Male": 16.6,
    "Age60_Female": 17.9
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2014,
    "Birth_Bothsexes": 61.5,
    "Birth_Male": 59.3,
    "Birth_Female": 63.7,
    "Age60_Bothsexes": 17.2,
    "Age60_Male": 16.5,
    "Age60_Female": 17.9
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2013,
    "Birth_Bothsexes": 60.7,
    "Birth_Male": 59,
    "Birth_Female": 62.4,
    "Age60_Bothsexes": 17.2,
    "Age60_Male": 16.5,
    "Age60_Female": 17.8
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2012,
    "Birth_Bothsexes": 60,
    "Birth_Male": 58.7,
    "Birth_Female": 61.1,
    "Age60_Bothsexes": 17.1,
    "Age60_Male": 16.5,
    "Age60_Female": 17.7
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2011,
    "Birth_Bothsexes": 59.3,
    "Birth_Male": 58.1,
    "Birth_Female": 60.4,
    "Age60_Bothsexes": 17.1,
    "Age60_Male": 16.4,
    "Age60_Female": 17.6
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2010,
    "Birth_Bothsexes": 58.4,
    "Birth_Male": 57.2,
    "Birth_Female": 59.5,
    "Age60_Bothsexes": 17,
    "Age60_Male": 16.3,
    "Age60_Female": 17.5
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2009,
    "Birth_Bothsexes": 57.5,
    "Birth_Male": 56.3,
    "Birth_Female": 58.6,
    "Age60_Bothsexes": 16.9,
    "Age60_Male": 16.3,
    "Age60_Female": 17.4
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2008,
    "Birth_Bothsexes": 56.3,
    "Birth_Male": 55.1,
    "Birth_Female": 57.4,
    "Age60_Bothsexes": 16.8,
    "Age60_Male": 16.1,
    "Age60_Female": 17.3
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2007,
    "Birth_Bothsexes": 55.5,
    "Birth_Male": 54.3,
    "Birth_Female": 56.6,
    "Age60_Bothsexes": 16.7,
    "Age60_Male": 16.1,
    "Age60_Female": 17.3
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2006,
    "Birth_Bothsexes": 54.9,
    "Birth_Male": 53.7,
    "Birth_Female": 56.2,
    "Age60_Bothsexes": 16.6,
    "Age60_Male": 16,
    "Age60_Female": 17.2
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2005,
    "Birth_Bothsexes": 53.2,
    "Birth_Male": 51.9,
    "Birth_Female": 54.4,
    "Age60_Bothsexes": 16.4,
    "Age60_Male": 15.8,
    "Age60_Female": 17
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2004,
    "Birth_Bothsexes": 51.3,
    "Birth_Male": 49.9,
    "Birth_Female": 52.5,
    "Age60_Bothsexes": 16.2,
    "Age60_Male": 15.5,
    "Age60_Female": 16.8
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2003,
    "Birth_Bothsexes": 50.1,
    "Birth_Male": 48.8,
    "Birth_Female": 51.3,
    "Age60_Bothsexes": 16,
    "Age60_Male": 15.4,
    "Age60_Female": 16.6
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2002,
    "Birth_Bothsexes": 48.8,
    "Birth_Male": 47.4,
    "Birth_Female": 50.1,
    "Age60_Bothsexes": 15.8,
    "Age60_Male": 15.2,
    "Age60_Female": 16.5
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2001,
    "Birth_Bothsexes": 47.7,
    "Birth_Male": 46.4,
    "Birth_Female": 49,
    "Age60_Bothsexes": 15.7,
    "Age60_Male": 15,
    "Age60_Female": 16.3
  },
  {
    "Country": "Uganda",
    "Code": "ug",
    "Year": 2000,
    "Birth_Bothsexes": 46.6,
    "Birth_Male": 45.1,
    "Birth_Female": 48,
    "Age60_Bothsexes": 15.5,
    "Age60_Male": 14.8,
    "Age60_Female": 16.1
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2015,
    "Birth_Bothsexes": 61.8,
    "Birth_Male": 59.9,
    "Birth_Female": 63.8,
    "Age60_Bothsexes": 16.4,
    "Age60_Male": 15.7,
    "Age60_Female": 17.1
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2014,
    "Birth_Bothsexes": 60.7,
    "Birth_Male": 58.7,
    "Birth_Female": 62.8,
    "Age60_Bothsexes": 16.3,
    "Age60_Male": 15.5,
    "Age60_Female": 17
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2013,
    "Birth_Bothsexes": 59.7,
    "Birth_Male": 57.8,
    "Birth_Female": 61.7,
    "Age60_Bothsexes": 16.1,
    "Age60_Male": 15.4,
    "Age60_Female": 16.8
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2012,
    "Birth_Bothsexes": 58.6,
    "Birth_Male": 56.9,
    "Birth_Female": 60.3,
    "Age60_Bothsexes": 16,
    "Age60_Male": 15.3,
    "Age60_Female": 16.7
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2011,
    "Birth_Bothsexes": 58.3,
    "Birth_Male": 56.8,
    "Birth_Female": 59.8,
    "Age60_Bothsexes": 15.9,
    "Age60_Male": 15.2,
    "Age60_Female": 16.6
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2010,
    "Birth_Bothsexes": 57.5,
    "Birth_Male": 56.4,
    "Birth_Female": 58.6,
    "Age60_Bothsexes": 15.9,
    "Age60_Male": 15.2,
    "Age60_Female": 16.5
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2009,
    "Birth_Bothsexes": 56.9,
    "Birth_Male": 55.8,
    "Birth_Female": 57.9,
    "Age60_Bothsexes": 15.8,
    "Age60_Male": 15.2,
    "Age60_Female": 16.5
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2008,
    "Birth_Bothsexes": 56.2,
    "Birth_Male": 55.2,
    "Birth_Female": 57.2,
    "Age60_Bothsexes": 15.7,
    "Age60_Male": 15.1,
    "Age60_Female": 16.4
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2007,
    "Birth_Bothsexes": 54.5,
    "Birth_Male": 53.7,
    "Birth_Female": 55.3,
    "Age60_Bothsexes": 15.5,
    "Age60_Male": 14.9,
    "Age60_Female": 16.2
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2006,
    "Birth_Bothsexes": 53.1,
    "Birth_Male": 52.4,
    "Birth_Female": 53.8,
    "Age60_Bothsexes": 15.4,
    "Age60_Male": 14.8,
    "Age60_Female": 16
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2005,
    "Birth_Bothsexes": 52.2,
    "Birth_Male": 51.6,
    "Birth_Female": 52.9,
    "Age60_Bothsexes": 15.3,
    "Age60_Male": 14.7,
    "Age60_Female": 15.9
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2004,
    "Birth_Bothsexes": 51.5,
    "Birth_Male": 50.8,
    "Birth_Female": 52.2,
    "Age60_Bothsexes": 15.2,
    "Age60_Male": 14.6,
    "Age60_Female": 15.8
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2003,
    "Birth_Bothsexes": 50.8,
    "Birth_Male": 50.1,
    "Birth_Female": 51.5,
    "Age60_Bothsexes": 15.1,
    "Age60_Male": 14.5,
    "Age60_Female": 15.6
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2002,
    "Birth_Bothsexes": 50.2,
    "Birth_Male": 49.5,
    "Birth_Female": 50.9,
    "Age60_Bothsexes": 15,
    "Age60_Male": 14.4,
    "Age60_Female": 15.6
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2001,
    "Birth_Bothsexes": 49.6,
    "Birth_Male": 48.9,
    "Birth_Female": 50.4,
    "Age60_Bothsexes": 14.9,
    "Age60_Male": 14.3,
    "Age60_Female": 15.5
  },
  {
    "Country": "United Republic of Tanzania",
    "Code": "tz",
    "Year": 2000,
    "Birth_Bothsexes": 49.2,
    "Birth_Male": 48.4,
    "Birth_Female": 50,
    "Age60_Bothsexes": 14.9,
    "Age60_Male": 14.2,
    "Age60_Female": 15.4
  } 
  ];

africa = Highcharts.maps["custom/africa"];

// creating  a function which outputs a highchart series array for a given year.
// Year is used as an argument. This is later called when the slider is moved to change 
// the maps depending on the slider year value.

var data_year = [];
var min_value = 1000000;
function map_data(year){
for (var i = 0; i < data.length; i++) {

   if (data[i].Year == year) {
         var item = [data[i].Code,+data[i].Birth_Bothsexes];
         data_year.push(item);
         if(item[1] < min_value){
               min_value = item[1] -0.5;
                      }
            }

         };
        data_single = data_year.slice(Math.max(data_year.length - 6, 0))
        return data_single;
       }
       
     
map_data(2000);
console.log(data_single); 



function createRadioElement( name, checked ) {
   var radioInput;
   try {
        var radioHtml = '<input type="radio" name="' + name + '"';
        if ( checked ) {
            radioHtml += ' checked="checked"';
        }
        radioHtml += '/>';
        radioInput = document.createElement(radioHtml);
    } catch( err ) {
        radioInput = document.createElement('input');
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('name', name);
        if ( checked ) {
            radioInput.setAttribute('checked', 'checked');
        }
    }
    return radioInput;
};


// Initiate the chart
var chart = Highcharts.mapChart('container', {
chart: {
backgroundColor:null
},
  title: {
    text: 'East Africa Life Expectancy'
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'top right'
    }
  },
  colorAxis: {
    min: min_value,
    stops: [
      [0, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.5).get()],
      [0.7, Highcharts.getOptions().colors[0]],
      [1, '#EFEFFF']
    ]
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'bottom'
  },
  series: [{
    data: data_single,
    mapData: africa,
    joinBy: 'hc-key',
    
    allAreas: false,
    name: 'Country Indicators',
    states: {
      hover: {
        color: '#BADA55'
      }
    },
    tooltip: {
      valueSuffix: 'yrs'
    },
    dataLabels:{
    enabled:true,
    format: '{point.name}'
    }
   }]  
});


var initialValue = 2000;
var data_year = [];
var sliderTooltip = function(event, ui) {
    var curValue = ui.value || initialValue;
    var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + curValue + '</div><div class="tooltip-arrow"></div></div>';

    $('.ui-slider-handle').html(tooltip);
    var data_index = +ui.value || initialValue
    console.log(data_index)
    map_data(data_index)
    console.log(data_single)
  chart.series[0].setData (data_single);

}

$('#slider').slider({

min: 2000,
max: 2015,
step: 1,
value: initialValue,
create: sliderTooltip,
change: sliderTooltip,

/*change: function(event, ui) {
       $('#slider2_value').html(ui.value);
       newdata = ui.value
       console.log(newdata)
       console.log(map_data(newdata))
       //newdata.push(ui.value);
    //chart.series[0].setData (newdata);
        },
   */     
stop: function(event, ui) {
    
    }
    
 });


});
