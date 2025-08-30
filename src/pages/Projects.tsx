import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  EyeIcon,
  CheckCircleIcon,
  ClockIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Container from "../components/layout/Container";
import {
  SearchBox,
  FilterSelect,
  Pagination,
  EmptyState,
  Button,
  Card,
} from "../components/ui";
import { mockProjects } from "../data/mockData";
import type { Project } from "../types";

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("funding-desc");

  const pageSize = 8; // 每页显示的数量

  // 获取筛选选项
  const typeOptions = useMemo(() => {
    const types = Array.from(
      new Set(mockProjects.map((project) => project.type))
    );
    const counts = types.reduce((acc, type) => {
      acc[type] = mockProjects.filter(
        (project) => project.type === type
      ).length;
      return acc;
    }, {} as Record<string, number>);

    const typeLabels = {
      national: "国家级项目",
      provincial: "省级项目",
      university: "校级项目",
      enterprise: "企业合作",
    };

    return [
      { value: "all", label: "全部类型", count: mockProjects.length },
      ...types.map((type) => ({
        value: type,
        label: typeLabels[type as keyof typeof typeLabels] || type,
        count: counts[type],
      })),
    ];
  }, []);

  const statusOptions = useMemo(() => {
    const statuses = Array.from(
      new Set(mockProjects.map((project) => project.status))
    );
    const counts = statuses.reduce((acc, status) => {
      acc[status] = mockProjects.filter(
        (project) => project.status === status
      ).length;
      return acc;
    }, {} as Record<string, number>);

    const statusLabels = {
      ongoing: "进行中",
      completed: "已完成",
      planned: "计划中",
    };

    return [
      { value: "all", label: "全部状态", count: mockProjects.length },
      ...statuses.map((status) => ({
        value: status,
        label: statusLabels[status as keyof typeof statusLabels] || status,
        count: counts[status],
      })),
    ];
  }, []);

  const sortOptions = [
    { value: "funding-desc", label: "资金（高到低）" },
    { value: "funding-asc", label: "资金（低到高）" },
    { value: "start-desc", label: "开始时间（新到旧）" },
    { value: "start-asc", label: "开始时间（旧到新）" },
    { value: "title", label: "项目名称（A-Z）" },
  ];

  // 筛选和搜索逻辑
  const filteredProjects = useMemo(() => {
    let filtered = mockProjects;

    // 搜索过滤
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.leader.toLowerCase().includes(query) ||
          project.members.some((member) => member.toLowerCase().includes(query))
      );
    }

    // 类型过滤
    if (selectedType !== "all") {
      filtered = filtered.filter((project) => project.type === selectedType);
    }

    // 状态过滤
    if (selectedStatus !== "all") {
      filtered = filtered.filter(
        (project) => project.status === selectedStatus
      );
    }

    // 排序
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "funding-desc":
          return (b.funding || 0) - (a.funding || 0);
        case "funding-asc":
          return (a.funding || 0) - (b.funding || 0);
        case "start-desc":
          return (
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
        case "start-asc":
          return (
            new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
          );
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedType, selectedStatus, sortBy]);

  // 分页逻辑
  const totalPages = Math.ceil(filteredProjects.length / pageSize);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // 重置页码当筛选条件变化时
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedType, selectedStatus, sortBy]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
    });
  };

  const formatCurrency = (amount: number) => {
    return (amount / 10000).toFixed(1) + "万元";
  };

  const getTypeDisplayName = (type: Project["type"]) => {
    const typeMap = {
      national: "国家级项目",
      provincial: "省级项目",
      university: "校级项目",
      enterprise: "企业合作",
    };
    return typeMap[type];
  };

  const getTypeColor = (type: Project["type"]) => {
    const colorMap = {
      national: "bg-red-100 text-red-800",
      provincial: "bg-blue-100 text-blue-800",
      university: "bg-green-100 text-green-800",
      enterprise: "bg-purple-100 text-purple-800",
    };
    return colorMap[type];
  };

  const getStatusDisplayName = (status: Project["status"]) => {
    const statusMap = {
      ongoing: "进行中",
      completed: "已完成",
      planned: "计划中",
    };
    return statusMap[status];
  };

  const getStatusColor = (status: Project["status"]) => {
    const colorMap = {
      ongoing: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
      planned: "bg-yellow-100 text-yellow-800",
    };
    return colorMap[status];
  };

  const getStatusIcon = (status: Project["status"]) => {
    switch (status) {
      case "ongoing":
        return <ClockIcon className="h-4 w-4" />;
      case "completed":
        return <CheckCircleIcon className="h-4 w-4" />;
      case "planned":
        return <PlusCircleIcon className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedStatus("all");
    setSortBy("funding-desc");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchQuery || selectedType !== "all" || selectedStatus !== "all";

  return (
    <div className="py-16">
      <Container>
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            科研项目
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            展示实验室承担的各类科研项目，包括国家级、省级、校级项目以及企业合作项目
          </p>
        </div>

        {/* 搜索和筛选区域 */}
        <div className="mb-8">
          {/* 搜索框 */}
          <div className="mb-6">
            <SearchBox
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="搜索项目名称、负责人、项目描述..."
              className="max-w-2xl mx-auto"
            />
          </div>

          {/* 筛选控制 */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <FilterSelect
                value={selectedType}
                onChange={setSelectedType}
                options={typeOptions}
                placeholder="选择类型"
                className="w-48"
              />
              <FilterSelect
                value={selectedStatus}
                onChange={setSelectedStatus}
                options={statusOptions}
                placeholder="选择状态"
                className="w-48"
              />
              {hasActiveFilters && (
                <Button variant="ghost" onClick={handleClearFilters}>
                  清除筛选
                </Button>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                共 {filteredProjects.length} 个项目
              </span>
              <FilterSelect
                value={sortBy}
                onChange={setSortBy}
                options={sortOptions}
                className="w-48"
              />
            </div>
          </div>
        </div>

        {/* 项目列表 */}
        {paginatedProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {paginatedProjects.map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-lg transition-all duration-200"
                  hoverable
                  padding="lg"
                >
                  <div className="space-y-4">
                    {/* 项目标题和状态 */}
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 ml-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            project.status
                          )}`}
                        >
                          {getStatusIcon(project.status)}
                          <span className="ml-1">
                            {getStatusDisplayName(project.status)}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* 项目类型 */}
                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                          project.type
                        )}`}
                      >
                        {getTypeDisplayName(project.type)}
                      </span>
                    </div>

                    {/* 项目描述 */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* 项目信息 */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <UserGroupIcon className="h-4 w-4 mr-1" />
                        <span>负责人：{project.leader}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>
                          {formatDate(project.startDate)} -{" "}
                          {project.endDate
                            ? formatDate(project.endDate)
                            : "进行中"}
                        </span>
                      </div>
                      {project.funding && (
                        <div className="flex items-center">
                          <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                          <span>资金：{formatCurrency(project.funding)}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <UserGroupIcon className="h-4 w-4 mr-1" />
                        <span>团队：{project.members.length + 1}人</span>
                      </div>
                    </div>

                    {/* 团队成员 */}
                    {project.members.length > 0 && (
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">参与成员：</span>
                        <span>{project.members.slice(0, 3).join("、")}</span>
                        {project.members.length > 3 && (
                          <span> 等{project.members.length}人</span>
                        )}
                      </div>
                    )}

                    {/* 操作按钮 */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-xs text-gray-500">
                        {project.relatedPublications?.length ? (
                          <span>
                            相关论文：{project.relatedPublications.length}篇
                          </span>
                        ) : (
                          <span>暂无相关论文</span>
                        )}
                      </div>
                      <Link to={`/projects/${project.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={<EyeIcon className="h-4 w-4" />}
                        >
                          查看详情
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* 分页 */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                showQuickJumper={true}
              />
            )}
          </>
        ) : (
          <EmptyState
            type={hasActiveFilters ? "no-results" : "no-data"}
            title={hasActiveFilters ? "未找到匹配的项目" : "暂无项目数据"}
            description={
              hasActiveFilters
                ? "请尝试修改搜索关键词或筛选条件"
                : "实验室项目数据正在整理中"
            }
            action={
              hasActiveFilters ? (
                <Button onClick={handleClearFilters}>清除筛选条件</Button>
              ) : null
            }
          />
        )}
      </Container>
    </div>
  );
};

export default Projects;
