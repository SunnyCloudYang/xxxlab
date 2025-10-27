import React, { useState } from "react";
import Container from "../components/layout/Container";
import { MemberCard } from "../components/ui";
import { mockTeamMembers } from "../data/mockData";
import type { TeamMember } from "../types";

const Team: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<TeamMember["role"] | "all">(
    "all"
  );

  // 按角色过滤团队成员
  const filteredMembers =
    selectedRole === "all"
      ? mockTeamMembers
      : mockTeamMembers.filter((member) => member.role === selectedRole);

  // 按角色分组显示
  const membersByRole = {
    faculty: mockTeamMembers.filter((m) => m.role === "faculty"),
    phd: mockTeamMembers.filter((m) => m.role === "phd"),
    master: mockTeamMembers.filter((m) => m.role === "master"),
    alumni: mockTeamMembers.filter((m) => m.role === "alumni"),
  };

  const roleDisplayNames = {
    faculty: "导师",
    phd: "博士生",
    master: "硕士生",
    alumni: "毕业生",
  };

  const roleColors = {
    faculty: "bg-purple-100 text-purple-800 border-purple-200",
    phd: "bg-blue-100 text-blue-800 border-blue-200",
    master: "bg-green-100 text-green-800 border-green-200",
    alumni: "bg-gray-100 text-gray-800 border-gray-200",
  };

  return (
    <div className="py-16">
      <Container>
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            团队信息
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我们的团队由经验丰富的导师和充满活力的学生组成，
            专注于优化理论与智能决策算法设计等前沿理论研究
          </p>
        </div>

        {/* 筛选按钮 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedRole("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedRole === "all"
                ? "bg-primary-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            全部成员
          </button>
          {(
            Object.keys(roleDisplayNames) as Array<
              keyof typeof roleDisplayNames
            >
          ).map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                selectedRole === role
                  ? `${roleColors[role]} border-2`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200"
              }`}
            >
              {roleDisplayNames[role]} ({membersByRole[role].length})
            </button>
          ))}
        </div>

        {/* 成员展示 */}
        {selectedRole === "all" ? (
          // 按角色分组显示
          <div className="space-y-16">
            {(
              Object.keys(membersByRole) as Array<keyof typeof membersByRole>
            ).map((role) => {
              const members = membersByRole[role];
              if (members.length === 0) return null;

              return (
                <section key={role}>
                  <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mr-4">
                      {roleDisplayNames[role]}
                    </h2>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${roleColors[role]}`}
                    >
                      {members.length} 人
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {members.map((member) => (
                      <MemberCard
                        key={member.id}
                        member={member}
                        showDetails={true}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          // 过滤后的成员显示
          <div>
            <div className="flex items-center justify-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mr-4">
                {roleDisplayNames[selectedRole]}
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${roleColors[selectedRole]}`}
              >
                {filteredMembers.length} 人
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  showDetails={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* 团队统计 */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            团队概况
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(
              Object.keys(membersByRole) as Array<keyof typeof membersByRole>
            ).map((role) => (
              <div key={role} className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${roleColors[role]}`}
                >
                  <span className="text-2xl font-bold">
                    {membersByRole[role].length}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">
                  {roleDisplayNames[role]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
