const fs = require("fs");
const path = require("path");

let mdPath = 'themes/Material-T/pages/about.md';
//use user's about if it's available
if (fs.existsSync("./about/index.md")) {
    mdPath = "about/index.md";
}
console.log(mdPath);


hexo.extend.generator.register('_about',function(locals){
    return {
        path: 'about/index.html',
        data: locals.theme,
        layout: 'about'
    };
});

hexo.extend.helper.register('insertAbout', function(){
    // todo convert me to glob
    const about = path.resolve("./source/about/index.md");
    console.log(about);
    if (fs.existsSync(about)) {
        mdPath = "source/about/index.md";
    }
    console.log(mdPath);
    return hexo.render.renderSync({path: mdPath});
});