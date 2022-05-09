
										
                                        
                                    import {ModelViewerElement} from '@google/model-viewer';  
                                       
                                    const viewer = document.getElementById('#modelblock') as ModelViewerElement;
                                    
                                    function selected(){
												// Add active class to the current button (highlight it)
									let header = document.getElementById("modelblock");
									let hotspots = header.getElementsByClassName("hotspot");
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
									
									
									
											
									
										//hotspot counter so we can keep track of how many we added on 3 because we already have hotspot-0 and hotspot-1 (set to 0 if you start with 0 hotspots)
										let hotspotCounter = 0;
										function addHotspot(MouseEvent) {
											let inputtext = document.querySelector('input').value;
									
											// if input = nothing then alert error if it isnt then add the hotspot
											if (inputtext == ""){
										alert("Put in text first to add hotspots.");
									}else{
										   
									
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
									hotspot.dataset.position = position.toString();
									if (normal != null) {
									hotspot.dataset.normal = normal.toString();
									}
									viewer.appendChild(hotspot);
									console.log('mouse = ', x, ', ', y, positionAndNormal);
									
									
									// adds the text to last hotspot
									let element = document.createElement("div");
									element.classList.add('annotation');
									element.appendChild(document.createTextNode(inputtext));
									document.getElementById(`hotspot-${hotspotCounter}`).appendChild(element);
									
									document.querySelector('input').value = "";
									}
									}
									
									
									
										function removeHotspot(){
										let el = document.getElementById(`hotspot-${hotspotCounter}`);
										
										if (el == null){
											alert("No hotspots to delete");
										}else{
											hotspotCounter --;
									el.remove()}; // Removes the last added hotspot
									}
									