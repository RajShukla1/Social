export const showImage = (e)=>{
    e.target.classList.add('hide');
    e.target.closest('span').children[0].classList.remove('hide');
}