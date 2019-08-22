# /bin/bash

sass --stop-on-error   scripts/dev/dev.scss:scripts/dev/dev.css;
gulp base;
gulp blocks;
gulp options;
gulp views;
gulp index;
perl -i -pe"s/\@import .*;//g" index.scss;
echo "@import './node_modules/sxcss/index.scss';" | cat - index.scss > temp && mv temp index.scss
sass --stop-on-error index.scss:index.css;
rm index.css;
rm index.css.map;
perl -i -pe"s/\@import .*;//g" index.scss;
echo "@import 'sxcss';" | cat - index.scss > temp && mv temp index.scss