//// severless solution for ibm serveless

/**
  *
  * main() será executado quando você chamar essa ação
  *
  * @param As ações do Cloud Functions aceitam um único parâmetro, que deve ser um objeto JSON.
  *
  * @return A saída dessa ação, que deve ser um objeto JSON.
  * 

  *
  */
function main(params) {
    let alertas = []
    if (!params || Object.keys(params).length === 0 ) return { alertas }
    let dados = params
    if (!dados.room) return {alertas}

    if (dados.room=='bathroom-main') {
        if (dados.values.co2 && dados.values.co2>500 )  alertas.push("co2")
        if (dados.values.temperature && (dados.values.temperature <22 || dados.values.temperature> 25))   alertas.push("temperature")
        if (dados.values.humidity && (dados.values.humidity <60 || dados.values.humidity> 75 ))  alertas.push("humidity")
        if (dados.values.sound && (dados.values.sound <20 || dados.values.sound >35  ))  alertas.push("sound")
        if (dados.values.illumination && (dados.values.illumination < 100 || dados.values.illumination >200) )  alertas.push("illumination")
        
    }
    if (dados.room=='activity-room'){
        if (dados.values.co2 && dados.values.co2>500 )  alertas.push("co2")
        if (dados.values.temperature && (dados.values.temperature <19 || dados.values.temperature> 22))   alertas.push("temperature")
        if (dados.values.humidity && (dados.values.humidity <50 || dados.values.humidity> 60 ))  alertas.push("humidity")
        if (dados.values.sound && (dados.values.sound <0 || dados.values.sound >40)  )  alertas.push("sound")
        if (dados.values.illumination && (dados.values.illumination < 300 || dados.values.illumination >750) )  alertas.push("illumination")  
    }
     if (dados.room=='refectory'){
        if (dados.values.co2 && dados.values.co2>400 )  alertas.push("co2")
        if (dados.values.temperature && (dados.values.temperature <20 || dados.values.temperature> 23))   alertas.push("temperature")
        if (dados.values.humidity && (dados.values.humidity <50 || dados.values.humidity> 70 ))  alertas.push("humidity")
        if (dados.values.sound && (dados.values.sound <20 || dados.values.sound >35)  )  alertas.push("sound")
        if (dados.values.illumination && (dados.values.illumination < 200 || dados.values.illumination >500) )  alertas.push("illumination")  
    }  
    if (dados.room=='room-1'){
        if (dados.values.co2 && dados.values.co2>300 )  alertas.push("co2")
        if (dados.values.temperature && (dados.values.temperature <21 || dados.values.temperature> 23))   alertas.push("temperature")
        if (dados.values.humidity && (dados.values.humidity <50 || dados.values.humidity> 60 ))  alertas.push("humidity")
        if (dados.values.sound && (dados.values.sound <10 || dados.values.sound >30)  )  alertas.push("sound")
        if (dados.values.illumination && (dados.values.illumination < 100 || dados.values.illumination >200) )  alertas.push("illumination")  		
	}
	if (dados.room=='garden'){
        if (dados.values.co2 && dados.values.co2>500 )  alertas.push("co2")
        if (dados.values.temperature && (dados.values.temperature <15 || dados.values.temperature> 22))   alertas.push("temperature")
        if (dados.values.humidity && (dados.values.humidity <50 || dados.values.humidity> 80 ))  alertas.push("humidity")
        if (dados.values.sound && (dados.values.sound <10 || dados.values.sound >35 ) )  alertas.push("sound")
       			
	}
		
	return  {alerts} ;
}
