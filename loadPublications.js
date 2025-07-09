function loadPublications() {
    fetch('publications.xml')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            // Journals
            const journalPublications = data.querySelectorAll('journals > publication');
            let journalHTML = '<ul style="list-style-type: none; padding-left: 0;">';
            let journalCounter = 1;

            journalPublications.forEach(pub => {
                let authors = pub.querySelector('authors').textContent;
                const title = pub.querySelector('title').textContent;
                const journal = pub.querySelector('journal').textContent;
                const year = pub.querySelector('year').textContent;
                const pdf = pub.querySelector('pdf') ? pub.querySelector('pdf').textContent : '';
                const code = pub.querySelector('code') ? pub.querySelector('code').textContent : '';

                // Bold your name
                authors = authors.replace(/\bN\. Passalis\b/g, '<b>N. Passalis</b>');

                journalHTML += `<li style="margin-bottom: 0.5em;"><b>${journalCounter}.</b> ${authors}, “${title}”, <i>${journal}</i>, ${year}`;

                if (pdf) {
                    journalHTML += ` [<a href="${pdf}" target="_blank">PDF</a>]`;
                }
                if (code) {
                    journalHTML += ` [<a href="${code}" target="_blank">Code</a>]`;
                }

                journalHTML += `</li>`;
                journalCounter++;
            });
            journalHTML += '</ul>';
            document.getElementById('journal-publications').innerHTML = journalHTML;

            // Conferences
            const conferencePublications = data.querySelectorAll('conferences > conference');
            let conferenceHTML = '<ul style="list-style-type: none; padding-left: 0;">';
            let conferenceCounter = 1;

            conferencePublications.forEach(pub => {
                let authors = pub.querySelector('authors').textContent;
                const title = pub.querySelector('title').textContent;
                const conference = pub.querySelector('conference').textContent;
                const year = pub.querySelector('year').textContent;
                const pdf = pub.querySelector('pdf') ? pub.querySelector('pdf').textContent : '';
                const code = pub.querySelector('code') ? pub.querySelector('code').textContent : '';

                // Bold your name
                authors = authors.replace(/\bN\. Passalis\b/g, '<b>N. Passalis</b>');

                conferenceHTML += `<li style="margin-bottom: 0.5em;"><b>${conferenceCounter}.</b> ${authors}, “${title}”, <i>${conference}</i>, ${year}`;

                if (pdf) {
                    conferenceHTML += ` [<a href="${pdf}" target="_blank">PDF</a>]`;
                }
                if (code) {
                    conferenceHTML += ` [<a href="${code}" target="_blank">Code</a>]`;
                }

                conferenceHTML += `</li>`;
                conferenceCounter++;
            });
            conferenceHTML += '</ul>';
            document.getElementById('conference-publications').innerHTML = conferenceHTML;
        })
        .catch(error => console.error('Error loading publications:', error));
}

