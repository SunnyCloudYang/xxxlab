import React from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import Container from "../components/layout/Container";
import { mockNews } from "../data/mockData";

const Announcements: React.FC = () => {
  // Sort news by date (newest first)
  const sortedNews = [...mockNews].sort((a, b) => {
    return (
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  });

  return (
    <div className="py-16">
      <Container>
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            通知公告
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            实验室最新动态与重要通知
          </p>
        </div>

        {/* Simple News List */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {sortedNews.map((news) => (
                <li
                  key={news.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <div
                    className="flex items-center px-6 py-4 space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <CalendarIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0 flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-base font-medium text-gray-900 hover:text-primary-900 transition-colors line-clamp-1">
                          {news.title}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <span className="text-sm text-gray-500 whitespace-nowrap">
                          {news.publishDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Total count */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              共 {sortedNews.length} 条通知
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Announcements;
