
//here we are creating a get request to web page with different types of topics, on next stage we put it in inbox list
 
fetch('https://herzogenrath.iiot.smr.saint-gobain.net/node-red-app10/topics')
.then((resp)=>resp.json())
.then(data =>{
    

    //let newtopics=data.slice(1, (data.length-1));
    
    //let array =newtopics.split(",");
  
    autocomplete(document.getElementById("hotspottopic"), data);

  

}).catch(function(error){
    console.log("Error in parsing topic array:"+error)
});
  






/* another option of fetch from source page dii topics.

  async function getTopics() {
    try {
      let response = await fetch('https://herzogenrath.iiot.smr.saint-gobain.net/node-red-app10/topics');
      let topics = await response.text();
      let newtopics=topics.slice(1, (topics.length-1))   // [] - remove this
      
      let array = newtopics.split(",")     // creaating array
      return array;
      
      
    } catch(error) {
      alert(error);
    }
  }

 */





  





  


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/

    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the country names in the world:*/
  var topicstest = ["VALUE/DE0161-SGR/TESTSENSORS/EF389C/TEMPERATURE","VALUE/EQUARRI/CALC/kl1_1d_20m2", "VALUE/EQUARRI/CALC/kl1_1h_20m2", "VALUE/EQUARRI/CALC/kl1_50sek_20m2", "VALUE/EQUARRI/CALC/kl1_5min_20m2", "VALUE/EQUARRI/CALC/kl2_1d_20m2", "VALUE/EQUARRI/CALC/kl2_1h_20m2", "VALUE/EQUARRI/CALC/kl2_50sek_20m2", "VALUE/EQUARRI/CALC/kl2_5min_20m2", "VALUE/EQUARRI/CALC/kl2_L_5min_20m2", "VALUE/EQUARRI/CALC/kl2_ML_5min_20m2", "VALUE/EQUARRI/CALC/kl2_MR_5min_20m2", "VALUE/EQUARRI/CALC/kl2_R_5min_20m2", "VALUE/EQUARRI/CALC/kl3_1d_20m2", "VALUE/EQUARRI/CALC/kl3_1h_20m2", "VALUE/EQUARRI/CALC/kl3_50sek_20m2", "VALUE/EQUARRI/CALC/kl3_5min_20m2", "VALUE/EQUARRI/CALC/kl4_1d_20m2", "VALUE/EQUARRI/CALC/kl4_1h_20m2", "VALUE/EQUARRI/CALC/kl4_50sek_20m2", "VALUE/EQUARRI/CALC/kl4_5min_20m2", "VALUE/EQUARRI/CALC/m2promin", "VALUE/EQUARRI/DICKENMESSGERAET/Glastemperatur_T60001_A.U", "VALUE/EQUARRI/QUALITAET/ONDULOMETER/AVG", "VALUE/EQUARRI/QUALITAET/ONDULOMETER/CD", "VALUE/EQUARRI/QUALITAET/ONDULOMETER/CG", "VALUE/EQUARRI/QUALITAET/ONDULOMETER/D", "VALUE/EQUARRI/QUALITAET/ONDULOMETER/G", "VALUE/EQUARRI/ZUSCHNITT/LAENGSSCHNITT/Glastemperatur_links_T62071_A.U"];
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  //autocomplete(document.getElementById("hotspottopic"), topicstest);


 