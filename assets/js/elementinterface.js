
										
                                        
                                        
                                    const viewer = document.getElementById("modelblock");
									let hotspots = viewer.getElementsByClassName("hotspot");

									
                                    

									
                                    function selected(){
												// Add active class to the current button (highlight it)
									
									
									console.log("open function")
									for (let i = 0; i < hotspots.length; i++) {
									  hotspots[i].addEventListener("click", function() {
									 let current = document.getElementsByClassName("selected");
									  if (current.length > 0) { 
										current[0].className = current[0].className.replace(" selected", "");
										console.log("next function unselected")
									  }
									  this.className += " selected";
									  console.log("next function selected");
									  });
									}
									
										}

										function removeHotspot(){
										
											let el =document.querySelector('[class="hotspot selected"]');
											
	
											if (el == null){
												alert("No hotspots to delete 2");
											}else{
												hotspotCounter --;
										el.remove()}; // Removes the selected hotspot
										}
		
									
									
										
									
										//hotspot counter so we can keep track of how many we added on 1 because we already have hotspot-0 and hotspot-1 (set to 0 if you start with 0 hotspots)
										let hotspotCounter = 1;
										function addHotspot(MouseEvent) {
											
										
											let newsensorname = document.getElementById("hotspottext").value;
											if (newsensorname == ""){
												newsensorname ="no name";
											}
											
											let inputtext =document.querySelector("option:checked").dataset.sensorvalue;
										


											// if input = nothing then alert error if it isnt then add the hotspot
											if (inputtext == ""){
										alert("Choose sensor firs, to add on model.");
									}else{
										   
									const viewer = document.querySelector('#modelblock');
									const rect = viewer.getBoundingClientRect();
									
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
									
									hotspot.dataset.position = position.toString();
									
									if (normal != null) {
									hotspot.dataset.normal = normal.toString();
									}
									viewer.appendChild(hotspot);
									console.log('mouse = ', x, ', ', y, positionAndNormal);
									
									let elementName = document.createElement("div");
									elementName.classList.add('element-name');
									elementName.appendChild(document.createTextNode(newsensorname));
									document.getElementById(`hotspot-${hotspotCounter}`).appendChild(elementName);


									// adds the text with value to last hotspot
									let element = document.createElement("div");
									element.classList.add('annotation');
									element.dataset.sensorval=document.querySelector("option:checked").dataset.sensor;
								
									element.appendChild(document.createTextNode(inputtext));
									document.getElementById(`hotspot-${hotspotCounter}`).appendChild(element);
									
									document.querySelector('input').value = "";
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



									


									