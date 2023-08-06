function skillsMember() {
    return {
        name: 'skillsMember',
        path: 'skillsMember/:id',
        component: _import('member/skillsMember'),
        meta: { title: '技能会员' }
    }
}