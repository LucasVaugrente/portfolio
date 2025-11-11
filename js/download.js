const blockCV = document.querySelectorAll('.cv-block');

blockCV.forEach(block => {
    block.addEventListener('click', () => {
        const languageSelected = document.querySelectorAll('.languageSelected');
        const currentLang = languageSelected[0].src.split('/').pop().split('_')[0];
        let cvLink = '';
        if (currentLang == "fr") {
            cvLink = 'download/cv_lucas_vaugrente_fr.pdf';
        }
        else if (currentLang == "en") {
            cvLink = 'download/cv_lucas_vaugrente_en.pdf';
        }
        window.open(cvLink, '_blank');
    });
});