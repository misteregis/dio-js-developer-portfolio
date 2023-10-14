const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.parentElement;

        acordeon.classList.toggle('open');
    });
});
