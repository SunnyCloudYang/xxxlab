import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  AcademicCapIcon,
  BeakerIcon,
  LightBulbIcon,
  CubeIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  LinkIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import Container from "../components/layout/Container";
import { Button, Card } from "../components/ui";

// 扩展的研究领域数据
const researchAreas = [
  {
    id: "1",
    title: "计算机视觉与图像处理",
    subtitle: "Computer Vision & Image Processing",
    description:
      "专注于深度学习在图像识别、目标检测、图像分割等领域的应用研究。开发高效的视觉算法，推动计算机视觉技术在实际场景中的应用。",
    abstract:
      "计算机视觉是人工智能领域的重要分支，致力于让计算机能够像人类一样理解和分析视觉信息。我们的研究团队在图像识别、目标检测、语义分割、实例分割等核心技术方面具有深厚的积累。通过深度学习技术，特别是卷积神经网络(CNN)、Transformer等前沿模型，我们开发了多个具有国际先进水平的视觉算法。",
    icon: <AcademicCapIcon className="h-12 w-12" />,
    color: "bg-blue-100 text-blue-600",
    technologies: ["深度学习", "卷积神经网络", "目标检测", "图像分割"],
    achievements: ["发表顶级会议论文15篇", "获得专利3项", "产业化应用2个"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    detailedContent: {
      overview:
        "计算机视觉与图像处理是我们实验室的核心研究方向之一。该方向致力于开发先进的图像理解和分析技术，包括但不限于图像分类、目标检测、语义分割、实例分割、图像生成等关键技术。我们的研究工作不仅关注算法的理论创新，更注重技术的实际应用和产业化落地。",
      keyResearchAreas: [
        {
          name: "深度学习模型设计",
          description:
            "设计高效的神经网络架构，包括卷积神经网络、视觉Transformer等",
        },
        {
          name: "目标检测与跟踪",
          description: "开发准确、快速的目标检测算法，支持实时视频分析",
        },
        {
          name: "图像分割技术",
          description: "语义分割和实例分割算法，实现像素级别的图像理解",
        },
        {
          name: "图像生成与编辑",
          description: "基于生成对抗网络的图像合成和编辑技术",
        },
      ],
      currentProjects: [
        {
          title: "基于Transformer的高效目标检测算法",
          description: "研发新一代基于视觉Transformer的目标检测模型",
          status: "进行中",
          duration: "2023-2025",
        },
        {
          title: "工业质检智能视觉系统",
          description: "面向制造业的AI质检解决方案",
          status: "进行中",
          duration: "2023-2024",
        },
        {
          title: "医疗影像智能分析平台",
          description: "医学图像的自动化分析和诊断辅助系统",
          status: "进行中",
          duration: "2024-2026",
        },
      ],
      publications: [
        {
          title: "EfficientDet: Scalable and Efficient Object Detection",
          venue: "CVPR 2024",
          impact: "高影响力",
        },
        {
          title: "Vision Transformer for Dense Prediction",
          venue: "ICCV 2023",
          impact: "高影响力",
        },
        {
          title: "Real-time Semantic Segmentation with Lightweight Networks",
          venue: "ECCV 2023",
          impact: "中等影响力",
        },
      ],
      teamMembers: [
        { name: "张教授", role: "研究负责人" },
        { name: "李明", role: "博士研究生" },
        { name: "王小华", role: "硕士研究生" },
      ],
      equipment: [
        "NVIDIA A100 GPU集群",
        "高性能工作站",
        "专业摄像设备",
        "图像采集系统",
      ],
      collaborations: [
        { name: "清华大学", type: "学术合作" },
        { name: "腾讯AI Lab", type: "产学研合作" },
        { name: "华为技术有限公司", type: "技术转化" },
      ],
    },
  },
  {
    id: "2",
    title: "三维重建与建模",
    subtitle: "3D Reconstruction & Modeling",
    description:
      "致力于从多视角图像或点云数据中恢复三维几何结构的研究。结合深度学习技术，实现高精度、高效率的三维重建算法。",
    abstract:
      "三维重建是计算机视觉和计算机图形学的重要交叉领域，目标是从二维图像序列或深度数据中重构出三维场景的几何结构。我们的研究覆盖了传统的多视图几何方法到最新的神经辐射场(NeRF)技术，在无人机航拍建模、室内场景重建、文物数字化保护等方面取得了显著成果。",
    icon: <CubeIcon className="h-12 w-12" />,
    color: "bg-green-100 text-green-600",
    technologies: ["立体视觉", "点云处理", "神经辐射场", "多视图几何"],
    achievements: ["开发开源工具包", "承担国家级项目2项", "国际合作项目1项"],
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    detailedContent: {
      overview:
        "三维重建与建模是将现实世界的物体和场景转换为数字三维模型的技术。我们的研究团队在传统几何方法、深度学习方法以及最新的神经渲染技术方面都有深入研究，致力于开发高精度、高效率的三维重建算法。",
      keyResearchAreas: [
        {
          name: "多视图立体视觉",
          description: "基于多个视角的图像进行三维重建的经典方法",
        },
        {
          name: "神经辐射场(NeRF)",
          description: "基于神经网络的新型三维场景表示和渲染方法",
        },
        {
          name: "点云处理与分析",
          description: "点云数据的获取、处理、分析和应用技术",
        },
        {
          name: "SLAM技术",
          description: "同时定位与地图构建技术在三维重建中的应用",
        },
      ],
      currentProjects: [
        {
          title: "基于神经辐射场的室内场景重建",
          description: "开发高质量的室内环境三维重建系统",
          status: "进行中",
          duration: "2023-2025",
        },
        {
          title: "无人机航拍的大规模场景建模",
          description: "基于无人机影像的大范围地形三维建模",
          status: "进行中",
          duration: "2024-2026",
        },
      ],
      publications: [
        {
          title: "Neural Radiance Fields for Indoor Scene Reconstruction",
          venue: "SIGGRAPH 2024",
          impact: "高影响力",
        },
        {
          title: "Efficient Point Cloud Registration with Deep Learning",
          venue: "3DV 2023",
          impact: "中等影响力",
        },
      ],
      teamMembers: [
        { name: "张教授", role: "研究负责人" },
        { name: "李明", role: "博士研究生" },
      ],
      equipment: ["激光扫描仪", "深度相机", "无人机设备", "高性能计算集群"],
      collaborations: [
        { name: "中科院自动化所", type: "学术合作" },
        { name: "大疆创新", type: "技术合作" },
      ],
    },
  },
  {
    id: "3",
    title: "机器学习与人工智能",
    subtitle: "Machine Learning & Artificial Intelligence",
    description:
      "探索机器学习算法的理论基础和实际应用。重点研究深度学习、强化学习、迁移学习等前沿技术在各个领域的创新应用。",
    abstract:
      "机器学习是人工智能的核心技术，我们的研究涵盖了监督学习、无监督学习、强化学习等多个子领域。在理论研究方面，我们关注算法的收敛性、泛化能力和可解释性；在应用研究方面，我们将机器学习技术应用于计算机视觉、自然语言处理、推荐系统等多个领域。",
    icon: <BeakerIcon className="h-12 w-12" />,
    color: "bg-purple-100 text-purple-600",
    technologies: ["深度学习", "强化学习", "迁移学习", "联邦学习"],
    achievements: ["顶级期刊论文12篇", "算法竞赛获奖5次", "技术转化项目3个"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    detailedContent: {
      overview:
        "机器学习与人工智能是当前最具活力的研究领域之一。我们的团队在深度学习、强化学习、迁移学习等方面都有深入的研究，既关注算法的理论基础，也注重实际应用的落地。",
      keyResearchAreas: [
        {
          name: "深度神经网络",
          description: "神经网络架构设计、优化算法、正则化技术",
        },
        {
          name: "强化学习",
          description: "智能体与环境交互学习，应用于游戏、机器人控制等",
        },
        {
          name: "迁移学习",
          description: "跨域知识迁移，提高模型在新任务上的性能",
        },
        {
          name: "联邦学习",
          description: "分布式机器学习，保护数据隐私的同时实现模型训练",
        },
      ],
      currentProjects: [
        {
          title: "可解释人工智能研究",
          description: "提高AI系统决策过程的可解释性和透明度",
          status: "进行中",
          duration: "2023-2025",
        },
        {
          title: "联邦学习系统开发",
          description: "隐私保护的分布式机器学习平台",
          status: "进行中",
          duration: "2024-2026",
        },
      ],
      publications: [
        {
          title: "Interpretable Deep Learning for Medical Diagnosis",
          venue: "Nature Machine Intelligence",
          impact: "高影响力",
        },
        {
          title: "Federated Learning with Differential Privacy",
          venue: "ICML 2023",
          impact: "高影响力",
        },
      ],
      teamMembers: [
        { name: "张教授", role: "研究负责人" },
        { name: "王小华", role: "硕士研究生" },
      ],
      equipment: ["GPU计算集群", "边缘计算设备", "联邦学习测试平台"],
      collaborations: [
        { name: "斯坦福大学", type: "国际合作" },
        { name: "百度研究院", type: "产学研合作" },
      ],
    },
  },
  {
    id: "4",
    title: "智能感知与交互",
    subtitle: "Intelligent Perception & Interaction",
    description:
      "研究人机交互、智能感知、多模态融合等技术。开发自然、直观的智能交互系统，提升用户体验和系统可用性。",
    abstract:
      "智能感知与交互技术是连接人类与机器的重要桥梁。我们的研究重点关注多模态感知技术、自然用户界面、情感计算等前沿方向，致力于创建更加智能、自然和人性化的人机交互体验。",
    icon: <LightBulbIcon className="h-12 w-12" />,
    color: "bg-yellow-100 text-yellow-600",
    technologies: ["多模态融合", "手势识别", "语音处理", "情感计算"],
    achievements: ["获得创新奖2项", "申请专利5项", "产学研合作4个"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    detailedContent: {
      overview:
        "智能感知与交互技术致力于实现更自然、更直观的人机交互方式。我们的研究涵盖了视觉、听觉、触觉等多种感知模态，以及手势、语音、表情等多种交互方式。",
      keyResearchAreas: [
        {
          name: "多模态感知融合",
          description: "结合视觉、听觉、触觉等多种感知信息",
        },
        {
          name: "自然用户界面",
          description: "手势识别、眼动跟踪等自然交互方式",
        },
        {
          name: "情感计算",
          description: "识别和理解用户情感状态的计算技术",
        },
        {
          name: "虚拟现实交互",
          description: "VR/AR环境中的自然交互技术",
        },
      ],
      currentProjects: [
        {
          title: "多模态情感识别系统",
          description: "结合面部表情、语音、生理信号的情感识别",
          status: "进行中",
          duration: "2023-2024",
        },
        {
          title: "无接触手势控制系统",
          description: "基于计算机视觉的非接触式手势识别",
          status: "进行中",
          duration: "2024-2025",
        },
      ],
      publications: [
        {
          title: "Multimodal Emotion Recognition in the Wild",
          venue: "ACMMM 2023",
          impact: "中等影响力",
        },
      ],
      teamMembers: [
        { name: "李明", role: "研究负责人" },
        { name: "王小华", role: "硕士研究生" },
      ],
      equipment: ["多模态采集设备", "眼动仪", "生理信号传感器", "VR/AR设备"],
      collaborations: [
        { name: "微软亚洲研究院", type: "技术合作" },
        { name: "字节跳动", type: "实习合作" },
      ],
    },
  },
  {
    id: "5",
    title: "数据挖掘与分析",
    subtitle: "Data Mining & Analytics",
    description:
      "运用统计学习、机器学习等方法从大规模数据中发现有价值的模式和知识。为决策支持和预测分析提供技术支撑。",
    abstract:
      "数据挖掘与分析是从大量数据中提取有用信息和知识的过程。我们的研究涵盖了数据预处理、特征工程、模式识别、预测建模等多个环节，在金融风控、推荐系统、社交网络分析等领域有广泛应用。",
    icon: <ChartBarIcon className="h-12 w-12" />,
    color: "bg-red-100 text-red-600",
    technologies: ["大数据处理", "统计学习", "时序分析", "推荐系统"],
    achievements: ["服务企业10余家", "数据平台建设3个", "商业化应用5个"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    detailedContent: {
      overview:
        "数据挖掘与分析技术是大数据时代的核心技术之一。我们专注于从海量数据中发现隐藏的模式和规律，为企业决策和科学研究提供数据驱动的解决方案。",
      keyResearchAreas: [
        {
          name: "大数据处理技术",
          description: "分布式计算、流数据处理、数据存储优化",
        },
        {
          name: "机器学习算法",
          description: "监督学习、无监督学习、半监督学习算法",
        },
        {
          name: "时序数据分析",
          description: "时间序列预测、异常检测、趋势分析",
        },
        {
          name: "推荐算法",
          description: "协同过滤、内容推荐、混合推荐系统",
        },
      ],
      currentProjects: [
        {
          title: "金融风控智能分析系统",
          description: "基于机器学习的信贷风险评估平台",
          status: "已完成",
          duration: "2022-2023",
        },
        {
          title: "电商推荐系统优化",
          description: "个性化推荐算法在电商平台的应用",
          status: "进行中",
          duration: "2023-2024",
        },
      ],
      publications: [
        {
          title: "Deep Learning for Financial Risk Assessment",
          venue: "KDD 2023",
          impact: "高影响力",
        },
      ],
      teamMembers: [
        { name: "张教授", role: "研究负责人" },
        { name: "刘志强", role: "已毕业硕士" },
      ],
      equipment: ["大数据处理集群", "实时计算平台", "数据存储系统"],
      collaborations: [
        { name: "阿里巴巴", type: "产业合作" },
        { name: "招商银行", type: "应用合作" },
      ],
    },
  },
  {
    id: "6",
    title: "新兴技术探索",
    subtitle: "Emerging Technology Exploration",
    description:
      "关注前沿技术趋势，探索AR/VR、区块链、量子计算等新兴技术的应用潜力。推动跨学科研究和技术创新。",
    abstract:
      "新兴技术探索是我们实验室保持技术前瞻性的重要方向。我们密切关注AR/VR、区块链、量子计算、边缘计算等新兴技术的发展趋势，积极探索这些技术在各个领域的应用潜力和创新可能。",
    icon: <RocketLaunchIcon className="h-12 w-12" />,
    color: "bg-indigo-100 text-indigo-600",
    technologies: ["增强现实", "虚拟现实", "区块链", "边缘计算"],
    achievements: ["前沿技术调研报告6份", "实验性项目4个", "技术孵化基地1个"],
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=600&fit=crop",
    detailedContent: {
      overview:
        "新兴技术探索方向致力于跟踪和研究最前沿的技术发展趋势，为实验室的长期发展提供技术储备。我们不仅关注技术本身，更关注技术的交叉融合和创新应用。",
      keyResearchAreas: [
        {
          name: "沉浸式技术",
          description: "AR/VR技术在教育、娱乐、工业等领域的应用",
        },
        {
          name: "区块链技术",
          description: "分布式账本技术在数据安全、数字资产等方面的应用",
        },
        {
          name: "边缘计算",
          description: "物联网边缘的智能计算和数据处理技术",
        },
        {
          name: "量子计算探索",
          description: "量子计算在机器学习和优化问题中的潜在应用",
        },
      ],
      currentProjects: [
        {
          title: "AR技术在工业维修中的应用",
          description: "开发基于增强现实的设备维修指导系统",
          status: "进行中",
          duration: "2024-2025",
        },
        {
          title: "区块链数据共享平台",
          description: "基于区块链的安全数据共享机制研究",
          status: "启动阶段",
          duration: "2024-2026",
        },
      ],
      publications: [
        {
          title: "Blockchain-based Secure Data Sharing",
          venue: "IEEE Security & Privacy",
          impact: "中等影响力",
        },
      ],
      teamMembers: [{ name: "李明", role: "研究负责人" }],
      equipment: ["AR/VR开发设备", "区块链测试网络", "边缘计算设备"],
      collaborations: [
        { name: "华为云", type: "技术合作" },
        { name: "HTC", type: "设备支持" },
      ],
    },
  },
];

const ResearchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const research = researchAreas.find((area) => area.id === id);

  if (!research) {
    return (
      <div className="py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              研究方向未找到
            </h1>
            <Link to="/research">
              <Button variant="primary">返回研究方向</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-16">
      <Container>
        {/* 面包屑导航 */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/research" className="hover:text-gray-900">
            研究方向
          </Link>
          <span>/</span>
          <span className="text-gray-900">{research.title}</span>
        </nav>

        {/* 返回按钮 */}
        <Link
          to="/research"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          返回研究方向
        </Link>

        {/* 头图 */}
        <div className="h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <img
            src={research.image}
            alt={research.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 标题区域 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-start space-x-6">
            <div className={`p-4 rounded-lg ${research.color}`}>
              {research.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {research.title}
              </h1>
              <h2 className="text-lg text-gray-600 mb-4">
                {research.subtitle}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {research.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 主要内容 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 摘要 */}
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">研究概述</h3>
              <p className="text-gray-700 leading-relaxed">
                {research.abstract}
              </p>
            </Card>

            {/* 详细介绍 */}
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">详细介绍</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {research.detailedContent.overview}
              </p>
            </Card>

            {/* 代表性论文 */}
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                代表性论文
              </h3>
              <div className="space-y-4">
                {research.detailedContent.publications.map(
                  (publication, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {publication.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          {publication.venue}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            publication.impact === "高影响力"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {publication.impact}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 核心技术 */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                核心技术
              </h3>
              <div className="flex flex-wrap gap-2">
                {research.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* 研究团队 */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                研究团队
              </h3>
              <div className="space-y-3">
                {research.detailedContent.teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <UserGroupIcon className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">
                        {member.name}
                      </div>
                      <div className="text-sm text-gray-600">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* 主要成果 */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                主要成果
              </h3>
              <div className="space-y-3">
                {research.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <TrophyIcon className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <span className="text-sm text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* 研究设备 */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                研究设备
              </h3>
              <div className="space-y-2">
                {research.detailedContent.equipment.map((equipment, index) => (
                  <div key={index} className="text-sm text-gray-700">
                    • {equipment}
                  </div>
                ))}
              </div>
            </Card>

            {/* 合作伙伴 */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                合作伙伴
              </h3>
              <div className="space-y-3">
                {research.detailedContent.collaborations.map(
                  (collaboration, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <LinkIcon className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="font-medium text-gray-900">
                          {collaboration.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {collaboration.type}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResearchDetail;
