// TODO: add code here

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
            let astronautsList = json;
            let container = document.getElementById("container");
            
            for (astronaut of astronautsList){
                let tempArray = astronaut.skills;
                let split = tempArray.join(", ");
                const markup = `<div class="astronaut">
                <div class="bio">
                   <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                   <ul>
                      <li>Hours in space: ${astronaut.hoursInSpace}</li>
                      <li>Active: ${astronaut.active}</li>
                      <li>Skills: ${split}</li>
                   </ul>
                </div>
                <img class="avatar" src=${astronaut.picture}>
             </div>`;
                    
                container.innerHTML += markup;
            }
         });
    } );
 });

