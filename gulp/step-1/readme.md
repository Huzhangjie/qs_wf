## gulp基本概念
 1. task 任务管理 default
 2. src dest 
 3. src 为开发目录，将其中的文件经过一些处理(转译es6,压缩,文件的合并)，将其目标文件放至dist线上目录
 4. babel 转译任务集成到gulp中 yarn add --dev gulp-babel babel-core babel-preset-env
 5. 压缩css gulp-clean-css