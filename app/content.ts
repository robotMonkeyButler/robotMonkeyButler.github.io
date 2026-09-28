// 在这里填写主页内容，无需修改页面布局。
// 图片放在 public/images/，路径填写为 '/images/文件名.jpg'。
// 空链接显示为占位文字，填写后自动成为可点击链接。
// 正文内链接写成 [显示的姓名](https://主页地址)，页面只显示可点击的姓名。
export const profile = {
  name: 'Yining Zhao',
  nativeName: '赵乙凝',
  initials: 'YN',
  role: 'M.S. Student and Research Assistant',
  department: 'Siebel School of Computing and Data Science • University of Illinois Urbana-Champaign',
  // institution: 'UIUC',
  location: 'Urbana, IL',
  photo: '/images/intro.jpg',
  email: 'yiningz9@illinois.edu',
  github: 'https://github.com/robotMonkeyButler',
  linkedin: 'https://www.linkedin.com/in/zhaoyining/',
  x: 'https://x.com/YiningZhao22395', // 例如 'https://x.com/your_username'
  scholar: 'https://scholar.google.com/citations?user=gYrXftkAAAAJ&hl=en', // Google Scholar 个人主页的完整链接
  introduction: [
    'I am currently a first-year M.S. student in Computer Science at University of Illinois Urbana-Champaign, working with Prof. [Jiaxuan You](https://jiaxuan.web.illinois.edu/), fully funded by Graduate Research Assistantship. My research interests lie in Continual Learning and World Modeling.',
    'Before UIUC, I got my Bachelor of Engineering degree from ShanghaiTech University in 06/2026. I was fortunate to work with Prof. [Paul Liang](https://pliang279.github.io/) at MIT, Prof. [Angelica I. Aviles-Rivero](https://angelicaiaviles.wordpress.com/) at Cambridge and Prof. [Ze Xiong](https://xiong-group.com/people/) at ShanghaiTech.',
  ],
  interests: ['Social Simulation', 'Multiagent Systems', 'Agentic AI', 'Reinforcement Learning', 'LLM forecasting'],
};

// authors 直接填写整行作者；**姓名** 加粗，姓名后加 * 标注共同贡献。
// 加粗姓名后的 *、†、‡ 也会加粗，例如 **Yining Zhao*** 或 **Yining Zhao**†。
// 例如：'Haofei Yu*, **Yining Zhao***, Lenore Blum, Manuel Blum, Paul Pu Liang'
// imageRatio 留空时，外框自动贴合原图比例；也可填 '2 / 1'、'1 / 1' 手动指定外框比例。
export const publications = [
  {
    id: 'paper-1',
    title: 'CTM-AI: A Blueprint for General AI Inspired by a Model of Consciousness',
    authors: 'Haofei Yu*, **Yining Zhao***, Lenore Blum, Manuel Blum, Paul Pu Liang',
    venue: 'The 40th Annual Conference on Neural Information Processing Systems (NeurIPS 2026)',
    image: '/images/ctm.png', imageAlt: '',
    imageRatio: '',
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2605.04097' }, { label: 'Code', url: 'https://github.com/consciousness-lab/ctm-ai' }],
  },
  {
    id: 'paper-2',
    title: 'SOTOPIA-RL: Reward Design for Social Intelligence',
    authors: '**Yining Zhao***, Haofei Yu*, Zhengyang Qi*, Kolby Nottingham, Keyang Xuan, Bodhisattwa Prasad Majumder, Hao Zhu, Paul Pu Liang, Jiaxuan You',
    venue: 'MTI-LLM @ The 39th Annual Conference on Neural Information Processing Systems (NeurIPS 2025)',
    summary: '[One or two sentences about the central idea and contribution of your work.]',
    image: '/images/sotopia.png', imageAlt: '',
    imageRatio: '',
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2508.03905' }, { label: 'Code', url: 'https://github.com/sotopia-lab/sotopia-rl' }, { label: 'Model', url: 'https://huggingface.co/ulab-ai/sotopia-rl-qwen-2.5-7B-grpo' }],
  },
  {
    id: 'paper-3',
    title: 'Building Social World Models with Large Language Models',
    authors: 'Haofei Yu, **Yining Zhao**, Guanyu Lin, Jiaxuan You',
    venue: 'The 43rd International Conference on Machine Learning (ICML 2026)',
    image: '/images/swm2.png', imageAlt: '',
    imageRatio: '',
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2606.11482' }, { label: 'Code', url: 'https://github.com/ulab-uiuc/social-world-model' }, { label: 'Data', url: 'https://huggingface.co/datasets/ulab-ai/swm-bench' }],
  },
  {
    id: 'paper-4',
    title: 'Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents',
    authors: 'Chongrui Ye, Yuxiang Liu, Yu Wang, Haofei Yu, **Yining Zhao**, Ge Liu, Julian McAuley, Jiaxuan You',
    venue: 'The 40th Annual Conference on Neural Information Processing Systems (NeurIPS 2026)',
    image: '/images/auto.png', imageAlt: '',
    imageRatio: '',
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2605.20616' }],
  },
  {
    id: 'paper-5',
    title: 'Can Large Language Models Forecast What Researchers Study Next?',
    authors: 'Fenghai Li, Zihan Tang, Haofei Yu, **Yining Zhao**, Jiaxuan You',
    venue: 'The 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP 2026 main)',
    image: '/images/idea.png', imageAlt: '',
    imageRatio: '',
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2605.20616' }],
  },
  {
    id: 'paper-6',
    title: 'Implicit U-KAN: Dynamic, Efficient and Interpretable Medical Image Segmentation',
    authors: 'Chun-Wun Cheng*, **Yining Zhao***, Yanqi Cheng, Javier A. Montoya-Zegarra, Carola-Bibiane Schönlieb, Angelica I Aviles-Rivero',
    venue: 'The 28th International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI 2025)',
    image: '/images/ukan.png', imageAlt: '',
    imageRatio: '',
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2605.20616' }, {label: 'Code', url: 'https://github.com/Math-ML-X/implicit-conukan'}],
  },
];

// badge 填学校标志图片路径；留空显示通用教育图标。
export const education = [
  { id: 'education-1', period: '2026.8 — Present', institution: 'University of Illinois Urbana-Champaign', degree: 'M.S. in Computer Science', detail: '', badge: '/images/uiuc1.png', badgeAlt: 'University of Illinois Urbana-Champaign logo' },
  { id: 'education-3', period: '2023.9 — 2026.6', institution: 'ShanghaiTech University', degree: 'B.Eng. in Computer Science', detail: '', badge: '/images/skd2.png', badgeAlt: '' },
    { id: 'education-2', period: '2024.8 — 2025.5', institution: 'University of Illinois Urbana-Champaign', degree: 'Exchange Student in Computer Science', detail: '', badge: '/images/uiuc1.png', badgeAlt: 'University of Illinois Urbana-Champaign logo' },
];
