import { Injectable, OnModuleInit } from "@nestjs/common";
import { connect } from "mqtt";
import { debug, error, info } from "ps-logger";
import { IMqttConnectOptions } from "src/types";

@Injectable()
export class MqttService implements OnModuleInit {
  private mqttClient;



  private options: IMqttConnectOptions = {
    clean: true,
    connectTimeout: 4000,
    host:'185.203.238.227',
    port:1883,
    username:'water_server_broker',
    password:'smartbroker'
  }
  private topic = 'S/#'

  onModuleInit() {
    
  
    this.mqttClient = connect(this.options)

    this.mqttClient.on('connect', ():void =>{
      this.mqttClient.subscribe(this.topic)
      console.log('Connected to CloudMQTT');      

    })

    this.mqttClient.on("error",  ()=>{
      error("Error in connecting to CloudMQTT");
    });

    
    this.mqttClient.on("message",  (topic, message)=> {
      // console.log(message.toString());      
    })

  }
}