import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Container from "../components/layout/Container";
import {
  SearchBox,
  FilterSelect,
  Pagination,
  EmptyState,
  Button,
} from "../components/ui";
import { mockNews } from "../data/mockData";
import type { NewsItem } from "../types";

const News: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("date-desc");

  const pageSize = 10; // 每页显示的数量

  // 获取分类选项
  const categoryOptions = useMemo(() => {
    const categories = Array.from(
      new Set(mockNews.map((news) => news.category))
    );
    const counts = categories.reduce((acc, category) => {
      acc[category] = mockNews.filter(
        (news) => news.category === category
      ).length;
      return acc;
    }, {} as Record<string, number>);

    const categoryLabels = {
      publication: "学术发表",
      award: "获奖荣誉",
      activity: "学术活动",
      conference: "会议交流",
    };

    return [
      { value: "all", label: "全部分类", count: mockNews.length },
      ...categories.map((category) => ({
        value: category,
        label:
          categoryLabels[category as keyof typeof categoryLabels] || category,
        count: counts[category],
      })),
    ];
  }, []);

  const sortOptions = [
    { value: "date-desc", label: "日期（新到旧）" },
    { value: "date-asc", label: "日期（旧到新）" },
    { value: "title", label: "标题（A-Z）" },
    { value: "featured", label: "推荐优先" },
  ];

  // 筛选和搜索逻辑
  const filteredNews = useMemo(() => {
    let filtered = mockNews;

    // 搜索过滤
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (news) =>
          news.title.toLowerCase().includes(query) ||
          news.content.toLowerCase().includes(query) ||
          (news.tags &&
            news.tags.some((tag) => tag.toLowerCase().includes(query)))
      );
    }

    // 分类过滤
    if (selectedCategory !== "all") {
      filtered = filtered.filter((news) => news.category === selectedCategory);
    }

    // 排序
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return (
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
          );
        case "date-asc":
          return (
            new Date(a.publishDate).getTime() -
            new Date(b.publishDate).getTime()
          );
        case "title":
          return a.title.localeCompare(b.title);
        case "featured":
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return (
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
          );
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  // 分页逻辑
  const totalPages = Math.ceil(filteredNews.length / pageSize);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // 重置页码当筛选条件变化时
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryDisplayName = (category: NewsItem["category"]) => {
    const categoryMap = {
      publication: "学术发表",
      award: "获奖荣誉",
      activity: "学术活动",
      conference: "会议交流",
    };
    return categoryMap[category];
  };

  const getCategoryColor = (category: NewsItem["category"]) => {
    const colorMap = {
      publication: "bg-blue-100 text-blue-800",
      award: "bg-yellow-100 text-yellow-800",
      activity: "bg-green-100 text-green-800",
      conference: "bg-purple-100 text-purple-800",
    };
    return colorMap[category];
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("date-desc");
    setCurrentPage(1);
  };

  const hasActiveFilters = searchQuery || selectedCategory !== "all";

  return (
    <div className="py-16">
      <Container>
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            学术动态
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            及时了解实验室的最新研究进展、学术活动、获奖信息和会议交流
          </p>
        </div>

        {/* 搜索和筛选区域 */}
        <div className="mb-8">
          {/* 搜索框 */}
          <div className="mb-6">
            <SearchBox
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="搜索动态标题、内容、标签..."
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
                <Button variant="ghost" onClick={handleClearFilters}>
                  清除筛选
                </Button>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                共 {filteredNews.length} 条动态
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

        {/* 动态列表 */}
        {paginatedNews.length > 0 ? (
          <>
            {/* 表格视图 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        标题
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        分类
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        发布日期
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        标签
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedNews.map((news) => (
                      <tr
                        key={news.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-start space-x-3">
                            {news.featured && (
                              <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                推荐
                              </span>
                            )}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                                {news.title}
                              </h3>
                              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                {news.content}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                              news.category
                            )}`}
                          >
                            {getCategoryDisplayName(news.category)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-500">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {formatDate(news.publishDate)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {news.tags?.slice(0, 2).map((tag, index) => (
                              <span
                                key={index}
                                className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                            {news.tags && news.tags.length > 2 && (
                              <span className="inline-block text-gray-500 text-xs px-2 py-1">
                                +{news.tags.length - 2}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link to={`/news/${news.id}`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              icon={<EyeIcon className="h-4 w-4" />}
                            >
                              查看
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
            title={hasActiveFilters ? "未找到匹配的动态" : "暂无动态数据"}
            description={
              hasActiveFilters
                ? "请尝试修改搜索关键词或筛选条件"
                : "实验室动态数据正在整理中"
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

export default News;
