import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', 'e58'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '2ce'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '11b'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', 'f13'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', 'bff'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', '830'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '13e'),
    exact: true
  },
  {
    path: '/docs/blog',
    component: ComponentCreator('/docs/blog', 'd62'),
    exact: true
  },
  {
    path: '/docs/blog/archive',
    component: ComponentCreator('/docs/blog/archive', '5ff'),
    exact: true
  },
  {
    path: '/docs/blog/selamat-datang',
    component: ComponentCreator('/docs/blog/selamat-datang', 'ee6'),
    exact: true
  },
  {
    path: '/docs/blog/tags',
    component: ComponentCreator('/docs/blog/tags', 'a37'),
    exact: true
  },
  {
    path: '/docs/blog/tags/lab',
    component: ComponentCreator('/docs/blog/tags/lab', 'd45'),
    exact: true
  },
  {
    path: '/docs/blog/tags/pengumuman',
    component: ComponentCreator('/docs/blog/tags/pengumuman', 'b70'),
    exact: true
  },
  {
    path: '/docs/blog/tags/rilis',
    component: ComponentCreator('/docs/blog/tags/rilis', '11f'),
    exact: true
  },
  {
    path: '/docs/blog/team',
    component: ComponentCreator('/docs/blog/team', '299'),
    exact: true
  },
  {
    path: '/docs/blog/team/fabillah',
    component: ComponentCreator('/docs/blog/team/fabillah', 'cde'),
    exact: true
  },
  {
    path: '/docs/blog/team/hanatasya',
    component: ComponentCreator('/docs/blog/team/hanatasya', '79c'),
    exact: true
  },
  {
    path: '/docs/blog/team/mayendra',
    component: ComponentCreator('/docs/blog/team/mayendra', 'adb'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', '1e2'),
    exact: true
  },
  {
    path: '/docs/search',
    component: ComponentCreator('/docs/search', 'b58'),
    exact: true
  },
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', '0da'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', '20f'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', 'ac9'),
            routes: [
              {
                path: '/docs/docs/category/standar-operasional-labor',
                component: ComponentCreator('/docs/docs/category/standar-operasional-labor', '9af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/category/tutorial-instalasi-software',
                component: ComponentCreator('/docs/docs/category/tutorial-instalasi-software', 'ec1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/intro',
                component: ComponentCreator('/docs/docs/intro', 'b7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/SOP/aturan_labor_1',
                component: ComponentCreator('/docs/docs/SOP/aturan_labor_1', 'bc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/SOP/cara_upload_2',
                component: ComponentCreator('/docs/docs/SOP/cara_upload_2', 'd84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/aktivasi_office',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/aktivasi_office', 'cd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/aktivasi_windows',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/aktivasi_windows', '2d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/blokir_firewall',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/blokir_firewall', '529'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/bootable_rufus',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/bootable_rufus', '119'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/bootable_windows10',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/bootable_windows10', 'f75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/cek_aktivasi',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/cek_aktivasi', '4df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/connect_mendeley_word',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/connect_mendeley_word', '082'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/flashdisk_cloning',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/flashdisk_cloning', '784'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_accurate5',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_accurate5', 'f3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_animate',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_animate', 'b6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_borland_cpp',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_borland_cpp', '88d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_coreldraw',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_coreldraw', 'fb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_debian5',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_debian5', '239'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_eviews',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_eviews', '0dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_flash_cs3',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_flash_cs3', 'a52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_flutter',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_flutter', '80b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_matlab',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_matlab', 'b3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_office_access',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_office_access', '41a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_photoshop_cs6',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_photoshop_cs6', '56f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_smartpls',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_smartpls', '843'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_spss',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_spss', '954'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_ulang_windows',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_ulang_windows', '1a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_vscode',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_vscode', '2e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/instalasi_xampp',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/instalasi_xampp', '253'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-instalasi/perbaiki_xampp',
                component: ComponentCreator('/docs/docs/tutorial-instalasi/perbaiki_xampp', '77b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '6fa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
