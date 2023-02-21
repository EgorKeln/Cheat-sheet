/* ============================================================== кубик */
function selectEdge(){
    const cube = document.querySelector('.nav-cube');
    const degs = { 
        back:   {X:-180, Y: 0,},
        top:    {X: 0, Y: 0},
        front:  {X:-90, Y: 0},
        bottom: {X: 90, Y: 0},
        left:   {X: 0, Y: 90},
        right:  {X: 0, Y:-90},
    }

    document.querySelectorAll('nav').forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            let edgeName = e.target.hash.replace(/#/, '');
            cube.style.transform = 'perspective(700px) rotateX('+degs[edgeName].X+'deg) rotateY('+degs[edgeName].Y+'deg)';
        })
    });
}

document.addEventListener('DOMContentLoaded', () => {
    selectEdge();
});

/* ============================================================== менюшка */
const list = document.querySelectorAll('.nav-menu-list');
    function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
     }
    list.forEach((item) =>
    item.addEventListener('click',activeLink));








/* ============================================================== кубик 
function selectEdge(){
    const cube = document.querySelector('.cube');
    const degs = { 
        back:   {X:-180, Y: 0,},
        top:    {X: 0, Y: 0},
        front:  {X:-90, Y: 0},
        bottom: {X: 90, Y: 0},
        left:   {X: 0, Y: 90},
        right:  {X: 0, Y:-90},
    }

    document.querySelectorAll('.nav-ling').forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            let edgeName = e.target.hash.replace(/#/, '');
            cube.style.transform = 'perspective(300px) rotateX('+degs[edgeName].X+'deg) rotateY('+degs[edgeName].Y+'deg)';
        })
    });
}

document.addEventListener('DOMContentLoaded', () => {
    selectEdge();
});*/

/* ============================================================== менюшка 
const list = document.querySelectorAll('.list');
    function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
     }
    list.forEach((item) =>
    item.addEventListener('click',activeLink));
*/