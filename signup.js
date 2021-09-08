
//==============
//include faker cdn

var fakerScript = document.createElement('script');
fakerScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/Faker/0.5.12/MinFaker.js');
document.head.appendChild(fakerScript);

//wait for cdn to load
await new Promise(r => setTimeout(r, 2000));


//switch cases for each input type
var inputs = document.querySelectorAll('form input, form select');
inputs.forEach(function(element) {
    var label = document.querySelectorAll('label[for="'+ element.id + '"]');
if (label[0]) {
        switch(element.type) {
            case "select-one":
                var options = [];
                for(let i=0; i < element.options.length; i++){
                    options.push(element.options[i].value);
                } 
                options.forEach(function(option){
                    //console.log(element.type + " " + element.name +  " " + option);
                    if (option.includes('states')) {
                        element.value = option;
                    }
                });
                break;
            case "text":
                    if (label[0].innerText.includes("Email") || element.name.indexOf('email') != -1) {
                        element.value = Faker.Internet.email();
                    } else if (label[0].innerText.includes("Prefix")) {
                        element.value = "Mr."
                    } else if (label[0].innerText.includes("Name")) {
                        element.value = Faker.Name.findName();
                    } else if (label[0].innerText.includes("Phone")) {
                        element.value = Faker.PhoneNumber.phoneNumber();
                    } else if (label[0].innerText.includes("Address")) {
                        element.value = Faker.Address.streetAddress();
                    } else if (label[0].innerText.includes("City")) {
                        element.value = Faker.Address.city();
                    } else if (label[0].innerText.includes("State")) {
                        element.value = Faker.Address.usState();
                    } else if (label[0].innerText.includes("ZIP")) {
                        element.value = Faker.Address.zipCode();
                    }
                console.log(element.type + " " + element.name +  " " + label[0].innerText);
                break;
            case "text-area":
                element.value = Faker.Lorem.sentences(3);
                console.log(element.type + " " + element.name +  " " + label[0].innerText);
                break;
            case "checkbox":
                element.checked = true;
                console.log(element.type + " " + element.name +  " " + element.value);
                console.log(element.type + " " + element.name +  " " + element.nextSibling.innerText);
                break;
            case "radio":
                //console.log(element.type + " " + element.name +  " " + label[0].innerText);
                break;
            case "date":
                //console.log(element.type + " " + element.name +  " " + label[0].innerText);
                break;
            case "email":
                element.value = Faker.Internet.email();
                console.log(Faker.Internet.email());
                console.log(element.type + " " + element.name +  " " + label[0].innerText);
                break;
            case "file":
                //console.log(element.type + " " + element.name +  " " + label[0].innerText);
                break;
            case "number":
                //console.log(element.type + " " + element.name +  " " + label[0].innerText);
                break;
            case "tel":
                element.value = Faker.PhoneNumber.phoneNumber();
                console.log(element.type + " " + element.name +  " " + label[0].innerText);
                break;
            case "url":
               // console.log(element.type + " " + element.name +  " " + label[0].innerText);
                break;
            default:
        }
    } else {
        switch(element.type){
            case 'email':
                element.value = Faker.Internet.email();
                console.log(Faker.Internet.email());
                //console.log(element.type + " " + element.name +  " " + label[0].innerText);
                break;
            case "tel":
                element.value = Faker.PhoneNumber.phoneNumber();
                //console.log(element.type + " " + element.name +  " " + label[0].innerText);
                break;
            case "checkbox":
                element.checked = true;
                break;
            case "text":
                if (element.name.indexOf('first') != -1){
                    element.value = Faker.Name.firstName();
                } else if (element.name.indexOf('last') != -1){
                    element.value = Faker.Name.lastName();
                } else if (element.name.indexOf('zip') != -1) {
                    element.value = Faker.Address.zipCode();
                } else {
                    element.value = "text";
                }
                break;
            case "text-area":
                element.value = Faker.Lorem.sentences(3);
                
        }
    }
if (element.required = true) {
    element.style.background = 'pink';
}
    
});
