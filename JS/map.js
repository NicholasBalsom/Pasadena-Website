        
window.onload = function(){
    showSlides(slideIndex = n);
    }
              
    let SLIDE_C = 1;
    let slideIndex = 1;
    showSlides(slideIndex);
            
    function plusSlides(n) {
      showSlides(slideIndex += n);
      Slide_num_pic(SLIDE_C += n);
    }
            
    function currentSlide(n) {
      showSlides(slideIndex = n);
      Slide_num_pic(SLIDE_C = n);
    }
            
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }
            
            
            
    function Slide_num_pic(n){
    if(n < 1){Slide_pic(SLIDE_C = 8);}
    else if(n > 8){Slide_pic(SLIDE_C = 1);}
    else{Slide_pic(SLIDE_C = n);}
            
    }
            
    function Slide_pic(n){
    if(n == 1){document.getElementById('CHANGE').innerHTML = 'Knights of Columbus Hall';
    document.getElementById('CHANGE2').innerHTML ='The Banquet hall is located in NL A0L, Canada. It is one of the 775 Banquet halls in Canada. Address of Knights of Columbus Hall is 12 Lakewood Dr, Pasadena, NL A0L, Canada, Canada. Knights of Columbus Hall can be contacted at 17096862274.'}
    if(n == 2){document.getElementById('CHANGE').innerHTML = 'William Seaward Sports Complex';
    document.getElementById('CHANGE2').innerHTML ='activitys include Baseball Diamond, Skate Park, and Dog Park'}
    if(n == 3){document.getElementById('CHANGE').innerHTML = 'Pasadena Place';
    document.getElementById('CHANGE2').innerHTML ='Things to do include Fitness Center, Double Court Gymnasium, 3 Multipurpose Rooms, Community Kitchen, Rock Wall, Walking Track, and Indoor/Outdoor Stage'}
    if(n == 4){document.getElementById('CHANGE').innerHTML = 'Pasadena Ski Nature Park';
    document.getElementById('CHANGE2').innerHTML ='The Pasadena Ski Nature Park has over 19 kilometers of groomed ski trails, 2 kilometers of lighted trails for night skiing, 6 kilometers of snowshoeing trails along with a state of the art ski chalet. These wilderness trails features breathtaking views and wildlife of Western Newfoundland. Summer hiking, mountain biking, winter cross-country skiing and snowshoeing in the hills of picturesque Pasadena - The Crown of the Valley - is a beautiful tourist stop any time of the year.The Pasadena Ski and Nature Parks mission is to promote, on a year round basis, life long healthful living and a respect for our natural surroundings in a family-oriented community environment of cross-country skiing and nature interpretation.'}
    if(n == 5){document.getElementById('CHANGE').innerHTML = 'Pasadena Pentecostal Church';
    document.getElementById('CHANGE2').innerHTML ='gathering of people who are seeking to love God and love people.  We are a community church dedicated to reaching out to our neighbours with the Love and the Message of Jesus Christ. Our desire is to serve our community in as many ways as we can and to help meet the spiritual needs of all seekers.'}
    if(n == 6){document.getElementById('CHANGE').innerHTML = 'wrights family farm';
    document.getElementById('CHANGE2').innerHTML ='over 30 different varieties of fresh, local berries, fruit and vegetables in-season at our on-farm market. We also have strawberry, raspberry. blueberry and pumpkin u-picks at our farm. Special activities are available on select weekends during the season. Pack a picnic lunch to enjoy at the farm and come for some outdoor, fresh air fun.'}
    if(n == 7){document.getElementById('CHANGE').innerHTML = 'Town of pasadena';
    document.getElementById('CHANGE2').innerHTML ='Situated in the beautiful Humber Valley, Pasadena residents enjoy a rural lifestyle with access to a full range of services. The community is known for maintaining an attractive town with abundant green spaces, flower gardens and tree growth.  Pasadena has been recognized by a leading national magazine as one of the ten most desirable places in Canada to live. With a population of over 3200, this growing community is increasingly viewed as a very desirable place to live and to conduct business. In a few minutes from Pasadena one can access an international airport or a major shipping and distribution sea port. Pasadena can indeed offer the “best of both worlds”, access to full commercial and cultural activities and at the end of the day, a residential community with a high quality of life.'}
    if(n == 8){document.getElementById('CHANGE').innerHTML = 'Pasadena Beach';
    document.getElementById('CHANGE2').innerHTML ='Pasadena sits on the sandy shores of beautiful Deer Lake. Beach Corp Inc operates a public beach open for family enjoyment throughout the summer. This popular spot is a haven to those who enjoy swimming in the fresh water lake. Those who enjoy more adventuresome water sport can expore the miles of waterways on the lake or up or down the world renowned Humber River. Pasadena Beach is especially home to those who just want to spend a lazy summer day with the sand between their toes'}
    }
    