
// africa shape files taken from Highmaps map collections - https://code.highcharts.com/mapdata/
$(document).ready(function() {

/*
    $.getJSON('south_sudan.json', function(data1){

      var data1 = data1;

       $.getJSON('south_sudan_data.json', function(data2){

      var data2 = data2;
*/
var data1 =  [

      {
        "name": "West Equatoria",
        "code": "SS-WE",
        "path":" M478,-350L464,-359L453,-361L449,-360L449,-354L444,-346L440,-342L437,-337L432,-337L430,-333L426,-334L420,-339L410,-347L395,-345L390,-352L385,-350L382,-343L374,-339L372,-336L367,-335L360,-328L355,-330L352,-335L341,-334L334,-342L330,-341L327,-347L327,-352L312,-353L306,-356L306,-368L303,-373L299,-373L295,-381L288,-382L278,-391L279,-395L274,-403L267,-408L261,-418L260,-428L263,-437L260,-440L260,-445L252,-456L244,-458L240,-464L234,-463L232,-467L226,-467L225,-472L216,-477L208,-477L201,-480L197,-485L193,-483L194,-488L199,-491L200,-494L195,-496L195,-500L189,-503L181,-510L181,-516L189,-530L322,-545L336,-535L339,-534L382,-537L380,-526L380,-516L378,-513L381,-497L387,-485L398,-475L406,-463L424,-452L461,-448L467,-448L472,-451L475,-463L489,-483L491,-495L489,-504L489,-511L492,-514L513,-514L522,-506L530,-488L534,-484L544,-474L557,-464L563,-455L574,-446L578,-438L578,-431L574,-425L571,-417L570,-392L566,-387L554,-383L540,-375L529,-364L523,-362L519,-364L510,-371L504,-370L496,-363Z"
      },
      {
        "name": "Central Equatoria",
        "code": "SS-BG",
        "path": "M478,-350L496,-363L504,-370L510,-371L519,-364L523,-362L529,-364L540,-375L554,-383L566,-387L570,-392L571,-417L574,-425L578,-431L578,-438L574,-446L563,-455L557,-464L544,-474L534,-484L553,-485L560,-487L567,-490L571,-490L587,-476L597,-472L626,-467L634,-463L639,-467L684,-464L682,-455L683,-402L686,-391L693,-379L695,-373L692,-364L687,-357L679,-340L676,-328L670,-319L661,-312L657,-307L649,-287L647,-288L638,-279L629,-277L624,-275L606,-285L593,-286L588,-281L576,-277L568,-261L567,-267L562,-271L560,-276L555,-273L545,-270L542,-271L544,-278L541,-293L532,-294L525,-298L514,-300L509,-307L507,-313L501,-315L497,-321L490,-324L491,-329L486,-333L480,-334L477,-339Z"
      },
      {
        "name": "Upper Nile",
        "code": "SS-UN",
        "path": "M579,-792L597,-793L603,-795L639,-831L651,-844L656,-852L663,-868L702,-901L704,-906L698,-917L697,-932L698,-946L697,-957L675,-982L730,-982L729,-993L729,-1000L769,-1000L768,-993L764,-976L764,-966L763,-955L758,-946L767,-884L763,-875L783,-867L791,-858L827,-829L833,-816L832,-807L833,-799L828,-788L825,-774L827,-766L842,-766L845,-696L842,-688L833,-680L821,-678L815,-674L810,-674L807,-679L802,-682L798,-681L794,-683L782,-679L773,-681L766,-677L765,-668L769,-664L766,-658L766,-653L761,-651L755,-644L752,-638L742,-642L738,-645L738,-650L742,-659L743,-670L739,-675L731,-679L723,-685L718,-691L703,-717L699,-727L694,-730L669,-717L663,-716L656,-720L628,-758L627,-759L618,-757L613,-760L594,-764L584,-770L578,-772Z"
      },
      {
        "name": "Jonglei",
        "code": "SS-JG",
        "path": "M752,-638L751,-636L756,-626L762,-624L765,-626L772,-624L776,-620L782,-619L791,-621L800,-616L805,-616L812,-614L820,-605L826,-603L837,-593L839,-588L839,-580L847,-572L850,-573L853,-563L861,-555L873,-553L879,-549L881,-537L890,-535L896,-531L898,-527L903,-511L907,-503L908,-494L913,-485L917,-480L919,-474L852,-454L684,-464L639,-467L635,-471L631,-480L628,-484L622,-502L617,-508L615,-516L611,-517L609,-526L595,-544L589,-548L588,-550L580,-555L574,-560L570,-561L567,-565L561,-570L553,-586L549,-596L543,-602L545,-607L540,-613L541,-621L543,-628L539,-637L534,-643L531,-653L525,-653L524,-656L526,-674L529,-682L522,-691L521,-695L525,-700L518,-708L520,-710L518,-717L515,-726L529,-745L529,-754L526,-758L535,-769L543,-774L553,-773L564,-771L574,-770L578,-772L584,-770L594,-764L613,-760L618,-757L627,-759L628,-758L656,-720L663,-716L669,-717L694,-730L699,-727L703,-717L718,-691L723,-685L731,-679L739,-675L743,-670L742,-659L738,-650L738,-645L742,-642Z"
      },
      {
        "name": "Unity",
        "code": "SS-WH",
        "path": "M578,-772L574,-770L564,-771L553,-773L543,-774L535,-769L526,-758L529,-754L529,-745L515,-726L518,-717L520,-710L518,-708L525,-700L521,-695L522,-691L529,-682L526,-674L524,-656L525,-653L531,-653L534,-643L539,-637L543,-628L541,-621L540,-613L545,-607L543,-602L549,-596L553,-586L561,-570L567,-565L526,-566L516,-570L489,-625L485,-627L472,-629L470,-678L468,-682L444,-698L422,-732L418,-733L400,-732L403,-744L406,-748L414,-752L407,-756L401,-757L400,-766L407,-774L416,-780L426,-786L436,-789L456,-793L463,-800L467,-806L467,-819L474,-823L501,-836L540,-811L562,-790L565,-789L570,-791L579,-792Z"
      },
      {
        "name": "Warap",
        "code": "SS-WR",
        "path": "M400,-732L418,-733L422,-732L444,-698L468,-682L470,-678L472,-629L461,-612L433,-581L426,-570L415,-536L413,-532L407,-530L395,-529L389,-532L382,-537L379,-557L378,-567L379,-581L380,-594L378,-600L375,-604L375,-612L358,-621L351,-626L341,-632L328,-634L323,-638L318,-645L307,-663L303,-667L309,-691L316,-703L319,-720L322,-727L326,-729L340,-731L364,-730Z"
      },
      {
        "name": "West Bahr-al-Ghazal",
        "code": "SS-WB",
        "path": "M303,-667L307,-663L318,-645L323,-638L328,-634L341,-632L351,-626L358,-621L375,-612L375,-604L378,-600L380,-594L379,-581L378,-567L379,-557L382,-537L339,-534L336,-535L322,-545L189,-530L189,-532L177,-538L170,-545L164,-549L161,-554L160,-562L155,-563L148,-567L147,-570L140,-572L139,-575L123,-581L118,-585L113,-586L103,-592L100,-599L89,-606L87,-613L94,-617L97,-620L96,-630L92,-637L88,-639L81,-639L76,-642L69,-649L67,-657L59,-664L49,-667L41,-668L32,-668L25,-673L17,-671L8,-674L0,-680L1,-688L6,-696L10,-699L8,-706L10,-709L4,-710L5,-712L22,-723L32,-724L37,-726L38,-737L47,-751L49,-767L58,-778L59,-781L59,-804L70,-811L75,-818L80,-829L79,-835L85,-845L98,-847L102,-846L113,-849L119,-849L131,-852L141,-853L149,-854L154,-848L154,-835L164,-828L171,-817L171,-810L167,-781L166,-725L170,-696L170,-684L172,-672L175,-663L180,-655L185,-651L212,-632L221,-630L231,-634L240,-641L291,-664Z"
      },
      {
        "name": "East Equatoria",
        "code": "SS-EE",
        "path": "M649,-287L657,-307L661,-312L670,-319L676,-328L679,-340L687,-357L692,-364L695,-373L693,-379L686,-391L683,-402L682,-455L684,-464L852,-454L919,-474L917,-469L920,-460L928,-448L930,-441L944,-432L943,-425L949,-418L958,-425L965,-425L972,-420L980,-421L990,-415L988,-408L990,-403L986,-394L986,-376L988,-369L1000,-357L988,-357L988,-362L982,-360L981,-354L974,-357L966,-370L970,-381L964,-383L955,-382L958,-389L957,-391L944,-384L942,-387L893,-369L869,-356L835,-322L797,-285L790,-282L768,-283L764,-284L753,-293L750,-293L738,-286L731,-284L702,-282L698,-281L682,-271L681,-263L674,-263L669,-269L662,-269L659,-277Z"
      },
      {
        "name": "North Bahr-al-Ghazal",
        "code": "SS-NB",
        "path": "M407,-756L414,-752L406,-748L403,-744L400,-732L364,-730L340,-731L326,-729L322,-727L319,-720L316,-703L309,-691L303,-667L291,-664L240,-641L231,-634L221,-630L212,-632L185,-651L180,-655L175,-663L172,-672L170,-684L170,-696L166,-725L167,-781L171,-810L171,-817L177,-815L208,-777L214,-773L220,-773L253,-783L275,-783L278,-783L300,-782L311,-780L322,-781L330,-763L334,-758L401,-757Z"
      },
      {
        "name": "Lakes",
        "code": "SS-EB",
        "path": "M534,-484L530,-488L522,-506L513,-514L492,-514L489,-511L489,-504L491,-495L489,-483L475,-463L472,-451L467,-448L461,-448L424,-452L406,-463L398,-475L387,-485L381,-497L378,-513L380,-516L380,-526L382,-537L389,-532L395,-529L407,-530L413,-532L415,-536L426,-570L433,-581L461,-612L472,-629L485,-627L489,-625L516,-570L526,-566L567,-565L570,-561L574,-560L580,-555L588,-550L589,-548L595,-544L609,-526L611,-517L615,-516L617,-508L622,-502L628,-484L631,-480L635,-471L639,-467L634,-463L626,-467L597,-472L587,-476L571,-490L567,-490L560,-487L553,-485Z"
      }

]

var data2 = [
      {
        "name": "West Equatoria",
        "code": "SS-WE",
        "Year":2015,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 60,
        "Range": "NA"
      },

      {
        "name": "Central Equatoria",
        "code": "SS-BG",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 57,
        "Range": "NA"
      },
      {
        "name": "Upper Nile",
        "code": "SS-UN",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 56,
        "Range": "NA"
      },
      {
        "name": "Jonglei",
        "code": "SS-JG",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 60,
        "Range": "NA"
      },
      {
        "name": "Unity",
        "code": "SS-WH",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 55,
      },
      {
        "name": "Warap",
        "code": "SS-WR",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 52,
      },
      {
        "name": "West Bahr-al-Ghazal",
        "code": "SS-WB",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 60,
      },
      {
        "name": "East Equatoria",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "code": "SS-EE",
        "value": 65,
      },
      {
        "name": "North Bahr-al-Ghazal",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "code": "SS-NB",
        "value": 64,
      },
      {
        "name": "Lakes",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "code": "SS-EB",
        "value": 53,
      },


      {
        "name": "West Equatoria",
        "code": "SS-WE",
        "Year":2014,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 55,
        "Range": "NA"
      },

      {
        "name": "Central Equatoria",
        "code": "SS-BG",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 52,
        "Range": "NA"
      },
      {
        "name": "Upper Nile",
        "code": "SS-UN",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 59,
        "Range": "NA"
      },
      {
        "name": "Jonglei",
        "code": "SS-JG",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 65,
        "Range": "NA"
      },
      {
        "name": "Unity",
        "code": "SS-WH",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 55,
      },
      {
        "name": "Warap",
        "code": "SS-WR",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 52,
      },
      {
        "name": "West Bahr-al-Ghazal",
        "code": "SS-WB",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "value": 50,
      },
      {
        "name": "East Equatoria",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "code": "SS-EE",
        "value": 55,
      },
      {
        "name": "North Bahr-al-Ghazal",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "code": "SS-NB",
        "value": 54,
      },
      {
        "name": "Lakes",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Birth Both sexes",
        "code": "SS-EB",
        "value": 51,
      },


      ///////// New metric //////////////////////////
      {
        "name": "West Equatoria",
        "code": "SS-WE",
        "Year":2015,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 63,
        "Range": "NA"
      },

      {
        "name": "Central Equatoria",
        "code": "SS-BG",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 67,
        "Range": "NA"
      },
      {
        "name": "Upper Nile",
        "code": "SS-UN",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 66,
        "Range": "NA"
      },
      {
        "name": "Jonglei",
        "code": "SS-JG",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 62,
        "Range": "NA"
      },
      {
        "name": "Unity",
        "code": "SS-WH",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 65,
      },
      {
        "name": "Warap",
        "code": "SS-WR",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 62,
      },
      {
        "name": "West Bahr-al-Ghazal",
        "code": "SS-WB",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 64,
      },
      {
        "name": "East Equatoria",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "code": "SS-EE",
        "value": 66,
      },
      {
        "name": "North Bahr-al-Ghazal",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "code": "SS-NB",
        "value": 64,
      },
      {
        "name": "Lakes",
        "Year": 2015,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "code": "SS-EB",
        "value": 58,
      },

      {
        "name": "West Equatoria",
        "code": "SS-WE",
        "Year":2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 53,
        "Range": "NA"
      },

      {
        "name": "Central Equatoria",
        "code": "SS-BG",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 57,
        "Range": "NA"
      },
      {
        "name": "Upper Nile",
        "code": "SS-UN",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 56,
        "Range": "NA"
      },
      {
        "name": "Jonglei",
        "code": "SS-JG",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 52,
        "Range": "NA"
      },
      {
        "name": "Unity",
        "code": "SS-WH",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 55,
      },
      {
        "name": "Warap",
        "code": "SS-WR",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 52,
      },
      {
        "name": "West Bahr-al-Ghazal",
        "code": "SS-WB",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 54,
      },
      {
        "name": "East Equatoria",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "code": "SS-EE",
        "value": 56,
      },
      {
        "name": "North Bahr-al-Ghazal",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "code": "SS-NB",
        "value": 54,
      },
      {
        "name": "Lakes",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "code": "SS-EB",
        "value": 57,
      },

      ///////// New metric //////////////////////////
      {
        "name": "West Equatoria",
        "code": "SS-WE",
        "Year":2015,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 63,
        "Range": "NA"
      },

      {
        "name": "Central Equatoria",
        "code": "SS-BG",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 67,
        "Range": "NA"
      },
      {
        "name": "Upper Nile",
        "code": "SS-UN",
        "Year": 2013,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 66,
        "Range": "NA"
      },
      {
        "name": "Jonglei",
        "code": "SS-JG",
        "Year": 2012,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 62,
        "Range": "NA"
      },
      {
        "name": "Unity",
        "code": "SS-WH",
        "Year": 2011,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 65,
      },
      {
        "name": "Warap",
        "code": "SS-WR",
        "Year": 2010,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 62,
      },
      {
        "name": "West Bahr-al-Ghazal",
        "code": "SS-WB",
        "Year": 2009,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 64,
      },
      {
        "name": "East Equatoria",
        "Year": 2008,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "code": "SS-EE",
        "value": 66,
      },
      {
        "name": "North Bahr-al-Ghazal",
        "Year": 2007,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "code": "SS-NB",
        "value": 64,
      },
      {
        "name": "Lakes",
        "Year": 2006,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "code": "SS-EB",
        "value": 58,
      },

      {
        "name": "West Equatoria",
        "code": "SS-WE",
        "Year":2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 57,
        "Range": "NA"
      },

      {
        "name": "Central Equatoria",
        "code": "SS-BG",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 64,
        "Range": "NA"
      },
      {
        "name": "Upper Nile",
        "code": "SS-UN",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 62,
        "Range": "NA"
      },
      {
        "name": "Jonglei",
        "code": "SS-JG",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 61,
        "Range": "NA"
      },
      {
        "name": "Unity",
        "code": "SS-WH",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 62,
      },
      {
        "name": "Warap",
        "code": "SS-WR",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 61,
      },
      {
        "name": "West Bahr-al-Ghazal",
        "code": "SS-WB",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "value": 62,
      },
      {
        "name": "East Equatoria",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "code": "SS-EE",
        "value": 62,
      },
      {
        "name": "North Bahr-al-Ghazal",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "code": "SS-NB",
        "value": 62,
      },
      {
        "name": "Lakes",
        "Year": 2014,
        "indicator": "Life Expectancy",
        "Metric": "At Age 60 Male",
        "code": "SS-EB",
        "value": 56,
      }
];

                var data =  alasql('SELECT data2.Metric, data2.value, data2.Year, data2.name, data2.code, data2.Year, data2.indicator, data1.path FROM ? data1 JOIN ? data2 USING code', [data1,data2]);
                console.log(data);

                var years = [];
                var provinces = [];
                var metric_value = [];
                var metric_year;
                var metric_name = [];
                var metric_number;
                var data1 = [];
                var data2 = {};
               var data_year = [];
               var data_metric = [];
               var min_value = 1000000; // set this as a high number


               /// get unique values for country and year in the data set

               for (var i = 0; i < data.length; i++){
                   years.push(data[i].Year)
                   provinces.push(data[i].name)
                   years = years.filter((x, i, a) => a.indexOf(x) == i).reverse(); /// getting unique year values into array
                   years = years.sort(function(a,b){return a-b}); // sorting values in year array in ascending order
                   provinces = provinces.filter((x, i, a) => a.indexOf(x) == i); /// getting unique country values into array
               }

                // Gets unique metric names from array

                for (var i = 0; i < data.length; i++){
                   if(metric_name.indexOf(data[i].Metric) === -1){
                        metric_name.push(data[i].Metric);
                    }

                };

               /// Computing the max and min years from the data - this will be used to automatically set the slider range

               var max_year = Math.max(...years);
               var min_year = Math.min(...years);
               console.log(max_year);
               console.log(min_year);
               console.log(years);
               console.log(provinces);

               console.log(metric_name);
               console.log('The names of the metrics are', metric_name);
               //console.log(metric_name[0]);
               metric_number = metric_name.length;

               console.log("the min year is: ", min_year);
               console.log("the max year is: ", max_year);

//// this function filters the json array for one metric

               function map_metric(metric_no){

                   for (var i = 0; i < data.length; i++) {

                         var metric = metric_name[metric_no];
                         console.log(metric);

                             if (data[i].Metric == metric){

                                    data_metric.push(data[i])
                               }

                             };

                              return data_metric;
                        };

               map_metric(0);

               console.log(data_metric);

               var item = [data_metric[2]];
               console.log(item);
               // function which produces an array of single metric values for all provinces for a single year

               var data_path = [];
               function map_year(year, data_metric){
                       for (var i = 0; i < data_metric.length; i++) {

                          if (data_metric[i]["Year"] == year) {


                               data_path.push(data_metric[i].path)
                              data_year.push(data_metric[i]);
                            }
                      };

                      return data_year;
                };

               // checking output of function map_data for year 2000
               map_year(2014, data_metric);
               console.log(data_year);


        var chart = Highcharts.mapChart('container1',{

        title: {
                text: 'South Sudan'
            },
        mapNavigation: {
                enabled: true,
                buttonOptions: {
                                verticalAlign: 'bottom'
                            }
            },
        colorAxis: {
                min: 0
                 },


        series: [{
            data: data_year,
            type: "map",
            states: {
              hover: {
                color: '#BADA55'
              }
            },
            dataLabels:{
            enabled:true,
            format: '{point.name}'
            }
           }]

        });

        var browser_width = $(window).width();
        var browser_height = $(window).height();


        var d = document.getElementById('play-button');
        d.style.positon = "absolute";
        d.style.left = -browser_width/2 + 'px';

        var initialValue = min_year;
        var data_year = [];
        var sliderTooltip = function(event, ui) {

            var curValue = ui.value || initialValue;
            var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + curValue + '</div><div class="tooltip-arrow"></div></div>';

            $('.ui-slider-handle').html(tooltip);
            var data_index = +ui.value || initialValue
            console.log(data_index);
            map_year(data_index, data_metric)
            console.log(data_year);
            chart.series[0].setData (data_year);
        }

        $('#slider').slider({
        min: min_year,
        max: max_year,
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

        var startButton = document.getElementById("play-button");
        var pauseButton  = document.getElementById("pause-button");
        var stopButton = document.getElementById("stop-button");
        var count = initialValue

        // Clicking play button sets slider moving if other conditions are satisfied

        startButton.onclick = function() {

         // clicking pause button stops the slider handle from moving

        pauseButton.onclick = function() {
                clearInterval(handle);
                $('#slider').slider("value",count);
            };
         // clicking stop resets the slider to the start point at year 2000.

        stopButton.onclick = function() {
                clearInterval(handle);
                $('#slider').slider("value",initialValue);

         // resetting count variable to initial value so slider handle moves from start again when play button clicked

                count = initialValue;
        };

        // controls  interval between slider handle moving to the next value

        var play_duration = 800;

        var handle = setInterval(function(){move_slider()},play_duration);
        function move_slider(){
        // stop calling setInterval when slider reaches last value

              if(count == (max_year + 1) ){
               clearInterval(handle);
             }
             else {
                 count++;
                 $('#slider').slider("value",count);

             }
          }
        }

        // function for creating inline div function for radio buttons

        function createinlineDiv() {
          var i;
            var inline = document.createElement("input");
            inline.type = "radio";
            inline.name = "Metric Map"
            // group together with same name to allow clikc selection to work properly
            return inline;
         }

        // automatically generate number of radio buttons based on
        // number of metrics. Also adjust the CSS styling of the
        // border around the radio buttons depending on the number
        // of radio buttons generated

        var inlineDivs = [];


        function createAndModifyDivs() {

            var i;
            var label;
            var block = document.getElementById("container3");
            for (i = 0; i < metric_number; i += 1) {
              label = document.createElement("label");
              label.for = "" + metric_name[i];
              label.innerText = "" + metric_name[i];
              label.style.fontWeight =  "bold";
              label.style.fontSize = 'small';
              label.style.marginLeft = '10px';
              console.log(label.innerText);
              block.appendChild(label);
              block.style.height = 20*metric_number + "px";
              block.appendChild(document.createElement("br"))
          }

          var block = document.getElementById("container2");
            for (i = 0; i < metric_number; i += 1) {
              block.style.height = 20*metric_number + "px";
              inlineDivs.push(createinlineDiv());
              inlineDivs[i].className = "" + metric_name[i];
              block.appendChild(inlineDivs[i]);

            }

          return inlineDivs;

        };

        createAndModifyDivs();

        console.log(inlineDivs.length)
        console.log(inlineDivs[1])
        map_metric(1);

        for (var j = 0; j < inlineDivs.length; j ++) {

            inlineDivs[j].onclick =function() {
               var button_metric = map_metric(j);
               console.log(button_metric);
              var button_year = map_year( min_year, button_metric);
                chart.series[0].setData(button_year);
            }
        }


  });
