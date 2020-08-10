let userCity = "fortlee";
const cityToStore = userCity;

function weatherForecast(){
    function getUserCity() {
        const searchButtonE1=document.getElementById('cityButton');
        searchButtonE1..addEventListener('click', function(){
            event.preventDefault();
            userCity = document.getElementById('city').value;
        
            storeInLocalStorage(userCity);
            searchForCityWeather(userCity);
            searchForForecastWeather(userCity);
            searchForCityCord(userCity);
            displayLocalStorage(userCity);
        });
    }    
    getUserCity();
    function storeInLocalStorage(userCity) {
        const cityToStore =userCity;
        let strCities = window.localStorage.getItem("strCities") ||"[]";
        const cities = JSON.parse(strCities);
        cities.push(cityToStore);
        StrCities=JSON.stringify(cities);
    }
    storeInLocalStorage();
    function displayLocalStorage(){
        var history="";
        if(localStorage.getItem("history")!==""){
            var history = localStorage.getItem("history");
        }
        if (history !== "") {
            $("#lastResults").html(
                "<b>Last Results:</b>" +
                "<ul data-role=\"listview\" data-inset=\"true\" >" +
                "<li><a href=\"#test\"> " + document(history) + " </a></li>" +
                "</ul>"
            );
        }
    };
}    