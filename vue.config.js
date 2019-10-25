/**
 * Created by PhpStorm.
 * Script Name:
 * Create: 2019/10/24 20:20
 * Description:
 * Author: Doogie<fdj@kuryun.cn>
 */

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'router': '@/router',
                'views': '@/views',
            }
        }
    },
    devServer: {
        port: process.env.VUE_APP_DEVSERVER_PORT
    }
}
