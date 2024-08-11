function moduleProject3() {

  function buildNav(links) {
    // 👉 TASK 1 - Create a nav element and populate it with anchor elements
    const nav = document.createElement('nav');
  
    //  ✨ do your magic here
    links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.textContent;
      a.title = link.title;
      nav.appendChild(a);
    });
  
    return nav;
  }
  
  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]));
  
  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card
  
  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const card = document.createElement('div');
    card.className = 'learner-card';
  
    const name = document.createElement('h2');
    name.textContent = learner.fullName;
    card.appendChild(name);
  
    const dob = document.createElement('p');
    dob.textContent = `Date of Birth: ${learner.dateOfBirth}`;
    card.appendChild(dob);
  
    const favLang = languages.find(lang => lang.id === learner.favLanguage);
    const favLangInfo = document.createElement('p');
    favLangInfo.textContent = `Favorite Language: ${favLang.name} (${favLang.year}) by ${favLang.creator}`;
    card.appendChild(favLangInfo);
  
    return card;
  }
  
  // 👉 TASK 2B - Use the two variables below to make learner cards, and put them in the DOM
  
  let languages = [
    { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
    { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
    { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
    { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
    { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
  ];
  
  let learners = [
    { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
    { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
    { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
    { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
    { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
  ];
  
  //  ✨ do your magic here
  learners.forEach(learner => {
    document.body.appendChild(buildLearnerCard(learner, languages));
  });
  
  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer
  
  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement('footer');
  
    const companyName = document.createElement('p');
    companyName.textContent = footerData.companyName;
    footer.appendChild(companyName);
  
    const address = document.createElement('p');
    address.textContent = footerData.address;
    footer.appendChild(address);
  
    const contactEmail = document.createElement('p');
    contactEmail.textContent = `Email: ${footerData.contactEmail}`;
    footer.appendChild(contactEmail);
  
    const socialMediaList = document.createElement('ul');
    for (const [platform, url] of Object.entries(footerData.socialMedia)) {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = url;
      link.textContent = platform;
      listItem.appendChild(link);
      socialMediaList.appendChild(listItem);
    }
    footer.appendChild(socialMediaList);
  
    return footer;
  }
  
  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }));
  

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
