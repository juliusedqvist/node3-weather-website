const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c233c1bcd70f1b6e221a743459e642e0&query=' + latitude + ',' + longitude
     request({url, json: true}, (error, {body}) => {
        if (error) {
            callback({
                error: 'Unable to connect to weather service', 
                undefined
            })
        } else if (body.error) {
            callback({
                error: 'Unable to find location', 
                undefined
            })
        } else {
            callback(undefined, (body.current.weather_descriptions[0] +
            ".", 'It is currently ' + body.current.temperature + ' degrees outside with a ' + body.current.precip +
            '% chance of rain. \nObserved ' + body.current.observation_time))
        }
    })
}

module.exports = forecast

//http://api.weatherstack.com/current?access_key=c233c1bcd70f1b6e221a743459e642e0&query=18.079623