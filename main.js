const form = document.getElementById("main-form");
const container = document.getElementById("users-container");
//Variables útiles
let users = [];

//Funciones

//Función para crear registros
const createUser = event => {
  //No ejecute su comportamiento por defecto
  event.preventDefault();

  //Crear un objeto con la información de los inputs
  let user = {
    nombre: document.getElementById("nombre").value,
    ocupacion: document.getElementById("job").value,
    email : document.getElementById('email').value
  };

  //Agregamos al arreglo, el objeto
  users.push(user);
  form.reset();
  renderList();
  console.log(users);
};

//Función encargada de pintar todos los usuarios del arreglo users
const renderList = () => {
  container.innerHTML = "";
  if (users.length > 0) {
    users.forEach(user => {
      // //Creamos el contenedor principal para el usuario
      // const userContainer = document.createElement("div");
      // userContainer.classList.add("userItem");

      // //Creamos el contenedor y el contenido para la información del usuario
      // const userInfo = document.createElement("div");
      // userInfo.classList.add("userInfo");

      // const userInfoName = document.createElement("h4");
      // const userInfoJob = document.createElement("h4");

      // userInfoName.innerText = user.nombre;
      // userInfoJob.innerText = user.ocupacion;

      // //Creamos el contenedor y el contenido para los botones de acción
      // const buttonContainer = document.createElement("div");
      // buttonContainer.classList.add("actions");

      // const updateButton = document.createElement("button");
      // const deleteButton = document.createElement("button");

      // updateButton.innerText = "Editar";
      // updateButton.classList.add("update");
      // deleteButton.innerText = "Eliminar";
      // deleteButton.classList.add("delete");

      // //Agregar al respectivo container

      // //(Ver HTML)
      // //Agregamos el contenedor con clase userItem al contenedor principal (id="users-container")
      // container.appendChild(userContainer);

      // //Agregamos el contenedor con clase userInfo al contenedor con clase userItem
      // userContainer.appendChild(userInfo);

      // //Agregamos los h4 con la información del usuario  al contenedor con clase userInfo
      // userInfo.appendChild(userInfoName);
      // userInfo.appendChild(userInfoJob);

      // //Agregamos el contenedor con clase actions al contenedor con clase userItem
      // userContainer.appendChild(buttonContainer);

      // //Agregamos los botones Editar y Eliminar al contenedor con clase actions
      // buttonContainer.appendChild(updateButton);
      // buttonContainer.appendChild(deleteButton);

      const cardUser = document.createElement('div');
      const cardUserClass = document.createAttribute('class');
      cardUserClass.value = 'card-user border-radious-10px bg-white padding-xs flex-column-center border-1px-solid-black margin-xs';
      cardUser.setAttributeNode(cardUserClass);

        const userImg = document.createElement('img');
        const userImgClass = document.createAttribute('class');
        userImgClass.value = 'user-img border-radious-5px';
        userImg.setAttributeNode(userImgClass);
        const userImgSrc = document.createAttribute('src');
        userImgSrc.value = './Assets/Img/hombre.png';
        userImg.setAttributeNode(userImgSrc);
        const userImgAlt = document.createAttribute('alt');
        userImgAlt.value = 'User avatar';
        userImg.setAttributeNode(userImgAlt);
        
        cardUser.appendChild(userImg);
        
        const cardUserContainer = document.createElement('div');
        const cardUserContainerClass = document.createAttribute('class');
        cardUserContainerClass.value = 'card-user-container width-100percent flex-column-center';
        cardUserContainer.setAttributeNode(cardUserContainerClass);

          const cardUserInfoContainer = document.createElement('div');
          const cardUserInfoContainerClass = document.createAttribute('class');
          cardUserInfoContainerClass.value = 'card-user-info-container flex-column-center width-100percent margin-top-xs';
          cardUserInfoContainer.setAttributeNode(cardUserInfoContainerClass);

            const cardUserName = document.createElement('p');
            const cardUserNameClass = document.createAttribute('class');
            cardUserNameClass.value = 'card-user-name font-weight-bold font-size-sm';
            cardUserName.setAttributeNode(cardUserNameClass);
            cardUserName.innerText = user.nombre;

            cardUserInfoContainer.appendChild(cardUserName);
            
            const cardUserOccupation = document.createElement('p');
            const cardUserOccupationClass = document.createAttribute('class');
            cardUserOccupationClass.value = 'card-user-occupation font-weight-bold font-size-xs margin-top-xs';
            cardUserOccupation.setAttributeNode(cardUserOccupationClass);
            cardUserOccupation.innerText = user.ocupacion;

            cardUserInfoContainer.appendChild(cardUserOccupation);
            
            const cardUserEmail = document.createElement('p');
            const cardUserEmailClass = document.createAttribute('class');
            cardUserEmailClass.value = 'card-user-occupation font-weight-bold font-size-xs';
            cardUserEmail.setAttributeNode(cardUserEmailClass);
            cardUserEmail.innerText = user.email;

            cardUserInfoContainer.appendChild(cardUserEmail);

          cardUserContainer.appendChild(cardUserInfoContainer);


          if(user.email!=''){
            let cardAdded = false;
            for(let i = 0; i < usersExtraInfo.length; i++){
              if(!cardAdded){
                console.log(usersExtraInfo[i].correo);
                console.log(user.email);
                if(usersExtraInfo[i].correo === user.email){
                  cardAdded = true;
                  const cardUserCountry = document.createElement('img');
                  const cardUserCountryClass = document.createAttribute('class');
                  cardUserCountryClass.value = 'card-user-country margin-top-xs';
                  cardUserCountry.setAttributeNode(cardUserCountryClass); 
                  const cardUserCountrySrc = document.createAttribute('src');
                  cardUserCountrySrc.value = getCountryFlagSrc(usersExtraInfo[i]["pais"]);
                  // cardUserCountrySrc.value = `./Assets/Img/icons8-${usersExtraInfo[i]["pais"]}.png`;
                  cardUserCountry.setAttributeNode(cardUserCountrySrc);
  
                  cardUserInfoContainer.appendChild(cardUserCountry);
  
                  
                  const cardUserSocialMedia = document.createElement('div');
                  const cardUserSocialMediaClass = document.createAttribute('class');
                  cardUserSocialMediaClass.value = 'card-user-social-media width-100percent flex-row-center flex-wrap margin-top-xs';
                  cardUserSocialMedia.setAttributeNode(cardUserSocialMediaClass);
  
                    for(let x = 0; x < usersExtraInfo[i]["social"].length; x++){
                      const cardUserSocialMediaItem = document.createElement('div');
                      const cardUserSocialMediaItemClass = document.createAttribute('class');
                      cardUserSocialMediaItemClass.value = 'card-user-social-media-item flex-row-start margin-xs';
                      cardUserSocialMediaItem.setAttributeNode(cardUserSocialMediaItemClass);
  
                        const imgSocialMedia = document.createElement('img');
                        const imgSocialMediaClass = document.createAttribute('class');
                        imgSocialMediaClass.value = 'social-media-logo';
                        imgSocialMedia.setAttributeNode(imgSocialMediaClass);
                        const imgSocialMediaAlt = document.createAttribute('alt');
                        imgSocialMediaAlt.value = `${usersExtraInfo[i]['social'][x]} Logo`;
                        imgSocialMedia.setAttributeNode(imgSocialMediaAlt);
                        const imgSocialMediaSrc = document.createAttribute('src');
                        imgSocialMediaSrc.value = getSocialMediaIconSrc(usersExtraInfo[i]['social'][x]['nombre']);
                        // imgSocialMediaSrc.value = `./Assets/Img/icons8-${usersExtraInfo[i]["social"][x]}.png`;
                        imgSocialMedia.setAttributeNode(imgSocialMediaSrc);
  
                        cardUserSocialMediaItem.appendChild(imgSocialMedia);
                        
                        const imgSocialMediaDescription = document.createElement('p');
                        const imgSocialMediaDescriptionClass = document.createAttribute('class');
                        imgSocialMediaDescriptionClass.value = 'card-user-social-media-description font-weight-light font-size-xs';
                        imgSocialMediaDescription.setAttributeNode(imgSocialMediaDescriptionClass);
                        imgSocialMediaDescription.innerText = usersExtraInfo[i]['social'][x]['url'];
  
                        cardUserSocialMediaItem.appendChild(imgSocialMediaDescription);
  
                      cardUserSocialMedia.appendChild(cardUserSocialMediaItem);
                    }
                  
                  cardUserInfoContainer.appendChild(cardUserSocialMedia);
                }
              }
            }
            if(!cardAdded){
              const imgNoInfo = document.createElement('img');
              const imgNoInfoClass = document.createAttribute('class');
              imgNoInfoClass.value = "card-user-no-info";
              imgNoInfo.setAttributeNode(imgNoInfoClass);
              const imgNoInfoSrc = document.createAttribute('src');
              imgNoInfoSrc.value = "./Assets/Img/edit-info.png";
              imgNoInfo.setAttributeNode(imgNoInfoSrc);

              cardUserContainer.appendChild(imgNoInfo);
            }
          } else {
            const imgNoInfo = document.createElement('img');
            const imgNoInfoClass = document.createAttribute('class');
            imgNoInfoClass.value = "card-user-no-info";
            imgNoInfo.setAttributeNode(imgNoInfoClass);
            const imgNoInfoSrc = document.createAttribute('src');
            imgNoInfoSrc.value = "./Assets/Img/edit-info.png";
            imgNoInfo.setAttributeNode(imgNoInfoSrc);

            cardUserContainer.appendChild(imgNoInfo);
          }

        cardUser.appendChild(cardUserContainer);

        container.appendChild(cardUser);
    });
  }
};

function getCountryFlagSrc(country){
  switch (country) {
    case "México":
      return './Assets/Img/icons8-México.png'
      break;
    case "Venezuela":
      return './Assets/Img/icons8-Venezuela.png'
      break;
    case "Chile":
      return './Assets/Img/icons8-Chile.png'
      break;
    case "Colombia":
      return './Assets/Img/icons8-Colombia.png'
      break;
  
    default:
      break;
  }
}

function getSocialMediaIconSrc(socialMedia){
  switch (socialMedia) {
    case "Facebook":
      return './Assets/Img/icons8-Facebook.png'
      break;
    case "Instagram":
      return './Assets/Img/icons8-Instagram.png'
      break;
    case "Youtube":
      return './Assets/Img/icons8-Youtube.png'
      break;
    case "Github":
      return './Assets/Img/icons8-Github.png'
      break;
    case "Twitter":
      return './Assets/Img/icons8-Twitter.png'
      break;
  
    default:
      break;
  }
}

//Eventos
form.onsubmit = createUser;

console.log(users);
