
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','d7d'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','2c7'),
  exact: true,
},
{
  path: '/blog/2020/04/14/blog-plugin',
  component: ComponentCreator('/blog/2020/04/14/blog-plugin','f0b'),
  exact: true,
},
{
  path: '/blog/2020/04/14/large-blog-post',
  component: ComponentCreator('/blog/2020/04/14/large-blog-post','0d4'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','adf'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','4d0'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','f84'),
  exact: true,
},
{
  path: '/blog/tags/blog',
  component: ComponentCreator('/blog/tags/blog','8d7'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','a90'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','f2e'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','0ea'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','8da'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','266'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','7bf'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','bd0'),
  
  routes: [
{
  path: '/docs/accesibility-suite',
  component: ComponentCreator('/docs/accesibility-suite','541'),
  exact: true,
},
{
  path: '/docs/analytics',
  component: ComponentCreator('/docs/analytics','b61'),
  exact: true,
},
{
  path: '/docs/codeofconduct',
  component: ComponentCreator('/docs/codeofconduct','66a'),
  exact: true,
},
{
  path: '/docs/contributing',
  component: ComponentCreator('/docs/contributing','f38'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','155'),
  exact: true,
},
{
  path: '/docs/read-me',
  component: ComponentCreator('/docs/read-me','854'),
  exact: true,
},
{
  path: '/docs/Resources',
  component: ComponentCreator('/docs/Resources','9ff'),
  exact: true,
},
{
  path: '/docs/scrollAndPress',
  component: ComponentCreator('/docs/scrollAndPress','89e'),
  exact: true,
},
{
  path: '/docs/sippAndPuff',
  component: ComponentCreator('/docs/sippAndPuff','608'),
  exact: true,
},
{
  path: '/docs/welcome',
  component: ComponentCreator('/docs/welcome','c71'),
  exact: true,
},
{
  path: '/docs/wormAccessible',
  component: ComponentCreator('/docs/wormAccessible','aef'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
