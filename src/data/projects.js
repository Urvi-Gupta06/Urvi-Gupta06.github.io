// Project entries — edit `name`, `description`, and `languages` here; GitHub repos can be linked optionally
export const PROJECTS = [
  {
    id: 'pennywise',
    name: 'PennyWise',
    githubUrl: 'https://github.com/Urvi-Gupta06/PennyWise',
    description:
      'PennyWise is a smart student budgeting platform that helps users track income, expenditures, loans, and plan future expenses all in one place, making financial planning more feasible. Built for Hack(H)er413 2025 with a dynamic dashboard, finances tab, loans tracker, and books tab.',
    languages: ['Python', 'HTML', 'JavaScript', 'CSS'],
  },
  {
    id: 'adaptive-anomaly-detection',
    name: 'Adaptive Anomaly Detection',
    githubUrl:
      'https://github.com/Urvi-Gupta06/Adaptive-Anomaly-Detection-for-Fraudulent-Transactions',
    description:
      'As digital transactions increase globally, detecting fraudulent activity has become a major challenge. Traditional fraud detection models are often static, trained once and applied indefinitely, assuming user behavior stays constant. This project explores whether an adaptive anomaly detection model that continuously learns from new behavioral data can outperform a static model in identifying fraudulent transactions.',
    languages: ['Pandas', 'NumPy', 'Scikit-learn', 'Jupyter Notebook'],
  },
  {
    id: 'data-management-system',
    name: 'Data Management System',
    subtitle: 'Volunteer program developer for local non-profit | Python, Tkinter, MySQL',
    bullets: [
      'Developed a program with 10 unique features tailored to a local hospital’s needs to store patient records.',
      'Engineered Python-MySQL backend to eliminate 500+ redundant entries and reduce retrieval time by 40%.',
    ],
    languages: ['Python', 'MySQL','Tkinter'],
  },
]

// GitHub-style language dot colors
export const LANGUAGE_COLORS = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'Jupyter Notebook': '#DA5B0B',
  Java: '#b07219',
  C: '#555555',
  'C++': '#f34b7d',
  Go: '#00ADD8',
  Rust: '#dea584',
  SQL: '#e38c00',
  MySQL: '#4479A1',
}

export function getLanguageColor(language) {
  return LANGUAGE_COLORS[language] ?? '#8b8b8b'
}
