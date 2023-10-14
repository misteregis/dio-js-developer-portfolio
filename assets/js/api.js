async function fetchProfileData() {
    const url = './data/profile.json';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const profileData = await response.json();

        return profileData;
    } catch (error) {
        console.error('Erro ao buscar dados de perfil:', error);
        throw error; // Rejeita a Promise com o erro para que seja tratado posteriormente
    }
}
