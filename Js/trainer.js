const trainers = [
    {
        name: 'Victoria Shurpik',
        image: './images/trainers/trainer-1.png',
        social: {
            instagram: '#',
            twitter: '#',
            youtube: '#'
        }
    },
    {
        name: 'Elizabeth Lavrinenko',
        image: './images/trainers/trainer-2.png',
        social: {
            instagram: '#',
            twitter: '#',
            youtube: '#'
        }
    },
    {
        name: 'Ivan Gladkikh',
        image: './images/trainers/trainer-3.png',
        social: {
            instagram: '#',
            twitter: '#',
            youtube: '#'
        }
    },
    {
        name: 'Vladislav Kovalenko',
        image: './images/trainers/trainer-4.png',
        social: {
            instagram: '#',
            twitter: '#',
            youtube: '#'
        }
    },
    {
        name: 'Olga Kovalenko',
        image: './images/trainers/trainer-5.png',
        social: {
            instagram: '#',
            twitter: '#',
            youtube: '#'
        }
    }
    ,
    {
        name: 'Dmitry Petrov',
        image: './images/trainers/trainer-6.png',
        social: {
            instagram: '#',
            twitter: '#',
            youtube: '#'
        }
    },
    {
        name: 'Anna Volkova',
        image: './images/trainers/trainer-7.png', 
        social: {
            instagram: '#',
            twitter: '#',
            youtube: '#'
        }
    },
    {
        name: 'Mikhail Sokolov',
        image: './images/trainers/trainer-8.png',
        social: {
            instagram: '#',
            twitter: '#',
            youtube: '#'
        }
    }
    
]; 


const trainerGrid=document.getElementById('trainersGrid');

const initialTrainers=()=>{
trainerGrid.innerHTML=trainers.map(createTrainerCard).join('');
}

const createTrainerCard=(trainer)=>{
    return `<div class="trainer-card">
                    <img src="${trainer.image}" alt="">
                    <h3>${trainer.name}</h3>
                    <div class="social-links">
                        <a href="#"><img src="/images/icons/facebook.png" alt=""></a>
                        <a href="#"><img src="/images/icons/instagram.png" alt=""></a>
                        <a href="#"><img src="/images/icons/youtube.png" alt=""></a>
                    </div>
                </div>`
}
document.addEventListener('DOMContentLoaded',()=>{
    initialTrainers();});