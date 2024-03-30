// webpack.config.js
import { resolve } from 'path';

export const module = {
    rules: [
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: [
                resolve(__dirname, 'src/components'),
                resolve(__dirname, 'src/pages')
            ]
        }
    ]
};
