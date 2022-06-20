let host = 'sgrg.saint-gobain.com';
let port = 443;
let topic = 'VALUE/DE0161-SGR/TESTSENSORS/EF389C/TEMPERATURE';
let username = 'websocket';
let pw = 'ws-secret';
let useTLS = true;
let cleansession = true;
let reconnectTimeout = 3000;
let tempData = new Array();
let mqtt;


const topicArray = [];   
topicArray.push(topic);
   // array for tests diff topics




let cliendId = "mqtt_panel" + parseInt(Math.random() * 100);

function MQTTconnect() {
    if (typeof path == "undefined") {
        path = '/mqtt';
    }
    
    mqtt = new Paho.MQTT.Client(host, port, path, cliendId, 10);
    
    let options = {
        timeout: 3,
        useSSL: useTLS,
        cleanSession: cleansession,
        onSuccess: onConnect,
		userName: username,
		password: pw,
        onFailure: function (message) {
            $('#status').html("Connection failed: " + message.errorMessage + "Retrying...")
                .attr('class', 'alert alert-danger');
            setTimeout(MQTTconnect, reconnectTimeout);
        }
    };

    mqtt.onConnectionLost = onConnectionLost;
    mqtt.onMessageArrived = onMessageArrived;
    console.log("Host: " + host + ", Port: " + port + ", Path: " + path + " TLS: " + useTLS + 'ClientId' + cliendId);
    mqtt.connect(options);
};

function onConnect() {
    $('#status').html('Connected to ' + host + ':' + port + path)
        .attr('class', 'alert alert-success');

    //mqtt.subscribe(topic, { qos: 0 });
    

    $("#connection-status").html("Connected").attr('class', 'alert alert-success');  // connection status in menu highlight


};



function onConnectionLost(response) {
    setTimeout(MQTTconnect, reconnectTimeout);
    $('#status').html("Connection lost. Reconnecting...")
        .attr('class', 'alert alert-warning');
    $("#connection-status").html("Connection lost").attr('class', 'alert alert-warning');   // disconnection status in menu highlight 
};





let inputArray = [];


$(document).ready(function(){
    let i =0; 
    $("#hotspottopic").change(function(){
        let userMessageTopic = document.getElementById("hotspottopic").value;
        
        if (topicArray.includes(userMessageTopic) ){
        
            mqtt.subscribe(userMessageTopic, { qos: 0 });   // ? 
           inputArray.push(userMessageTopic);
           console.log(inputArray.length);
            i++;
           
           
           
            $("#sensor-container").prepend(`<option class="sensor"  id="sensor-${i}" data-sensorId="sensor-${i}" data-sensorVal="sensor-${i}" data-sensorTopic ="${userMessageTopic}"></option>`);
            
              
           
            console.log("data added")
           
          
            
        }else {
            //$("#ModalAlert").modal();
            console.log("wrong topic name");
        }


      
    });
  });






function onMessageArrived(message) {


    let topic = message.destinationName;
    let payload = message.payloadString;


    for (let i = 1; i <= 5 ; i++) {           // array lengt according quantity of topics , with out validation.
        
        
        $(`[data-sensorval="sensor-${i}"]`).html(payload );
      }
    
    
    /*
    let userMessageTopic = document.getElementById("hotspottopic").value;
    let lastSensor = document.querySelector(".sensor");


    if (topicArray.includes(userMessageTopic) ){
        $(`[data-sensorId="sensor1"]`).attr('data-sensorvalue', (payload)).attr('data-sensortopic', (topic));
        $(`[data-sensorval="sensor1"]`).html(payload ); 
        $(`[data-sensor="sensor1"]`).html(topic);
        
    }else {
        console.log("wrong topic name");
    }
*/

   
   
    console.log("Topic: " + topic + ", Message payload: " + payload);
    $('#message').html(topic + ', ' + payload);
/*
	$('#mqtt-topic').text(topic + ':');
	$('#mqtt-value-label').text(payload + ' °C');
    
	$('#mqtt-value-label').addClass('badge-default');
    
    $('#mqttdata').html('Temp is: ' +payload + ' °C');
    $('#mqttdatadinamic').html('Temp is: ' +payload + ' °C');
    
    $('[data-sensor="sensor1"]').html(topic);
    $('[data-sensor="sensor2"]').html(topic+" n2"); // F - for different data simulation
    $('[data-sensor="sensor3"]').html(topic+" n3");  // K - for different data simulation
    
    $('[data-sensorval="sensor1"]').html(payload );
    $('[data-sensorval="sensor2"]').html(payload );
    $('[data-sensorval="sensor3"]').html(payload );
	*/
    /*
    tempData.push({
		"timestamp": Date().slice(16, 21),
		"temperature": parseInt(payload)
	});
	if (tempData.length >= 10) {
		tempData.shift()
	}
	drawChart(tempData);
*/
    
 };

 
/*
function drawChart(data) {
    let ctx = document.getElementById("chart").getContext("2d");


    let temperatures = []
    let timestamps = []

    data.map((entry) => {
        temperatures.push(entry.temperature);
        timestamps.push(entry.timestamp);
    });

    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [{
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: temperatures
            }]
        },
        options: {
            legend: {
                display: false
            }
        }
    });
}
*/

   


$(document).ready(function () {
  /* drawChart(tempData); */ 
    MQTTconnect();
});

