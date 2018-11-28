(function() {
    
    loadHeight();
    loadGitUser();

})();

 //vars
 var foto_perfil = document.getElementById('foto');
 var list = document.querySelector('.list');
 var titulo_list = document.querySelector('h4');
 var link_perfil = document.querySelector('.link_perfil');
 var num_repo = document.querySelector('.nrepo');
 var num_seguidores = document.querySelector('.nseguidores');
 var num_seguindo = document.querySelector('.nseguindo');

 function loadHeight() {
    var section = document.getElementsByTagName('section');
    var h = window.innerHeight;
    for(var i=0;i<section.length;i++) {
        section[i].style.height = h+'px';
    }
 }

 //carregando perfil
 function loadGitUser() {
    axios.get('https://api.github.com/users/webmalta')
    .then(function(result) {
        foto_perfil.src = result.data.avatar_url;
        link_perfil.href = result.data.html_url;
        num_repo.innerText = 'REPOSITÓRIOS '+ result.data.public_repos;
        num_seguidores.innerText = 'SEGUIDORES '+ result.data.followers;
        num_seguindo.innerText = 'SEGUINDO '+ result.data.following;        
    }).catch(function(error) {console.log(error)})
 }

 //repositorios
 function clickRepos() {
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    }
    axios.get('https://api.github.com/users/webmalta/repos')
    .then(function(result) {
        for(var i=0;i<result.data.length;i++) {
            var elem = document.createElement("li")
            var text = document.createTextNode(result.data[i].name);
            elem.appendChild(text);
            titulo_list.innerText = 'LISTA DE REPOSITÓRIOS';
            list.appendChild(elem);
        }
    }).catch(function(error) {console.log(error)});
 }

 //favoritos
 function clickFavoritos() {
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    }
    axios.get('https://api.github.com/users/webmalta/starred')
    .then(function(result) {
        for(var i=0;i<result.data.length;i++) {
            var elem = document.createElement("li")
            var text = document.createTextNode(result.data[i].name);
            elem.appendChild(text);
            titulo_list.innerText = 'LISTA DE FAVORITOS';
            list.appendChild(elem);
        }
    }).catch(function(error) {console.log(error)});
 }