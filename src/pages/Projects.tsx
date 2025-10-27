import React, { useState, useMemo } from "react";
// import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  BeakerIcon,
  LightBulbIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import Container from "../components/layout/Container";
import { Card } from "../components/ui";

// 研究领域数据
const researchAreas = [
  {
    id: "1",
    title: "优化理论",
    description:
      "主要研究方向为数学建模，优化理论，人工智能算法及其在合作博弈，智能调度，智慧交通物流等方面的应用。",
    icon: <AcademicCapIcon className="h-12 w-12" />,
    color: "bg-blue-100 text-blue-600",
    technologies: ["优化理论", "智能算法设计"],
    achievements: [
      "有很强的自驱力，自我规划能力，有责任感",
      "对数学、计算机等学科有兴趣",
    ],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    title: "数据驱动的鲁棒优化理论及其应用",
    description:
      "该方向主要围绕不确定环境下的最优决策方法展开，旨在构建高效且可靠的决策支持体系。研究的理论核心是数据驱动的鲁棒优化，该方法为应对有限样本引起的预测偏差、截断数据及内生性等数据质量问题提供了系统性的理论框架。方法论上，该方向的研究融合了优化、统计学、机器学习与计量经济学等领域的思想与技术。应用层面上，该方向关注将相关方法应用于供应链与库存管理、定价以及产品组合优化等典型运营管理问题中，以实现理论创新与实践价值的统一。",
    icon: <CubeIcon className="h-12 w-12" />,
    color: "bg-green-100 text-green-600",
    technologies: ["鲁棒优化", "数据分析", "供应链管理", "零售管理"],
    achievements: [
      "自我驱动；有好奇心",
      "具备良好数理基础或者编程能力",
      "有管理科学与工程、数学、统计、计算机、工业工程或者经济方面的背景",
    ],
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    title: "低空物流系统建模与智能调度优化",
    description:
      "本方向聚焦即时物流场景，面向无人机运输与空地协同（无人机–货车）配送等关键问题开展研究。研究内容涵盖多层级服务网络设计、运力资源配置与协同调度优化，旨在构建高效、灵活的低空物流运行体系。在方法层面，融合运筹优化、组合优化、强化学习与数据驱动分析等技术手段，形成可扩展的智能决策框架与协同调度机制。研究目标在于解决复杂时空环境下的资源分配与实时调度难题，为低空物流系统的安全高效运行及智慧城市物流体系建设提供理论与方法支撑。",
    icon: <BeakerIcon className="h-12 w-12" />,
    color: "bg-purple-100 text-purple-600",
    technologies: [
      "低空物流系统",
      "无人机运输",
      "空地资源协同",
      "即时配送调度",
      "运筹优化与强化学习",
    ],
    achievements: [
      "欢迎具有数学、计算机、管理科学、交通运输等相关背景的同学报考硕士或博士研究生",
      "申请者应具备良好的逻辑思维与编程能力",
      "对低空物流系统与调度优化问题研究具有浓厚兴趣",
      "愿意在交叉领域开展系统性与创新型研究",
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    title: "仿真优化研究",
    description:
      "研究概述：面对医疗、制造、交通等领域的复杂动态系统，仿真优化通过构建随机仿真模型量化系统性能，并探索最优决策方案。其核心研究包括：1）随机系统仿真建模方法，需准确刻画系统的动态演化与随机扰动；2）具有收敛保障的智能优化算法，需基于仿真模型高效逼近最优解。",
    icon: <LightBulbIcon className="h-12 w-12" />,
    color: "bg-yellow-100 text-yellow-600",
    technologies: ["仿真优化算法", "随机系统建模与仿真"],
    achievements: [
      "对高等数学和概率论感兴趣并成绩优异",
      "掌握一门编程语言（如：Python）",
    ],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
  },
];

const Research: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

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

    return filtered;
  }, [searchQuery]);

  const handleClearFilters = () => {
    setSearchQuery("");
  };

  const hasActiveFilters = searchQuery;

  return (
    <div className="py-16">
      <Container>
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            研究方向
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            探索前沿技术，推动科学研究，专注于优化理论与智能决策算法设计等前沿理论研究
          </p>
        </div>

        {/* 搜索和筛选区域 */}
        <div className="mb-8">
          {/* 搜索框 */}
          {/* <div className="mb-6">
            <SearchBox
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="搜索研究领域、技术关键词..."
              className="max-w-2xl mx-auto"
            />
          </div> */}

          {/* 筛选控制 */}
          {/* <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
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
          </div> */}
        </div>

        {/* 研究领域网格 - 瀑布流布局 */}
        {filteredAreas.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredAreas.map((area) => (
              <div key={area.id} className="break-inside-avoid group">
                {/* <Link to={`/research/${area.id}`}> */}
                <Card
                  className="hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden cursor-pointer"
                  hoverable
                  padding="none"
                >
                  {/* 图片 */}
                  {/* <div className="h-48 overflow-hidden">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div> */}

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
                        关键词
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
                        招生要求
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
                    {/* <div className="text-center pt-2">
                        <span className="text-xs text-blue-600 group-hover:text-blue-800">
                          点击查看详情 →
                        </span>
                      </div> */}
                  </div>
                </Card>
                {/* </Link> */}
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
