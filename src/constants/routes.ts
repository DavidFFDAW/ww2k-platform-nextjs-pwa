import {
    AdminIcon,
    BlogIcon,
    DraftIcon,
    ExportDownloadIcon,
    TeamsIcon,
    TwitterIcon,
    UserIcon,
    WWEChampionship,
    WrestlersIcon,
} from '@/components/Icons/DashboardIcons';

export const PublicRoutes = {
    LOGIN: 'login',
    REGISTER: 'register',
};

export const PrivateRoutes = {
    PRIVATE: 'admin',
    DASHBOARD: 'dashboard',
    USER: 'user/me',
    TEAMS: 'teams',
    CHAMPIONS: 'champions',
    BLOG: 'blog',
    WRESTLER: 'wrestlers',
    TWITTER: 'twitter',
    GALLERY: 'gallery',
    DRAFT: 'draft',
    BLOG_POST: 'blog/post/:id',
};
export const PublicMenu = [
    {
        name: 'TWITTER',
        url: '/twitter',
        icon: TwitterIcon,
    },
    {
        name: 'ADMIN',
        url: '/admin',
        icon: AdminIcon,
    },
    {
        name: 'BLOG',
        url: '/blog',
        icon: BlogIcon,
    },
];

export const AdminMenu = [
    {
        key: 'menu-dashboard',
        name: 'Dashboard',
        url: '/admin',
        icon: BlogIcon,
        material: 'dashboard',
        showOnSidebar: false,
    },
    {
        key: 'menu-blog',
        name: 'Blog',
        url: '/admin/blog',
        icon: BlogIcon,
        material: 'feed',
        showOnSidebar: true,
    },
    {
        key: 'menu-wrestlers',
        name: 'Wrestlers',
        url: '/admin/wrestlers',
        material: 'group',
        icon: WrestlersIcon,
        showOnSidebar: true,
    },
    {
        key: 'menu-champions',
        name: 'Champions',
        url: '/admin/championships/reigns',
        material: 'trophy',
        icon: WWEChampionship,
        showOnSidebar: true,
    },
    {
        key: 'menu-teams',
        name: 'Equipos',
        url: '/admin/teams',
        material: 'diversity_3',
        icon: TeamsIcon,
        showOnSidebar: true,
    },
    {
        key: 'menu-user',
        name: 'User',
        url: '/admin/users',
        material: 'person',
        icon: UserIcon,
        showOnSidebar: true,
    },
    {
        key: 'menu-twitter',
        name: 'Twitter',
        url: '/admin/twitter',
        material: 'post',
        icon: TwitterIcon,
        showOnSidebar: true,
    },
    {
        key: 'menu-draft',
        name: 'Draft',
        url: '/admin/draft',
        material: 'rebase_edit',
        icon: DraftIcon,
        showOnSidebar: true,
    },
    {
        key: 'exportation',
        name: 'Exportación',
        url: '/admin/exportation',
        material: 'cloud-download',
        icon: ExportDownloadIcon,
        showOnSidebar: true,
    },
];

export const HeaderMenu = {
    public: PublicMenu,
    admin: AdminMenu,
};
