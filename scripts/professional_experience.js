const mdPath = 'themes/Material-T/pages/professional_expereince.md';

hexo.extend.generator.register('_prof_exp',function(locals){
    return {
        path: 'professional_expereince/index.html',
        data: locals.theme,
        layout: 'professional_expereince'
    };
});

hexo.extend.helper.register('insertProfExp', function(){
    return hexo.render.renderSync({path: mdPath});
});