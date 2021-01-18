
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','295'),
  exact: true,
},
{
  path: '/blog/2020/04/14/blog-plugin',
  component: ComponentCreator('/blog/2020/04/14/blog-plugin','890'),
  exact: true,
},
{
  path: '/blog/2020/04/14/large-blog-post',
  component: ComponentCreator('/blog/2020/04/14/large-blog-post','427'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','74d'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','aaa'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','4d7'),
  exact: true,
},
{
  path: '/blog/tags/blog',
  component: ComponentCreator('/blog/tags/blog','aac'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','c01'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','780'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','088'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','716'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','5e4'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','145'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','d75'),
  
  routes: [
{
  path: '/docs/accesibility-suite',
  component: ComponentCreator('/docs/accesibility-suite','02c'),
  exact: true,
},
{
  path: '/docs/analytics',
  component: ComponentCreator('/docs/analytics','258'),
  exact: true,
},
{
  path: '/docs/codeofconduct',
  component: ComponentCreator('/docs/codeofconduct','dd8'),
  exact: true,
},
{
  path: '/docs/contributing',
  component: ComponentCreator('/docs/contributing','853'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','955'),
  exact: true,
},
{
  path: '/docs/read-me',
  component: ComponentCreator('/docs/read-me','3c4'),
  exact: true,
},
{
  path: '/docs/Resources',
  component: ComponentCreator('/docs/Resources','f80'),
  exact: true,
},
{
  path: '/docs/scrollAndPress',
  component: ComponentCreator('/docs/scrollAndPress','811'),
  exact: true,
},
{
  path: '/docs/sippAndPuff',
  component: ComponentCreator('/docs/sippAndPuff','02a'),
  exact: true,
},
{
  path: '/docs/welcome',
  component: ComponentCreator('/docs/welcome','e40'),
  exact: true,
},
{
  path: '/docs/wormAccessible',
  component: ComponentCreator('/docs/wormAccessible','b9d'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
