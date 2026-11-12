/* 日常更新只需编辑本文件。每一条记录之间保留英文逗号，文字使用英文双引号。
   url 仅支持完整 http:// 或 https:// 网页链接；留空的链接不会显示。
   不要在此文件写密码、私密材料或带访问令牌的链接。 */
window.SITE_DATA = {
  site: {
    name: "光子智能课题组",
    englishName: "PHOTONIC INTELLIGENCE GROUP",
    direction: "空间光计算与感知",
    headline: "空间光计算\n与感知",
    tagline: "以光计算，感知世界。",
    intro: "我们关注光场调控、光学信息处理与智能视觉感知的交叉研究，探索将计算融入光的传播与探测过程，构建面向高效感知的光电协同方法。",
    about: "围绕空间光计算与感知，我们从光学器件、计算模型到感知系统开展探索，关注光场编码、计算成像与智能信息处理之间的协同。希望通过光学前端与电子后端的联合设计，为更紧凑、更高效的视觉感知提供新的实现路径。",
    email: "",
    affiliation: "",
    github: ""
  },
  research: [
    { title: "空间光场调控与计算", english: "Spatial optical computing", description: "研究光场的振幅、相位及空间结构调控，探索衍射传播、傅里叶光学与可编程光学器件中的信息处理方法。", tags: ["光场编码", "傅里叶光学", "可编程光学"] },
    { title: "计算成像与智能感知", english: "Computational imaging & sensing", description: "融合光学编码、传感探测与计算重建，面向复杂场景中的图像获取、特征提取与视觉理解开展研究。", tags: ["计算成像", "视觉感知", "感算融合"] },
    { title: "光电协同与边缘智能", english: "Optoelectronic co-design", description: "探索光学前端与轻量电子算法的联合优化，关注系统精度、时延和资源开销之间的平衡，面向紧凑型智能感知应用。", tags: ["联合优化", "轻量算法", "边缘感知"] }
  ],
  // 暂无真实论文信息，保持空数组；添加格式见部署与更新教程。
  publications: [],
  // 以下为外部公开参考文档，不代表课题组原创资料。可删除或替换成组内文档链接。
  resources: [
    { title: "Meep 电磁仿真文档", category: "光学仿真", description: "FDTD 电磁仿真的入门、建模与示例，适合作为空间光学器件数值仿真的参考。", url: "https://meep.readthedocs.io/en/stable/", source: "Meep 官方文档", type: "在线文档", tags: ["FDTD", "电磁仿真", "Python"] },
    { title: "激光光路的搭建", category: "光学实验", description: "傅里叶光学与相干光学系统的实验搭建基础方法。", url: "https://cloud.tsinghua.edu.cn/f/e062f04ae790452c97e0/", source: "wangch", type: "在线文档", tags: ["傅里叶光学", "光学实验"] },
    { title: "PyTorch 学习与实践", category: "深度学习", description: "张量运算、自动微分和神经网络的官方教程，供光电联合优化与感知算法学习参考。", url: "https://pytorch.org/tutorials/", source: "PyTorch 官方教程", type: "教程", tags: ["自动微分", "联合优化", "神经网络"] },
    { title: "Computational Imaging", category: "计算成像", description: "MIT计算成像教程", url: "https://cloud.tsinghua.edu.cn/f/fd9565384d5846179e72/", source: "MIT Press", type: "书籍教程", tags: ["图像处理", "计算机视觉", "计算成像"] }
     
  ]
};
