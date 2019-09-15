const mdPath = 'themes/Material-T/pages/professional-experience.md';

hexo.extend.generator.register('_prof_exp',function(locals){
    return {
        path: 'professional-experience/index.html',
        data: locals.theme,
        layout: 'professional-experience'
    };
});

hexo.extend.helper.register('insertProfExp', function(){
    return hexo.render.renderSync({path: mdPath});
});