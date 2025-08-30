// 团队成员类型
export interface TeamMember {
  id: string;
  name: string;
  nameEn?: string;
  role: "faculty" | "phd" | "master" | "alumni";
  avatar?: string;
  email?: string;
  researchInterests: string[];
  bio?: string;
  education?: Education[];
  publications?: string[]; // 论文ID列表
  graduationYear?: number; // 毕业生专用
  currentPosition?: string; // 毕业生当前职位
  joinYear?: number;
  website?: string;
}

// 教育背景
export interface Education {
  degree: string;
  institution: string;
  year: number;
  major?: string;
}

// 论文类型
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "workshop";
  abstract?: string;
  pdfUrl?: string;
  projectUrl?: string;
  bibtex?: string;
  featured?: boolean;
  doi?: string;
  impact?: number;
}

// 新闻动态类型
export interface NewsItem {
  id: string;
  title: string;
  category: "conference" | "award" | "activity" | "publication";
  content: string;
  publishDate: string;
  status: "published" | "draft";
  images?: string[];
  tags?: string[];
  author?: string;
  featured?: boolean;
}

// 科研项目类型
export interface Project {
  id: string;
  title: string;
  description: string;
  type: "national" | "provincial" | "university" | "enterprise";
  status: "ongoing" | "completed" | "planned";
  startDate: string;
  endDate?: string;
  funding?: number;
  leader: string;
  members: string[];
  relatedPublications?: string[];
  website?: string;
}

// 图片画廊类型
export interface GalleryImage {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  description?: string;
  category: "academic" | "team" | "conference" | "daily";
  date: string;
  tags?: string[];
}

// 导航菜单类型
export interface NavItem {
  name: string;
  path: string;
  icon?: string;
  children?: NavItem[];
}

// 通用响应类型
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// 分页类型
export interface Pagination {
  current: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// 搜索过滤类型
export interface SearchFilters {
  query?: string;
  category?: string;
  year?: number;
  type?: string;
  status?: string;
}

// 主题配置类型
export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  borderRadius: string;
}

// 网站配置类型
export interface SiteConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  email: string;
  address: string;
  phone?: string;
  wechat?: string;
  logo: string;
  favicon: string;
  theme: ThemeConfig;
}
