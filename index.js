$(document).ready(function(){
    $(".ar").show();
    $(".fr").hide();
    $(".en").hide();
    

    $(".ARB").click(function () {

        $(".ar").show();
        $(".fr").hide();
        $(".en").hide();  
    });

     
    $(".FRA").click(function () {
  
    
        $(".ar").hide();
        $(".fr").show();
        $(".en").hide();

        $(".packs .pack").css({"height":"250px"});
        $(".pack h3").css({"margin":"12px 0px"});

        $(".packs .inv").css({"height":"200px"});
        

    });

    $(".ENG").click(function () {
      
        $(".ar").hide();
        $(".fr").hide();
        $(".en").show();
       
        $(".packs .pack").css({"height":"250px"});
        $(".packs .inv").css({"height":"200px"});
        
        });

  
    
    });