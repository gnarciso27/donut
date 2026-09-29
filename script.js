const buttons=document.querySelectorAll('.filters button');
const cards=document.querySelectorAll('.grid article');
buttons.forEach(button=>{
  button.addEventListener('click',()=>{
    buttons.forEach(b=>b.classList.remove('active'));
    button.classList.add('active');
    const filter=button.dataset.filter;
    cards.forEach(card=>{
      card.style.display=(filter==='todos'||card.dataset.cat===filter)?'':'none';
    });
  });
});
