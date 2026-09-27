// 在这里填写主页内容，无需修改页面布局。
// 图片放在 public/images/，路径填写为 '/images/文件名.jpg'。
// 空链接显示为占位文字，填写后自动成为可点击链接。
export const profile = {
  name: 'Yining Zhao',
  nativeName: '赵乙凝',
  initials: 'YN',
  role: '[Your position / title]',
  department: '[Department]',
  institution: '[University / Institution]',
  location: '[City, Country]',
  photo: '',
  email: '',
  github: '',
  linkedin: '',
  x: '', // 例如 'https://x.com/your_username'
  scholar: '', // Google Scholar 个人主页的完整链接
  introduction: [
    'I am a [position] at [institution], working with [advisor / collaborators]. My research focuses on [your research area].',
    'I am interested in [the questions you explore] and [the methods you work with]. Previously, I [a sentence about your background or experience].',
  ],
  interests: ['[Research area 01]', '[Research area 02]', '[Research area 03]'],
};

export const publications = [
  {
    id: 'paper-1',
    title: '[Your publication title goes here]',
    authors: [{ name: 'Your Name', self: true }, { name: '[Coauthor]', self: false }, { name: '[Coauthor]', self: false }],
    venue: '[CONFERENCE / JOURNAL]', year: '[YEAR]',
    summary: '[One or two sentences about the central idea and contribution of your work.]',
    image: '', imageAlt: '',
    links: [{ label: 'Paper', url: '' }, { label: 'Code', url: '' }, { label: 'Project', url: '' }],
  },
  {
    id: 'paper-2',
    title: '[Your publication title goes here]',
    authors: [{ name: '[Coauthor]', self: false }, { name: 'Your Name', self: true }, { name: '[Coauthor]', self: false }],
    venue: '[CONFERENCE / JOURNAL]', year: '[YEAR]',
    summary: '[One or two sentences about the central idea and contribution of your work.]',
    image: '', imageAlt: '',
    links: [{ label: 'Paper', url: '' }, { label: 'Code', url: '' }, { label: 'Project', url: '' }],
  },
  {
    id: 'paper-3',
    title: '[Your publication title goes here]',
    authors: [{ name: 'Your Name', self: true }, { name: '[Coauthor]', self: false }],
    venue: '[CONFERENCE / JOURNAL]', year: '[YEAR]',
    summary: '[One or two sentences about the central idea and contribution of your work.]',
    image: '', imageAlt: '',
    links: [{ label: 'Paper', url: '' }, { label: 'Code', url: '' }, { label: 'Project', url: '' }],
  },
];

export const education = [
  { id: 'education-1', period: '[YYYY] — Present', institution: '[University name]', degree: '[Degree] in [Field of study]', detail: 'Advisor: [Advisor name]' },
  { id: 'education-2', period: '[YYYY] — [YYYY]', institution: '[University name]', degree: '[Degree] in [Field of study]', detail: '[Optional honors or additional details]' },
];
