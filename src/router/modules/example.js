import Layout from '@/layout';

const exampleRouter = {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '示例', icon: 'el-icon-s-help' },
    children: [
        {
            path: 'table',
            name: 'Table',
            component: () => import('@/views/example/table/index'),
            meta: { title: '表格', icon: 'table' },
        },
        {
            path: 'tree',
            name: 'Tree',
            component: () => import('@/views/example/tree/index'),
            meta: { title: '树形控件', icon: 'tree' },
        },
        {
            path: 'form',
            name: 'Form',
            component: () => import('@/views/example/form/index'),
            meta: { title: '表单', icon: 'form' },
        },
        {
            path: 'nested',
            name: 'Nested',
            meta: {
                title: '嵌套路由',
                icon: 'nested',
            },
            component: () => import('@/views/example/nested/index'),
            children: [
                {
                    path: 'menu1',
                    component: () => import('@/views/example/nested/menu1/index'), // Parent router-view
                    name: 'Menu1',
                    meta: { title: '菜单1' },
                    children: [
                        {
                            path: 'menu1-1',
                            component: () => import('@/views/example/nested/menu1/menu1-1'),
                            name: 'Menu1-1',
                            meta: { title: '菜单1-1' },
                        },
                        {
                            path: 'menu1-2',
                            component: () => import('@/views/example/nested/menu1/menu1-2'),
                            name: 'Menu1-2',
                            meta: { title: '菜单1-2' },
                            children: [
                                {
                                    path: 'menu1-2-1',
                                    component: () => import('@/views/example/nested/menu1/menu1-2/menu1-2-1'),
                                    name: 'Menu1-2-1',
                                    meta: { title: '菜单1-2-1' },
                                },
                                {
                                    path: 'menu1-2-2',
                                    component: () => import('@/views/example/nested/menu1/menu1-2/menu1-2-2'),
                                    name: 'Menu1-2-2',
                                    meta: { title: '菜单1-2-2' },
                                },
                            ],
                        },
                        {
                            path: 'menu1-3',
                            component: () => import('@/views/example/nested/menu1/menu1-3'),
                            name: 'Menu1-3',
                            meta: { title: '菜单1-3' },
                        },
                    ],
                },
                {
                    path: 'menu2',
                    component: () => import('@/views/example/nested/menu2/index'),
                    name: 'Menu2',
                    meta: { title: '菜单2' },
                },
            ],
        },
        {
            path: 'customVModel',
            name: 'CustomVModel',
            component: () => import('@/views/example/customVModel/index'),
            meta: { title: '自定义组件vmodel对象' },
        },
        {
            path: 'exampleKey',
            name: 'ExampleKey',
            component: () => import('@/views/example/exampleKey/index'),
            meta: { title: 'vue中key关键字' },
        },
        {
            path: 'reg',
            name: 'Reg',
            component: () => import('@/views/example/reg/index'),
            meta: { title: '正则表达式' },
        },
        {
            path: 'extend',
            name: 'Extend',
            component: () => import('@/views/example/extend/index'),
            meta: { title: '模板继承' },
        },
        {
            path: 'js',
            name: 'Js',
            component: () => import('@/views/example/js/index'),
            meta: { title: 'javascript' },
        },
    ],
};

export default exampleRouter;
