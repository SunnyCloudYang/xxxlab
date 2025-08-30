import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon } from "@heroicons/react/24/outline";
import Card from "./Card";
import type { NewsItem } from "../../types";

interface NewsCardProps {
  news: NewsItem;
  compact?: boolean;
  className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  news,
  compact = false,
  className = "",
}) => {
  const getCategoryDisplayName = (category: NewsItem["category"]) => {
    const categoryMap = {
      conference: "学术会议",
      talk: "学术报告",
      thesis: "学位论文",
    };
    return categoryMap[category];
  };

  const getCategoryColor = (category: NewsItem["category"]) => {
    const colorMap = {
      conference: "bg-purple-100 text-purple-800",
      talk: "bg-blue-100 text-blue-800",
      thesis: "bg-green-100 text-green-800",
    };
    return colorMap[category];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (compact) {
    return (
      <Link to={`/news/${news.id}`} className="block">
        <Card
          className={`group hover:shadow-md transition-all duration-200 ${className}`}
          hoverable
          padding="sm"
        >
          <div className="flex items-start space-x-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(
                    news.category
                  )}`}
                >
                  {getCategoryDisplayName(news.category)}
                </span>
                <span className="text-gray-500 text-xs flex items-center">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  {formatDate(news.publishDate)}
                </span>
              </div>
              <h3 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                {news.title}
              </h3>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/news/${news.id}`} className="block">
      <Card
        className={`group hover:shadow-lg transition-all duration-200 ${className}`}
        hoverable
      >
        {/* 图片 - 仅在有图片时显示 */}
        {news.images && news.images.length > 0 && (
          <div className="h-48 rounded-lg mb-4 group-hover:scale-[1.02] transition-transform overflow-hidden">
            <img
              src={news.images[0]}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="space-y-3">
          {/* 标签和日期 */}
          <div className="flex items-center justify-between">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                news.category
              )}`}
            >
              {getCategoryDisplayName(news.category)}
            </span>
            <span className="text-gray-500 text-sm flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              {formatDate(news.publishDate)}
            </span>
          </div>

          {/* 标题 */}
          <h3 className="font-semibold text-lg group-hover:text-primary-600 transition-colors line-clamp-2">
            {news.title}
          </h3>

          {/* 内容摘要 */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {news.content}
          </p>

          {/* 标签 */}
          {news.tags && news.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-2">
              {news.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
              {news.tags.length > 3 && (
                <span className="inline-block text-gray-500 text-xs px-2 py-1">
                  +{news.tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* 移除查看详情按钮 */}
        </div>
      </Card>
    </Link>
  );
};

export default NewsCard;
