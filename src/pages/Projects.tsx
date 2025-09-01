import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  BeakerIcon,
  LightBulbIcon,
  CubeIcon,
  ChartBarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Container from "../components/layout/Container";
import { SearchBox, FilterSelect, Card } from "../components/ui";

// 研究领域数据
const researchAreas = [
  {
    id: "1",
    title: "计算机视觉与图像处理",
    description:
      "专注于深度学习在图像识别、目标检测、图像分割等领域的应用研究。开发高效的视觉算法，推动计算机视觉技术在实际场景中的应用。",
    icon: <AcademicCapIcon className="h-12 w-12" />,
    color: "bg-blue-100 text-blue-600",
    technologies: ["深度学习", "卷积神经网络", "目标检测", "图像分割"],
    achievements: ["发表顶级会议论文15篇", "获得专利3项", "产业化应用2个"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    title: "三维重建与建模",
    description:
      "致力于从多视角图像或点云数据中恢复三维几何结构的研究。结合深度学习技术，实现高精度、高效率的三维重建算法。",
    icon: <CubeIcon className="h-12 w-12" />,
    color: "bg-green-100 text-green-600",
    technologies: ["立体视觉", "点云处理", "神经辐射场", "多视图几何"],
    achievements: ["开发开源工具包", "承担国家级项目2项", "国际合作项目1项"],
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    title: "机器学习与人工智能",
    description:
      "探索机器学习算法的理论基础和实际应用。重点研究深度学习、强化学习、迁移学习等前沿技术在各个领域的创新应用。",
    icon: <BeakerIcon className="h-12 w-12" />,
    color: "bg-purple-100 text-purple-600",
    technologies: ["深度学习", "强化学习", "迁移学习", "联邦学习"],
    achievements: ["顶级期刊论文12篇", "算法竞赛获奖5次", "技术转化项目3个"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    title: "智能感知与交互",
    description:
      "研究人机交互、智能感知、多模态融合等技术。开发自然、直观的智能交互系统，提升用户体验和系统可用性。",
    icon: <LightBulbIcon className="h-12 w-12" />,
    color: "bg-yellow-100 text-yellow-600",
    technologies: ["多模态融合", "手势识别", "语音处理", "情感计算"],
    achievements: ["获得创新奖2项", "申请专利5项", "产学研合作4个"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
  },
  {
    id: "5",
    title: "数据挖掘与分析",
    description:
      "运用统计学习、机器学习等方法从大规模数据中发现有价值的模式和知识。为决策支持和预测分析提供技术支撑。",
    icon: <ChartBarIcon className="h-12 w-12" />,
    color: "bg-red-100 text-red-600",
    technologies: ["大数据处理", "统计学习", "时序分析", "推荐系统"],
    achievements: ["服务企业10余家", "数据平台建设3个", "商业化应用5个"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    title: "新兴技术探索",
    description:
      "关注前沿技术趋势，探索AR/VR、区块链、量子计算等新兴技术的应用潜力。推动跨学科研究和技术创新。",
    icon: <RocketLaunchIcon className="h-12 w-12" />,
    color: "bg-indigo-100 text-indigo-600",
    technologies: ["增强现实", "虚拟现实", "区块链", "边缘计算"],
    achievements: ["前沿技术调研报告6份", "实验性项目4个", "技术孵化基地1个"],
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop",
  },
];

const Research: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 分类选项
  const categoryOptions = [
    { value: "all", label: "全部领域", count: researchAreas.length },
    { value: "core", label: "核心技术", count: 3 },
    { value: "application", label: "应用研究", count: 2 },
    { value: "emerging", label: "前沿探索", count: 1 },
  ];

  // 筛选研究领域
  const filteredAreas = useMemo(() => {
    let filtered = researchAreas;

    // 搜索过滤
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (area) =>
          area.title.toLowerCase().includes(query) ||
          area.description.toLowerCase().includes(query) ||
          area.technologies.some((tech) => tech.toLowerCase().includes(query))
      );
    }

    // 分类过滤
    if (selectedCategory !== "all") {
      const coreIds = ["1", "2", "3"];
      const applicationIds = ["4", "5"];
      const emergingIds = ["6"];

      switch (selectedCategory) {
        case "core":
          filtered = filtered.filter((area) => coreIds.includes(area.id));
          break;
        case "application":
          filtered = filtered.filter((area) =>
            applicationIds.includes(area.id)
          );
          break;
        case "emerging":
          filtered = filtered.filter((area) => emergingIds.includes(area.id));
          break;
      }
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  const hasActiveFilters = searchQuery || selectedCategory !== "all";

  return (
    <div className="py-16">
      <Container>
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            研究方向
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            探索前沿技术，推动科学研究，致力于计算机视觉、人工智能、数据科学等领域的创新与应用
          </p>
        </div>

        {/* 搜索和筛选区域 */}
        <div className="mb-8">
          {/* 搜索框 */}
          <div className="mb-6">
            <SearchBox
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="搜索研究领域、技术关键词..."
              className="max-w-2xl mx-auto"
            />
          </div>

          {/* 筛选控制 */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <FilterSelect
                value={selectedCategory}
                onChange={setSelectedCategory}
                options={categoryOptions}
                placeholder="选择分类"
                className="w-48"
              />
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  清除筛选
                </button>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                共 {filteredAreas.length} 个研究领域
              </span>
            </div>
          </div>
        </div>

        {/* 研究领域网格 - 瀑布流布局 */}
        {filteredAreas.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredAreas.map((area) => (
              <div key={area.id} className="break-inside-avoid group">
                <Link to={`/research/${area.id}`}>
                  <Card
                    className="hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden cursor-pointer"
                    hoverable
                    padding="none"
                  >
                    {/* 图片 */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 space-y-4">
                      {/* 标题和图标 */}
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${area.color}`}>
                          {area.icon}
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 line-clamp-2">
                          {area.title}
                        </h3>
                      </div>

                      {/* 描述 */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {area.description}
                      </p>

                      {/* 技术栈 */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">
                          核心技术
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {area.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 研究成果 */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900">
                          主要成果
                        </h4>
                        <ul className="space-y-1">
                          {area.achievements.map((achievement, index) => (
                            <li
                              key={index}
                              className="text-xs text-gray-600 flex items-start"
                            >
                              <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 查看详情提示 */}
                      <div className="text-center pt-2">
                        <span className="text-xs text-blue-600 group-hover:text-blue-800">
                          点击查看详情 →
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto max-w-md">
              <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014.846 21H9.154a3.374 3.374 0 00-2.849-1.51l-.547-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {hasActiveFilters ? "未找到匹配的研究领域" : "研究领域加载中"}
              </h3>
              <p className="text-gray-600 mb-4">
                {hasActiveFilters
                  ? "请尝试修改搜索关键词或筛选条件"
                  : "实验室研究方向信息正在整理中"}
              </p>
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 border border-transparent rounded-md hover:bg-primary-100 transition-colors"
                >
                  清除筛选条件
                </button>
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Research;
