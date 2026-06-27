// Education section content — edit titles, bullets, and featured links here
export const EDUCATION_CARDS = {
  university: {
    id: 'university',
    title: 'University of Massachusetts Amherst',
    lines: ['B.S. in Computer Science, Business Minor, and Letter of Specialization in Creative Writing', 'GPA: 3.85/4.0'],
    sectionTitle: 'Relevant Coursework:',
    bullets: [
      'Object Oriented Programming',
      'Data Structures',
      'Probability Theory',
      'Formal Language Theory',
      'Programming Methodologies',
      'Computer Systems',
      'Multivariate Calculus',
      'Linear Algebra',
    ],
  },
  honors: {
    id: 'honors',
    title: 'Honors & Awards',
    bullets: [
      "Dean's List",
      '$64,000 Chancellor\'s Award Scholarship',
      'Hack(H)er 413 Winner',
    ],
  },
  coCurriculars: {
    id: 'co-curriculars',
    title: 'Co-Curriculars',
    bullets: [
      'Co-Director of Sponsorship @ HackUMass',
      'Women in Informatics and Computer Science (WICS) E-Board',
      'Product Manager & Engineer @ BUILD UMass',
    ],
  },
  featured: {
    id: 'featured',
    title: 'Featured',
    items: [
      {
        id: 'ersp-codec',
        label: 'ERSP Research with NSF CoDec',
        href: 'https://www.linkedin.com/posts/codec-nsfcodec-undergraduateresearch-share-7410429615166468097-vyLM/',
        image: '/assets/education/codec_photoshoot.jpg',
        imageAlt: 'NSF CoDec ERSP undergraduate researchers announcement',
      },
      {
        id: 'aws-commonwealth',
        label: 'AWS AI Training for Commonwealth Interns',
        href: 'https://www.linkedin.com/posts/umass-amherst-public-interest-technology-initiative_thank-you-to-amazon-web-services-aws-for-activity-7473459493683585025-9U7o/',
        image: '/assets/education/pit_linkedin.jpg',
        imageAlt: 'AWS AI training day for AI for the Commonwealth interns',
      },
    ],
  },
}
