const userId = new URL (location.href).searchParams.get('userId');

fetch (`https://jsonplaceholder.typicode.com/users/${userId}`)
     .then ((response) => response.json())
     .then((user) => {
         const block = document.getElementsByClassName('container')[0];
         
         let ul = document.createElement('ul');
             showElements(user, ul);
             block.appendChild(ul);
             const button = document.createElement('button');
             button.innerText = 'Post details';
             button.setAttribute("class", "buttonStyle2");
             block.appendChild(button);
             button.onclick = () => {
                
                location.href = `../post-info/post-details.html?userId=${user.id}`;
            }
    
            
         });
         
  function liBuilder(key, value, parent){
      const li = document.createElement('li');
      li.innerText = `${key}: ${value}`;
      parent.appendChild(li);
  }
function ulBuilder(key, object, parent){
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    parent.appendChild(li);
    li.appendChild(ul);
    showElements(object, ul)
    }

function showElements(object, parent) {
    for (const key in object) {
        typeof object [key] === 'object'
            ? ulBuilder(key, object[key], parent)
            : liBuilder(key, object[key], parent)
    }
}

