import React from "react";
import { Link } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import type { TeamMember } from "../../types";

interface MemberCardProps {
  member: TeamMember;
  showDetails?: boolean;
  className?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  member,
  showDetails = false,
  className = "",
}) => {
  // 移除未使用的函数

  return (
    <div className={`group transition-all duration-200 ${className}`}>
      <div className="text-center">
        {/* 头像 - 添加链接 */}
        <Link to={`/team/${member.id}`}>
          <div className="relative w-20 h-20 mx-auto mb-3">
            {member.avatar ? (
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full rounded-full object-cover transition-transform"
                onError={(e) => {
                  // 头像加载失败时显示默认头像
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    member.name
                  )}&background=00409c&color=fff&size=80`;
                }}
              />
            ) : (
              <div className="w-full h-full bg-primary-100 rounded-full flex items-center justify-center transition-transform">
                <span className="text-primary-900 font-semibold text-lg">
                  {member.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </Link>

        {/* 基本信息 - 添加链接到名字 */}
        <div className="">
          <Link to={`/team/${member.id}`}>
            <h3 className="font-semibold text-lg text-gray-900 hover:text-primary-600 transition-colors">
              {member.name}
            </h3>
          </Link>

          {member.nameEn && (
            <p className="text-sm text-gray-600">{member.nameEn}</p>
          )}

          {/* 研究兴趣 - 减小间距 */}
          <div className="flex flex-wrap justify-center gap-1">
            {member.researchInterests
              .slice(0, showDetails ? undefined : 2)
              .map((interest, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full"
                >
                  {interest}
                </span>
              ))}
            {!showDetails && member.researchInterests.length > 2 && (
              <span className="inline-block text-gray-500 text-xs px-2 py-0.5">
                +{member.researchInterests.length - 2}
              </span>
            )}
          </div>

          {/* 详细信息 */}
          {showDetails && (
            <div className="mt-3 space-y-2 text-left">
              {member.bio && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              )}

              {/* 毕业生信息 */}
              {member.role === "alumni" && (
                <div className="text-sm text-gray-600">
                  {member.graduationYear && (
                    <div>毕业年份：{member.graduationYear}</div>
                  )}
                  {member.currentPosition && (
                    <div>当前职位：{member.currentPosition}</div>
                  )}
                </div>
              )}

              {/* 入学年份 */}
              {member.joinYear && member.role !== "alumni" && (
                <div className="text-sm text-gray-600">
                  加入时间：{member.joinYear}年
                </div>
              )}
            </div>
          )}

          {/* 操作按钮 - 只保留联系按钮 */}
          {member.email && (
            <div className="mt-1 flex justify-center">
              <a href={`mailto:${member.email}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<EnvelopeIcon className="h-4 w-4" />}
                >
                  联系
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
