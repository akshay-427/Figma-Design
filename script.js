document.querySelector('.primary').addEventListener('click',() => {
    alert('starting free trial...');
});
document.querySelector('.secondary').addEventListener('click',() => {
    alert('Learn more clicked');
});
document.querySelector('.newsletter-form').addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("Subscribed we'll keep you updated.")
})
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter',() =>{
        card.style.transform='scale(1.03)';
        card.style.transition='all 0.3s ease-in-out';
    });
    card.addEventListener('mouseleave',()=>{
        card.style.transition='all 0.3s ease-in-out';
    });
});