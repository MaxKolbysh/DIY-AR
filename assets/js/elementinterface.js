

                                    
									
									
                                        
                                    const viewer = document.getElementById("modelblock");
									let hotspotCounter = 0;
									
									
									
                                    

									
                                    function selected(){
												// Add active class to the current button (highlight it)
									
									let hotspots = viewer.getElementsByClassName("hotspot");
									

									for (let i = 0; i < hotspots.length; i++) {
									  hotspots[i].addEventListener("click", function() {
									 let current = document.getElementsByClassName("selected");
									  if (current.length > 0) { 
										current[0].className = current[0].className.replace(" selected", "");
										
									  }
									  this.className += " selected";
									  
									  });
									}
									
										}

										
									
									//modal window change

									let topicCardValue = document.getElementById("topic-card-value"); //  modal window 
									let sensorCardValue = document.getElementById("sensor-card-value");
									let modalBox =document.querySelector('[class="modal-content"]');
									let sensorCardUnit = document.getElementById("sensor-card-unit");

									
									
									viewer.addEventListener('click',modalUpdate = (e) =>{
										
										let newData = e.target.closest("[data-sensornumber]");
										if (!newData) return;
										let sensorcounter =newData.dataset.sensornumber;

										
										console.log(newData, sensorcounter);
										
										topicCardValue.innerHTML=document.querySelector("#"+sensorcounter).dataset.sensortopic; // sensor and sensorval same data
										sensorCardValue.dataset.sensorval=newData.dataset.sensornumber;
										modalBox.dataset.modalCounterHotspot = newData.id; 
									});	


									// chek click target class
									let param = {};
									viewer.addEventListener('click',buttonClick = (e) =>{
										
										let newClick = e.target.className;
										param.buttonControl = newClick
										console.log(e.target);
										
										
										 
									});	
									
									
									


									
										// Removes the selected hotspot

										function removeHotspot(){
										
											let el =document.querySelector('[class="hotspot selected"]');
											
	
											if (el == null){
												alert("No hotspots to delete 2");
											}else{
												
										el.remove();
												
									}; 
										}
										


										// function for hotspot button 
										
										//adding new unitss in list 

										

									
										//hotspot counter so we can keep track of how many we added on 1 because we already have hotspot-0 and hotspot-1 (set to 0 if you start with 0 hotspots)
										
									
										function addHotspot(MouseEvent) {
											
										
											let newsensorname = document.getElementById("hotspottext").value;
											newsensorname = newsensorname == "" ? "no name" :  newsensorname;
											/*
											if (newsensorname == ""){
												newsensorname ="no name";
											}
											*/
											const newSensorUnit = document.getElementById("hotspotunit").value;
											
											
											//let inputtext =document.querySelector("option:checked").dataset.sensorvalue;  // test data flow for drop down list 

											//new data input integration 
											let inputtext = document.querySelector(".sensor");


											inputtext= inputtext=="" ? $("#ModalAlert").modal() : inputtext;
											
											


											// if input = nothing then alert error if it isnt then add the hotspot

											if (inputtext == undefined && param.buttonControl!="btn"  ){
										//alert("Input sensors topic firs, to add on model.");
										$("#ModalAlert").modal();
										
									}else{
									let = sensorcounter = document.querySelector(".sensor").id	   
									const viewer = document.querySelector('#modelblock');
									const rect = viewer.getBoundingClientRect();
									// coordinates calculating
									const x = event.clientX - rect.left;
									const y = event.clientY - rect.top;
									const positionAndNormal = viewer.positionAndNormalFromPoint(x, y);
									
									// if the model is not clicked return the position in the console
									if (positionAndNormal == null) {
									console.log('no hit result: mouse = ', x, ', ', y);
									return;
									}
									const {position, normal} = positionAndNormal;
									
									// create the hotspot
									const hotspot = document.createElement('button');
									hotspot.slot = `hotspot-${hotspotCounter ++}`;
									hotspot.classList.add('hotspot');
									hotspot.id = `hotspot-${hotspotCounter}`;
									hotspot.dataset.toggle ="modal"						// modal window now sstatic , but foe update
									hotspot.dataset.target ="#exampleModalCenter"
									hotspot.dataset.unittype = newSensorUnit;
									hotspot.dataset.sensornumber = viewer.querySelector(".sensor").dataset.sensorid;   // changing from sensor
									hotspot.dataset.position = position.toString();
									
									if (normal != null) {
									hotspot.dataset.normal = normal.toString();
									}
									viewer.appendChild(hotspot);
									console.log('mouse = ', x, ', ', y, positionAndNormal);
									
									

									let elementDataContainer = document.createElement("div");
							
									elementDataContainer.id= `elementdatacontainer-${hotspotCounter}`;
									elementDataContainer.classList.add("elementdatacontainer");
									elementDataContainer.dataset.sensortopic = document.querySelector("#"+sensorcounter).dataset.sensortopic;
									document.getElementById(`hotspot-${hotspotCounter}`).appendChild(elementDataContainer);
									
									let elementName = document.createElement("div");
									elementName.classList.add('element-name');
									
									elementName.appendChild(document.createTextNode(newsensorname));
									document.getElementById(`elementdatacontainer-${hotspotCounter}`).appendChild(elementName);


									// adds the text with value to last hotspot
									let element = document.createElement("div");
									element.classList.add('annotation');
									//element.dataset.sensorval=document.querySelector("option:checked").dataset.sensor;
									let spanData = document.createElement("span");
									// value element
									spanData.dataset.sensorval=viewer.querySelector(".sensor").dataset.sensorid;
									//spanData.innerHTML=document.querySelector("#sensor-1").dataset.sensorvalue;  // before it was with  span data 
									spanData.id = `spandata-${hotspotCounter}`;
									spanData.appendChild(document.createTextNode(inputtext.dataset.sensorval))
									// name of the unit
									let spanUnit = document.createElement("span");
									spanUnit.id=`spanunit-${hotspotCounter}`
									spanUnit.innerHTML = " "+newSensorUnit;
									//element.appendChild(document.createTextNode(inputtext));
									element.appendChild(spanData);
									element.appendChild(spanUnit);
									document.getElementById(`elementdatacontainer-${hotspotCounter}`).appendChild(element);
									
									document.getElementById("hotspottext").value = "";
									document.getElementById("hotspotunit").value="";
									

									}
									
									}
									


									
									
									
										function removeHotspotlast(){
										let el = document.getElementById(`hotspot-${hotspotCounter}`);
										
										if (el == null){
											alert("No hotspots to delete");
										}else{
											hotspotCounter --;
									el.remove()}; // Removes the last added hotspot
									}

									function myOpenClosemenu() {
										let x = document.querySelector('[class="dim"]');
										let buttom = document.getElementById("controls-button");
									if (x.style.display === "none") {
										x.style.display = "block";
										buttom.style.display = "none";

									} else {
										x.style.display = "none";
										buttom.style.display = "block";
									}
									}

									// marker names update in modal window

									function updateHotspot(){
										
										//document.querySelector('[data-modal-counter-hotspot]')
										let newHotspotName=document.getElementById("hotspottextmodal").value
										let newHotspotUnit=document.getElementById("hotspotunitchange").value
										
										
										
										
										if (!newHotspotName&&!newHotspotUnit) return;
										const hotspotNumbertoUpdate = document.querySelector('[data-modal-counter-hotspot]');
										const hotspotId=hotspotNumbertoUpdate.dataset.modalCounterHotspot
										
										console.log(parseInt(hotspotId.match(/\d+/)));
										let parrent = viewer.querySelector("#"+hotspotId);
		
										let child = parrent.querySelector(".element-name");
										let unitEl = document.getElementById("spanunit-"+hotspotId.match(/\d+/));
										if (newHotspotName){  // chek if empty, not to re write with empty
											child.innerHTML=newHotspotName;// adding new name for marker
										} else if (newHotspotUnit){
											unitEl.innerHTML=" "+newHotspotUnit  // adding new Unit for marker

										}
										  
										 

										console.log(newHotspotName);
										console.log(newHotspotUnit);
										document.getElementById("hotspottextmodal").value ="";
										newHotspotUnit=document.getElementById("hotspotunitchange").value="";
										
											
									}

									//camera position 

									function cameraPosition(el){

										console.log(el.value);
										

										switch (el.value){
											case "left":
											viewer.cameraOrbit ="270deg 80deg 30%";
											break;
											case "top":
											viewer.cameraOrbit ="0deg 0deg 50%";
											break;
											case "front":
											viewer.cameraOrbit ="0deg 80deg 30%";
											break;
											case "back":
											viewer.cameraOrbit ="180deg 80deg 30%";
											break;
											case "right":
											viewer.cameraOrbit ="90deg 80deg 30%";
											break; 	 	
										}

									}
									
									
									