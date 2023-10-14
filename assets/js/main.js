function updateElementText(id, text) {
    const element = document.getElementById(id);

    if (element) element.innerText = text;
}

function updateElementLink(id, text, link) {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = text;
        element.href = link;
    }
}

function updateElementList(id, data, template) {
    const element = document.getElementById(id);

    if (element)
        element.innerHTML = data.map(item => `<li>${template(item)}</li>`).join('');
}

function updateProfileInfo(profileData) {
    document.getElementById('profile.photo').src = profileData.photo;

    updateElementText('profile.name', profileData.name);
    updateElementText('profile.job', profileData.job);
    updateElementText('profile.location', profileData.location);
    updateElementLink('profile.phone', profileData.phone, `tel:${profileData.phone}`);
    updateElementLink('profile.email', profileData.email, `mailto:${profileData.email}`);
}

function updateSoftSkills(profileData) {
    updateElementList('profile.skills.softSkills', profileData.skills.softSkills, skill => skill);
}

function updateHardSkills(profileData) {
    updateElementList('profile.skills.hardSkills', profileData.skills.hardSkills, skill =>
        `<img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">`
    );
}

function updateLanguages(profileData) {
    updateElementList('profile.languages', profileData.languages, language => language);
}

function updatePortfolio(profileData) {
    updateElementList('profile.portfolio', profileData.portfolio, project => `
        <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
        <a href="${project.url}" target="_blank">${project.url}</a>`
    );
}

function updateProfessionalExperience(profileData) {
    updateElementList('profile.professionalExperience', profileData.professionalExperience, experience => `
        <h3 class="title">${experience.name}</h3>
        <p class="period">${experience.period}</p>
        <p>${experience.description}</p>`
    );
}

var x;

(async () => {
    const profileData = await fetchProfileData();

    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
})();
