//http://emmaladouceur-ta-summer2015-110752.nitrousapp.com:3000/

$(document).ready(function(){

   
  
  $('#a-active').click(function() {
    
    $('#article-heading').html(" ");
   $('#article-paragraph').html(" ");
    
  //    OBAMA SUPER COMPUTER HOME PAGE GENERAL NEWS
$.getJSON('http://api.npr.org/query?id=1001&meta=inherit&apiKey=MDIwMDA2OTAyMDE0MzgxODI1Mjk2OThmZg001&output=json', function(result) {
           
              var news_title = result.list.story[0].title.$text;
              var news_author = result.list.story[0].byline[0].name.$text;
              var paragraph = result.list.story[0].text.paragraph;
    // defines vars in terms of JSON
    
    console.log(news_title);
    console.log(news_author);
 
    $('#article-heading').append("<h1>" + news_title + "</h1>");
    $('#article-heading').append("<h3> by " + news_author + "</h3>");
    
    // changes html of divs with info in JSON
    
    var i = 0;
    for (i = 0; i<= paragraph.length; i++) {
         var article_story = result.list.story[0].text.paragraph[i].$text;
         console.log(article_story);
         $('#article-paragraph').append("<p>" + article_story + "</p>");
               
    };
   });
  });             
     
       
 $('#us').click(function(){
   
   $('#article-heading').html(" ");
   $('#article-paragraph').html(" ");
    
  $.getJSON('http://api.npr.org/query?id=1003&meta=inherit&apiKey=MDIwMDA2OTAyMDE0MzgxODI1Mjk2OThmZg001&output=json', function(result){
   
    var us_title = result.list.story[0].title.$text;
    var us_author = result.list.story[0].byline[0].name.$text;
    var us_paragraph = result.list.story[0].text.paragraph;

   
    var i = 0;
    
     var full_us_story = function(){
     for (i = 0; i<= us_paragraph.length; i++) {
         var us_story = result.list.story[0].text.paragraph[i].$text;
         console.log(us_story);
         $('#article-paragraph').append("<p>" + us_story + "</p>");
       
    };
     };
    $('#article-heading').append("<h1>" + us_title + "</h1>");
    $('#article-heading').append("<h3> by " + us_author + "</h3>");
   ('#article-paragraph').append("<p>" + full_us_story() + "</p>");
 

});
   
 

});
  
  });
  
 




  
   
 

  
  
  
  
  
  
  
  
  
  
  
  
  
